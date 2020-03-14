
const readInput = require("./readInput.js");
const axios = require("axios");
function validar() {
  const qrCode = readInput();
  axios
    .post("https://ticket-project.herokuapp.com/api/tickets", {
      qr_code: qrCode
    })
    .then(res => {
      if (res.status && res.status == 200) {
        console.log(
          `HTTP code ${res.status}, o Ticket foi validado com Sucesso!`
        );
      } else {
        console.log(res.status);
      }
      validar();
    })
    .catch(error => {
      console.log(
        `HTTP code ${error.response.data.error.status}, Ticket já foi validado ou nao foi encontrado`
      );
      validar();
    });

}
module.exports = validar;
