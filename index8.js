const {compose} = require('ramda');


const FindShareLetter = (str1,str2) => {
const hashTable = {}
const resultArray = [];
const toLowerCase = str => str.toLowerCase()
const splitStr = str => str.split('')
str1 = compose(splitStr,toLowerCase)(str1)
str2 = compose(splitStr,toLowerCase)(str2)

str1.forEach(value => {
  if(!hashTable[value]){
    hashTable[value] = true;
  }
})
str2.forEach(value => {
  if(hashTable[value]){
      resultArray.push(value)
  }
})

return resultArray.sort().join('')
}

console.log(FindShareLetter('House','home'))
