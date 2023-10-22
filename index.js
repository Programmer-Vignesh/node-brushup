require('dotenv').config();
const chalk = require("chalk");
const progressbar = require('./progressBar');
console.log("Entry point of APPLICATION is start from 'index.js'");

// process - Core Module of NodeJS
console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log(process.env.TASK)

// The process.exit() method is used to end the process
// process.exit(1); 

console.log(chalk.blue("Progress Bar"));
progressbar;

const doSomthing =() =>{
    console.log("Message from doSomething function");
    // const data = fetch("http://localhost:3000/api/contacts");
    const data = "Billa"
    return data;
}

// Promise - Exception Handling
const promise = new Promise((resolve, reject) => {
    if(true){
        resolve(doSomthing());
    }else{
        reject(doSomthing());
    }
});

promise.then((val) => {
    console.log(chalk.green("Success"));
    console.log(`${val} :Success Message delivered to Promise`)
})
.catch((err) => {
    console.log(chalk.red("Error Occured"));
    console.log(err);
})
