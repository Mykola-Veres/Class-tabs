// import { fetchRequestQuack } from "./fetchQuack";
export function getFruits (name) {
  const fruits = {
    apple: "🍏",
    kiwi: "🍈",
    strawberry: "🍓",
  };
  return Promise.resolve(fruits[name])
}
// console.log("🚀 ~ file: ChartCSV.js ~ line 11 ~ getFruits", getFruits("kiwi"))
 
async function makeSmoothie () {
  console.time("began") 
  const elemF =  getFruits("kiwi")
  const elemS =  getFruits("strawberry")

  const All = await Promise.all([elemF, elemS])
  // console.log(All)
  console.timeEnd("began")
  return All
}
makeSmoothie().then(res => res)

function makeSmoothie2 () {
  
  getFruits ("kiwi").then((apple) => apple)
  getFruits ("strawberry").then((strawberry) => strawberry)
  
}
makeSmoothie2 ()

