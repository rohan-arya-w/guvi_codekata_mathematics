
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {factors(data)});

function factors(data){
  var temp = [];
  if(1<=data<=1000){
  for(i= 1 ; i<=data ; i++){
      if (data%i===0 && data%2!==0){
        temp.push(i)
      }
  }
 
     
 }
console.log(temp.join(" "))
}
