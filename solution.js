// Q1 Sum of Numbers

const numArr = [4, 3, 13, 2];
let sum = 0;
let product = 1;
for (let i = 0; i < numArr.length; i ++) {
   sum += numArr[i];
   product *= numArr[i];
}
console.log(`The sum of the array is ${sum}; the product of the array is ${product}.`);

// Q2 Hello Frien

const friendsArr = ["Becky", "Dan", "Rika", "Maria", "Kevin"];
for (let i = 0; i < friendsArr.length; i++) {
   console.log(`Hello ${friendsArr[i]}!`);
   console.log(`${friendsArr[i]} is at index ${i} of my friends array!`);
}

// Q3 City Names

const cityArr = ["Paris", "Berlin", "EveryDisco", "I-Am-In"];

function arrToString(arr) {
    let str = "";
    for (i = 0; i < arr.length; i++) {
       str += arr[i];
       if (i == arr.length - 1) {
           str += "."
       } else {
           str += ", ";
       }

    }

    return str;
}

console.log(arrToString(cityArr));

// Q4 Odds and Evens

const integerArr = [1, 2, 3, 4];

function oddsEvens(arr) {
    const oddsEvens = [];
    let newInt;

    for (i = 0; i < arr.length; i++) {
        newInt = arr[i];
        if (newInt % 2 !== 0) {
            newInt++;
            oddsEvens.push(newInt);
        } else {
            newInt--;
            oddsEvens.push(newInt);
        }
    }

    return oddsEvens;
}

console.log(oddsEvens(integerArr));

// Q5 capiTALize

const nameArr = ["itaMAR", "rOBert", "MartIna"];

function correctCaps(arr) {

    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    return arr;
}

console.log(correctCaps(nameArr));

// Q6 No Duplicates

const numArr1 = [1, 4, 4, 7, 7, 7];

const numArr2 = [1, 6, 6, 9, 9];

const numArr3 = [2, 2, 2, 2, 2, 2];

const numArr4 = [5, 10, 15, 20, 25];

function arrToSet(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            do { 
            arr.splice(i, 1); 
            } while (arr[i] === arr[i + 1]);
        }
    }
    return arr;
}

console.log(arrToSet(numArr1));

// Q7 Repeat It

function repeatItem(item, times) {
    let repArray = [];
    for (let i = 0; i < times; i++) {
        repArray.push(item);
    }
    return repArray;
}

console.log(repeatItem("oi", 3));

// Bonuses

// Factors

const arr1 = [1, 2, 4, 8, 16, 32];

const arr2 = [1, 1, 1, 1, 1, 1];

const arr3 = [2, 4, 6, 7, 12];

const arr4 = [10, 1];

function isFactorChain(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            return true;
        } else if (arr[i + 1] % arr[i] !== 0) {
            return false;
        }
    }
}

console.log(isFactorChain(arr1));
