
const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});


inp.on("line", (data) => {	sum_AP(data)});

function sum_AP(data){
    var temp=[];
    var sum ;
    temp=data.split(" ");
  sum = (Number(temp[2])/2) *(2*Number(temp[0]))+ (Number(temp[2])-1)*(Number(temp[1]) )

    console.log(sum)
}
