import { runWithInput } from "../../function.js";

let countFloor = 0

const Numfloor = (input) => {
    const floors = input.split('')

    for (let i = 0; i < floors.length; ++i){
        if(floors[i] === "("){
            countFloor += 1
        } else if (floors[i] === ")"){
            countFloor -= 1
        }
        if (countFloor === -1) {
            return i;
        }
    }

    return countFloor;
};

runWithInput("1.txt", Numfloor);