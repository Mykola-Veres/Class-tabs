// import { fetchRequestQuack } from "./fetchQuack";
export function getFruits (name) {
  const fruits = {
    apple: "🍏",
    kiwi: "🍈",
    strawberry: "🍓",
  };
  return Promise.resolve(fruits[name])
}
console.log("🚀 ~ file: ChartCSV.js ~ line 11 ~ getFruits", getFruits("kiwi"))
 
async function makeSmoothie () {
  console.time("began") 
  const elemF =  getFruits("kiwi")
  const elemS =  getFruits("strawberry")
  console.log(elemF)
  console.log(elemS)
  const All = await Promise.all([elemF, elemS])
  console.log(All)
  console.timeEnd("began")
  return All
}
makeSmoothie().then(res => console.log("res", res))

function makeSmoothie2 () {
  
  getFruits ("kiwi").then((apple) => console.log(apple))
  getFruits ("strawberry").then((strawberry) => console.log(strawberry))
  
}
makeSmoothie2 ()
