
//problem 30
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

inp.on("line", (data) => {console.log(Nearest_multiple(data))});

function Nearest_multiple(data){
   
   var a = Math.ceil(data/10)*10 ;
   return a;
}
