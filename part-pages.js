const blocks = document.querySelectorAll(".selector-block");

const navigateWithFade = (targetUrl) => {
  if (!targetUrl || document.body.classList.contains("page-leave")) {
    return;
  }

  document.body.classList.add("page-leave");
  window.setTimeout(() => {
    window.location.href = targetUrl;
  }, 180);
};

blocks.forEach((block) => {
  const buttons = block.querySelectorAll(".vendor-btn");
  const panels = block.querySelectorAll(".panel");

  const activate = (vendor) => {
    buttons.forEach((btn) => {
      const isActive = btn.dataset.vendor === vendor;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === vendor;
      panel.classList.toggle("active", isActive);
      panel.setAttribute("aria-hidden", String(!isActive));
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => activate(btn.dataset.vendor));
  });

  const defaultVendor = buttons[0]?.dataset.vendor;
  if (defaultVendor) {
    activate(defaultVendor);
  }
});

document.querySelectorAll(".back-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navigateWithFade(link.getAttribute("href"));
  });
});


