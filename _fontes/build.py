"""Monta index.html: injeta o sprite de ícones (Phosphor, MIT) em _fontes/index.src.html.
Uso: python _fontes/build.py   (rode na raiz do projeto). O index.html gerado é o arquivo publicado."""
import re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICONS = os.path.join(ROOT, "_fontes", "icons")
NAMES = [
    "whatsapp-logo-fill", "instagram-logo", "google-logo", "map-pin", "clock", "arrow-right", "arrow-up-right",
    "list", "x", "wheelchair", "star-fill", "brain", "clipboard-text", "ear", "puzzle-piece", "carrot",
    "hand-heart", "stethoscope", "pencil-simple-line", "caret-left", "caret-right",
]

symbols = []
for n in NAMES:
    svg = open(os.path.join(ICONS, n + ".svg"), encoding="utf-8").read()
    vb = re.search(r'viewBox="([^"]+)"', svg).group(1)
    inner = re.search(r"<svg[^>]*>(.*)</svg>", svg, re.S).group(1).strip()
    symbols.append(f'  <symbol id="i-{n}" viewBox="{vb}">{inner}</symbol>')

sprite = (
    '<!-- Ícones: Phosphor Icons (MIT), sprite inline -->\n'
    '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">\n'
    + "\n".join(symbols) + "\n</svg>"
)

src = open(os.path.join(ROOT, "_fontes", "index.src.html"), encoding="utf-8").read()
out = src.replace("<!--SPRITE-->", sprite)
open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8").write(out)
print("index.html gerado:", len(out) // 1024, "KB,", len(NAMES), "ícones")
