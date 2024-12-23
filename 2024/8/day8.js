import { runWithInput } from "../../function.js";

const map = (input) => {
    const rows = input.split("\n");
    const grid = rows.map(line => line.trim().split(""));

    let count = 0;
    const objects = {};

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== ".") {
                const symbol = grid[i][j];
                if (!objects[symbol]){
                    objects[symbol] = [];
                }
                objects[symbol].push({x: i, y: j});
            }
        }
    }
    //console.log(JSON.stringify(objects, null, 2));
    for (const key in objects) {
        const positions = objects[key];
        const antinodes = new Set(); 

        for (let i = 0; i < positions.length; i++) {
            for (let j = i + 1; j < positions.length; j++) {
                const x1 = positions[i].x;
                const y1 = positions[i].y;
                const x2 = positions[j].x;
                const y2 = positions[j].y;

                const x3 = Math.round((x1 + x2) / 2);
                const y3 = Math.round((y1 + y2) / 2);

                const dx = x2 - x1;
                const dy = y2 - y1;

                const antinode1 = { x: x3 + dx, y: y3 + dy };
                const antinode2 = { x: x3 - dx, y: y3 - dy };

                if (antinode1.x >= 0 && antinode1.x < grid.length &&
                    antinode1.y >= 0 && antinode1.y < grid[0].length) {
                    antinodes.add(`${antinode1.x}:${antinode1.y}`);
                }

                if (antinode2.x >= 0 && antinode2.x < grid.length &&
                    antinode2.y >= 0 && antinode2.y < grid[0].length) {
                    antinodes.add(`${antinode2.x}:${antinode2.y}`);
                }

            }
        }
        count += antinodes.size;
        console.log(antinodes);
    }
    return count;
}

runWithInput("8.txt", map);