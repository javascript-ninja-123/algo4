const {compose} = require('ramda');

const collection = {
  '2548':{
    album:"Slippery When Wet",
    artist:"Bon Jovi",
    tracks:[
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  '2648':{
    album:"1999",
    artist:"Prince",
    tracks:[
      "1999",
      "Little Red Corvette"
    ]
  },
  '1246':{
    artist:"Robert Palmer",
    tracks:[]
  },
  '5439':{
    album:"ABBA Gold"
  },
  "232323":{

  }
}

const handler = {
  get(obj,prop){
    if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])){
      return new Proxy(obj[prop], handler)
    }
    return obj[prop]
  },
  set(obj,prop,value){
    console.log(obj)
    console.log(prop)
    if(prop === 'album'){
      if(typeof value !== 'string'){
        const newVal = value.toString();
        obj[prop] = value;
        return true;
      }
    }
    if(prop === 'tracks'){
      if(!Array.isArray(value)) throw new Error('track should be an array')
    }
    obj[prop] = value
    // Indicate success
    return true;
  }
}

const collectionPrxoy = new Proxy(collection, handler)

const checkProperty = id => obj => {
  if(!obj.hasOwnProperty(id)) throw new Error('id not identified');
  return obj;
}

const checkProp = prop => obj => {
  const propArray = ['album', 'tracks', 'artist']
  if(!propArray.includes(prop)){
    throw new Error('prop does not exist')
  }
  return obj;
}

const addTrack = (id,prop,value) => obj => {
  if(prop === 'tracks'){
     obj[id][prop].push(value)
     return obj
  }
  obj[prop] = value;
  return obj;
}


const trace = title => obj => {
  console.log(obj)
  return obj
}

const safe = pred => val => {
  return pred(val) ? val : {}
}
const objCheck = val => typeof val === 'object'
const objSafe = safe(objCheck)

const updateRecord = (id, prop, value) => {
  return compose(
    addTrack(id,prop,value),
    checkProp(prop),
    checkProperty(id),
    objSafe
  )(collectionPrxoy)
}



console.log(updateRecord(1246,'tracks', 'fuck me hard'))
console.log(updateRecord(2648,'album', 'suck me hard'))
