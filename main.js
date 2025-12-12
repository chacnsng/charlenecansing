// MOBILE MENU
document.getElementById("mobile-menu-button")
    .addEventListener("click", function() {
        document.getElementById("mobile-menu").classList.toggle("hidden");
});

// ACTIVE LINK HIGHLIGHT
const current = location.pathname.split("/").pop();
document.querySelectorAll(".nav-link, .mobile-nav-link, .footer-link")
  .forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("text-gray-900");
    }
});

// CERTIFICATE MODAL
document.querySelectorAll("[data-cert]").forEach(item => {
  item.addEventListener("click", () => {
    const imgSrc = item.dataset.cert;
    const modal = document.getElementById("cert-modal");
    document.getElementById("modal-img").src = imgSrc;
    modal.classList.remove("hidden");
  });
});

document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("cert-modal").classList.add("hidden");
});
