export default function converteData() {
  const dataInformada = document.querySelector('[data-modal="data"]').value;

  

  function converteDataParaArray() {
    const arrayDate = dataInformada.split("-");
    return {
      dia: arrayDate[2],
      mes: arrayDate[1],
      ano: arrayDate[0],
    };
  }

  const data = converteDataParaArray();
  const dataFutura = `${data.mes} ${data.dia} ${data.ano} 23:59:59 `;

  const dataConvertida = new Date(dataFutura);

  return dataConvertida;
}
