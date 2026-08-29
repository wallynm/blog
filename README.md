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

## Projetos na home

A home mostra os três primeiros itens de `src/lib/projects.js`:

```js
{
	name: 'Cluvia',
	description: 'Uma linha sobre o projeto.',
	url: 'https://cluvia.app',   // opcional
	repo: '',                     // opcional
	tags: ['svelte', 'cloudflare'],
	image: '/images/projetos/cluvia.webp',
	imageLight: ''            // opcional, ver abaixo
}
```

Os prints ficam em `static/images/projetos/`, em WebP, redimensionados para
1200px de largura — o card exibe ~330px, então 1200 cobre telas retina de sobra
e cada arquivo fica abaixo de 60KB. Para gerar:

```bash
npx sharp-cli -i original.png -o . resize 1200 --withoutEnlargement \
  && npx sharp-cli -i original.png -o . webp --quality 80
```

`imageLight` é opcional. Quando preenchido, `image` é usada no tema escuro e
`imageLight` no claro — útil quando o produto capturado também tem os dois
temas. As duas tags são renderizadas e alternadas por CSS, mas a escondida é
`display:none` + `loading="lazy"`, então o navegador não busca o arquivo: só a
variante do tema ativo trafega.

Enquanto `image` estiver vazio (ou apontar para um arquivo que não existe), o
card mostra um placeholder listrado no lugar — dá para publicar um projeto antes
de ter a captura dele. `description`, `tags`, `url` e `repo` também são
opcionais: o card só não desenha a parte correspondente.

Quando `url` e `repo` estão preenchidos, o card ganha os dois links no rodapé;
com só um dos dois, o card inteiro vira o link.

## Currículo na home

A faixa de currículo no fim da home vem de `src/lib/resume.js`:

```js
export const resume = {
	headline: 'Desenvolvedor de software',
	summary: 'Um parágrafo curto, em primeira pessoa.',
	links: { linkedin: '...', github: '...', pdf: '' },
	experience: [
		{
			company: 'Empresa',
			role: 'Cargo',
			period: '2023 — agora',
			location: 'Remoto',
			description: 'O que você fez lá.',
			tags: ['React', 'Node']
		}
	],
	education: [{ school: '...', degree: '...', period: '...' }],
	skills: [{ group: 'Frontend', items: ['React', 'Svelte'] }]
}
```

**A seção só aparece quando `experience` tem pelo menos um item.** Com a lista
vazia a home termina nos posts, sem faixa vazia no ar. `summary`, `education`,
`skills`, `location`, `description` e `tags` são todos opcionais.

A faixa ocupa a largura inteira da tela — por isso ela fica fora do
`LayoutContent` no `+page.svelte`, com um container próprio por dentro para o
conteúdo manter a mesma margem esquerda do resto do site.

Para oferecer o PDF, coloque o arquivo em `static/` e aponte em `links.pdf`
(ex.: `/curriculo.pdf`); o botão de download só aparece se esse campo estiver
preenchido.

## Configuração do site

`src/lib/config.js` concentra título, descrição, domínio, autor, posts por
página e os itens do menu (header, footer e menu mobile).

Esses valores são usados nas meta tags e no RSS, então mantenha-os atualizados.

## Estrutura

| Caminho | O que é |
| --- | --- |
| `src/lib/posts/` | Os posts em Markdown |
| `src/lib/config.js` | Configuração do site e do menu |
| `src/lib/projects.js` | Os projetos exibidos na home |
| `src/lib/resume.js` | Os dados do currículo na home |
| `src/lib/assets/js/fetchPosts.ts` | Leitura, ordenação, filtro por categoria e paginação dos posts |
| `src/lib/components/` | Header, footer, nav, listagem de posts, paginação |
| `src/routes/` | Páginas e endpoints |
| `src/app.css` | Tokens de cor (light/dark) e estilos base |
| `tailwind.config.ts` | Mapeia os tokens para classes do Tailwind |
| `static/css/fonts.css` | `@font-face` das fontes locais (Fontsource, vendorizadas) |
| `static/css/prism.css` | Tema do syntax highlighting |
| `static/_headers` | Cache e headers de segurança da Cloudflare |
| `wrangler.jsonc` | Config do deploy como Worker com assets estáticos |
| `static/fonts/` | Bricolage Grotesque, Work Sans e JetBrains Mono (subsets latin) |

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

### Cores

