

const pairWise = (arr,sum) => {
    const hashTable = {};
    arr.forEach((value,index) => {
      hashTable[sum - value] = {
        num:value,
        index,
        opponentIndex:null
      }
    })
    const result =  arr.reduce((acc,val,i) => {
      if(hashTable[val] && Object.keys(hashTable[val]).length > 0){
        acc += i + hashTable[val]['index']
        return acc;
      }
      return acc;
    },0)
    return result / 2
}

console.log(pairWise([7,9,11,13,15], 20))
