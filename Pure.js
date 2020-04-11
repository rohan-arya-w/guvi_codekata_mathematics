const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

inp.on ("line", (data) => {Pure_number(data)})

function Pure_number(data){
    var temp ;
    var m = 0;
    temp = data.split("");
   for (var i = 0; i<temp.length ; i++){
      m = m + Number(temp[i]); 
   }
 
   if(m%3==0){
       console.log("yes")
       
   }
   else{
       console.log("not")
   }
}
