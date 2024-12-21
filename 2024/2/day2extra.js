import { runWithInput } from "../../function.js";

const safeChecker = (input) => {
    let newRow = [];
    let safeReport = 0;

    input.split("\n").forEach((txt) => {
        const row = txt.split(" ").map(Number);
        newRow.push(row);
    });

    for (let i = 0; i < newRow.length; ++i) {
        let thisSafe = true;
        let isIncreasing = null;
        let count = 0
        let removedIndex = -1
        console.log(`this ${newRow[i]}`)

        for (let j = 1; j < newRow[i].length; ++j) {
            const diff = Math.abs(newRow[i][j] - newRow[i][j - 1]);
            if (diff < 1 || diff > 3) {
                if (count == 0){
                    count += 1;
                    removedIndex = j
                } else {
                    thisSafe = false;
                    break;
                }
            }

            if (isIncreasing === null) {
                isIncreasing = newRow[i][j] > newRow[i][j - 1];
            } else if (isIncreasing && newRow[i][j] < newRow[i][j - 1]) {
                if (count == 0) {
                    count += 1
                    removedIndex = j
                } else {
                    thisSafe = false;
                    break;
                }
            } else if (!isIncreasing && newRow[i][j] > newRow[i][j - 1]) {
                thisSafe = false;
                if (count == 0) {
                    count += 1
                    removedIndex = j
                } else {
                    thisSafe = false;
                    break;
                }
            }
        }
        // TO DO
        // dodac ponowne sprawdzanie po usuniecu jednego 
        // if (removedIndex !== -1 && count == 1) {
        //     let rowAfterRemove = [...newRow[i]];
        //     rowAfterRemove.splice(removedIndex, 1);
        // }

        if (thisSafe) {
            safeReport++;
        }

    }

    return safeReport;
};

runWithInput("2test.txt", safeChecker);
