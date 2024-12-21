import { runWithInput } from "../../function.js";

let sum = 0

const clearNumbers = (input) => {
    const matches = input.match(/mul\((\d+),(\d+)\)/g);
    
    const numbers = matches.map(match => {
        const [num1, num2] = match.match(/\d+/g);
        return [parseInt(num1), parseInt(num2)];
    });

    for (let i = 0; i < numbers.length; ++i){
        sum += numbers[i][0] * numbers[i][1]
    }

    return sum
}

runWithInput("3.txt", clearNumbers);
