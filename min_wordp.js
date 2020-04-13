
//without sort

const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	min_number(userInput)});

function min_number(data){
    var temp = [];
    temp = data[1].split(" ");
    if(data[0]==temp.length){
 console.log(Math.min.apply(null, temp))
    }
}
