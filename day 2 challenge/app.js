// operator

// task1
let a = 4;
let b = 5;
console.log(a+b);

// task2
let c = 3;
let d = 5;
console.log(c-d);

// task3
let e = 2;
let f = 10;
console.log(e*f);

// task4
let g = 2;
let h =12;
console.log(g/h);

// task5
let aa = 17;
let bb = 4;
console.log(aa % bb);

// task6
let cc = 10;
cc +=5
console.log(cc);

// task7
let dd = 10;
dd -= 4;
console.log(dd);


// task8
const number1 = 10;
const number2 = 5;
const greaterThan = number1 > number2;
const lessThan = number1 < number2;
console.log( greaterThan);
console.log(lessThan);

// task9
const number3 = 10;
const number4 = 5;
const greaterThanOrEqual = number1 >= number2;
const lessThanOrEqual = number1 <= number2;
console.log( greaterThanOrEqual);
console.log( lessThanOrEqual);

// task10
const number5 = 10;
const number6 = '10';
const checkType = number5 == number6
const checkType2 = number5 === number6
console.log(checkType);
console.log(checkType2);

// task11
const checkvalue1 = 10
const checkingValue = checkvalue1 < 9 && checkvalue1 > 11;
const checkingValue2 = checkvalue1 < 11 && checkvalue1 > 9;
console.log(checkingValue);
console.log(checkingValue2);


// task12
const checkvalue2 = 10
const checkingValue3 = checkvalue2 < 9 || checkvalue2 > 11;
const checkingValue4 = checkvalue2 < 11 || checkvalue2 > 9;
console.log(checkingValue3);
console.log(checkingValue4);

// task13
const number7 = 10
const checkingIsNot = number7 != 10
console.log(checkingIsNot);

// task13
function checkNumberSign(num) {
    const result = num >= 0 ? `${num} is positive` : `${num} is negative`;
    return result;
}
console.log(checkNumberSign(10));
console.log(checkNumberSign(-5));
console.log(checkNumberSign(0));   