A paleta é a original do site ([coolors.co](https://coolors.co)):

| | | |
| --- | --- | --- |
| `#E63946` vermelho | `#1D3557` marinho | `#457B9D` azul |
| `#A8DAE5` céu | `#E6E8E4` osso | `#152030` tinta |

Ela vira variáveis CSS em `src/app.css`, uma vez por tema:

```css
:root      { --color-canvas: 230 232 228; --color-text: 29 53 87;    ... }
:root.dark { --color-canvas:  21  32  48; --color-text: 230 232 228; ... }
```

O `tailwind.config.ts` expõe cada uma como classe (`bg-canvas`, `text-muted`,
`border-border`, `text-accent`…), então os componentes não têm nenhum `dark:` —
trocar o tema troca as variáveis.

Uma ressalva sobre o vermelho: `#E63946` mede 3.4:1 sobre o fundo claro e 3.9:1
sobre o escuro, ou seja, reprova em WCAG AA como texto pequeno nos dois. Por
isso ele vive em `--color-brand`, usado só como preenchimento (botões, barra da
nav ativa) e anel de foco — onde vale a regra de 3:1 para não-texto. Links e
labels usam `--color-accent`, o mesmo vermelho escurecido (`#C31925`) ou
clareado (`#EC6A73`) conforme o tema.

Todos os pares texto/fundo passam AA nos dois temas — verificado medindo as
cores computadas no DOM, não só a tabela de tokens.

### Fontes

Três variáveis, self-hosted em `static/fonts`, sem requisição para o Google:

| Uso | Fonte |
| --- | --- |
| Títulos (`font-display`) | Bricolage Grotesque |
| Corpo (`font-sans`) | Work Sans |
| Código e labels (`font-mono`) | JetBrains Mono |

Work Sans e JetBrains Mono vêm do tema original. Os `.woff2` são os subsets
latin e latin-ext tirados do Fontsource 5.3.0; o cabeçalho de
`static/css/fonts.css` explica como atualizá-los. O `unicode-range` em cada
regra faz o visitante baixar só o subset de que precisa (~128 KB no total).

### Larguras

Dois tokens: `max-w-wide` (o container da página, usado por header, footer e
conteúdo) e `max-w-content` (a coluna de leitura). Header, listagem e artigo
compartilham a mesma borda esquerda por causa disso.

### Tema claro/escuro

Escolhido pelo `prefers-color-scheme` e fixável pelo botão no header, que grava
em `localStorage`. Um script inline no `app.html` aplica a classe antes da
primeira pintura, para não haver flash.

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

O domínio está declarado no `wrangler.jsonc` como Custom Domain:

```jsonc
"routes": [{ "pattern": "wallynm.dev", "custom_domain": true }]
```

Custom Domain significa que o Worker **é** a origem do hostname: no deploy a
Cloudflare cria o registro DNS e emite o certificado sozinha. Não há registro
para adicionar à mão nem certificado para gerenciar.

Estado da zona hoje (verificado por DNS): os nameservers já são da Cloudflare
(`irena.ns.cloudflare.com`, `jimmy.ns.cloudflare.com`), e tanto `wallynm.dev`
quanto `www` resolvem para IPs anycast da Cloudflare — ou seja, os dois já
existem como registros **proxiados** na zona. Como estão atrás do proxy, o
destino real não é visível de fora; é preciso abrir **DNS → Records** no painel
para ver para onde apontam.

Isso importa porque a Cloudflare **não sobrescreve** um registro existente ao
criar um Custom Domain — ela recusa. Então o registro do apex precisa ser
apagado antes do deploy que anexa o domínio. Depois disso a própria Cloudflare
recria o registro, apontando para o Worker.

O `www` não é anexado como Custom Domain. Servir o site nos dois hostnames
duplicaria o conteúdo; o caminho limpo é apagar o registro de `www` e criar uma
Redirect Rule mandando `www.wallynm.dev/*` para `https://wallynm.dev/$1`.

Com o domínio servindo pela Cloudflare, dá para desativar o GitHub Pages em
**Settings → Pages** do repositório. O workflow que publicava lá já foi removido,
junto com o arquivo `CNAME`.

### Headers e cache

`static/_headers` é copiado para a raiz do build e lido pela Cloudflare. Ele
define `Cache-Control: immutable` para os assets com hash no nome
(`/_app/immutable/*`) e para as fontes, cache curto para imagens e CSS, e o
`Content-Type` correto para os endpoints da API que são gerados sem extensão.

Para validar as regras antes de subir: `npx wrangler pages dev build` imprime
quantas regras foram reconhecidas.

## Licença

[MIT](./LICENSE).
