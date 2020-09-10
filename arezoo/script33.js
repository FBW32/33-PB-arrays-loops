//1

function addUp(arr) {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product = product * arr[i];
  }
  console.log(`sum of numbers is ${sum}, product numbers is ${product}`);
}
addUp([2, 6, 78, 343, 56]);

//2
function greeting(arr) {
  arr.forEach((element, index) => {
    console.log(`Hello dear ${element} you are in a index ${index}`);
  });
}
greeting(["sara", "arezoo", "soroosh"]);

//3
function addCities(arr) {
  let str = "";
  arr.forEach((element) => {
    str += ` ${element} .`;
  });

  console.log(str);
}
addCities(["tehran", "berlin", "valencia"]);

//4
function oddAndEven(arr) {
  let result = [];
  arr.forEach((element) => {
    if (element % 2 == 0) {
      element -= 1;
      result.push(element);
    } else {
      element += 1;
      result.push(element);
    }
  });
  console.log(result);
}
oddAndEven([3, 5, 2, 4]);

//5
function Capitalize(arr) {
  let result = [];
  let str = "";
  arr.forEach((element) => {
    str = element.toUpperCase();
    let str1 = str.charAt(0);
    let str2 = str.slice(1).toLowerCase();
    result.push(str1 + str2);
  });
  console.log(result);
}
Capitalize(["samuel", "MARIA", "luke", "mary"]);
Capitalize(["MATT", "SARA", "LARa"]);

//6**

function noDuplication(arr) {
  let unique = [...new Set(arr)];
  console.log(unique);
}

noDuplication([1, 6, 6, 9, 9]);

//7
function repeatIt(item, time) {
  let result = [];
  let i = 0;
  while (i < time) {
    result.push(item);
    i++;
  }
  return result;
}
console.log(repeatIt("arezoo", 3));
console.log(repeatIt("sara", 10));

//8 Bonuses***

//9
function noDup(name) {
  let unique = [...new Set(name)];
  console.log(unique);
}
noDup([1, 6, 6, 9, 9]);
