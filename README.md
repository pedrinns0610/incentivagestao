# Incentiva Gestão Empresarial

Site institucional estático pronto para hospedagem no GitHub Pages.

## Versão atual
`19-logos-corrigidas`

## Implementações v11
- manteve o banner Decision Orbit aprovado
- manteve correção mobile da v10
- criou páginas individuais para serviços principais
- adicionou FAQ na home, em Serviços e nas páginas individuais
- melhorou links internos entre serviços
- reforçou conteúdo local com Belo Horizonte/MG
- otimizou títulos e meta descriptions por página
- adicionou JSON-LD com AccountingService, LocalBusiness, WebPage, Service e FAQPage
- atualizou sitemap.xml com todas as páginas novas
- atualizou robots.txt
- adicionou mensagens pré-preenchidas nos CTAs do WhatsApp
- cache busting: style.css?v=11 e main.js?v=11

## Publicação
Copie o conteúdo da pasta `incentivagestao` para a raiz do repositório e rode:

```bash
git add -A
git commit -m "feat: implementar SEO e paginas de servicos v11"
git push origin main
```

- adicionada seção da equipe na página Quem somos com imagem tratada e highlights institucionais

- substituída a foto da equipe por uma nova versão vertical com ajuste visual para melhor encaixe na seção

- v14: seção da equipe recriada em HTML/CSS com fundo clean, cards individuais e CTA, sem usar a imagem gerada como bloco único

- v15: substituída a foto da equipe por uma versão horizontal clean e removida a faixa branca diagonal da composição

- v16: mantida a foto horizontal clean, reduzido o título da seção Quem somos e aumentado o espaçamento dos quatro cards abaixo do texto

- v17: removida a faixa branca diagonal da foto e ajustado o bloco dos quatro cards para voltar a sobrepor levemente a imagem

- v19: corrigida conversão das logos para PNG branco com transparência, removido carrossel de palavras do banner e criada seção de logos separada do hero
