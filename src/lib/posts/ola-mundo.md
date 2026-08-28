---
title: "Olá, mundo"
date: "2026-08-28"
updated: "2026-08-28"
categories:
  - "geral"
coverImage: "/images/bg-post-0.png"
coverWidth: 16
coverHeight: 9
excerpt: Primeiro post do blog — o que você vai encontrar por aqui e como esse site é construído.
---

Este é o primeiro post do blog. A partir daqui pretendo escrever sobre
desenvolvimento de software, arquitetura, frontend e as coisas que aprendo no
caminho.

## Como este site funciona

O blog é um site estático gerado com [SvelteKit](https://kit.svelte.dev/) e
[mdsvex](https://mdsvex.pngwn.io/), hospedado na Cloudflare Pages. Cada post é
um arquivo Markdown em `src/lib/posts/`, com um bloco de frontmatter no topo:

```markdown
---
title: "Título do post"
date: "2026-08-28"
updated: "2026-08-28"
categories:
  - "geral"
coverImage: "/images/bg-post-0.png"
coverWidth: 16
coverHeight: 9
excerpt: Resumo curto que aparece na listagem.
---
```

O nome do arquivo vira o slug da URL: `ola-mundo.md` é publicado em
`/blog/ola-mundo`. As categorias do frontmatter geram automaticamente as
páginas em `/blog/category/`, e a listagem é paginada de 10 em 10 posts.

Como tudo é pré-renderizado no build, não existe servidor no meio do caminho:
o que chega no navegador é HTML pronto, servido pela CDN.

## O que vem por aí

Ainda estou organizando os assuntos, mas a ideia é escrever com mais frequência
e menos cerimônia. Se quiser acompanhar, o [feed RSS](/api/rss.xml) está no ar.
