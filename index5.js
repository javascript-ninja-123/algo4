


const spiralTransposition = arr => {
  let rowLimit = arr.length -1;
  let columnLimit = arr[0].length -1;


  let column = 0;
  let row = 0;

  const resultArray = []

  while(column <= columnLimit && row <= rowLimit){
    for(let i = column; i <= columnLimit; i++){
      resultArray.push(arr[row][i])
      console.log(column, columnLimit)
      console.log(row,rowLimit)
    }
    row++;
    for(let i = row; i <= rowLimit; i++){
      resultArray.push(arr[i][columnLimit])
    }
    columnLimit--;
    for(let i = columnLimit; i>=0; i--){
        resultArray.push(arr[rowLimit][i])
    }
    rowLimit--;
    for(let i = rowLimit; i>= row; i--){
        resultArray.push(arr[i][column])
    }
    column++
  }
  resultArray.pop()
  return resultArray;
}



// console.log(spiralTransposition([
//    [1,2,3,4],
//    [12,13,14,5],
//    [11,16,15,6],
//    [10,9,8,7]
// ]))



const mySpiralMatrix = arr => {
  if(!Array.isArray(arr)) return [];
  let column = 0;
  let row = 0;
  let endRow = arr.length -1;
  let endColumn = arr.length -1;
  console.log(endRow, endColumn)
  const resultResult = [];
  while(column <=endColumn && row <= endRow){
    //top column
    for(let i= column; i<=endColumn; i++){
      resultResult.push(arr[row][i])
    }
    row++;
    //right
    console.log(row ,endRow)
    for(let i=row; i<= endRow; i++){
      resultResult.push(arr[i][endColumn]);
    }
    endColumn--;
    for(let i =endColumn; i>= column; i--){
      resultResult.push(arr[endRow][i]);
    }
    endRow--;
    for(let i=endRow; i>= row; i--){
      resultResult.push(arr[i][column]);
    }
    column++
  }
  return resultResult
}


console.log(mySpiralMatrix(
  [
    [1,2,3,4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9,8,7]
  ]
))
