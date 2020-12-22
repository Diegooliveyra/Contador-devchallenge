import atualizaData from './atualiza-data.js'

export default function eventos() {
  const modal = document.querySelector("[data-modal]");
  const modalBtn = document.querySelector('[data-modal="btn"]');
  const contador = document.querySelector('[data-contador="section"]');
  const reiniciarBtn = document.querySelector('[data-contador="reiniciar"]');

  const agora = new Date();

  modalBtn.addEventListener("click", iniciarContador);
  reiniciarBtn.addEventListener("click", reiniciarContador);

  function iniciarContador() {
    modal.classList.add("hidden");
    contador.classList.add('active')
    contador.classList.remove("active-blur");
    atualizaData()
  }

  function reiniciarContador() {
    modal.classList.remove("hidden");
    contador.classList.add("active-blur");
  }
}
