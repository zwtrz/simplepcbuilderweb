const startBtn = document.getElementById("startBtn");
const selector = document.getElementById("selector");

if (startBtn && selector) {
  startBtn.addEventListener("click", () => {
    selector.classList.add("show");
    selector.setAttribute("aria-hidden", "false");
    startBtn.classList.add("hide");
    startBtn.disabled = true;
    startBtn.setAttribute("aria-hidden", "true");
    startBtn.blur();
  });
}
