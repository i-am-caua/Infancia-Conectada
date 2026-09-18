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

### Autoria dos commits e acesso ao deploy

Se aparecer `Git author must have access to the project on Vercel`, confira o acesso do autor à equipe e a conexão da conta GitHub na Vercel. Esse bloqueio é de permissão, não do build do Astro.

Um novo commit do responsável com acesso, incluindo as alterações anteriores, pode iniciar uma nova publicação. Preserve a autoria dos colaboradores: não altere seus commits nem configure o computador deles com a identidade de outra pessoa. Para permitir deploys diretos do colaborador em repositório privado, configure a participação na equipe em um plano compatível; o Hobby não oferece colaboração em repositórios privados.

Referência: [colaboração e autoria na Vercel](https://vercel.com/docs/deployments/troubleshoot-project-collaboration).

## Artigos

`src/pages/artigos/index.astro` gera a biblioteca em `/artigos/` e continua necessário mesmo com artigos publicados. Cada artigo individual é gerado pela rota `src/pages/artigos/[...id].astro`; a mensagem de preparação só aparece quando não há artigos publicados.

O primeiro artigo é **Family Link: primeiros passos para cuidar juntos**, disponível em `/artigos/family-link-primeiros-passos/`. As páginas inicial, Artigos e Temas se atualizam a partir dos conteúdos publicados e apresentam mensagens quando a biblioteca está vazia.

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
