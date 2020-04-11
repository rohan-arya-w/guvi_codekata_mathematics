const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

inp.on ("line", (data) => {Great_number(data)})

function Great_number(data){
    var temp ;
    var m = 0;
    var gg = 1;
    temp = data.split("");
   for (var i = 0; i<temp.length ; i++){
      gg = gg * Number(temp[i])
      m = m + Number(temp[i]); 
   }
 
   if((m+gg)==data){
       console.log("Great")
       
   }
   else{
       console.log("no")
   }
}
