---
name: Cuidado Digital
description: Sistema editorial acessível do Projeto de Extensão I do IF Goiano
colors:
  brand-green: "#2f9e41"
  brand-red: "#cd191e"
  brand-black: "#000000"
  action-green: "#176b2d"
  action-green-deep: "#125523"
  ink: "#1c241e"
  background: "#ffffff"
  surface-tint: "#f5f7f5"
  line: "#dce8de"
typography:
  display:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Open Sans, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.01em"
rounded:
  none: "0"
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.action-green}"
    textColor: "{colors.background}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.action-green-deep}"
    textColor: "{colors.background}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.action-green}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "48px"
  article:
    backgroundColor: "{colors.background}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0"
---

# Design System: Cuidado Digital

## Overview

**Creative North Star: "Caderno de orientação do IF"**

O site deve parecer uma publicação educativa mantida por uma instituição pública: claro, humano e criterioso. A identidade institucional aparece com precisão na marca, nas cores e na tipografia; o ritmo editorial aparece na hierarquia, nas margens, nas linhas de leitura e no modo como cada artigo conduz da dúvida à ação prática.

A cena de uso é uma pessoa responsável abrindo, no celular e em poucos minutos, um link recebido pelo WhatsApp. A interface deve funcionar bem sob luz comum, com atenção dividida e conexão possivelmente limitada. O padrão é claro, leve e mobile-first; animação nunca pode ser necessária para compreender ou acessar o conteúdo.

O sistema rejeita aparência de painel administrativo, landing page comercial, rede social, revista de luxo ou site infantilizado. Não use serifas decorativas, cartões repetidos, glassmorphism, fundos bege, gradientes ou ilustrações genéricas como atalho para “editorial”.

**Key Characteristics:**

- identidade oficial preservada sem reconstrução da marca;
- uma única família tipográfica com contraste forte de escala e peso;
- leitura longa confortável, limitada a 65-75 caracteres por linha;
- verde institucional como presença de marca e verde escuro como cor funcional acessível;
- vermelho raro, reservado a foco, ênfase e elementos realmente importantes;
- superfícies planas, separação por espaço, tipografia e linhas discretas;
- estrutura responsiva orientada ao acesso direto aos artigos.

As fontes primárias deste documento são o manual [`novoManual_IFGoiano.pdf`](./docs/brand/novoManual_IFGoiano.pdf), especialmente as páginas 5-19, e a assinatura fornecida em [`logoif.webp`](./public/brand/logoif.webp).

## Colors

A paleta combina os três valores oficiais da marca com tons funcionais derivados para atender contraste e leitura em interfaces.

### Primary

- **Verde IF (`brand-green`):** cor institucional principal. Use em áreas amplas, elementos gráficos, sinalização de seção e marca. Sobre branco, seu contraste é 3,45:1; portanto, não serve para texto comum nem para botão com texto branco.
- **Verde de ação (`action-green`):** tom funcional escuro para links, controles e botões. Com branco, alcança 6,61:1 e atende WCAG AA para texto comum.
- **Verde de ação profundo (`action-green-deep`):** estado hover/active e texto de alta ênfase. Não substitui o verde oficial dentro da marca.

### Secondary

- **Vermelho IF (`brand-red`):** cor institucional de energia e destaque. Sobre branco, alcança 5,59:1. Use com parcimônia em foco, avisos e pequenos pontos de ênfase; nunca transforme toda ação principal em alerta vermelho.

### Neutral

- **Preto da marca (`brand-black`):** valor oficial do lettering. Preserve dentro da assinatura e use apenas quando o preto absoluto for necessário.
- **Tinta editorial (`ink`):** texto principal e títulos; reduz o contraste agressivo do preto puro sem perder legibilidade.
- **Fundo (`background`):** base principal branca, coerente com a aplicação oficial da marca.
- **Superfície verde-neutra (`surface-tint`):** alternância suave de seções e caixas informativas.
- **Linha vegetal (`line`):** divisores, bordas discretas e tabelas.

**The Brand/Function Split Rule.** `brand-green`, `brand-red` e `brand-black` são normativos para a marca. `action-green` e os neutros são tokens de interface; nunca alteram o arquivo da logo.

**The Contrast Rule.** Texto comum deve alcançar 4,5:1 e componentes visuais, foco e texto grande devem alcançar ao menos 3:1. É proibido usar branco sobre `brand-green` em texto comum.

**The Restraint Rule.** O verde conduz a identidade. O vermelho pontua; ele não compete com o conteúdo nem vira decoração repetitiva.

## Typography

**Display Font:** Open Sans (com fallback Arial e sans-serif)

**Body Font:** Open Sans (com fallback Arial e sans-serif)

**Character:** a Open Sans é a família definida pelo manual para a marca e materiais complementares. O caráter editorial virá de proporção, largura de coluna, peso e espaço - não de uma segunda fonte ornamental.

### Hierarchy

- **Display:** peso 700, escala fluida e entrelinha 1,05; apenas para o título principal da página inicial.
- **Headline:** peso 700, escala fluida e entrelinha 1,12; títulos de páginas e artigos.
- **Title:** peso 700 e entrelinha 1,25; chamadas editoriais e subtítulos de conteúdo.
- **Body:** peso 400, tamanho base de 17 px e entrelinha 1,7; limite de 65-75 caracteres por linha.
- **Label:** peso 600 e espaçamento discreto; navegação, metadados e botões. Não usar caixa alta como padrão.

Na assinatura, “INSTITUTO FEDERAL” usa Open Sans Bold e “Goiano” usa Open Sans Regular. Nunca redesenhe esse lettering em HTML; use o arquivo oficial completo.

**The One-Family Rule.** Até que exista autorização institucional diferente, Open Sans é a única família do site. Hierarquia vem de escala, peso e composição.

