
const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	Check_num(userInput)});

function Check_num(data){
    counter = 1;
    var num ;
    var temp = [];
    num = data[1].split(" ");
    if(num[0]<data[0] && num[1]>data[0]){
     console.log("yes")
    }
    else{
        console.log("no")
    }
    
  
  
}
