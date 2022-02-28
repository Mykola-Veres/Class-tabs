const arr = [1,2,3,4,5,6]

for (let i = 0; i < arr.length/2; i++) {
  const el = arr[arr.length - 1 - i];
  // console.log("el", el)
  // console.log("arrr", arr[i])
  const first = arr[i]
  // console.log('aaa', arr[i] = arr[arr.length - 1 - i])
  // console.log('ddd', arr[arr.length - 1 - i] = first)
}
// console.log("arr", arr)

const array = [10, 20, 30, 40, 50, 60]
for (let index = 0; index < array.length/2; index++) {
  const first = array[index];
  const second = array[array.length - 1 - index];
  array[index] = second;
  array[array.length - 1 - index] = first
}
// console.log(array)

const arrr = [1,2,3,4,5]
// console.log(arrr[10] = 0)
// console.log(arrr.length)
// console.log(arrr)

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
// console.log("A", A(3, 5)(10));

// console.log(add(3, 5));
// console.log(add(3)(5));

"JavaScript is awesome"[0]

function v (a,b) {
[a,b] = [b,a]
// console.log(b)
// console.log(a)
}
v(1,2)

const palindrom = string => string.replaceAll(" ", "").toLowerCase() === string.replaceAll(" ", "").toLowerCase().split(" ").reverse().join("");
// console.log(palindrom ("abba"));
// console.log(palindrom ("🍕"))
// console.log("pppp", palindrom ("А роза упала на лапу Азора"))
// const D = "А роза упала на лапу Азора".replaceAll(" ", "").toLowerCase().split("").reverse().join("")
// console.log("pppp", D)

// console.log("🍕000", maxProfit([7,2,6,3,5,4,6]))
function maxProfit(arr) {
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
    profit += arr[i] - arr[i - 1]
    }
  }return profit
}

// console.log("aaaaa", anagrama ("friend", "Finder"))

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
// console.log("aaaaa-bbbbb", sortArrayByElementsFrequency(classNames))

const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000],
];

// console.log("🚀 ~ file: test.js ~ line 108 ~ count(input)", count(input))
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
import { async } from "@firebase/util";
// console.log("login", Log)


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
// const app = initializeApp(firebaseConfig);
// console.log(app)


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



// const fn = arr => arr.map(el => {
//   const item = document.createElement('div');
//   item.textContent = el;

//   return item;
// });

// console.log(fn(['html', 'css', 'js', 'react']));


// function chandeNsme (person) {
//     let newPerson = {...person}
//     newPerson.profession = "QA";
//     return newPerson
// }

// let mary = {
//   profession: 'cock',
// car: 'tesla'}

// let nick = chandeNsme(mary)
// console.log("mary", mary)

// console.log("nick", nick)

// const bob = {
//   name: bob,
//   age: 35,
//   profession: developer,
// }
// const bill = {
//   name: bill,
//   address: house,
//   profession: QA,
// }

// const common = Object.assign(bob, bill, {car: mazda})

// console.log(common)
// console.log(bob)
// console.log(bill)

// for (var i = 0; i < 10; i++) {
//   let element = i;
//   console.log("i", i)
// setTimeout(() => {
//   let P = i
//   console.log("setTimeout", P)
// }, 300);
// }

const getPromis = (f) => () => new Promise((resolve, reject) => {
    return f(resolve);
  })
const M = () => "Good!!!"


// let result = [];
// for (let index = 0; index < 5; index++) {

//   (function(j){
//   result.push(function()
//   {console.log(j)}
//   )})(index)
//   undefined
// }
// console.log(result)


const matrixAPI = [
  "1,4,5,2 first",
  "2,5,7,1 second",
  "5,4,9,3 third",
  "8,9,0,8 fours",
];
const fetchMatrix = (matrix, callback) => {
  // console.log("callback", matrix)
  return callback();
}
const load = idex => {
  let current = matrixAPI[idex]
  if(!current) {
    // console.log("Done")
    return
  }
  fetchMatrix(current, ()=> load(idex + 1))
}
load(0)

const N = (x) => {
  if(x<0) {return}
  if(x === 0) {return 1}
  return x * N(x - 1)
}
// console.log(N(3))
// console.log(N(1))

function getFibonachi(n){
  if (n === 0){return 0}
    if (n === 1){return 1}
    else{return getFibonachi(n - 1) + getFibonachi(n - 2)}}
var result = getFibonachi(8); //21
// console.log(result); // 21

const pokemonList = [
  "https://pokeapi.co/api/v2/pokemon/2",
  "https://pokeapi.co/api/v2/pokemon/23",
  "https://pokeapi.co/api/v2/pokemon/4",
  "https://pokeapi.co/api/v2/pokemon/45",
  "https://pokeapi.co/api/v2/pokemon/56",
  "https://pokeapi.co/api/v2/pokemon/34",
  "https://pokeapi.co/api/v2/pokemon/36",
  "https://pokeapi.co/api/v2/pokemon/44",
]
//   function getPocemon(pokemonUrl, callback) {
//     fetch(pokemonUrl).then(data => data.json()).then(pokemon =>  {
//       markupPocemon(pokemon)
//       callback()})
// }

async function getPocemon(pokemonUrl) {
  return await fetch(pokemonUrl).then(data => data.json())};

  (() => {
    const requestListCopy = [...pokemonList];

    const getNext = async (requestListCopy) => {
    if(!requestListCopy.length) {return};

    const currentPokemon3 = requestListCopy.slice(0, 3)

    const pokemontoRender = await Promise.all(currentPokemon3.map(url => getPocemon(url)))

    pokemontoRender.forEach(pokemon => markupPocemon(pokemon))

    const next3Pokemon = requestListCopy.slice(3)
    getNext(next3Pokemon)
  }
      getNext(requestListCopy)
    })()

  // for (let i = 0; i < pokemonList.length; i++) {
  //   const currentPokemonUrl = pokemonList[i];
  //   const currentPokemon = await getPocemon(currentPokemonUrl)
  //   markupPocemon(currentPokemon)
  // }

  // function loadnextPocemon(index) {
  //   let currentPokemon = pokemonList[index]
  //   if(!currentPokemon) {return}
  //   getPocemon(currentPokemon, () => loadnextPocemon(index + 1))
  // }
  // loadnextPocemon(0)

  const pokemonElement = document.querySelector(".pokemonList")
  function markupPocemon (pokemon) {
    const markup = document.createElement("img");
    markup.src = pokemon.sprites.front_default;
    pokemonElement.append(markup);
  };

function chage (a, b, c) {
  a = 10;
  b.item = "current";
  c = {item: "current"};
}
let num = 20;
let obj1 = {item: "changing"};
let obj2 = {item: "changing"};

chage(num, obj1, obj2)

console.log(num)
console.log(obj1.item)
console.log(obj2.item)


let a = {h: 10};
let b = a;
b.h = 55; // link type change both true
b = {f: 20} // assign new obj not change in another obj

console.log(b)

