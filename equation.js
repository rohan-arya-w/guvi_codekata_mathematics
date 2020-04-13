const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {value_y(data)});

function value_y(data){
   var y;
   var num=[];
   num = data.split(" ")
   y=(Number(data[0])*Number(data[2]))+Number(data[1])
    
console.log(y)
}
