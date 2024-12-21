import fs from 'fs';
import path from 'path';

export const runWithInput = (fileName, code) => {
    const currentDir = process.cwd();
    const dayFolder = path.basename(currentDir);
    const fullPath = path.resolve(currentDir, `../${dayFolder}/${fileName}`);
    
    fs.readFile(fullPath, "utf8", (err, data) => {
        if (err) {
            console.error(`Error reading file at ${fullPath}:`, err.message);
            return;
        }
        const result = code(data);
        console.log(`result: ${result}`);
    });
};
