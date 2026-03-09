const navigateWithFade = (targetUrl) => {
  if (!targetUrl || document.body.classList.contains("page-leave")) {
    return;
  }

  document.body.classList.add("page-leave");
  window.setTimeout(() => {
    window.location.href = targetUrl;
  }, 180);
};

document.querySelectorAll(".option-tile[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");
    navigateWithFade(target);
  });
});
