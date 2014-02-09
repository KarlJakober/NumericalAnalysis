//Matrix Multiplication in Javascript, written by Karl Jakober
//for Dr. Gregory Bards Numerical Analysis II Class.
//Project Zero

//x = height of matrix
//y = width of matrix

//define matrixes
var matrix1 = [],
    matrix2 = [],
    finalMatrix = {};

//set default matrix values  
matrix1 = [[1,2,3],
           [4,5,6]];

matrix2 = [[9],
           [8],
           [7]];


//iterate over the height of the first matrix
for (var i = 0; i < matrix1.length; i++) {
  //ensure our final matrix height grows and gets as big as we need it, to avoid any undefined errors
  if (finalMatrix[i] === undefined){
    finalMatrix[i] = {};
  }
  //iterate over the width of the 2nd matrix
  for (var j = 0; j < matrix2[0].length; j++) {
    sum = 0;
    //iterate over the width of the 1st matrix, needed for sumation
    for (k = 0; k < matrix1[0].length; k++) {
      //dot product
      sum += matrix1[i][k] * matrix2[k][j];
    }
    //place each sumation into its proper spot in the final matrix
    finalMatrix[i][j] = sum;
  }
}

//log output to javascript console
console.log(finalMatrix);