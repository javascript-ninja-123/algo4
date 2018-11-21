const {compose} = require('ramda')

const lowerCase = str => str.toLowerCase();
const split = str => str.split(' ')
const change = arr => {
  let result = ''
  let hashTable = {}
  arr.some(value => {
    if(value !== 'zero' && value !== 'one'){
      result = ''
      return true;
    }
    else{
      switch(true){
        case value === 'zero':
        hashTable[value] = true;
        result += '0'
        return
        case value === 'one':
        hashTable[value] = true;
        result += "1"
        return
      }
    }
  })

  return Object.values(hashTable).length === 2 ? result : '';
}

const convertZeroAndOnesToNumbers = str => {
    return compose(
      change,
      split,
      lowerCase,
    )(str)
}

console.log(convertZeroAndOnesToNumbers("one one"))
