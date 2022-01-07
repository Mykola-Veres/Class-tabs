const arr = [1,2,3,4,5,6]

for (let i = 0; i < arr.length/2; i++) {
  const el = arr[arr.length - 1 - i];
  // console.log("el", el)
  // console.log("arrr", arr[i])
  const first = arr[i]
  // console.log('aaa', arr[i] = arr[arr.length - 1 - i])
  // console.log('ddd', arr[arr.length - 1 - i] = first)
}
console.log("arr", arr)

const array = [10, 20, 30, 40, 50, 60]
for (let index = 0; index < array.length/2; index++) {
  const first = array[index];
  const second = array[array.length - 1 - index];
  array[index] = second;
  array[array.length - 1 - index] = first  
}
console.log(array)

const arrr = [1,2,3,4,5]
console.log(arrr[10] = 0)
console.log(arrr.length)
console.log(arrr)

// const add = (a, b) => {
//   if (b !==undefined) {
//     return a+b
//   } return c => a+c}
function add (a, b) {if (b !==undefined) {return a+b} return c => a+c}
// {
//   if (b !== undefined) 
//   {
//     return a+b
//   } 
//   return c => {console.log('b',c)
//   return a+c} 
// }
const A = (a, b) => (c) => a+b+c
console.log("A", A(3, 5)(10));

console.log(add(3, 5));
console.log(add(3)(5));

"JavaScript is awesome"[0]

function v (a,b) {
[a,b] = [b,a]
console.log(b)
console.log(a)}
v(1,2)

const palindrom = string => string.replaceAll(" ", "").toLowerCase() === string.replaceAll(" ", "").toLowerCase().split(" ").reverse().join("");
console.log(palindrom ("abba"));
console.log(palindrom ("🍕"))
console.log("pppp", palindrom ("А роза упала на лапу Азора"))
// const D = "А роза упала на лапу Азора".replaceAll(" ", "").toLowerCase().split("").reverse().join("")
// console.log("pppp", D)

console.log("🍕000", maxProfit([7,2,6,3,5,4,6]))
function maxProfit(arr) {
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
    profit += arr[i] - arr[i - 1]
    }     
  }return profit
}

console.log("aaaaa", anagrama ("friend", "Finder"))

function anagrama(a,b) {
  return [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString()
  a.toLowerCase().split("").sort().join() === b.toLowerCase().split("").sort().join()
}

let classNames = [
  'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'];
  const sortArrayByElementsFrequency = (classNames) => {
  const uniqueClassNames = [...new Set(classNames)];
  // console.log("🚀 ~ file: test.js ~ line 83 ~ sortArrayByElementsFrequency ~ uniqueClassNames", uniqueClassNames)

  return uniqueClassNames.sort((a, b) => {
    const countItemsA = classNames.filter(e => e === a).length;
    // console.log("🚀 ~ file: test.js ~ line 85 ~ returnuniqueClassNames.sort ~ countItemsA", countItemsA)
    const countItemsB = classNames.filter(e => e === b).length;
    // console.log("🚀 ~ file: test.js ~ line 87 ~ returnuniqueClassNames.sort ~ countItemsB", countItemsB)
        // console.log(classNames.filter(e => e === a).length)
        // console.log(uniqueClassNames.filter(el => el === classNames).length )
    return countItemsB - countItemsA;
  });
}
sortArrayByElementsFrequency(classNames)
console.log("aaaaa-bbbbb", sortArrayByElementsFrequency(classNames))

const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000],
];

console.log("🚀 ~ file: test.js ~ line 108 ~ count(input)", count(input))
function count (input) {
  let sortBytype = {};
  
  input.forEach(el => {
    const [currency, type, value] = el

    if (!sortBytype[currency]) {
      sortBytype[currency] = [0,0]
    }
    sortBytype[currency][type === 'buy' ? 0 : 1] += value
    // console.log("🚀 ~ file: test.js ~ line 111 ~ count ~ sortBytype", sortBytype)
  })
  return sortBytype
}

const matrix = [
  [1,4,5,2],
  [2,5,7,1],
  [5,4,9,3],
  [8,9,0,8],
]
for (let index = 0; index < matrix.length; index++) { // 0,1,2,3
  // console.log("i", index)
  // console.log("iiiiiiiiiiiiii", matrix[index])
  for (let i = 0; i < index; i++) { //1,2,3
    // console.log("ii", i)
    // console.log("iii", matrix[index][i])    
  }  
}

const Log = {
  l: 50,
}
const login = (obj) => {
  obj.l = 100
}
login(Log)
console.log("login", Log)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIz4AtpNsD6DBrxVwGXYa_Vnkc0jHtkuY",
  authDomain: "project-test-16d62.firebaseapp.com",
  projectId: "project-test-16d62",
  storageBucket: "project-test-16d62.appspot.com",
  messagingSenderId: "931914985854",
  appId: "1:931914985854:web:3e066bbbc578ce03abc32f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)


// const { name, age, gender = 'm', hairColor: color } = {
//   name: 'bob',
//   age: 20,
//   hairColor: 'blue',
//  };
 
//  console.log(name, age, gender, color);


// const dog = { name: 'Poly' };

// function showDogName() {
//   console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);

// boundShowDogName();



const fn = arr => arr.map(el => {
  const item = document.createElement('div');
  item.textContent = el;

  return item;
});

console.log(fn(['html', 'css', 'js', 'react']));


function chandeNsme (person) {
    let newPerson = {...person}
    newPerson.profession = "QA";
    return newPerson
}

let mary = {
  profession: 'cock',
car: 'tesla'}

let nick = chandeNsme(mary)
console.log("mary", mary)

console.log("nick", nick)

const bob = {
  name: bob,
  age: 35,
  profession: developer,
}
const bill = {
  name: bill,
  address: house,
  profession: QA,
}

const common = Object.assign(bob, bill, {car: mazda})

console.log(common)
console.log(bob)
console.log(bill)