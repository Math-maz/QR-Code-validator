const readline = require("readline");
const readlineSync = require("readline-sync");
function readInput() {
  return readlineSync.question("qr_code: ");
  // return new Promise((resolve, reject) => {
  //     const rl = readline.createInterface({
  //         input: process.stdin,
  //         output: process.stdout
  //       });

  //       rl.question('qr_code: ', (qrcode) => {
  //         console.log("Validando Ticket...");
  //         resolve(qrcode);
  //         rl.close();
  //       });
  // })
}
module.exports = readInput;
