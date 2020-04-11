//28
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

inp.on("line", (data) => {	Counting(data)});

function Counting(data){
    var temp =[];
    temp = data.split("")
  	console.log(temp.length)
}
