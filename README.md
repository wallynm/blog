# wallynm.dev

Blog pessoal do Wallysson Nunes da Mota. Site estático gerado com
[SvelteKit](https://kit.svelte.dev/) + [mdsvex](https://mdsvex.pngwn.io/) e
hospedado na **Cloudflare Pages**.

Baseado no [SvelteKit static blog starter](https://github.com/josh-collinsworth/sveltekit-blog-starter)
de Josh Collinsworth.

## Rodando localmente

```bash
pnpm install
pnpm dev --open
```

Para gerar e conferir o build de produção:

```bash
pnpm build     # gera ./build (roda o sitemap no postbuild)
pnpm preview   # serve ./build localmente
```

Se quiser conferir o site exatamente como a Cloudflare vai servi-lo — com URLs
sem `.html` e com as regras de `_headers` aplicadas:

```bash
npx wrangler pages dev build
```

## Escrevendo um post

Crie um `.md` em `src/lib/posts/`. O nome do arquivo vira o slug:
`meu-post.md` → `/blog/meu-post`.

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
excerpt: Resumo curto, usado na listagem e nas meta tags.
---

Conteúdo em Markdown. Componentes Svelte também funcionam aqui (mdsvex).
```

`date` e `excerpt` são importantes: os posts são ordenados por `date`, e o
`excerpt` alimenta as meta tags de SEO e o feed RSS.

O resto é automático — listagem, páginas de categoria (`/blog/category/...`),
paginação, sitemap, RSS e a API JSON.

### Paginação

A paginação aparece sozinha quando existirem mais posts do que o `postsPerPage`
definido em `src/lib/config.js` (hoje: 10). Vale tanto para `/blog` quanto para
as páginas de categoria.

As rotas paginadas se declaram via `export const entries` no `+page.server.js`
de cada rota dinâmica — é isso que faz o prerender saber quais páginas existem.
Não liste esses caminhos como globs em `prerender.entries` no `svelte.config.js`:
eles seriam tratados como caminhos literais e o build acabaria criando pastas
chamadas `*`.

## Configuração do site

`src/lib/config.js` concentra título, descrição, domínio, autor, posts por
página e os itens do menu (header, footer e menu mobile).

Esses valores são usados nas meta tags e no RSS, então mantenha-os atualizados.

## Estrutura

| Caminho | O que é |
| --- | --- |
| `src/lib/posts/` | Os posts em Markdown |
| `src/lib/config.js` | Configuração do site e do menu |
| `src/lib/assets/js/fetchPosts.ts` | Leitura, ordenação, filtro por categoria e paginação dos posts |
| `src/lib/components/` | Header, footer, nav, listagem de posts, paginação |
| `src/routes/` | Páginas e endpoints |
| `src/app.css` | Tokens de cor (light/dark) e estilos base |
| `tailwind.config.ts` | Mapeia os tokens para classes do Tailwind |
| `static/css/fonts.css` | `@font-face` das fontes locais |
| `static/css/prism.css` | Tema do syntax highlighting |
| `static/_headers` | Cache e headers de segurança da Cloudflare |
| `wrangler.jsonc` | Config do deploy como Worker com assets estáticos |
| `static/fonts/` | Atkinson Hyperlegible e Fira Code, servidas localmente |

### Endpoints

- `/api/rss.xml` — feed RSS
- `/api/posts.json` — todos os posts em JSON
- `/api/posts/count` — total de posts
- `/api/posts/page/[page]` — posts paginados
- `/sitemap.xml` — gerado no `postbuild`

## Estilo

Tudo é Tailwind. Não há CSS por componente nem folhas globais soltas — só
`src/app.css` (tokens + base) e dois arquivos linkados no `app.html`:
`fonts.css` (as `@font-face`) e `prism.css` (syntax highlighting).

As cores vivem como variáveis CSS em `src/app.css`, uma vez para o tema claro
e uma para o escuro:

```css
:root      { --color-canvas: 250 250 249; --color-accent: 180 83 9;  ... }
:root.dark { --color-canvas:  12  14  18; --color-accent: 251 191 36; ... }
```

O `tailwind.config.ts` expõe cada uma como uma classe (`bg-canvas`,
`text-muted`, `border-border`, `text-accent`…), então os componentes não
precisam de variantes `dark:` — trocar o tema troca as variáveis. Para mudar a
identidade visual do site, mexa só nesses dois blocos.

Os valores atuais passam em WCAG AA (≥ 4.5:1) em todos os pares de texto e
fundo, nos dois temas.

O tema é escolhido pelo `prefers-color-scheme` e pode ser fixado pelo botão no
header, que grava em `localStorage`. Um script inline no `app.html` aplica a
classe antes da primeira pintura, para não haver flash.

As larguras vêm de dois tokens: `max-w-wide` (o container da página, usado por
header, footer e conteúdo) e `max-w-content` (a coluna de leitura). Header,
listagem e artigo compartilham a mesma borda esquerda por causa disso.

## Deploy na Cloudflare Pages

O deploy é feito pela integração de Git da Cloudflare: todo push na `main`
dispara um build automático. Não há workflow de CI neste repositório.

### Configuração do projeto (Cloudflare Dashboard)

O dashboard oferece dois caminhos. Ambos funcionam; o repositório está
preparado para os dois.

**Workers (o caminho que a Cloudflare recomenda hoje)** — em
**Workers & Pages → Create → Workers → Connect to Git**, selecione este
repositório:

| Campo | Valor |
| --- | --- |
| Build command | `pnpm build` |
| Deploy command | `npx wrangler deploy` |
| Production branch | `main` |

O `wrangler.jsonc` na raiz cuida do resto: serve `./build` como assets
estáticos, mantém as URLs sem `.html` e usa o `404.html` gerado no build.

**Pages** — em **Workers & Pages → Create → Pages → Connect to Git**:

| Campo | Valor |
| --- | --- |
| Framework preset | SvelteKit (ou None) |
| Build command | `pnpm build` |
| Build output directory | `build` |
| Production branch | `main` |

Nos dois casos o gerenciador de pacotes é detectado pelo `pnpm-lock.yaml` e a
versão do Node vem do `.node-version` (22). Se aparecer a opção de build image,
use a **v3**: ela traz pnpm 10, enquanto a v2 traz pnpm 8 e não lê o formato
atual do lockfile.

### Domínio

Em **Custom domains**, adicione `wallynm.dev` (e `www.wallynm.dev`, se quiser).
Se o domínio já estiver numa zona da Cloudflare, os registros de DNS são criados
automaticamente; se estiver em outro provedor, a Cloudflare mostra o `CNAME` a
apontar.

⚠️ Antes de apontar o domínio, confira a zona de DNS e remova o que sobrou do
GitHub Pages, se ainda existir: os registros `A` para `185.199.108.153`,
`185.199.109.153`, `185.199.110.153` e `185.199.111.153`, e o `CNAME` de `www`
apontando para `wallynm.github.io`. Enquanto eles existirem, parte do tráfego
pode continuar indo para o host antigo.

Com o domínio já servindo pela Cloudflare, dá para desativar o GitHub Pages em
**Settings → Pages** do repositório. O workflow que publicava lá já foi removido
neste commit, junto com o arquivo `CNAME`.

### Headers e cache

`static/_headers` é copiado para a raiz do build e lido pela Cloudflare. Ele
define `Cache-Control: immutable` para os assets com hash no nome
(`/_app/immutable/*`) e para as fontes, cache curto para imagens e CSS, e o
`Content-Type` correto para os endpoints da API que são gerados sem extensão.

Para validar as regras antes de subir: `npx wrangler pages dev build` imprime
quantas regras foram reconhecidas.

## Licença

[MIT](./LICENSE).
