//Q1 Run Along

// let i = 2;

// while (i < 15) {
//    console.log(i *= 2);
// }

//Q2 City Names

// let cityArr = ["Paris", "Berlin", "EveryDisco", "I-Am-In"];

// let str = "";

// let i = 0;

// while (i < cityArr.length) {
//    str += cityArr[i];
//    if (i == cityArr.length - 1) {
//        str += "."
//    } else {
//        str += ", ";
//    }
//    i ++;
// }

// console.log(str);

//Q3 Odds and Evens

// let myArr = [1, 2, 3, 4];

// let newArr = [];

// let i = 0;

// let newInt;

// while (i < myArr.length) {
//    let newInt = myArr[i];
//    if (newInt % 2 !== 0) {
//        newInt ++;
//        newArr.push(newInt);
//    } else {
//        newInt --;
//        newArr.push(newInt);
//    }
//    i++;
// } 

// console.log(newArr);

// Do while loops

//1. Sum of Numbers

// let numArr = [32, 46, 2];

// let sum = 0;

// let i = 0;

// do {
//    sum+= numArr[i];
//    i ++;
// } while (i < numArr.length);

// console.log(sum);

//2. Add it up

// let i = 1;

// sum = 0;

// do {
//    sum += i;
//    i ++;
// } while (i<= 20);

// console.log(sum);

//3. Count Instances

//???


//4. capiTALize

// let myArray = ["itaMAR", "robert", "MartINA"];

// let i = 0;

// do {
//     myArray[i] = myArray[i][0].toUpperCase() + myArray[i].substr(1).toLowerCase();
//     i++;

// } while (i < myArray.length);

// console.log(myArray);

//5. No Duplicates

// let myArr1 = [1, 4, 4, 7, 7, 7];

// let myArr2 = [1, 6, 6, 9, 9];

// let myArr3 = [2, 2, 2, 2, 2, 2];

// let myArr4 = [5, 10, 15, 20, 25];

// let myArr = myArr4; // change this value to test different arrays

// let i = 0;

// do {
//     if (myArr[i] === myArr[i + 1]) {
//         do { 
//         myArr.splice(i, 1); 
//         } while (myArr[i] === myArr[i + 1]);
//     }
//     i ++;

// } while (i < myArr.length);

// console.log(myArr);

// 6. Repeat It

// let item = "oi";

// let repTimes = 5;

// let myArr = [];

// do {
//     if (repTimes < 1) {
//         myArr.push("Remember: do while loops always run at least one time before checking the condition");
//         break;
//     }
//     myArr.push(item);
//     repTimes --;
// } while (repTimes > 0);

// console.log(myArr);

//Bonuses

//Find the Odd Ones Out

//???

//Factors

// let arr1 = [1, 2, 4, 8, 16, 32];

// let arr2 = [1, 1, 1, 1, 1, 1];

// let arr3 = [2, 4, 6, 7, 12];

// let arr4 = [10, 1];

// let myArr = arr3;

// let i = -1;

// do {
//     i++;
// } while (myArr[i + 1] % myArr[i] === 0) 

// i === myArr.length - 1? console.log(true): console.log(false);
