import axios from 'axios';

/**
 * se tiver executando no celular
 * na baseURL tem que colocar o ip do expo e a 
 * porta em que o servidor ta rodando a api
 * 
 * ip:porta
 */

 /**
  * se tiver com o emulador no pc, coloca localhost e a porta
  * em que a api ta rodando
  * 
  * localhost:porta
  */

const api = axios.create({
    baseURL:'http://192.168.0.105:3333'
});

export default api;