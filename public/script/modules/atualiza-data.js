import calculaData from "./calcula-data.js";

export default function atualizaData() {
  const dias = document.querySelector('[data-contador="dias"]');
  const horas = document.querySelector('[data-contador="horas"]');
  const minutos = document.querySelector('[data-contador="minutos"]');
  const segundos = document.querySelector('[data-contador="segundos"]');
  

 const timer = setInterval(() => {
    dias.innerText = calculaData().dias;
    horas.innerText = calculaData().horas;
    minutos.innerText = calculaData().minutos;
    segundos.innerText = calculaData().segundos;
  }, 1000);
  
}
