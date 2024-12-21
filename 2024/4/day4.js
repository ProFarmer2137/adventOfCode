import { runWithInput } from "../../function.js";

const checkWord = (word, row, col, grid) => {
    const directions = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: -1 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: -1, y: -1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
    ];
    
    let foundCount = 0;

    for (let direction of directions) {
        let found = true;

        for (let i = 0; i < word.length; ++i) {
            const newRoww = row + i * direction.y;
            const newCol = col + i * direction.x;
            if (newRoww < 0 || newRoww >= grid.length || newCol < 0 || newCol >= grid[0].length || grid[newRoww][newCol] !== word[i]) {
                found = false;
                break;
            }
        }
        if (found) {
            foundCount++;
        }
    }
    return foundCount 
}

const clearNumbers = (input) => {
    const grid = [];

    input.split("\n").forEach((txt) => {
        const row = txt.trim().split("");
        grid.push(row);
    });

    let wordCount = 0;
    const word = 'XMAS'

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            if (grid[i][j] === word[0]) {
                wordCount += checkWord(word, i, j, grid);
            }
        }
    }

    return wordCount
};

runWithInput("4.txt", clearNumbers);