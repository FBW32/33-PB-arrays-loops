//1. **sumOfNumbers.**
function add3numbers(arr) {
  let sum = 0;
  if (arr.length < 3) {
    let message = "Please pass at least 3 numbers in this array";
    return message;
  } else {
    for (number of arr) {
      sum = sum + number;
    }

    stringarr = arr.join();
    let output =
      "Numbers in this array are:" +
      stringarr +
      " and the sum of them is " +
      sum;
    return output;
  }
}
console.log(add3numbers([1, 2, 3]));

//2.**Hello Frien**
let FriendsFamily = ["ayse", "fatma", "ahmet", "mehmet", "hasan", "huseyin"];
function greeting(arr) {
  for (i = 0; i < arr.length; i++) {
    let message = `Hello ${arr[i]}!`;
    let bonus = `${arr[i]} is at index ${i} of my friends array`;
    console.log(message, bonus);
  }
}
greeting(FriendsFamily);

//3. **City Names.**

let cities = ["Berlin, Paris, Prague, Rome"];
function makecitiesstr(arr) {
  let str = "";
  for (item of arr) {
    str = str + item + ", ";
  }
  return str.slice(0, str.length - 2);
}
console.log(makecitiesstr(cities));

//4. **Odds and Evens.**

function changeOddsEvens(arr) {
  let newarr = [];
  arr.map((item) => {
    if (item % 2 == 0) {
      item = item - 1;
      newarr.push(item);
    } else {
      item = item + 1;
      newarr.push(item);
    }
  });
  return newarr;
}
console.log(changeOddsEvens([3, 5, 2, 4]));

//5. **Capitalize.**

function capitalize(arr) {
  let newarr = [];
  arr.map((item) => {
    let lower = item.toLowerCase();
    let capfirstletter = lower.charAt(0).toUpperCase();
    let capitem = capfirstletter + lower.slice(1);
    newarr.push(capitem);
  });
  return newarr;
}
console.log(capitalize(["samuel", "MARIA", "luke", "mary"]));

//6. **No Duplicates!**
function createSet(arr) {
  let arrOfSet = [];
  for (i = 0; i < arr.length; i++) {
    let untilElementArr = arr.slice(0, i);
    if (untilElementArr.includes(arr[i]) == false) {
      arrOfSet.push(arr[i]);
    }
  }
  return arrOfSet;
}
console.log(createSet([2, 2, 2, 2, 2, 2]));

//7. **Repeat it.**
function repeatIt(item, times) {
  let arr = [];
  for (i = 1; i <= times; i++) {
    arr.push(item);
  }
  return arr;
}
console.log(repeatIt("example", 3));

//**Bonus

function isChain(arr) {
  let counter = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] % arr[i - 1] == 0) {
      counter += 1;
    }
  }
  if (counter == arr.length - 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isChain([10, 1]));
