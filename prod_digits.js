//problem 23
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {Multi(data)});

function Multi(data){
   var temp ;
    
    var gg = 1;
    temp = data.split("");
   for (var i = 0; i<temp.length ; i++){
      gg = gg * Number(temp[i])
     
   }
 
 console.log(gg)
   
}
