const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {console.log(prime_factors(data))});

function GetPrime(n){
    var count = [];


    for(var i = 0 ; i <= n; i++ ){
        count.push(true);
    }


    for(var i = 2 ; i<=n ; i++){
        for(var j = i*i ; j<=n ; j+=i ){
            count[j] = false;
        }
    }
    return count[n] ? true:false;
}

function prime_factors(data){
var temp=[];
for(i = 2 ;i<=data;i++){
    if(data%i===0 && GetPrime(i)== true && data<=100000 && data >=2){
        temp.push(i)
    }
    }
return temp.join(" ")
}
