

const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {surface_area(data)});

function surface_area(data){
    var temp = [];
    var v = 1;
    var a = 0 ;
    temp = data.split(" ")
    for (i=0 ; i<3 ; i++){
        v = v*Number(temp[i])
        }
    a = 2*(temp[0]*temp[1])+2*(temp[0]*temp[2])+2*(temp[2]*temp[1])
console.log(a + ' ' + v);

}
