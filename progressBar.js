const ProgressBar = require("progress");
const chalk = require("chalk");

const Bar = new ProgressBar(`${chalk.yellow('downloading')} ${chalk.green('[:bar]')} :rate/bps :percent :etas`,{total: 20});

const timer = setInterval(()=>{
    Bar.tick();
    if(Bar.complete){
        clearInterval(timer);
    }
},100);

module.exports = timer;