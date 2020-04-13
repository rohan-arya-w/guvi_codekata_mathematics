const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});

ip.on('line', (data) => {(console.log(Sum_square(data)))});

function Sum_square(data){
var num =[];
var sum = 0;
num = data.split("").map(e => Number(e))
sum = (num[0]*num[0])+(num[1]*num[1])
return sum 

}

