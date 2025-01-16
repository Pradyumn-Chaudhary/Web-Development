import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let directory = "D:\\Coding\\Development\\Web-Development\\070Clear the Clutter";
let files = await fs.readdir(directory);
// console.log(files);

for (let index = 0; index < files.length; index++) {
    const element = files[index];
    let ext = path.extname(element).slice(1)
    if (!ext || ext === "js" || ext === "json") {
        continue; // Skip files without an extension or directories
    }
    if (!fsn.existsSync(ext)) {
        fs.mkdir(ext);
    }
    await fs.rename(path.join(directory,element), path.join(path.join(directory,ext),element));
}