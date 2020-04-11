//problem 25
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

inp.on ("line", (data) => {min_number(data)})

function min_number(data){
    var temp = [];
    temp = data.split(" ");
    temp.sort(function(a, b){return a - b});
 console.log(temp[0]);
}
