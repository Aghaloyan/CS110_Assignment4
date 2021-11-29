const matUtil = require('./utils.js');

//ex2

let m1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let m2 = [
    [10,11,12],
    [13,14,15],
    [16,17,18]
];

console.log(matUtil.printMatrix(matUtil.matProduct(m1,m2)));

//ex1


console.log(matUtil.sumOfMatrices(m1,m2));


//ex3 

console.log(matUtil.sumOfEachRow(m1));