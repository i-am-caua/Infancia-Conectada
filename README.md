# Cuidado Digital

Site editorial do **Projeto de Extensão I do IF Goiano**, criado para ajudar famílias e responsáveis a orientar crianças no uso saudável, consciente e seguro das tecnologias.

Site público: https://infancia-conectada.vercel.app/

## Desenvolvimento

Use Node.js 22 ou mais recente e npm.

```bash
npm ci
npm run dev
```

- `npm run check`: valida Astro, conteúdo e TypeScript.
- `npm run build`: valida e gera o site estático em `dist/`.
- `npm run preview`: serve o resultado do build localmente.

## Publicação na Vercel

- Framework Preset: `Astro`.
- Build Command: `npm run build`.
- Output Directory: `dist`.
- Endereço padrão: `https://infancia-conectada.vercel.app`.

O endereço padrão já gera links canônicos e metadados absolutos de compartilhamento. Para mudar o domínio, configure `SITE_URL` em Settings → Environment Variables, no ambiente Production, com a URL completa incluindo `https://`, e faça um novo deploy. O site é estático e não precisa de adaptador da Vercel.

## Artigos

A biblioteca começa vazia, pronta para o primeiro conteúdo. As páginas inicial, Artigos e Temas apresentam mensagens enquanto não houver publicações.

Crie os artigos em `src/content/artigos/`, usando Markdown e os campos definidos em `src/content.config.ts`: título, descrição, tema, autoria, datas, tempo de leitura e fontes. Registre também o planejamento pedagógico durante a preparação do conteúdo. Imagens de capa e vídeos são opcionais. Artigos com `draft: true` não são publicados.

O nome do arquivo define a URL: preserve-o depois de compartilhar o link. Os temas são agrupados automaticamente a partir dos artigos publicados.

## Estrutura

- `src/components/`: componentes editoriais reutilizáveis.
- `src/content/artigos/`: publicações em Markdown.
- `src/layouts/`: estrutura das páginas e artigos.
- `src/pages/`: rotas públicas.
- `src/styles/`: estilos responsivos e acessíveis.
- `public/brand/`: assinatura institucional usada pelo site.

A stack usa Astro estático, Content Collections, TypeScript estrito e Open Sans local.

## Documentação interna

`docs/`, `AGENTS.md`, `DESIGN.md`, `PRODUCT.md` e `.impeccable/` são mantidos localmente e ignorados pelo Git, assim como arquivos temporários e configurações locais. Esses arquivos não são necessários para o build. O manual de marca permanece disponível no computador da equipe; a assinatura institucional usada pelo site continua versionada em `public/brand/`.
