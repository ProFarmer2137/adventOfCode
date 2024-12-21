// add logic 
import { runWithInput } from "../../function.js";

const sorting = (input) => {
input = input.split("\n").map(txt => txt.trim())
input.sort((a,b) => {
    const [leftA, rightA] = a.split("|").map(Number)
    const [leftB, rightB] = b.split("|").map(Number)

    if (leftA !== leftB){
        return leftB - leftA
    } else {
        return rightB - rightA
    } 
})
console.log(input)



}

runWithInput("5.txt",sorting);