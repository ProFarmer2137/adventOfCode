import { runWithInput } from "../../function.js";

const findNumber = (input) => {
    let newRow = [];
    let sum = 0;

    input.split("\n").forEach((txt) => {
        newRow.push(txt);
    });

    for (let i = 0; i < newRow.length; i++) {
        let numFirst =  null
        let numLast = null

        for (let j = 0; j < newRow[i].length; j++) {
            const num = newRow[i][j];
            console.log(num)

            if (!isNaN(Number(num)) && num !== ' ') {
                if (numFirst === null) {
                    console.log('first num')
                    numFirst = Number(num);
                } else {
                    console.log('second num')
                    numLast = Number(num);
                }
            }
            if (j === newRow[i].length - 1) {
                if (numFirst !== null && numLast !== null) {
                    let rowValue = numFirst * 10 + numLast;
                    console.log('two numbers')
                    console.log(sum, rowValue)
                    sum += rowValue;
                    numFirst = 0
                    numLast = 0
                } else if (j === newRow[i].length - 1) {
                    if (numFirst !== null) {
                        console.log('only one number')
                        let rowValue = numFirst * 10 + numFirst; 
                        sum += rowValue;
                        numFirst = 0
                    }
                }
            }
        }
    }
    return sum;
};

runWithInput("1.txt", findNumber);
