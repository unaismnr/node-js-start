//Path
const path = require('path');
const fs = require('fs');

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));

//To Create Folder or File
// fs.mkdir(path.join(__dirname, "api"), {}, (error) => {
//     if (error) {
//         throw error
//     }
// })

//To Delete Folder or File
// fs.rm(path.join(__dirname, "api"), { recursive: true }, (error) => {
//     if (error) {
//         throw error
//     }
// })

//To Write inside of a File
// fs.writeFile(path.join(__dirname, "api", "api.txt"), 'Text for test: ok', (err) => {
//     if (err) throw err;
// })

//another way
// const user = 'dear';
// fs.appendFile(path.join(__dirname, "api", "api.txt"), `\n User Name: ${user}`, (err) => {
//     if (err) throw err;
// })

//To read a File
fs.readFile(path.join(__dirname, "api", "api.txt"), "utf8", (err, data) => {
    if (err) throw err;

    console.log(data);
})
