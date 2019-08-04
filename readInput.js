const readline = require('readline');
function readInput(){
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
          
          rl.question('qr_code: ', (qrcode) => {
            console.log("Validando Ticket...");
            resolve(qrcode);
            rl.close();
          });
    })

}
module.exports = readInput;