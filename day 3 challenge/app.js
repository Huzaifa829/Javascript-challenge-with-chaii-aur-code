// control sturctures

// task1
function checkNumberSign(num) {
    const result = num >= 0 ? `${num} is positive` : `${num} is negative`;
    return result;
}
console.log(checkNumberSign(10));
console.log(checkNumberSign(-5));
console.log(checkNumberSign(0));

// task2
const age = 17
const checkingVoteEligible = age < 18 ? `not Eligible to vote` : `Eligible to Vote`
console.log(checkingVoteEligible);

// task3
let num1 = 2
let num2 = 3
let num3 = 4
let largeNum;

if(num1 >= num2){
    if(num1 >= num3){
        largeNum =num1
    }
    else{
       largeNum = num3
    }
}
else{
    if (num2 >= num3) {
        largeNum = num2
    } else {
        largeNum = num3
    }
}
console.log(`large number ${largeNum}`);



// task4
let dayNum = 2;
let dayName;

switch (dayNum) {
    case 1:
        dayName = 'Monday'
        break;
    case 2:
        dayName = 'Tuesday'
        break;
    case 3:
        dayName = 'Wednesday'
        break;
    case 4:
        dayName = 'Thursday'
        break;
    case 5:
        dayName = 'Friday'
        break;
    case 6:
        dayName = 'Saturday'
        break;
    case 7:
        dayName = 'Sunday'
        break;

    default:
        dayName = 'invalid number'
        break;
}
console.log(`Day Name ${dayName}`);


// task5


let score = 50
let grade;

switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >= 70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}

console.log(`Your score ${score} and your Grade ${grade}`);


// task6

let moduleNum = 3

let checkModuleNum = moduleNum % 2 === 0 ? `even number` : `odd number`
console.log(checkModuleNum);


// task7
let year = 2021
let leapYear;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    leapYear = true;
} else {
    leapYear = false;
}
console.log(leapYear);