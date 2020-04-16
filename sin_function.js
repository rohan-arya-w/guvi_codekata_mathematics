
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

inp.on("line", (data) => {	toDegrees(data)});

function toDegrees (angle) {
 var a =   Math.sin(angle * (Math.PI/180))
 a = Math.round(a*10)
 console.log(a/10)
}
