---
name: Clínica Papillon
description: Site de uma página de uma clínica multidisciplinar em Mauá, onde o logo em movimento (árvore de madeira e borboletas índigo) dá a paleta, o personagem do hero e o tom de toda a página.
colors:
  paper: "#f3f6fa"
  surface: "#ffffff"
  ink: "#1b2633"
  ink-soft: "#3f4c5e"
  ink-mute: "#566377"
  indigo: "#3a45a0"
  indigo-deep: "#2d3680"
  indigo-soft: "#dde1f5"
  on-indigo: "#e3e6fb"
  sky: "#dce8f2"
  leaf: "#e4eee7"
  line: "#c9d6e3"
  star: "#f4b400"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 3.65vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.7vw, 3rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.08rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  focus: "6px"
  panel: "20px"
  closing: "28px"
  pill: "999px"
  round: "50%"
spacing:
  gutter: "20px"
  gutter-lg: "32px"
  cell-gap: "16px"
  cell-gap-lg: "17.6px"
  cell-gap-compact: "9.6px"
  cell-padding: "24px"
  section: "80px"
  section-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11.2px 23.2px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.indigo-deep}"
    textColor: "{colors.surface}"
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.indigo-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11.2px 23.2px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.indigo-soft}"
    textColor: "{colors.indigo-deep}"
  link-arrow:
    textColor: "{colors.indigo}"
    typography: "{typography.label}"
    height: "44px"
  nav-link:
    textColor: "{colors.ink-soft}"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.indigo}"
  cell-indigo:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "{spacing.cell-padding}"
  cell-sky:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.cell-padding}"
  cell-leaf:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.cell-padding}"
  cell-white:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.cell-padding}"
  cell-compact:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "17.6px 20px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4.5px 11.2px"
  review-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.cell-padding}"
    width: "352px"
  proof-strip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    height: "48px"
  panel-indigo:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.on-indigo}"
    rounded: "{rounded.closing}"
    padding: "68px 64px"
  wa-float:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 19.2px"
    height: "56px"
  wa-float-hover:
    backgroundColor: "{colors.indigo-deep}"
  avatar:
    backgroundColor: "{colors.indigo-soft}"
    textColor: "{colors.indigo-deep}"
    rounded: "{rounded.round}"
    size: "41.6px"
---

# Design System: Clínica Papillon

## Overview

**Creative North Star: "A Recepção à Luz do Dia"**

O sistema nasce do logo da clínica e da recepção real: parede azul-acinzentada, balcão de madeira clara, sofá azul-marinho e borboletas pousando numa árvore de madeira. A página inteira é essa sala em plena luz do dia. A base é um branco azulado (`paper`), a tinta é ardósia profunda, e um único azul-índigo (`indigo`), tirado das asas das borboletas, faz todo o trabalho de chamada para ação. Azul-claro (`sky`) e verde-folha (`leaf`) existem só como campos de cor, nunca como segundo acento.

O tom é acolhedor e sóbrio: atende crianças e adultos, então não infantiliza nem esfria. Títulos em Bricolage Grotesque trazem personalidade; o texto corrido em Hanken Grotesk mantém a leitura calma. A densidade é média, com muito respiro entre seções (80px no celular, 112px no desktop) e superfícies planas, sem sombras em repouso. O momento memorável é o hero: o logo se monta sozinho em vídeo, e o resto da página fala a mesma língua de cor e de forma.

Confirmado como rejeição visual: nada de bege, serifa ou violeta; nada de foto de estoque sorrindo; nada de três cards iguais com ícone; nada de verde-água genérico de clínica. O logo original é intocável: só o fundo branco pode sumir (via `mix-blend-mode: multiply`).

