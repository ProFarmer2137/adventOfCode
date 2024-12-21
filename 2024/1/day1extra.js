import { runWithInput } from "../../function.js";

let sum = 0
let thisSum = 0

const columnSplit = (input) => {
    const leftColumn = [];
    const rightColumn = [];

    input.split("\n").forEach((row) => {
        const numbers = row.split("  ");

        leftColumn.push(parseInt(numbers[0]));
        rightColumn.push(parseInt(numbers[1]));
    });

    leftColumn.sort();
    rightColumn.sort();

    for (let i = 0; i < leftColumn.length; ++i) {
        leftColumn[i]
        thisSum = 0
        for (let y = 0; y < rightColumn.length; ++y){
            if (leftColumn[i] == rightColumn[y]){
                sum += leftColumn[i] 
            }
        }
    }

    return sum;
};

runWithInput("1.txt", columnSplit);
