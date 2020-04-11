//problem 13
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

inp.on("line", (data) => {	perfect_square(data)});

function perfect_square(data){
    var temp =[];
    var prod = 1 ;
    temp = data.split(" ");
    prod = Number(temp[0])*Number(temp[1])
if (prod % Math.sqrt(prod) === 0){
console.log("yes")
}
else{
    console.log("no")
}
}
