const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	least_frequent(userInput)});

function least_frequent(data){
 
    var num ;
    var m = 0;
    var n = 0;
    num = data[1].split(" ")
    if(num.length==data[0]){
    for (i=(num.length-2); i>=(num.length-3); i--){
        m = m + Number(num[i]);
    }
    for (j = 0 ; j<3 ; j++){
        n = n + Number(num[j]);
    }
if (m==n ){
    console.log("1")
}
else{
    console.log("0")
}
}
}
