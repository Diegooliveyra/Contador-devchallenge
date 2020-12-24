import atualizaData from "./atualiza-data.js";
import calculaData from "./calcula-data.js";

export default function eventos() {
  const modal = document.querySelector("[data-modal]");
  const modalBtn = document.querySelector('[data-modal="btn"]');
  const contador = document.querySelector('[data-contador="section"]');
  const reiniciarBtn = document.querySelector('[data-contador="reiniciar"]');
  const loader = document.querySelector("[data-loader]");
  const modalTitle = document.querySelector('[data-modal="title"]')

  modalBtn.addEventListener("click", iniciarContador);
  reiniciarBtn.addEventListener("click", reiniciarContador);

  function iniciarContador(e) {
    modal.classList.add("hidden");
    loader.classList.remove("hidden");
    setTimeout(() => {
      if (!calculaData().segundos || calculaData().segundos < 0) {
        modalTitle.innerText = 'Data incorreta 🙁'
        modal.classList.remove("hidden");
        loader.classList.add("hidden");
      } else {
        contador.classList.add("active");
        loader.classList.add("hidden");
      }
    }, 1000);
    atualizaData();
  }

  function reiniciarContador() {
    modal.classList.remove("hidden");
    loader.classList.add("hidden");
    contador.classList.remove("active");
    modalTitle.innerText = 'Informe uma data'
  }
}
