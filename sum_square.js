const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});

ip.on('line', (data) => {(Sum_square(data))});

function Sum_square(data){
var num =[];
var sum= 0;
var n = 1;
var temp = [];
num = data.split("").map(e => Number(e))
for(var i = 0; i<num.length; i++){
 n = num[i]*num[i]   
temp.push(n)
}
for (var j = 0; j<temp.length ; j++){
    sum = sum + temp[j]

}
console.log(sum)
}


