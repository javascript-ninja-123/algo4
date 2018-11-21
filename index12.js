


const mergeTwoArrays = (arr1,arr2) => {
  const count = arr1.length > arr2.length ? arr1.length : arr2.length;
  const resultArray = [];
  for(let i=0; i< count; i++){
    if(arr1[i] !== undefined){
      resultArray.push(arr1[i])
    }
    if(arr1[2] !== undefined){
      resultArray.push(arr2[i])
    }
  }
  return resultArray
}


console.log(mergeTwoArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]))
