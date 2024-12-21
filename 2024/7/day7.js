import { runWithInput } from "../../function.js";

const numbers = (input) => {
    let sum = [];
    let number = [];
    let count = 0;
    const rows = input.split("\n");

    const generateOperators = (n) => {
        let result = [[]];
        const operators = ["+", "*"];
        
        for (let i = 0; i < n - 1; i++) {
            const newResult = [];
            result.forEach((r) => {
                operators.forEach((op) => {
                    newResult.push([...r, op]);
                });
            });
            result = newResult;
        }
        return result;
    }

    rows.forEach((row) => {
        const [sums, numbers] = row.split(":");
        sum.push(Number(sums));
        number.push(numbers.trim().split(" ").map(Number));
    });

    for (let i = 0; i < sum.length; i++) {
        const operatorsCombinations = generateOperators(number[i].length);
        let same = false; //
        operatorsCombinations.forEach((operators) => {
            let result = number[i][0];
            for (let j = 0; j < number[i].length - 1; j++) {
                if (operators[j] === "+") {
                    result += number[i][j + 1];
                } else {
                    result *= number[i][j + 1];
                }
            }
            if (result === sum[i]) {
                same = true;
            }
        });

        if (same) {
            count += sum[i];
        }
    }
    return count;
}

runWithInput("7.txt", numbers);
