import fs from 'fs';
import path from 'path';

const root = process.cwd();

console.log(root);
console.log("HELOOO")
export const getFiles = () => {
  fs.readdirSync(path.join(process.cwd(), 'content'));
}