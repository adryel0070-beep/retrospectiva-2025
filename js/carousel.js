document.addEventListener("DOMContentLoaded", () => {

  // 🔁 Inicialização do Swiper (com setas + swipe)
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,

    // 🖱️ Arrastar com mouse / dedo
    grabCursor: true,

    // 🔘 Paginação (bolinhas)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // ⬅️➡️ Setas
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 🎵 Scroll suave + música ao clicar em "Começar"
  const startButton = document.getElementById("start");
  const music = document.getElementById("bg-music");

  if (startButton) {
    startButton.addEventListener("click", () => {
      const destino = document.getElementById("inicio-historia");

      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      // Música começa após interação (mobile-safe)
      if (music) {
        music.volume = 0.12; // bem discreto e elegante
        music.play().catch(() => {
          console.log("Música bloqueada até interação válida.");
        });
      }
    });
  }

});
