// selReverse([1,2,3,4,5,6], 2) ➞ [2,1, 4,3, 6,5]
//
// selReverse([2,4,6,8,10,12,14,16], 3) ➞ [6,4,2, 12,10,8, 16,14]
//
// selReverse([5,7,2,6,0,4,6], 100) ➞ [6,4,0,6,2,7,5]

const selectArrayReversal = (arr,lens) => {

  const reverseArr = (arr,lens) => {
    let tempArray = [];
    const result =  arr.reduce((acc,val,i) => {
      if((i + 1) % lens === 0){
        tempArray.unshift(val)
        acc.push(...tempArray)
        tempArray = [];
      }
      else{
        tempArray.unshift(val)
      }
      return acc;
    }, [])

    return tempArray.length === 0 ? result : [...result, ...tempArray]
  }



  switch(true){
    case lens === 0:
    return arr
    case lens < arr.length:
    return reverseArr(arr,lens)
    case lens > arr.length:
    return arr.reverse()
    default:
    return arr;
  }

}


console.log(selectArrayReversal([5,7,2,6,0,4,6], 100))