**Key Characteristics:**
- Acento único: `indigo` (#3a45a0) em todo CTA e destaque; `sky` e `leaf` apenas como campos de cor.
- Tema claro, base azulada (`paper`), tinta ardósia (`ink`), sem modo escuro (`color-scheme: light`).
- Cantos arredondados em duas escalas: pílula (999px) para ações, 20px para painéis, 28px só para o painel de fechamento.
- Profundidade tonal: superfícies planas com anel interno de 1px (`line`); sombra só como resposta a estado.
- Movimento com intenção: easing de saída para interface, easing de entrada e saída para fotos; hover só com mouse; tudo colapsa para fades curtos em `prefers-reduced-motion`.
- Fontes auto-hospedadas (woff2 em `assets/fonts`), sem Google Fonts.

## Colors

Uma paleta fria e clara com um único acento saturado: o índigo das borboletas sobre um branco azulado, com tinta ardósia e dois campos de cor suaves. Estrelas douradas aparecem só como convenção do Google.

### Primary
- **Índigo Borboleta** (`indigo`, #3a45a0): o único acento. Fundo de todo botão primário, da célula de Psicologia, do painel de fechamento e do botão flutuante; cor de links com seta, sublinhado ativo da navegação, anel de foco, seleção de texto e barra de rolagem.
- **Índigo Profundo** (`indigo-deep`, #2d3680): hover e pressão do índigo; texto sobre fundos claros que pedem acento (botão claro, ícones das células, avatares).
- **Índigo Névoa** (`indigo-soft`, #dde1f5): hover do botão claro, fundo dos avatares e dos círculos de ícone em células brancas e na seção da clínica.

### Secondary
- **Azul do Filete** (`sky`, #dce8f2): o azul-claro do filete do logo. Campo de cor das células, disco atrás do logo no hero (em gradiente radial até #b9d0e4), rodapé, trilho da barra de rolagem e fundo de reserva das fotos e do mapa.
- **Verde-Folha** (`leaf`, #e4eee7): campo de cor suave de algumas células do bento (Terapia ABA, Psiquiatria). Nunca como acento nem em botões.

### Tertiary
- **Dourado Google** (`star`, #f4b400): apenas as estrelas de avaliação no estilo Google, na faixa de prova e nos cartões de avaliação.

### Neutral
- **Branco Azulado** (`paper`, #f3f6fa): fundo da página e do cabeçalho.
- **Superfície** (`surface`, #ffffff): faixa de prova, cartões de avaliação, célula branca, botão claro, seção de avaliações.
- **Ardósia Profunda** (`ink`, #1b2633): títulos e texto forte.
- **Ardósia Corrida** (`ink-soft`, #3f4c5e): texto corrido (cor padrão do `body`).
- **Ardósia de Apoio** (`ink-mute`, #566377): legendas e textos de apoio (contraste 5,9:1 sobre o fundo).
- **Linha Azul-Acinzentada** (`line`, #c9d6e3): filetes, anéis internos de 1px, divisórias tracejadas dos horários.
- **Névoa sobre Índigo** (`on-indigo`, #e3e6fb): texto corrido sobre fundos índigo (célula de Psicologia e painel de fechamento).

### Named Rules
**The One Voice Rule.** O índigo é o único acento. Todo CTA, foco, seleção e destaque usa `indigo`; `sky` e `leaf` preenchem áreas, nunca chamam a ação.

**The Star Quarantine Rule.** `star` só aparece em estrelas de avaliação. Não vira destaque, selo, botão ou ícone decorativo.

**The Logo Colors Rule.** A paleta vem do logo; magenta e azul-claro do logo ficam dentro do logo. Não promover magenta a cor de interface.

## Typography

**Display Font:** Bricolage Grotesque (com Hanken Grotesk, system-ui, sans-serif), pesos 500 a 800, auto-hospedada
**Body Font:** Hanken Grotesk (com system-ui, -apple-system, Segoe UI, sans-serif), pesos 400 a 700, auto-hospedada

**Character:** Uma sans com personalidade nos títulos (Bricolage, de largura e contraste vivos, com tracking negativo) sobre uma sans humanista e calma no texto (Hanken). O par é acolhedor sem ser infantil, e deixa o logo ser a coisa mais ilustrativa da página.

### Hierarchy
- **Display** (700, `clamp(2.3rem, 3.65vw, 3.25rem)`, 1.05, -0.035em): somente o H1 do hero, em duas linhas no desktop.
- **Headline** (650, `clamp(1.9rem, 3.7vw, 3rem)`, 1.08, -0.03em): títulos de seção, com largura máxima de 22ch. No painel de fechamento a largura máxima é liberada.
- **Title** (650, 1.45rem, 1.12, -0.02em): nome da especialidade em cada célula; na célula de Psicologia sobe para `clamp(1.9rem, 3.2vw, 2.6rem)` a 1.05. No celular, células compactas usam 1.2rem.
- **Lead** (400, `clamp(1.08rem, 1.5vw, 1.25rem)`, 1.6): subtexto do hero, até 34rem; o `section-lead` das seções usa 1.12rem e até 40rem.
- **Body** (400, 1.0625rem, 1.6): texto corrido em `ink-soft`; `text-wrap: pretty` nos parágrafos e `text-wrap: balance` nos títulos. Linha de leitura curta, em torno de 40rem.
- **Label** (600, 1rem, 1.2): botões e links com seta; chips usam 0.88rem a 500; links de navegação 0.98rem a 500; links do menu mobile em Bricolage 1.25rem a 600; marca no cabeçalho em Bricolage 700, 1.18rem, -0.02em.

### Named Rules
**The Two Voices Rule.** Bricolage só em títulos, marca, links do menu mobile e iniciais dos avatares. Todo o resto é Hanken. Não há terceira família.

**The Tight Headline Rule.** Títulos levam tracking negativo (-0.02em a -0.035em) e `text-wrap: balance`; texto corrido nunca leva tracking.

## Layout

Página única, em seções empilhadas, dentro de um contêiner de `80rem` (1280px) com gutter de 20px no celular e 32px a partir de 1024px. Ritmo vertical generoso: 80px entre seções no celular e 112px no desktop. Cabeçalho fixo de 68px; `scroll-padding-top: 5.5rem` mantém as âncoras abaixo dele.

- **Hero:** grade assimétrica `1.22fr / 1fr` a partir de 1024px, com o texto à esquerda e o palco quadrado do logo à direita, maior que o texto em peso visual (até `min(112%, 37rem)`, com `margin-right: -6%`). No celular o logo vem primeiro, menor (`min(100%, 17rem)`; `27rem` a partir de 640px), e o botão primário fica visível sem rolar. Logo abaixo, a faixa de prova.
- **Bento de especialidades:** 1 coluna no celular, 2 colunas a partir de 640px e 4 colunas a partir de 1024px, com linhas de no mínimo `14.5rem`. Psicologia ocupa 2x2; Psiquiatria ocupa 2 colunas. Gap de 16px (17.6px no desktop). No celular, as sete células menores viram linhas compactas (gap de 9.6px) e só Psicologia mantém o formato cheio.
- **A clínica:** grade de 12 colunas, texto em 5 e fotos em 7. As duas fotos (proporção 4/5) ficam lado a lado em `1.12fr / 1fr`, e a segunda desce (48px no celular, 80px a partir de 640px) para quebrar o alinhamento.
- **Avaliações:** trilha horizontal com `scroll-snap-type: x mandatory` que sangra até a borda da janela, sem criar rolagem horizontal; cartões de `min(86%, 22rem)`. Setas redondas só no desktop; no celular o deslize faz o papel delas.
- **Como chegar:** 5 colunas de texto e horários, 7 de mapa.
- **Fechamento:** um único painel índigo dentro do contêiner, com o logo em disco branco à direita (oculto no celular).

Breakpoints reais: 640px (`sm`) e 1024px (`lg`). Alvos de toque de pelo menos 44px (links) e 48px (botões); menu mobile com linhas de 52px.

## Elevation & Depth

Híbrido tonal: a profundidade vem de campos de cor (`paper`, `surface`, `sky`, `leaf`, `indigo`) e de anéis internos de 1px em `line`, não de sombras. Em repouso as superfícies são planas. Sombra aparece como resposta a estado ou para separar elementos que flutuam sobre o conteúdo (cabeçalho rolado, menu mobile, botão flutuante).

### Shadow Vocabulary
- **Painel em elevação** (`--shadow-panel: 0 1px 2px rgba(27, 38, 51, 0.05), 0 12px 32px -12px rgba(45, 54, 128, 0.18)`): célula do bento em hover (com mouse), junto de `translateY(-4px)`.
- **Botão primário** (`0 10px 24px -12px rgba(58, 69, 160, 0.7)`; no hover `0 16px 30px -14px rgba(45, 54, 128, 0.75)`): sombra tingida de índigo que dá peso ao único CTA.
- **Botão flutuante** (`0 14px 28px -10px rgba(45, 54, 128, 0.7)`): separa o WhatsApp do conteúdo ao rolar.
- **Cabeçalho rolado** (`0 10px 24px -22px rgba(27, 38, 51, 0.5)` com filete `line`): aparece só depois que a página sai do topo.
- **Menu mobile** (`0 24px 32px -24px rgba(27, 38, 51, 0.45)`): sombra curta para fixar o painel sob o cabeçalho.
- **Anel de cartão** (`inset 0 0 0 1px var(--line)`): contorno de célula branca, cartão de avaliação e moldura do mapa, no lugar de borda.

### Named Rules
**The Flat-At-Rest Rule.** Superfícies são planas em repouso. Sombra de elevação nasce de hover (só com mouse) ou de elemento que flutua; nunca decora um cartão parado.

**The Tinted Shadow Rule.** Sombras de acento são tingidas de índigo (rgba(58, 69, 160) ou rgba(45, 54, 128)); sombras neutras usam a ardósia (rgba(27, 38, 51)). Nunca preto puro.

## Shapes

Dois idiomas de forma: a pílula (999px) para tudo que se toca como ação (botões, chips, botão flutuante) e o painel de 20px para tudo que contém (células, cartões de avaliação, fotos, moldura do mapa). O painel de fechamento é o único a 28px, para soar como a peça final da página. Elementos de identidade são círculos: ícones das células, avatares, botões de seta, ícones sociais, o disco atrás do logo e o disco branco do logo no fechamento.

Fotos reais, sem moldura decorativa nem filtro: só o canto de 20px e o fundo `sky` de reserva. O vídeo do logo é quadrado, mas sua borda se dissolve com uma máscara radial (`circle closest-side`, opaca até 80%) para as borboletas não serem cortadas em linha reta. Anel de foco: 3px de `indigo` com 3px de afastamento e canto de 6px (branco sobre fundos índigo).

## Components

### Buttons
Pílulas firmes e confiantes, com um único caminho: o WhatsApp.
- **Shape:** pílula (999px), altura mínima de 48px (44px no `btn-sm` do cabeçalho), ícone de 20px com gap de 0.6rem.
- **Primary (`btn-primary`):** fundo `indigo`, texto branco, Hanken 600 a 1rem, padding `0.7rem 1.45rem`, sombra tingida de índigo.
- **Light (`btn-light`):** fundo branco, texto `indigo-deep`; usado sobre o painel de fechamento.
- **Hover (só `hover: hover` e `pointer: fine`):** primário vai para `indigo-deep` com `translateY(-2px)` e sombra maior; claro vai para `indigo-soft`.
- **Press:** `:active` faz `scale(0.97)` em 160ms com `--ease-out`. Em movimento reduzido, sem transform.
- **Link com seta (`link-arrow`):** texto `indigo` a 600, 44px de altura, ícone de seta; no hover sublinha (1.5px) e a seta anda 3px.

### Navigation
- **Cabeçalho:** `paper`, sticky, 68px; marca (logo de 44px + "Clínica Papillon" em Bricolage 700), quatro links e o botão primário pequeno. A linha `line` e a sombra só aparecem depois da rolagem (classe `is-stuck`, via IntersectionObserver no sentinela do topo).
- **Links (`nav-link`):** Hanken 500, `ink-soft`; ao passar o mouse, a cor vai para `indigo` e um sublinhado de 2px cresce da esquerda (`scaleX`, 220ms). A seção ativa (`aria-current="true"`) mantém o sublinhado cheio.
- **Mobile:** botão de menu de 48px que troca o ícone de lista por X com rotação e blur leve (160 a 200ms); o painel desce com fade e `translateY(-8px)`; links em Bricolage 1.25rem a 600 separados por `line`.

### Bento cells (variantes de cor)
Cada especialidade é um painel de 20px inteiro clicável, que abre o WhatsApp com mensagem própria. A cor da célula é só campo de cor.
- **`cell-indigo` (Psicologia):** fundo `indigo`, título branco em escala maior, texto `on-indigo`, círculo de ícone translúcido, rótulo "Agendar pelo WhatsApp" visível. Única célula com rótulo de ação.
- **`cell-sky`, `cell-leaf`:** fundos `sky` e `leaf`, texto `ink`, círculo de ícone branco a 70% e botão redondo de seta (2.5rem) no canto.
- **`cell-white`:** fundo `surface` com anel de 1px `line`; círculo de ícone em `indigo-soft`.
- **Chips:** pílulas brancas a 75% com Hanken 500 a 0.88rem, dentro da célula de Psiquiatria.
- **Hover (só com mouse):** `translateY(-4px)` mais `--shadow-panel`, e a seta interna anda 3px para cima e para a direita; `:active` faz `scale(0.98)`.
- **Celular (compacta):** as sete células não índigo viram linhas (`flex-direction: row`), sem círculo de ícone, com padding `1.1rem 1.25rem`, título de 1.2rem e a seta redonda à direita. Psicologia permanece em formato cheio.

### Review card (carrossel)
Cartão branco de 20px com anel `line`, estrelas `star` no topo, citação em Hanken 1.06rem a `ink`, e autor com avatar circular (`indigo-soft` com a inicial em Bricolage 700). Os cartões ficam numa trilha com scroll-snap (`start`), sem barra de rolagem visível. As setas redondas (`nav-round`, 48px, anel de 1.5px `indigo`) só aparecem no desktop, ficam em 35% de opacidade quando desabilitadas e preenchem de `indigo` no hover/pressão.

### Proof strip
Faixa fina entre o hero e as especialidades: fundo `surface`, filetes `line` em cima e embaixo, três itens de 48px (estrelas e nota 4,9 com link ao Google, horário, endereço). Ícones em `indigo`; o `strong` em `ink`, que vira `indigo` e sublinha no hover do item-link.

### Closing panel (`panel-indigo`)
O fechamento: painel de 28px em `indigo`, texto `on-indigo`, título branco, botão claro e o logo em disco branco (7.5rem, padding 0.55rem) à direita no desktop. Padding `clamp(2.5rem, 5vw, 4.25rem) clamp(1.5rem, 5vw, 4rem)`. Foco em branco dentro dele.

### Hero logo stage (assinatura)
O palco do logo é a peça que dá o nome ao sistema. Um quadrado (`aspect-ratio: 1`) em `#topo` com `isolation: isolate`; um disco radial atrás (`inset: 4%`, de branco a `sky` em 55% e `#b9d0e4` nas bordas, `z-index: -1`). O vídeo (webm/mp4, fundo branco) e a imagem de reserva usam `mix-blend-mode: multiply`, então o branco some e o disco aparece por trás das borboletas. A imagem estática fica visível por padrão (sem JS, com movimento reduzido ou economia de dados); o JS troca para o vídeo (`is-video`) só quando ele realmente começou, repete com uma pausa curta e faz fade de 600ms entre ciclos (`is-fading`).

### WhatsApp flutuante
Pílula `indigo` de 56px, canto inferior direito (respeita `safe-area-inset-bottom`), só no celular (some a partir de 1024px). Fica oculta (opacidade 0, desce 1rem, sem eventos de ponteiro) enquanto o hero, o painel de fechamento ou o rodapé estão na tela (`data-hide-float`), para nunca competir com os CTAs da própria seção.

### Movimento (sistema transversal)
- **Easings:** `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` para entradas e respostas ao toque; `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` para o que já está na tela, em especial a abertura de fotos.
- **Durações:** 160 a 220ms para pressão, hover e troca de ícone; 520 a 760ms para revelações no scroll.
- **Revelar no scroll (`data-reveal`):** `opacity 0` e `translateY(14px)` para o estado final em 520ms/560ms, com atraso escalonado via `--d`. Fotos usam `clip-path` abrindo de cima para baixo em 760ms (`--ease-in-out`) e a legenda entra por último (400ms, atraso de 500ms). Hero: entrada `rise` de 700ms escalonada em 70ms por item.
- **Pressão:** `:active` com `scale(0.97)` (botões, flutuante), `0.98` (células), `0.94` (botões redondos e sociais).
- **Hover só com mouse:** todo `translate` e preenchimento de hover fica sob `@media (hover: hover) and (pointer: fine)`; no toque, nenhum hover trava.
- **Movimento reduzido:** o `scroll-behavior` volta para `auto`, revelações viram fades lineares de 240ms, o `clip-path` das fotos é removido, transições de componentes caem para 1ms e transforms de pressão e hover são cancelados.
- **Nunca** animar propriedades de layout; só `transform`, `opacity`, `clip-path`, cor e sombra.

## Do's and Don'ts

### Do:
- **Do** usar `indigo` (#3a45a0) como o único acento e `indigo-deep` (#2d3680) para hover e pressão.
- **Do** manter `sky` (#dce8f2) e `leaf` (#e4eee7) como campos de cor atrás de conteúdo, nunca como cor de ação.
- **Do** usar pílula (999px) para ações e 20px para painéis; reservar 28px ao painel de fechamento.
- **Do** manter superfícies planas em repouso, com anel interno de 1px em `line` (#c9d6e3) para separar o que não tem sombra.
- **Do** manter Bricolage Grotesque só em títulos e marca, com tracking negativo, e Hanken Grotesk em todo o resto.
- **Do** manter texto corrido em `ink-soft` (#3f4c5e) e texto de apoio em `ink-mute` (#566377), nunca abaixo de 4,5:1.
- **Do** aplicar `--ease-out` em respostas de interface e `--ease-in-out` na abertura de fotos; manter hover sob `hover: hover` e `pointer: fine`, e `:active` em `scale(0.97)`.
- **Do** manter o logo sobre o disco `sky` com `mix-blend-mode: multiply`, e a imagem estática como reserva.
- **Do** deixar toda chamada para ação levar ao WhatsApp, com alvo de toque de no mínimo 44px e foco visível de 3px em `indigo` (branco sobre índigo).

### Don't:
- **Don't** introduzir um segundo acento nem usar magenta, violeta ou bege na interface; o roxo e a serifa estão fora do sistema.
- **Don't** usar `star` (#f4b400) fora das estrelas de avaliação.
- **Don't** redesenhar, recolorir ou aplicar filtro no logo; só o fundo branco some, pelo `multiply`.
- **Don't** colocar sombra de elevação em cartão parado, nem sombra preta pura; sombras de acento são tingidas de índigo.
- **Don't** usar foto de estoque, moldura decorativa ou filtro nas fotos; só fotos reais da clínica.
- **Don't** montar a página como fila de três cards iguais com ícone; o bento varia tamanho e cor, e Psicologia é a célula em destaque.
- **Don't** usar texto `indigo` sobre fundo `indigo` nem texto cinza claro sobre `sky` ou `leaf`; sobre índigo, texto branco ou `on-indigo`.
- **Don't** deixar efeito de hover (translate, preenchimento) valer em tela de toque; sempre sob `hover: hover` e `pointer: fine`.
- **Don't** animar largura, altura, margem ou posição; e não manter movimento de deslocamento em `prefers-reduced-motion`, só fades curtos.
- **Don't** carregar fontes de Google Fonts ou de CDN; as duas famílias são woff2 auto-hospedados.
