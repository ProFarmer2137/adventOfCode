import { runWithInput } from "../../function.js";

const DIRECTION_MAP = {
    "^": "up",
    ">": "right",
    "v": "down",
    "<": "left",
}
const MOVE_MAP = {
    "up":    [-1, 0],
    "down":  [ 1, 0],
    "right": [0,  1],
    "left":  [0, -1]
}

const map = (input) => {
    const rows = input.split("\n");
    const grid = rows.map(line => line.trim().split(""));

    //grid.forEach(row => console.log(row.join("")));
    
    let direction = "";
    let start = [];
    let visitedMap = [];

    for (let i = 0; i <grid.length; i++) {        
        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] === "^"){
                direction = DIRECTION_MAP[grid[i][j]];
                start = [i, j];
                grid[i][j] = ".";
                visitedMap.push(`${i},${j}`);
                //console.log(direction, start)
                break;
            }
        } 
    }

    while (true) {
        let move = MOVE_MAP[direction];
        let actualMove = [start[0] + move[0], start[1] + move[1]];
        let nextPostion = grid[actualMove[0]]?.[actualMove[1]];

        if (nextPostion === ".") {
            let positionString = `${actualMove[0]},${actualMove[1]}`;
            if (!visitedMap.includes(positionString)) {
                visitedMap.push(positionString); 
            }
            start = actualMove
        } else if (nextPostion === "#") {
            let directions = Object.keys(DIRECTION_MAP);
            let currentIndex = directions.indexOf(
                Object.keys(DIRECTION_MAP).find((key) => DIRECTION_MAP[key] === direction)
            );
            let nextIndex = (currentIndex + 1) % directions.length;
            direction = DIRECTION_MAP[directions[nextIndex]];
        } else {
            return visitedMap.length;
        }
    }

};

runWithInput("6.txt", map);
