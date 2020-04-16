const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (n) => {permutation(n)});


function permutation(n) {
var num=[];
var fact1=1;
var fact2=1;
num = n.split(" ").map(n=>Number(n))
for (var i = 2; i <= num[0]; i++){ 
     fact1 = fact1 * i; 
}
for (var j = 2; j <= (num[0]-num[1]); j++){ 
     fact2 = fact2 * j; 
}

 
console.log(fact1/fact2)
}
