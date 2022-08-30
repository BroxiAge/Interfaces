function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function generateRandomMatrix() {
    let col = 5;
    let row = 5;
    let matrix = [];

    let randMax = 10; //Maximo valor random generado

    for(var i=0; i<col; i++) {
        matrix[i] = new Array(row);
    }
    

    for (x=0;x<matrix.length;x++) {
        for (y=0;y<matrix[x].length;y++) {
            matrix[x][y] = getRandomInt(randMax);
        }
    }

    return matrix;
}

function getMatrixSize (matrix) { 

    let cont = 0;

    for (x=0;x<matrix.length;x++) {
        for (y=0;y<matrix[x].length;y++) {
            cont ++;
        }
    }
    return console.log ("Matrix's size = " + cont);
}

function getMaxPairValue (matrix) {
    
    let maxPairValue = 0;
    let maxPairValueByRow = 0;
    for (let x = 0; x < matrix.length; x++) {
        if (maxPairValue < maxPairValueByRow) {
            maxPairValue = maxPairValueByRow;
        }
        maxPairValueByRow = 0;
        for (let y = 0; y < matrix[x].length; y++) {
            
            if (( maxPairValueByRow < matrix[x][y] ) && ( isPair(matrix[x][y]) ) ){
                maxPairValueByRow = matrix[x][y]
            }
        }
         console.log("Largest pair element in row " + x + " is :"+ maxPairValueByRow)
    }
    console.log(matrix);
    console.log(maxPairValue);
    return maxPairValue;
}

function getMinOddValue (matrix) {
    
    let minOddValue = 999;
    let minOddValueByRow = 999;

    for (let x = 0; x < matrix.length; x++) {
        if (minOddValue > minOddValueByRow) {
            minOddValue = minOddValueByRow;
        }
        minOddValueByRow = 999;
        for (let y = 0; y < matrix[x].length; y++) {
            
            if ((matrix[x][y] < minOddValueByRow  ) && ( !isPair(matrix[x][y]) ) ){
                minOddValueByRow = matrix[x][y]
            }
        }
         console.log("Minimum od element in row " + x + " is :"+ minOddValueByRow)
    }
    console.log(matrix);
    console.log(minOddValue);
    return minOddValue;
}

function isPair(numero) { 
    return (numero % 2) == 0;
} 

function getMaxMatrixValue (matrix) {
    let maxValue = 0;
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] > maxValue){
                maxValue = matrix[x][y];
            }
        }        
    }
    console.log(matrix);
    console.log(maxValue);
    return maxValue;
}

function avgMatrix (matrix) {
  let avgValue = [];
  let sum = 0;
  
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
        sum = sum + matrix[x][y];
        
    }   
    avgValue.push(sum/matrix.length);
    sum = 0;
    
  }
    console.log(matrix);
    console.log(avgValue); 
    return avgValue;
}


const matrix = generateRandomMatrix();
// getMatrixSize(matrix);
// getMaxPairValue(matrix);
// getMinOddValue(matrix);
// getMaxMatrixValue(matrix);
// avgMatrix(matrix);

