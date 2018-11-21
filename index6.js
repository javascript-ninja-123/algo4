const {compose}  = require('ramda');


class Maybe{
  constructor(){

  }
  static isString(val){
    return typeof val === 'string'
  }
  static Just(val){
    return [val]
  }
  static Nothing(){
    return []
  }
  static Safe(pred){
    return (val) => {
      return pred(val) ? Maybe.Just(val) : Maybe.Nothing()
    }
  }
  static unfold(val){
    return (arr) => {
      return arr.length > 0 ? arr[0] : val;
    }
  }
}

//stripUrlParams("https://edabit.com?a=1&b=2&a=2") ➞ "https://edabit.com?a=2&b=2"

//stripUrlParams("https://edabit.com?a=1&b=2&a=2", ["b"]) ➞ "https://edabit.com?a=2"

// stripUrlParams("https://edabit.com", ["b"]) ➞ "https://edabit.com"

const findBaseUrl = (duplicateArray) => urlArray => {
  //checking
  if(urlArray.length <= 0) return urlArray;
  //algorithm
  let result = '';
  let queryStartIndex = 0;
  const hashTable = {}
  let stringArray = urlArray[0].split('')
  //linear
  stringArray.some((value,index) => {
    if(value === "?"){
      queryStartIndex = index;
      return true;
    }
    result += value;
  })
  if(queryStartIndex === 0){
    return [result]
  }else{
    let queryVal = '?'
    //linear
    const afterQuery = stringArray.slice(queryStartIndex)
    //linear
    afterQuery.forEach((value,i,arr) => {
        if(arr[i + 1] === "="){
          hashTable[value] = arr[i + 2]
        }
    })
    //linear
    Object.keys(hashTable).forEach((value,i) => {
      if(duplicateArray.includes(value)){
        if(i ===  Object.keys(hashTable).length -1){
          queryVal = queryVal.substring(0, queryVal.length - 1)
        }
        return;
      }
      else if(!duplicateArray.includes(value) && i ===  Object.keys(hashTable).length -1){
        queryVal+= `${value}=${hashTable[value]}`
        return
      }
      else{
        queryVal+= `${value}=${hashTable[value]}&`
      }
    })
    return [result + queryVal]
  }
}



const stripUrlParams = (url, arr = []) => {
  const a = 'https://edabit.com'

  return compose(
      Maybe.unfold(a),
      findBaseUrl(arr),
      Maybe.Safe(Maybe.isString)
    )(url)

}

console.time('a')
console.log(stripUrlParams('https://edabit.com?a=1&b=2&a=2&c=1&c=2',['b']))
console.timeEnd('a')



findBaseUrlWhile = duplicateArray => urlArray => {
  if(urlArray.length <= 0 ) return urlArray;
    let num = 0;
    let firstHalf = true;
    let result = '';
    let firstHalfResult = ''
    let hashTable = {};
    const stringArray = urlArray[0].split('')
    while(num <= stringArray.length){
      if(stringArray[num] === '?'){
        firstHalf = false;
        firstHalfResult = result
        result = ''
      }
      else if(firstHalf){
        result += stringArray[num]
      }
      else if(!firstHalf){
        if(stringArray[num + 1] === "="){
          hashTable[stringArray[num]] = stringArray[num + 2]
        }
      }
      num++
    }
    if(Object.keys(hashTable).length <= 0) return [firstHalfResult]
    else{
      let queryVal = '?'
      Object.keys(hashTable).forEach((value,i) => {
        if(duplicateArray.includes(value)){
          if(i ===  Object.keys(hashTable).length -1){
            queryVal = queryVal.substring(0, queryVal.length - 1)
          }
          return;
        }
        else if(!duplicateArray.includes(value) && i ===  Object.keys(hashTable).length -1){
          queryVal+= `${value}=${hashTable[value]}`
          return
        }
        else{
          queryVal+= `${value}=${hashTable[value]}&`
        }
      })
      return [firstHalfResult + queryVal]
    }
}



  const stripUrlParamsWhile = (url, arr = []) => {
    const a = 'https://edabit.com'

    return compose(
        Maybe.unfold(a),
        findBaseUrlWhile(arr),
        Maybe.Safe(Maybe.isString)
      )(url)

  }

console.time('b')
console.log(stripUrlParamsWhile('https://edabit.com?a=1&b=2&a=2&c=1&c=2',['b']))
console.timeEnd('b')



const stripUrlParams3 = (url, paramsToStrip = []) => {
  const [site, query] = url.split('?', 2);

  if (!query) {
    return url;
  }

  const params = query.split('&');
  const paramsObj = params.reduce((obj, param) => {
    const [key, value] = param.split('=');

    if (!paramsToStrip.includes(key)) {
      obj[key] = value;
    }

    return obj;
  }, {});
  const paramStr = Object.keys(paramsObj)
    .map(key => `${key}=${paramsObj[key]}`)
    .join('&');

  return `${site}?${paramStr}`;
};
console.time('c')
console.log(stripUrlParams3('https://edabit.com?a=1&b=2&a=2&c=1&c=2',['b']))
console.timeEnd('c')
