const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})

inp.on("line", (data) => {GCD(data)});

function GCD(data){
    var num =[];
    var a,b ;
    var temp=[];
    var temp1=[];
    var com = [];
    
    num = data.split(" ").map(n=>Number(n))
    a=num[0]
    b=num[1]
  for (i = 1 ; i<=a;i++ ){
     if(a%i===0){
         temp.push(i)
         
         
     } 
  }
  for(j=0; j<=b; j++ ){
      if(b%j===0){
          temp1.push(j)
          
          
      }
      
  }

    for(var k=0;k<temp.length;k++){
    for(var l=0;l<temp1.length;l++){
        if(temp[k]==temp1[l]){
            com.push(temp[k])
        }
    }
}
  if(com.length !== 0){
console.log(com [com.length -1])
  }
 if(com.length===1){
    console.log("-1")
  }
}
