const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {check_string(data)});

function check_string(data){

        if(data>0){
            console.log("yes")
        }
        else{
            console.log("no")
        }
    
   
    
}
