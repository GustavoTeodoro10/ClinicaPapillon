# Clínica Papillon - site one-page

Primeiro site da Clínica Papillon (Mauá, SP). HTML, CSS e JS puros, Tailwind via CDN, sem build, backend ou CMS.
Objetivo: transmitir credibilidade e levar o visitante ao WhatsApp.

## Estrutura

```
index.html                  # página publicada (gerada de _fontes/index.src.html)
assets/
  css/style.css             # tokens (paleta), componentes e movimento
  js/main.js                # WhatsApp, GoatCounter, menu, revelar ao rolar, carrossel, vídeo do logo
  fonts/                    # Bricolage Grotesque (títulos) e Hanken Grotesk (texto), auto-hospedadas
  img/                      # logo com transparência, fotos em WebP, favicons, imagem de compartilhamento
  img/originais/            # arquivos originais (logo, recepção, corredor)
  video/                    # vídeo do logo do hero (WebM + MP4, 720 px, sem áudio)
_fontes/                    # fontes de trabalho. Não é necessário no deploy
  index.src.html            # HTML editável (sem o sprite de ícones)
  build.py                  # injeta o sprite de ícones e gera o index.html
  icons/                    # ícones Phosphor (MIT) em SVG
  video/logovd-original.mp4 # vídeo original de 10 s (1280x720)
PRODUCT.md, DESIGN.md       # documentação de produto e de design (opcional no deploy)
```

## Como editar

- **Textos, links, mensagens do WhatsApp e avaliações**: edite `_fontes/index.src.html` (há comentários marcando os blocos editáveis) e rode `python _fontes/build.py` na raiz. Isso regenera o `index.html`. Se preferir, edite o `index.html` direto, só lembre que o próximo build o sobrescreve.
- **Número do WhatsApp**: `WA_NUMBER` no topo de `assets/js/main.js` e os links `https://wa.me/...` do HTML (o JS monta a mensagem de cada botão a partir de `data-wa-msg`).
- **Paleta**: tokens em `:root` de `assets/css/style.css` (e o `tailwind.config` no `<head>`). Acento único: azul-índigo `#3a45a0`, das borboletas do logo.
- **Fotos**: troque `assets/img/recepcao.webp` e `corredor.webp` (mantenha a proporção vertical) ou adicione novas na seção "A clínica".
- **Avaliações**: o bloco `reviews-track` tem trechos reais do Google. Para atualizar, copie novas avaliações do perfil e mantenha o link "Ver todas as avaliações no Google".

## Vídeo do logo (hero)

- Toca em loop como um GIF: monta o logo, **segura 3,5 s**, some em 0,6 s e recomeça (`PAUSA_ENTRE_CICLOS` em `main.js`).
- O vídeo tem fundo branco e o CSS usa `mix-blend-mode: multiply`, então o branco desaparece sobre o disco azul-claro. Para trocar o vídeo, mantenha fundo branco liso.
- Pausa fora da tela e com a aba oculta. Com movimento reduzido, economia de dados ou autoplay bloqueado, aparece `assets/img/logo-hero-final.webp` (o logo original).
- Para regerar a partir do original (precisa de ffmpeg; recorta 0,6 s a 8,6 s e o quadrado central):

```bash
ffmpeg -ss 0.6 -t 8 -i _fontes/video/logovd-original.mp4 -an -vf "crop=720:720:280:0,format=yuv420p" -c:v libx264 -preset slow -crf 27 -movflags +faststart assets/video/logo-hero-720.mp4
ffmpeg -ss 0.6 -t 8 -i _fontes/video/logovd-original.mp4 -an -vf "crop=720:720:280:0" -c:v libvpx-vp9 -b:v 0 -crf 36 assets/video/logo-hero-720.webm
```

## Movimento e microinterações

Princípios aplicados (inspirados em Emil Kowalski): movimento só onde comunica algo, UI abaixo de 300 ms, curva `ease-out` forte nas respostas ao toque e `ease-in-out` só no que já está na tela.

- **Toque e clique**: botões, células e ícones afundam com `:active` (`scale(0.97)`, 160 ms). O hover (elevação e seta) só existe em dispositivos com mouse (`hover: hover` e `pointer: fine`), então não "gruda" no celular.
- **Menu do celular**: painel que desce com fade (200 ms) e ícone que troca entre menu e fechar com blur leve. Esc fecha.
- **Revelar ao rolar**: blocos sobem 14 px com fade (520 ms) e entram em cascata de 60 ms. As fotos da clínica se abrem de cima para baixo com `clip-path` (760 ms) e a legenda aparece por último.
- **Hero**: título, subtexto e botões entram em cascata uma única vez; o logo é o vídeo.
- **Movimento reduzido**: quem pede menos movimento recebe só fades curtos, sem deslocamento, sem clip-path e sem vídeo (fica o logo estático).
- **Onde editar**: curvas e durações em `assets/css/style.css` (`--ease-out`, `--ease-in-out` e blocos `@media (prefers-reduced-motion)` / `(hover: hover)`).

## Deploy gratuito

Qualquer um destes serve (a pasta raiz é o site):

1. **GitHub Pages**: suba o repositório, `Settings > Pages`, branch `main`, pasta `/ (root)`.
2. **Netlify**: arraste a pasta em app.netlify.com/drop, ou conecte o repositório (sem comando de build, diretório de publicação `/`).
3. **Cloudflare Pages**: conecte o repositório, sem build, diretório de saída `/`.

Depois do deploy, troque `og:image` (no `<head>`) por URL absoluta, ex.: `https://SEU-DOMINIO/assets/img/og-image.jpg`, e adicione `"url"` no JSON-LD.

### Domínio próprio

Registre o domínio (ex.: registro.br) e aponte para o serviço escolhido: no GitHub Pages crie `CNAME` e configure o DNS conforme a documentação; no Netlify e no Cloudflare Pages use `Domain settings > Add custom domain` e siga os registros DNS indicados. O HTTPS é emitido automaticamente.

## Analytics: GoatCounter

- Script no `<head>` do `index.html`, endereço `https://teocode.goatcounter.com/count`. Sem cookies e sem banner.
- Um único listener em `assets/js/main.js` (bloco 2) envia o evento de cada elemento com `data-gc-event`. O link do WhatsApp funciona mesmo se o rastreio falhar (adblock).
- **Eventos de CTA e links**: `cta-menu`, `cta-menu-mobile`, `cta-hero`, `cta-esp-psicologia`, `cta-esp-neuropsicologica`, `cta-esp-aba`, `cta-esp-fono`, `cta-esp-nutricao`, `cta-esp-psiquiatria`, `cta-esp-fisio`, `cta-esp-reforco`, `cta-clinica`, `cta-avaliacoes`, `cta-local`, `cta-final`, `cta-footer`, `cta-flutuante`, `link-google-faixa`, `link-google-avaliacoes`, `link-google-rodape`, `link-rota`, `link-instagram`.
- Para ver: GoatCounter, `Dashboard > Events`.
- **Lembrete**: o domínio onde o site for publicado precisa estar cadastrado no painel do GoatCounter (Settings > Sites), senão as visitas não aparecem.

## Acessibilidade e desempenho

Contraste AA, foco visível, navegação por teclado (menu, carrossel e links), landmarks, `aria-label` nos ícones, `prefers-reduced-motion` respeitado, imagens com dimensões definidas e `loading="lazy"`, fontes auto-hospedadas com `font-display: swap`, JS sem dependências.
