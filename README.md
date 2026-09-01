# Cuidado Digital

Site editorial do **Projeto de Extensão I do IF Goiano**, criado para ajudar famílias e responsáveis a orientar crianças no uso saudável, consciente e seguro das tecnologias.

O repositório contém um **MVP funcional em Astro**, preparado para publicação estática. A primeira etapa do projeto será desenvolvida com uma escola parceira e famílias de crianças até o 5º ano do Ensino Fundamental.

## Executar localmente

Requisitos: Node.js 22 ou mais recente e npm.

```bash
npm install
npm run dev
```

Comandos disponíveis:

- `npm run dev`: inicia o ambiente local;
- `npm run check`: valida Astro, conteúdo e TypeScript;
- `npm run build`: valida e gera o site estático em `dist/`;
- `npm run preview`: abre localmente o resultado do build.

Antes do build de produção, informe a URL pública para gerar endereços canônicos e metadados absolutos de compartilhamento:

```powershell
$env:SITE_URL = "https://exemplo.edu.br"
npm run build
```

O projeto omite URLs canônicas quando `SITE_URL` não está definida, evitando publicar endereços locais por engano.

## Stack e manutenção

- **Astro:** geração estática, rotas e componentes sem JavaScript desnecessário no navegador.
- **Content Collections:** artigos em Markdown com esquema validado.
- **Open Sans local:** fonte empacotada pelo projeto, sem depender de um serviço externo durante a leitura.
- **CSS próprio:** tokens e padrões descritos em [`DESIGN.md`](./DESIGN.md).

Para publicar um novo texto, duplique um arquivo de `src/content/artigos/`, mantenha os campos do cabeçalho e escreva o conteúdo em Markdown. O endereço público será derivado do nome do arquivo; por isso, não renomeie um artigo depois de compartilhar seu link.

## Organização do repositório

```text
src/
  components/       componentes editoriais reutilizáveis
  content/artigos/  publicações em Markdown
  layouts/          estrutura base e página de artigo
  pages/            rotas públicas
  styles/           estilos globais e responsivos
public/brand/        marca oficial usada pelo site
docs/brand/          manual de identidade do IF Goiano
docs/references/     referência metodológica do projeto
```

## Objetivo do site

O site será uma biblioteca pública de conteúdos educativos. Cada publicação deverá aprofundar, em linguagem simples e prática, um assunto apresentado previamente às famílias pelo canal de comunicação do projeto.

O fluxo previsto é:

1. A equipe publica uma orientação breve no grupo de WhatsApp da escola.
2. A mensagem apresenta o tema de forma direta e útil.
3. Quem quiser saber mais acessa, por meio de um link, o artigo completo no site.

O site não substitui o contato com a escola e não será o canal principal de avisos do projeto. Seu papel é organizar conhecimento confiável e permitir que cada família se aprofunde nos assuntos de seu interesse.

## Referência metodológica

A estrutura do projeto deve seguir a Arquitetura Pedagógica apresentada em [`artigo.md`](./docs/references/artigo.md). A referência articula conteúdo, objetivos, participação, avaliação e tecnologia em sete pilares, adaptados ao Cuidado Digital da seguinte forma:

1. **Domínio do conhecimento:** uso saudável, consciente e seguro de tecnologias por crianças.
2. **Objetivos educacionais:** ampliar a compreensão dos responsáveis, apoiar decisões familiares e incentivar práticas de acompanhamento, diálogo e proteção.
3. **Conhecimento prévio:** partir das experiências reais das famílias, sem exigir domínio técnico ou familiaridade com ferramentas digitais.
4. **Dinâmicas interacionistas e problematizadoras:** usar situações cotidianas, perguntas de reflexão e pequenas ações práticas para analisar a rotina familiar.
5. **Mediações pedagógicas distribuídas:** combinar conteúdos da equipe, participação da escola, dúvidas das famílias e fontes confiáveis.
6. **Avaliação processual e cooperativa:** acompanhar compreensão, utilidade percebida e possíveis mudanças ao longo do projeto, usando instrumentos separados do site quando necessário.
7. **Suporte da tecnologia digital:** usar o WhatsApp para comunicação e o site para organizar e aprofundar os conteúdos, com acesso simples por celular.

