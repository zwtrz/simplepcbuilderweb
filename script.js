const startBtn = document.getElementById("startBtn");
const selector = document.getElementById("selector");

const navigateWithFade = (targetUrl) => {
  if (!targetUrl || document.body.classList.contains("page-leave")) {
    return;
  }

  document.body.classList.add("page-leave");
  window.setTimeout(() => {
    window.location.href = targetUrl;
  }, 180);
};

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

document.querySelectorAll(".part-btn[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");
    navigateWithFade(target);
  });
});


