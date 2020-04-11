
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {	Engine_n(data)});

function Engine_n(data){
var temp = [];
var temp1 = [];
var temp0 = [];
temp = data.split(/([0-9]+)/).filter(Boolean)
temp0 = temp[1].split("")
temp1 = temp[3].split("")
temp = temp0.concat(temp1)
var m = 0;

 for (var i = 0; i<temp.length ; i++){
      
      m = m + Number(temp[i]); 
}
console.log(m)
}
