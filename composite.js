const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {Check_comp(data)});

function Check_comp(data){
    var count = true ;
    for(var i=2; i<data-1 ; i++){
       if(data%i===0){
           count = false;
           break;
       }
    }
    if(count==false){
        console.log("yes")
    }
    else{
        console.log("no")
    }
    

}
