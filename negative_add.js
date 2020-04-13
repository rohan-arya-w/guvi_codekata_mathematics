
const readline = require('readline');

const inp = readline.createInterface({  input: process.stdin});

const userInput = [];

inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => {	Negative_sum(userInput)});

function Negative_sum(data){
    var temp=[];
    var m=0 ;
    temp = data[1].split(" ");
    if(data[0]==temp.length){
        for (var i = 0; i<=temp.length;i++){
            if(temp[i]<0){
                m = m + Number(temp[i])
                
            }
    
            
        }
    }

  console.log(m)
}
