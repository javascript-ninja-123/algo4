

const ProductofAllOtherNumber = arr => {
  const resultArray = []
  let tempNum = 1;
  const recurse = (arr,num) => {
    if(num === arr.length) return;
    arr.forEach(value => {
      if(value !== arr[num]){
        tempNum *= value;
      }
    })
    resultArray.push(tempNum)
    tempNum = 1;
    recurse(arr, num + 1)
  }

  recurse(arr,0)
  return resultArray
}

console.log(ProductofAllOtherNumber([1, 2, 3, 0, 5]))
