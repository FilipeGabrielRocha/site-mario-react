const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");

if (fecharModal) {
  fecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
  });
}
