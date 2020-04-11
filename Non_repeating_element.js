const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	least_frequent(userInput)});

function least_frequent(data){
    counter = 1;
    var num ;
    var temp = [];
    num = data[1].split(" ");
                for (var i = 0; i < num.length; i++) { 
             
            for (var j = 0; j < num.length; j++){ 
                if (i != j && num[i] == num[j]){ 
                       break;
                }
                }
        if(j==num.length){
            temp.push(num[i])
             
            
        }
    } 
    console.log( temp.sort(function(a, b){return b - a}).join(' '));
  
  
}
