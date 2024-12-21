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

        for (let j = 1; j < newRow[i].length; ++j) {
            const diff = Math.abs(newRow[i][j] - newRow[i][j - 1]);

            if (diff < 1 || diff > 3) {
                thisSafe = false;
                break;
            }

            if (isIncreasing === null) {
                isIncreasing = newRow[i][j] > newRow[i][j - 1];
            } else if (isIncreasing && newRow[i][j] < newRow[i][j - 1]) {
                thisSafe = false;
                break;
            } else if (!isIncreasing && newRow[i][j] > newRow[i][j - 1]) {
                thisSafe = false;
                break;
            }
        }

        if (thisSafe) {
            safeReport++;
        }
    }

    return safeReport;
};

runWithInput("2.txt", safeChecker);
