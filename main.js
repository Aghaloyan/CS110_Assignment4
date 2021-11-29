const matUtil = require('./utilis');



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

console.log(printMatrix(sumOfMatrices(m1,m2)));

//ex1

let m1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let m2 = [
    [10,11,12],
    [13,14,15],
    [16,17,18]
];

console.log(matProduct(m1,m2));


//ex3 

let m1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(sumOfEachRow(m1));