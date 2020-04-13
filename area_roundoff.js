const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {Area(data)});

function Area(data){
    var area = 1;
    var num = [];
    num = data.split(" ")
    area = Number(num[1])*Number(num[0])
    console.log(area.toFixed(5))

}