O site materializa principalmente o sétimo pilar, mas deve servir aos objetivos educacionais definidos pelos demais. Ele é parte da estratégia pedagógica do projeto de extensão, não um produto isolado.

## Público principal

- Mães, pais e demais responsáveis por crianças até o 5º ano.
- Pessoas com diferentes níveis de escolaridade e familiaridade com tecnologia.
- Famílias que acessam o conteúdo principalmente pelo celular e por links recebidos no WhatsApp.


## Princípios editoriais

- **Orientar sem alarmar:** tecnologia não deve ser apresentada como um problema por si só.
- **Ajudar na prática:** cada conteúdo deve oferecer ações possíveis para a rotina familiar.
- **Explicar antes de recomendar:** termos técnicos, riscos e ferramentas precisam ser contextualizados.
- **Respeitar diferentes realidades:** evitar julgamentos sobre tempo disponível, renda, escolaridade ou acesso a dispositivos.
- **Usar fontes confiáveis:** informações sobre saúde, infância, segurança e plataformas devem ser verificadas antes da publicação.
- **Manter o conteúdo atual:** recursos de aplicativos e políticas de idade podem mudar e exigem revisão periódica.

## Direção do site

O site deverá ter linguagem visual **editorial**, semelhante a uma publicação educativa: boa hierarquia tipográfica, leitura confortável, navegação por temas e destaque para artigos recentes ou essenciais.

A identidade deverá usar a paleta institucional do **IF Goiano**, sem inventar variações que prejudiquem a marca. Os valores oficiais das cores deverão ser confirmados em uma fonte institucional antes da implementação.

As regras já extraídas do manual, os tokens acessíveis e os padrões de uso da assinatura estão documentados em [`DESIGN.md`](./DESIGN.md). O arquivo oficial de aplicação é [`novoManual_IFGoiano.pdf`](./docs/brand/novoManual_IFGoiano.pdf), e a assinatura disponível para o site é [`logoif.webp`](./public/brand/logoif.webp).

### Estrutura derivada de `artigo.md`

A experiência web deve adaptar a solução descrita no artigo ao público de famílias:

- cabeçalho com identificação do IF Goiano e do projeto;
- apresentação breve do objetivo e da equipe responsável;
- página inicial funcionando como índice dos conteúdos publicados;
- conteúdos agrupados por tema ou sequência editorial;
- página própria e link permanente para cada conteúdo enviado pelo WhatsApp;
- explicação e orientação prática reunidas na mesma página, reduzindo trocas de aplicativo e perda de contexto;
- autoria, fontes e data de revisão visíveis em cada publicação;
- materiais complementares oferecidos como apoio, sem interromper a leitura principal.

O blog não precisa reproduzir a diagramação acadêmica do artigo. A referência obrigatória é sua organização pedagógica e o papel atribuído à página web como suporte do processo educativo.

### Acessibilidade

O projeto deve buscar conformidade com **WCAG 2.2 nível AA**, incluindo:

- contraste mínimo de 4,5:1 para textos comuns;
- navegação completa por teclado;
- foco visível e ordem de navegação coerente;
- HTML semântico e hierarquia correta de títulos;
- textos alternativos para imagens informativas;
- links com nomes claros fora de contexto;
- conteúdo legível com ampliação e em telas pequenas;
- respeito à preferência por movimento reduzido;
- linguagem direta, frases curtas e explicação de termos técnicos.

## Fonte interna principal

- [`artigo.md` — referência da Arquitetura Pedagógica](./docs/references/artigo.md)
