# Guia de publicação — Incentiva Gestão

Domínio final: https://www.incentivagestao.com.br

## Arquivos importantes deste pacote

- `CNAME`: configura o domínio customizado do GitHub Pages.
- `.nojekyll`: evita processamento Jekyll no GitHub Pages.
- `robots.txt`: aponta para o sitemap oficial.
- `sitemap.xml`: URLs oficiais no domínio final.
- `assets/img/og-image.jpg`: imagem de compartilhamento social.
- `politica-de-privacidade.html`: página simples de privacidade.
- `assets/img/equipe-incentiva-site-v2.webp`: versão otimizada da foto da equipe.

## DNS recomendado

No cPanel/Zone Editor:
- `www` → CNAME → `pedrinns0610.github.io`

Para o domínio sem www:
- `@` → A → `185.199.108.153`
- `@` → A → `185.199.109.153`
- `@` → A → `185.199.110.153`
- `@` → A → `185.199.111.153`

Depois, no GitHub Pages, configurar o domínio customizado:
`www.incentivagestao.com.br`

