const showPokemonAsynk = (pokemon) => new Promise((resolve, reject) => {
  if (!pokemon) {return}
  const body  = document.querySelector('.body')
  const image  = document.createElement('img')
  image.src = pokemon.sprites.front_default;
  image.addEventListener("load", () => {
    console.log("pokemon was rendered!!!")
    resolve()});
  image.addEventListener("error", reject);
  body.appendChild(image)
});
const pokemonList2 = [
  "https://pokeapi.co/api/v2/pokemon/2",
  "https://pokeapi.co/api/v2/pokemon/23",
  "https://pokeapi.co/api/v2/pokemon/4",
  "https://pokeapi.co/api/v2/pokemon/45",
  "https://pokeapi.co/api/v2/pokemon/56",
  "https://pokeapi.co/api/v2/pokemon/34",
  "https://pokeapi.co/api/v2/pokemon/36",
  "https://pokeapi.co/api/v2/pokemon/44",
]
const requestListCopyFn = pokemonList2.map((url) => () => fetch(url))

// Promise.all(requestListCopyFn.map((request)=>request())).then(console.log)
// requestListCopyFn[0]()
// .then(data => {console.log(data)
//   requestListCopyFn[1]()
//   .then(data => {console.log(data)
//     requestListCopyFn[2]()
//     .then(data => {console.log(data)
//       requestListCopyFn[3]()
//       .then(data => {console.log(data)
//         requestListCopyFn[4]()})})})
// })

// const requestPokemon = () => {
//   if (!requestListCopyFn.length) {console.log("all done")
//     return}
//   const request = requestListCopyFn[0];
//   request().then(res => res.json())
//   .then(pokemon => {
//     console.log(pokemon);
//     showPokemonAsynk(pokemon);
//     requestListCopyFn.shift();
//     requestPokemon()
//   })}
// requestPokemon();

// const requestPokemon = () => {
//   if (!requestListCopyFn.length) {console.log("all done")
//     return}
//   const functionList = requestListCopyFn.slice(3);
//   const requestList = functionList.map(func => func().then(data => data.json()))

//   Promise.all(requestList).then((pokemonList) => {pokemonList.forEach((pokemon)=> showPokemonAsynk(pokemon))})}
// requestPokemon();

const requestPokemon = async (reqList) => {
  if (!reqList.length) {console.log("all done")
    return};
  const [r1, r2, r3, ...restR] = reqList;
  const requestToSend = [r1, r2, r3].map(async (sendfunc)=> {
    if(!sendfunc) {return}
  const responsData = await sendfunc();
  const pokemonData = await responsData.json();
  console.log("data received")
  return showPokemonAsynk(pokemonData);
  // return data.json()

})
  const pokemonList = await Promise.all(requestToSend);
  console.log("pokemon list feched");

  // const renderPromisList = pokemonList.map((pokemon)=> showPokemonAsynk(pokemon))
  // await Promise.all(renderPromisList)
  // console.log("pokemons were rendered!")

requestPokemon(restR);
}
(async() => {requestPokemon(requestListCopyFn)})();
