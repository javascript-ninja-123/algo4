


const returnAnArrayOfSubArray = (num1,num2,num3) => {
  //create a Array
  const resultArray = [];
  for(let i=0; i<num1;i++){
    resultArray.push([])
  }

  const recurse = (num2,num3, count) => {
    if(count === resultArray.length) return;
    resultArray[count].push(num3)
    if(resultArray[count].length === num2){
      recurse(num2,num3,count + 1)
    }
    else{
      recurse(num2,num3,count)
    }
  }

  recurse(num2,num3, 0 )
  return resultArray
}


console.log(returnAnArrayOfSubArray(3, 2, 0))
