export default function resetaData() {
  const dias = document.querySelector('[data-contador="dias"]').innerText = '';
  const horas = document.querySelector('[data-contador="horas"]').innerText = '';
  const minutos = document.querySelector('[data-contador="minutos"]').innerText = '';
  const segundos = document.querySelector('[data-contador="segundos"]').innerText = '';

  dias.innerText = '';

}
