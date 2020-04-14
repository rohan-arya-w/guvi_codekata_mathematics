const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});


inp.on("line", (data) => {repeating(data)});

function repeating(data){
    counter = 1;
    var num ;
    var temp = [];
    num = data.split("");
                for (var i = 0; i < num.length; i++) { 
             
            for (var j = 0; j < num.length; j++){ 
                if (i != j && num[i] == num[j]){ 
                       break;
                }
                }
        if(j!=num.length){
            temp.push(num[i])
             
            
        }
    } 
   if(temp.length!==0){
  console.log("yes")
   }
