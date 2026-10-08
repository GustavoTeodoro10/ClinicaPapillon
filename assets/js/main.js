/* ==========================================================================
   Clínica Papillon - comportamento
   JS mínimo, sem dependências. Cada bloco é independente.
   ========================================================================== */
(function () {
  "use strict";

  var doc = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* 1. WHATSAPP: monta o link com a mensagem de cada botão.
        Número e mensagens ficam no HTML (data-wa-msg). Sem JS o link abre a conversa sem texto. */
  var WA_NUMBER = "5511950253185"; // EDITAR AQUI: WhatsApp com DDI + DDD
  document.querySelectorAll("a[data-wa-msg]").forEach(function (a) {
    a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(a.getAttribute("data-wa-msg"));
  });

  /* 2. GOATCOUNTER: um único listener para todos os CTAs (data-gc-event).
        O link do WhatsApp funciona mesmo se o rastreio falhar (adblock). */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-gc-event]");
    if (!el) return;
    var nome = el.getAttribute("data-gc-event");
    if (window.goatcounter && window.goatcounter.count) {
      try {
        window.goatcounter.count({ path: nome, title: nome, event: true });
      } catch (err) { /* o rastreio nunca bloqueia o link */ }
    }
  });

  /* 3. MENU MOBILE */
  var menuBtn = document.getElementById("menu-btn");
  var menu = document.getElementById("menu-mobile");
  if (menuBtn && menu) {
    var aberto = function () { return menu.classList.contains("is-open"); };
    var fechar = function (devolverFoco) {
      menu.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Abrir menu");
      if (devolverFoco) menuBtn.focus();
    };
    menuBtn.addEventListener("click", function () {
      var abrir = !aberto();
      menu.classList.toggle("is-open", abrir);
      menuBtn.setAttribute("aria-expanded", String(abrir));
      menuBtn.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) fechar(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && aberto()) fechar(true);
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (q) {
      if (q.matches) fechar(false);
    });
  }

  /* 4. CABEÇALHO: linha fina aparece ao rolar (IntersectionObserver, sem listener de scroll) */
  var header = document.querySelector(".site-header");
  var sentinela = document.getElementById("sentinela-topo");
  if (header && sentinela && hasIO) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle("is-stuck", !entries[0].isIntersecting);
    }).observe(sentinela);
  }

  /* 5. REVELAR AO ROLAR: o CSS esconde só se o JS rodou (sem JS tudo aparece).
        Irmãos dentro do mesmo bloco entram em cascata de 60ms (máx. 240ms). */
  if (hasIO) {
    doc.classList.add("js");
    var alvos = document.querySelectorAll("[data-reveal]");
    var contagem = new Map();
    alvos.forEach(function (el) {
      var pai = el.parentElement;
      var n = contagem.get(pai) || 0;
      contagem.set(pai, n + 1);
      el.style.setProperty("--d", Math.min(n * 60, 240) + "ms");
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    alvos.forEach(function (el) { io.observe(el); });
  }

  /* 6. LINK ATIVO NO MENU conforme a seção em vista */
  if (hasIO) {
    var links = document.querySelectorAll('.nav-link[href^="#"]');
    var secoes = [];
    links.forEach(function (l) {
      var s = document.querySelector(l.getAttribute("href"));
      if (s) secoes.push({ link: l, el: s });
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        secoes.forEach(function (s) {
          if (s.el === en.target) {
            if (en.isIntersecting) s.link.setAttribute("aria-current", "true");
            else s.link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secoes.forEach(function (s) { spy.observe(s.el); });
  }

  /* 7. CARROSSEL DE AVALIAÇÕES: botões rolam um cartão; o estado vem dos cartões das pontas */
  var track = document.getElementById("reviews-track");
  var prev = document.getElementById("rev-prev");
  var next = document.getElementById("rev-next");
  if (track && prev && next) {
    var cards = track.querySelectorAll(".review");
    var passo = function () {
      var c = cards[0];
      return c ? c.getBoundingClientRect().width + 17.6 : 360;
    };
    prev.addEventListener("click", function () { track.scrollBy({ left: -passo(), behavior: reduceMotion ? "auto" : "smooth" }); });
    next.addEventListener("click", function () { track.scrollBy({ left: passo(), behavior: reduceMotion ? "auto" : "smooth" }); });
    if (hasIO && cards.length) {
      var pontas = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.target === cards[0]) prev.disabled = en.isIntersecting && en.intersectionRatio > 0.9;
          if (en.target === cards[cards.length - 1]) next.disabled = en.isIntersecting && en.intersectionRatio > 0.9;
        });
      }, { root: track, threshold: [0, 0.9, 1] });
      pontas.observe(cards[0]);
      pontas.observe(cards[cards.length - 1]);
    }
  }

  /* 8. WHATSAPP FLUTUANTE: some quando o painel final ou o rodapé estão na tela (evita sobrepor) */
  var flutuante = document.querySelector(".wa-float");
  if (flutuante && hasIO) {
    var visiveis = new Set();
    var ocultadores = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) visiveis.add(en.target); else visiveis.delete(en.target);
      });
      flutuante.classList.toggle("is-hidden", visiveis.size > 0);
    });
    document.querySelectorAll("[data-hide-float]").forEach(function (el) { ocultadores.observe(el); });
  }

  /* 9. VÍDEO DO LOGO NO HERO
        Repete como um GIF: o logo montado fica parado por alguns segundos, some suavemente e
        recomeça. Pausa sozinho fora da tela e em aba oculta. Sem vídeo (movimento reduzido,
        economia de dados, autoplay bloqueado ou lento): fica a imagem estática do logo original. */
  var palco = document.querySelector("[data-logo-stage]");
  var video = palco && palco.querySelector("video");
  var saveData = navigator.connection && navigator.connection.saveData;
  if (video && !reduceMotion && !saveData) {
    var PAUSA_ENTRE_CICLOS = 3500; // ms com o logo montado antes de recomeçar (EDITAR AQUI)
    var FADE = 600;                // ms, igual à transição de opacidade no CSS (.logo-stage video)
    var comecou = false;
    var desistiu = false; // true = ficou a imagem estática; o vídeo não volta mais
    var emVista = true;
    var timer = null;

    var voltarParaImagem = function () {
      desistiu = true;
      palco.classList.remove("is-video", "is-fading");
      try { video.pause(); } catch (err) { /* ignora */ }
    };
    var limparTimer = function () { if (timer) { clearTimeout(timer); timer = null; } };
    var podeTocar = function () { return !desistiu && emVista && !document.hidden; };
    var tentou = false;
    var jogar = function () {
      if (!podeTocar()) return;
      // Se o vídeo demorar a começar (rede lenta), mostra o logo estático em vez de um quadro vazio.
      // O relógio só corre depois da primeira tentativa real (aba em segundo plano não conta).
      if (!tentou) {
        tentou = true;
        window.setTimeout(function () { if (!comecou) voltarParaImagem(); }, 4000);
      }
      var p = video.play();
      // NotAllowedError = o navegador proíbe autoplay: fica a imagem. Outros erros (ex.: aba oculta) são passageiros.
      if (p && p.catch) p.catch(function (err) { if (!comecou && err && err.name === "NotAllowedError") voltarParaImagem(); });
    };
    // some, volta ao primeiro quadro (branco liso) e toca de novo
    var recomecar = function () {
      limparTimer();
      palco.classList.add("is-fading");
      timer = window.setTimeout(function () {
        video.currentTime = 0;
        palco.classList.remove("is-fading");
        jogar();
      }, FADE);
    };
    var retomar = function () {
      if (!podeTocar()) return;
      if (video.ended) recomecar(); else jogar();
    };
    var parar = function () {
      limparTimer();
      palco.classList.remove("is-fading");
      try { video.pause(); } catch (err) { /* ignora */ }
      // pausado nos primeiros quadros (quase em branco): mostra o logo estático em vez de um disco vazio
      if (video.currentTime < 1.5) palco.classList.remove("is-video");
    };

    video.muted = true;
    video.addEventListener("playing", function () {
      if (desistiu) { try { video.pause(); } catch (err) { /* ignora */ } return; }
      comecou = true;
      palco.classList.add("is-video"); // só troca a imagem pelo vídeo quando ele realmente começou
    });
    video.addEventListener("ended", function () {
      limparTimer();
      timer = window.setTimeout(function () { if (podeTocar()) recomecar(); }, PAUSA_ENTRE_CICLOS);
    });
    video.addEventListener("error", voltarParaImagem);

    // pausa fora da tela e com a aba oculta (economiza bateria e atenção)
    if (hasIO) {
      new IntersectionObserver(function (entries) {
        emVista = entries[0].isIntersecting;
        if (emVista) retomar(); else parar();
      }, { threshold: 0.25 }).observe(palco);
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) parar(); else retomar();
    });

    jogar();
  }
})();
