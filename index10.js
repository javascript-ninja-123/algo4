


const imgurURLParser = (url) => {
  let type = ''
  let index = 0;
  let id = ''
  const  [, query] = url.split('.com/')

  query.split('').some((value,i) => {
    if(value === '/' || value === '.'){
      index = i + 1;
      return true
    }
    type += value;
  })
  if(type !== 'a' && type !== 'gallery'){
    id = type;
    type = 'image'
    return {id,type}
  }
  else if(type === 'a'){
    type = 'album'
  }
  id = query.slice(index)
  return {id,type}
}


console.log(imgurURLParser('http://imgur.com/dsafadsfads.png'))
