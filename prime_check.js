

const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {Check_prime(data)});

function Check_prime(data){
    var count = true ;
    for(var i=2; i<data-1 ; i++){
       if(data%i===0){
           count = false;
           break;
       }
    }
    if(count==true){
        console.log("yes")
    }
    else{
        console.log("no")
    }
    

}
