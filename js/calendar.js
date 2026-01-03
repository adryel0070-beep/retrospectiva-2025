document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("calendar-content");

  const stories = {
    "2025-01-01": "Virada de ano juntos, cheios de esperança. E levemente adoentados hehe",
    "2025-01-13": "Nossa família se conheceram e Deus nos alegrou 🥰",
    "2025-02-15": "Meu aniversário e o melhor??? Minha namorada passou comigo ❤️",
    "2025-02-16": "Atendi um culto e o melhor??? Você já sabe né meu amor, você estava presente 😍",
    "2025-02-21": "Ganhei um K, K de Ketllen, K de o amor da minha vida, a camisa mais perfeita que eu poderia ter ganhado 🎁",
    "2025-03-02": "Nossa segunda confirmação meu amor, Rute. Antes dela você lembra amor? O Cego de Jericó e depois de Rute? Eu lembro meu amor, Isaías. Como eu te amo meu amor 💕",
    "2025-04-02": "AMOR, ADIVINHA?? Fomos ver o salão que vai ser nosso CASAMENTO 😎",
    "2025-04-18": "Nossa primeira viagem juntos 😎 Destino? Inocência-MS... Somos muito chique né minha princesa",
    "2025-05-26": "Aqui já tínhamos mais do que certeza do nosso futuro juntos, né minha oncinha? Começamos então a montar as caixas dos padrinhos",
    "2025-06-12": "Ahhh esse dia foi muito bom, né meu amor? Dia dos namorados e fomos na pizzaria. Lembra meu amor? ",
    "2025-07-03": "AMOR, ACRODAAA, adivinha o que chegou nessa data? NOSSAS ALIANÇAS 💕💍",
    "2025-07-06": "🤫 Mas eu fiz algo que minha futura noiva e esposa não sabe... Comprei uma casa MUHAHAH",
    "2025-07-12": "E esse dia meu amor? O que aconteceu aqui? Por que será está aqui? AHHHH já sei minha vida, nosso NOIVADO... Meu amor, eu te amo muito, demais minha princesa. Eu já disse que te amo? EU TE AMO DEMAIS ❤️🥰",
    "2025-10-17": "Hmmm, 17/10/2025 o que teve? ANIVERSÁRIO da minha noiva e futura esposa... Amor, estou escrevendo esse trecho e relembrando, meu Deus, commo sou feliz ao seu lado... Como eu te amo minha oncinha ❤️😍",
    "2025-11-19": "Passamos um estresse né meu amor? Mas nesse dia aqui foi o que? Nosso pre-wedding... Nossas fotos perfeitas, fiquei um pouco tonto no barco, mas era o desejo da minha esposinha né, é claro que eu iria 💪",
    "2025-11-21": "11 meses juntos meu amor, olha onde chegamos né minha princesa. 11 meses de muito amor, alegrias e muita fé em Deus",
    "2025-12-17": "Alguém começou a trabalhar!! Claro, a melhor dentista do mundo, a minha mulher, a minha oncinha. Deus abençoou e preparou esse trabalho para minha vida 💕😎",
    "2025-12-23": "DIA DA MUDANÇA 📢 Como Deus é bom né meu amor? Geladeira, fogão, máquina de lavar louça, um tapete grandão... Meu Deus amor, que maravilha né",
    "2025-12-31": "Virada de ano juntos, não presencialmente, mas juntos em mente e coração, pois nosso amor é infinito e eu não canso de dizer o quanto sou feliz ao seu lado",
  };
document.querySelectorAll(".calendar-day").forEach(btn => {
  btn.addEventListener("click", () => {
    const date = btn.dataset.date;
    const text = stories[date];

    content.classList.remove("show");

    setTimeout(() => {
      content.innerHTML = `<p>${text ?? "Esse dia guardamos só no coração 🤍"}</p>`;
      content.classList.add("show");
    }, 300);
  });
});
});