**The Reading Rule.** Artigos começam em 17 px, usam entrelinha generosa e nunca ultrapassam 75 caracteres por linha.

## Elevation

O sistema é plano por padrão. Profundidade vem de fundo, espaçamento e sobreposição funcional; não de uma coleção de sombras decorativas. Popovers e menus suspensos podem usar uma sombra curta e definida (`0 2px 8px rgb(0 0 0 / 0.12)`). Artigos, listas e seções permanecem sem sombra.

**The Flat-by-Default Rule.** Se um bloco pode ser separado por espaço, tipografia ou uma linha de `line`, uma sombra é proibida.

**The No Ghost Card Rule.** Nunca combine borda fina com sombra ampla no mesmo cartão. Evite cartões quando uma lista editorial resolver melhor.

## Components

### Institutional Header

- Use `logoif.webp` como assinatura vertical completa e transparente.
- Preserve a proporção e todo o conteúdo; `object-fit: contain` e dimensões automáticas no eixo oposto.
- O símbolo nunca pode ficar abaixo de 30 px. No canvas atual, isso corresponde aproximadamente a uma altura renderizada mínima de 60 px para o arquivo completo; confirme visualmente após qualquer recorte responsivo.
- Reserve ao redor da marca pelo menos 1 módulo `x`, equivalente ao lado de um quadrado do símbolo. Sempre que possível, dê mais espaço.
- Em fundo colorido, fotográfico ou instável, coloque a versão original sobre uma base branca que inclua a reserva de integridade.

### Navigation

- Barra leve sobre branco, com links em `ink` e estado ativo em `action-green-deep`.
- Links têm alvo mínimo de 44 x 44 px, foco visível e rótulos diretos.
- No celular, priorize “Início”, “Temas” e “Sobre”; não esconda acesso essencial em gestos.
- A marca permanece legível, mas não domina a altura útil da tela.

### Buttons

- **Shape:** cantos discretamente curvos (`rounded.md`).
- **Primary:** fundo `action-green`, texto branco, altura mínima de 48 px e padding horizontal de 20 px.
- **Hover / Active:** `action-green-deep`, sem salto de layout.
- **Focus:** outline sólido de 3 px em `brand-red`, com offset de 3 px sobre superfícies claras; use branco em fundos escuros.
- **Secondary:** fundo branco, texto `action-green` e borda sólida de 2 px no mesmo tom.

### Editorial Index

- Não usar uma grade infinita de cartões idênticos.
- Destacar um conteúdo principal e apresentar os demais em lista editorial com tema, título, resumo curto e data de revisão.
- Divisores usam `line`; miniaturas são opcionais e só entram quando acrescentam informação.
- O item inteiro não substitui um link semanticamente nomeado.

### Article

- Coluna principal de até 70ch, centralizada sem isolar excessivamente o conteúdo.
- Título, resumo, autoria, data de publicação e data de revisão aparecem antes do corpo.
- Subtítulos formam uma hierarquia contínua; não pular níveis.
- Orientações práticas usam listas claras, não caixas decorativas repetidas.
- Fontes e materiais complementares aparecem no fim, com links descritivos.
- Ações de compartilhamento são secundárias e não interrompem a leitura.

### Informational Callout

- Fundo `surface-tint`, texto `ink`, canto `rounded.sm` ou `rounded.md` e padding de 16-24 px.
- Sem faixa lateral colorida, sombra ou ícone ornamental grande.
- Use título curto apenas quando necessário; um callout não substitui a estrutura do artigo.

### Co-branding

- Quando houver outra marca, manter distância mínima de 3 módulos `x` entre as assinaturas.
- Coassinaturas com MEC ou Governo Federal devem seguir também as regras vigentes da SECOM.
- Não montar novas assinaturas manualmente; solicitar o arquivo institucional correto.

## Do's and Don'ts

### Do:

- **Do** usar `logoif.webp` inteiro, proporcional e com espaço livre equivalente a pelo menos 1 módulo `x`.
- **Do** garantir que o símbolo da marca tenha ao menos 30 px.
- **Do** usar a marca original sobre base branca em fundos coloridos, fotográficos ou instáveis.
- **Do** usar Open Sans em toda a interface e explorar pesos, escala e largura de coluna para criar ritmo editorial.
- **Do** usar `action-green` para texto interativo e botões com texto branco.
- **Do** testar contraste, teclado, zoom, leitores de tela, movimento reduzido e larguras móveis antes de concluir uma tela.
- **Do** manter URLs permanentes e metadados adequados para links compartilhados no WhatsApp.

### Don't:

- **Don't** rotacionar, distorcer, recolorir, contornar, emoldurar, estilizar ou reconstruir a marca.
- **Don't** alterar a tipografia, desalinhar os elementos, aplicar a marca como marca d'água ou criar novas assinaturas.
- **Don't** inverter `logoif.webp` com filtros CSS. Use um arquivo oficial negativo quando ele existir; enquanto não houver, mantenha a assinatura original sobre branco.
- **Don't** usar `brand-green` para texto comum sobre branco ou como fundo de botão com texto branco; essa combinação não atinge 4,5:1.
- **Don't** confundir o vermelho institucional com cor padrão de toda chamada para ação.
- **Don't** usar gradiente em texto, glassmorphism, fundos bege, listras diagonais, grid decorativo ou ilustrações improvisadas.
- **Don't** criar uma sequência de cartões iguais com ícone, título e parágrafo.
- **Don't** repetir rótulos minúsculos em caixa alta acima de cada seção ou usar números como decoração de seções.
- **Don't** exceder 12 px de raio em cartões e seções, nem combinar borda de 1 px com sombra de blur superior a 8 px.
