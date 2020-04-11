
const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {	co_prime(data)});

function co_prime(data){
    var temp =[];
    var factors = 1;
    temp = data.split(" ");
    for(var i=0 ;i<=Math.min(temp[0],temp[1]) ; i++){
        if(temp[0]%i==0 && temp[1]%i==0){
            factors = i;
        }
    }
        if(factors==1){
            console.log("1");
        }
        else{
            console.log("0")
        }
   
    
}
