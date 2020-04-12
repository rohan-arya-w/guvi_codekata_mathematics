const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {Series(data)});

function Series(data){
     var temp=[1]
     var m = 1;
      for (var j = 1 ;j<=(3*(data-1)); j++ ){
       m = j*j;
       if (m%3===0 ){
        temp.push(m)
       }
       else{
       
       }
      }
        console.log(temp.join(" "));
   
}
