const {compose} = require('ramda');

const newInv = [
  [12, 'React'],
  [3, 'Angular'],
  [5,'Vue'],
  [7, 'Rx'],
  [6, "Redux"]
]

const originInv = [
  [12, 'React'],
  [3, 'Angular'],
  [5,'Vue'],
  [7, 'Rx'],
  [6, "Redux"]
]


const safe = pred => array =>
pred(array) ? array : []

const pred = (array) => {
  if(Array.isArray(array) && array.length > 0 && typeof array !== undefined){
    if(typeof array[0][0] === 'number' && typeof array[0][1] === 'string'){
        return true
    }
    return false
  }
  return false
}
const arraySafe = safe(pred)
const saveInHashTable = hashTable => (array) => {
  array.forEach(value => {
    hashTable[value[1]] = value[0];
  })
  return hashTable
}
const addUpAshTable = newArray => (hashTable) => {
  newArray.forEach(value => {
    if(hashTable[value[1]]){
      hashTable[value[1]] += value[0]
    }
  })
  return hashTable;
}
const sortHashTable = (hashTable) => {
  return Object.keys(hashTable).sort((a,b) => a.localeCompare(b))
}

const reduceFunction = hashTable => (keys) => {
  return keys.reduce((acc,val) => {
    if(hashTable[val]){
      acc.push([val, hashTable[val]])
    }
    return acc;
  },[])
}
const trace = (title) => value => {
  return value
}

const organizeInvetory = (newInv, originInv) => {
  //hashTable
  const hashTable = {}
  const safeOriginal = arraySafe(originInv)
  const safeNew = arraySafe(newInv)
  
  return compose(
    reduceFunction(hashTable),
    sortHashTable,
    addUpAshTable(safeNew),
    saveInHashTable(hashTable),
    trace('after arraySafe'),
  )(safeOriginal)

}


console.log(organizeInvetory(undefined, undefined))
