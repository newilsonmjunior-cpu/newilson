# Portfólio - Template pronto para Netlify

Este repositório contém um template simples e moderno para portfólio, pronto para deploy no Netlify.

Como usar
1. Substitua os textos: nome, descrições, links e imagens em `index.html`.
2. Coloque suas imagens otimizadas em `assets/` (use WebP quando possível).
3. Customize estilos em `assets/styles.css` e scripts em `assets/script.js`.

Netlify (deploy)
- Crie um repositório no GitHub e envie os arquivos.
- No Netlify: "New site from Git" → conecte ao GitHub → selecione o repositório → Deploy site.
- Para este template estático, não é preciso Build command; configure Publish directory como `/` (ou deixe padrão).
- O formulário usa Netlify Forms. Depois do deploy, faça um teste enviando uma mensagem; as submissões aparecem em Site settings → Forms ou na aba Forms do site no Netlify.

Boas práticas (sugestões)
- Otimize imagens (WebP, compressão).
- Use Lighthouse para checar performance, acessibilidade e SEO.
- Configure `netlify.toml` e headers para cache (arquivo incluído).
- Adicione sitemap.xml e robots.txt para SEO.
- Se usar frameworks (React/Vite/Gatsby), ajuste build command e publish dir.

Se quiser, eu posso:
- Converter isso para React (Vite) ou Gatsby.
- Adicionar CI/CD com previews (Netlify previews).
- Gerar README mais detalhado com checklist de SEO.