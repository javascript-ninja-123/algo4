

// linear
const validateRGB = str => {
  const strArray = str.split('')
  let validateLetter =true;
  let tempVal = ''
  let result = true;
  let tempArray = []
  let finalVal = ''
  const temporaryData = {
    rgb:true,
    rgba:true
  }
  for(i = 0; i< strArray.length; i ++){
    if(strArray[i] === "("){
      if(!temporaryData[tempVal]){
        result =false;
        break;
      }
      else{
        finalVal = tempVal;
        tempVal = ''
      }
    }
    else if(strArray[i] === ")"){
      tempArray.push(tempVal)
      tempVal = ''
      if(finalVal === 'rgb' && tempArray.length !== 3 ){
        result = false;
        break;
      }
      else if(finalVal === 'rgba' && tempArray.length !== 4){
        result = false;
        break;
      }
      break;
    }
    else if(strArray[i] === ','){
      tempArray.push(tempVal)
      tempVal = ''
    }
    else if(validateLetter){
      tempVal += strArray[i];
    }
  }
  tempArray.some(value => {
    if(value > 255){
      result = false;
      return true;
    }
  })
  return result
}

console.log(validateRGB('rgba(256,100,100,100)'))


const validateRGBRecursive = str => {
  const strArray = str.split('')
  let result =true;
  let num = 0;
  let tempVal = ''
  let tempArray = []
  const temporaryData = {
    rgb:true,
    rgba:true
  }
  while(strArray.length > num){
    if(strArray[num] === "("){
      if(!temporaryData[tempVal]){
        result =false;
        break;
      }
      tempVal = ''
      strArray[num] = '';
    }
    else if(strArray[num] === "," || strArray[num] === ")"){
      tempArray.push(tempVal)
      tempVal = ''
      strArray[num] = '';
    }
    tempVal += strArray[num]
    num++;
  }
  tempArray.some(value => {
    if(value > 255){
      result = false;
      return true;
    }
  })
  return result
}

console.log(validateRGBRecursive('rgba(255,100,100,100)'))
