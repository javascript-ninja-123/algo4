

const flattenArray = arr => {
  const resultArray  = []
  const recurse = (arr,num) => {
    if(num > arr.length -1){
      return
    }
    else if(Array.isArray(arr[num])){
      recurse(arr[num],0)
    }
    else if(typeof arr[num] === 'function'){
      const result = arr[num]()
      recurse([result], 0)
    }
    else{
      resultArray.push(arr[num])
    }
    recurse(arr,num + 1)
  }
  recurse(arr,0)
  return resultArray;
}

console.log(
  flattenArray([1, '2', [3, function () { return 4; }, [ 'five' ], 'six', true, { prop: 'val' }]])
)
