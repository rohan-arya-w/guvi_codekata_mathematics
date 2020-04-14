const readline = require('readline')
const inp = readline.createInterface({ input:process.stdin})


inp.on("line", (data) => {console.log(hextodeci(data))});

function hextodeci(data) {
var deci =0 , digitValue;
data = data.toLowerCase();

for (var i = 0; i < data.length; i++) {
    digitValue = '0123456789abcdefgh'.indexOf(data[i]);
    deci = deci * 16 + digitValue;
}
return deci;
}
