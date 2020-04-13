const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {factors(data)});

function factors(data){
  var temp = [];
  for(i= 0 ; i<=data ; i++){
      if (data%i===0){
          temp.push(i)
      }
  }
  console.log(temp.join(" "))

}
