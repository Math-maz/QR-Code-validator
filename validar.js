const readInput = require("./readInput.js");
const axios = require("axios");  //leitura de eixos
function validar(){
    Promise.resolve(readInput())
    .then(qrcode => {
        return axios.post('https://ticket-project.herokuapp.com/api/tickets', {
            qr_code: qrcode
        });
    })
    .then((res) => {
        if(res.status && res.status == 200){
            console.log(`HTTP code ${res.status}, o Ticket foi validado com sucesso, aproveite!`);
        } else {
            console.log(res.status);
        }
        validar();
    })
    .catch((error) => {
        console.log(`HTTP code ${error.response.data.error.status}, Ticket já foi validado ou não foi encontrado`);
        validar();
    })  
}
module.exports = validar;