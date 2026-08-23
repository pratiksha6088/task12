
//principle  Amount
let P = 10000;

//Ret  of interest
let r= 5;

//No of times interest is compounded per
let n= 1;

//times in years
let t= 3;

r=r/100;

//calculate final amount
let A = P*Math.pow((1+r/n),(n*t));


//Calculate compound interest
let CI= A-P;

//Display result
console.log("Compound Interest After"+ t +"Years is:"+ CI)