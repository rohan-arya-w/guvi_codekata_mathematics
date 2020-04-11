
//problem 12
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

inp.on("line", (data) => {	perfect_square(data)});

function perfect_square(data){
   
if (data%13 ==0){
console.log("yes")
}
else{
    console.log("no")
}
}
