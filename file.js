const { error } = require("console");
const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path")

const filePath = "/Users/vigneshvijayamurthy/Developer/Node/node-brushup/files/sample.txt";
const content = "😊 Hello 😊";

//  Asyncronus read file
// fs.readFile(filePath,"utf-8",(err,data)=>{
//     if(err){
//         throw new Error(err) 
//     }
//     console.log("Async : ",data);
// })

// Syncronus Read file
// try{
//     const data = fs.readFileSync(path.join(__dirname,"files","sample.txt"));
//     console.log(`Sync : ${data.toString()}`);
// }catch(err){
//     console.log(err);
// }

// fs.promises
// const fsPromiseRead = async() =>{
//     try{
//         const data = await fsPromise.readFile(filePath,{encoding:"utf-8"});
//         console.log("FsPromise : ",data);
//     }catch(err){
//         console.log(err);
//     }
// }
// fsPromiseRead();

const fsPromiseWrite = async() => {
    try{
        await fsPromise.writeFile(filePath,content);
        const data = await fsPromise.readFile(filePath,{encoding:"utf-8"});
        console.log("FsPromise : ",data);
    }catch(err){
        console.log(err);
    }
}
fsPromiseWrite();