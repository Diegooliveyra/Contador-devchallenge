import converteData from "./converte-data.js";

export default function calculaData() {
  const dataAtual = new Date();
  const dataFutura = converteData();
  const diferençaData = dataFutura.getTime() - dataAtual.getTime();


  function converterEmDias(time) {
    return Math.floor(time / (24 * 60 * 60 * 1000));
  }
  function converterEmHoras(time) {
    return Math.floor(time / (60 * 60 * 1000));
  }
  function converterEmMinutos(time) {
    return Math.floor(time / (60 * 1000));
  }
  function converterEmSegundos(time) {
    return Math.floor(time / 1000);
  }

  function tempoFaltante() {
    const dias = converterEmDias(diferençaData) - 1;
    const horas = converterEmHoras(diferençaData) % 24;
    const minutos = converterEmMinutos(diferençaData) % 60;
    const segundos = converterEmSegundos(diferençaData) % 60;
    return {
      dias,
      horas,
      minutos,
      segundos,
    };
  }

  return tempoFaltante();
}
