const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {Sum(data)});

function Sum(data){
var s = 0;
for (var i=0 ; i<=data;i++){
    s = s+i
}
console.log(s)
}
