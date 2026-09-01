# AGENTS.md

Este arquivo orienta agentes e colaboradores que trabalham neste repositório. Leia-o antes de planejar, escrever conteúdo ou alterar a interface.

Para qualquer trabalho visual, leia também [`DESIGN.md`](./DESIGN.md), consulte [`novoManual_IFGoiano.pdf`](./docs/brand/novoManual_IFGoiano.pdf) e reutilize [`logoif.webp`](./public/brand/logoif.webp). O manual é a fonte de verdade da marca; `DESIGN.md` traduz suas regras para uma interface editorial acessível.

## Contexto do projeto

`cuidado-digital` é o site editorial de apoio ao **Projeto de Extensão I do IF Goiano**. O projeto orienta famílias e responsáveis sobre o uso saudável, consciente e seguro de tecnologias por crianças.

A primeira etapa será realizada com uma escola parceira e tem como público principal responsáveis por crianças até o 5º ano do Ensino Fundamental.

## Fonte de verdade metodológica

Leia [`artigo.md`](./docs/references/artigo.md) antes de propor arquitetura, conteúdo, avaliação ou experiência web. O projeto deve seguir a Arquitetura Pedagógica apresentada nesse artigo, adaptada ao tema de cuidado digital e ao público de famílias.

Os sete pilares obrigatórios são:

1. **Domínio do conhecimento:** uso saudável, consciente e seguro de tecnologias por crianças.
2. **Objetivos educacionais:** informar responsáveis, apoiar escolhas familiares e promover acompanhamento, diálogo e proteção.
3. **Conhecimento prévio:** considerar experiências cotidianas e níveis variados de letramento e familiaridade digital.
4. **Dinâmicas interacionistas e problematizadoras:** apresentar situações reais, perguntas de reflexão e ações aplicáveis à rotina.
5. **Mediações pedagógicas distribuídas:** articular equipe, escola, famílias, materiais e fontes confiáveis.
6. **Avaliação processual e cooperativa:** observar compreensão e utilidade durante o projeto, sem confundir avaliação com o produto web.
7. **Suporte da tecnologia digital:** integrar o WhatsApp como canal de comunicação e o site como espaço de aprofundamento.

Não trate o site como a totalidade do projeto. Ele materializa principalmente o suporte da tecnologia digital e deve servir aos objetivos educacionais definidos nos outros pilares.

## Papel do site

O site é um blog ou biblioteca de aprofundamento, não o canal principal de comunicação.

Fluxo esperado:

1. A equipe envia pelo WhatsApp uma orientação curta sobre determinado tema.
2. A mensagem inclui um link para o artigo correspondente.
3. A família acessa o site apenas se quiser se aprofundar.

Priorize leitura rápida no celular, URLs fáceis de compartilhar, carregamento leve e artigos compreensíveis sem contexto prévio.


## Público e contexto de uso

- Público principal: mães, pais, avós e demais responsáveis por crianças até o 5º ano.
- Familiaridade digital: variável; nunca pressuponha conhecimento técnico.
- Dispositivo prioritário: celular acessado a partir de um link no WhatsApp.
- Situação de leitura: intervalos curtos, atenção dividida e possível conexão limitada.
- Necessidade central: entender um assunto e sair com uma ação prática, sem culpa ou medo.

## Objetivo de cada conteúdo

Todo artigo deve ajudar o leitor a:

1. reconhecer uma situação comum da vida familiar;
2. entender por que o tema importa;
3. avaliar o que já acontece em casa;
4. aplicar orientações realistas;
5. saber onde encontrar fontes ou recursos adicionais.

Além dessa sequência editorial, cada conteúdo deve declarar durante seu planejamento:

- qual domínio ou tema aborda;
- qual objetivo educacional pretende alcançar;
- qual conhecimento prévio pressupõe;
- qual situação ou pergunta mobiliza a reflexão;
- qual orientação prática ou mediação oferece;
- como sua compreensão ou utilidade poderá ser observada;
- como o site e eventuais recursos externos apoiam a experiência.

## Pilares de conteúdo

- Segurança digital e proteção de dados.
- Controle parental e supervisão familiar.
- Tempo de tela, sono, refeições e equilíbrio da rotina.
- Jogos, vídeos, redes sociais e plataformas digitais.
- Inteligência artificial no contexto de aprendizagem.
- Exposição de crianças por familiares nas redes sociais.
- Conteúdo inadequado, recomendações algorítmicas e idades mínimas.
- Diálogo, confiança, acompanhamento e limites.

Esses pilares são uma base editorial, não um calendário fechado.

## Voz e redação

- Escreva em português do Brasil.
- Use tom sério, tranquilo, acolhedor e educativo.
- Oriente sem alarmismo e sem demonizar a tecnologia.
- Evite moralismo, culpabilização dos responsáveis e soluções universais.
- Prefira frases curtas, exemplos cotidianos e verbos de ação.
- Explique qualquer termo técnico na primeira ocorrência.
- Diferencie fatos, recomendações, hipóteses e opiniões.
- Não faça afirmações médicas, jurídicas ou psicológicas sem fontes adequadas.
- Termine artigos práticos com próximos passos claros, quando fizer sentido.

## Pesquisa e confiabilidade

- Verifique funcionalidades de aplicativos e controles parentais em documentação oficial e atual.
- Para saúde e desenvolvimento infantil, priorize órgãos públicos, instituições acadêmicas e entidades profissionais reconhecidas.
- Registre fonte, data de acesso e data da última revisão do artigo.
- Não copie textos de terceiros; sintetize e cite.
- Sinalize quando uma informação variar por idade, dispositivo, sistema operacional, plano ou região.
- Nunca publique dados pessoais ou respostas identificáveis coletadas no formulário.

## Direção visual

- Registro principal: editorial e institucional.
- Identidade: paleta oficial do IF Goiano, validada em material institucional antes do uso.
- A experiência deve transmitir confiança, calma, clareza e proximidade.
- Use tipografia com forte hierarquia e ótima legibilidade.
- Mantenha linhas de texto confortáveis, idealmente entre 65 e 75 caracteres.
- Evite aparência de painel administrativo, landing page comercial ou rede social.
- Evite excesso de cartões, ornamentos, animações e elementos competindo com a leitura.
- Não invente cores oficiais, versões do logotipo ou regras de marca.
- Não reconstrua a assinatura em HTML ou texto. Use `logoif.webp` completo e proporcional.
- Preserve ao menos 1 módulo `x` de área livre ao redor da marca e nunca deixe o símbolo abaixo de 30 px.
- Use o verde institucional `#2f9e41` como cor de marca, não como texto comum sobre branco nem como fundo para texto branco.
- Use o verde funcional `#176b2d` em links e controles que precisam atender contraste WCAG AA.
- A tipografia do projeto é Open Sans; o lettering da assinatura não deve ser recriado.

## Acessibilidade obrigatória

Trate **WCAG 2.2 AA** como referência mínima:

- contraste de pelo menos 4,5:1 para texto comum e 3:1 para texto grande;
- navegação e operação por teclado;
- foco visível em todos os controles;
- estrutura semântica, landmarks e títulos em ordem lógica;
- rótulos programáticos em formulários e controles;
- textos alternativos úteis, sem repetir legendas;
- links descritivos, evitando “clique aqui”;
- zoom de 200% sem perda de conteúdo ou função;
- layout responsivo sem rolagem horizontal em larguras comuns;
- respeito a `prefers-reduced-motion`;
- nenhuma informação transmitida apenas por cor;
- alvos de toque confortáveis e espaçamento adequado;
- linguagem simples e parágrafos escaneáveis.

Teste acessibilidade e comportamento responsivo antes de considerar uma interface concluída.

## Princípios técnicos

- A stack aprovada é Astro com saída estática, Content Collections e TypeScript estrito.
- Não introduza framework de componentes, CMS ou dependência sem necessidade demonstrável.
- Prefira conteúdo renderizado no servidor ou gerado estaticamente para desempenho, SEO e compartilhamento.
- Preserve URLs de artigos; links enviados pelo WhatsApp devem continuar funcionando.
- Inclua metadados de título, descrição e compartilhamento social em todas as páginas públicas.
- Mantenha o JavaScript do cliente pequeno e progressivamente aprimorado.
- Otimize imagens, fontes e recursos para conexões móveis.
- Não adicione analytics, cookies, trackers ou coleta de dados sem decisão explícita e análise de privacidade.
- Nunca inclua segredos, tokens ou dados do formulário no repositório.



### Estrutura web orientada por `artigo.md`

Quando o site for implementado, preserve os elementos centrais da solução descrita no artigo:

- identificação da instituição, da equipe e do projeto no início da experiência;
- título e descrição curta que esclareçam a finalidade do projeto;
- página inicial como índice dos conteúdos;
- links diretos e permanentes para cada publicação;
- conteúdos agrupados por tema ou sequência planejada;
- teoria, exemplos e orientação prática reunidos na mesma página sempre que possível;
- materiais externos tratados como complemento, evitando obrigar o leitor a alternar entre várias telas;
- fontes e dados editoriais junto ao conteúdo.

Adapte a linguagem ao blog para famílias. Não copie a diagramação acadêmica, a temática de programação ou o público estudantil do artigo de referência.

## Antes de implementar

Confirme ou descubra:

- estratégia e endereço final de publicação, caso a tarefa envolva deploy;
- se novos temas ou campos editoriais alteram a taxonomia atual;
- autoria e processo de revisão;


## Fontes internas

- [`DESIGN.md` — sistema visual do site](./DESIGN.md)
- [`novoManual_IFGoiano.pdf` — manual oficial de aplicação da marca](./docs/brand/novoManual_IFGoiano.pdf)
- [`logoif.webp` — assinatura vertical fornecida](./public/brand/logoif.webp)
- [`artigo.md` — Arquitetura Pedagógica de referência](./docs/references/artigo.md)
- [Projeto de Extensão I](https://app.notion.com/p/3b9afe4a2e9080a9a0d7ccef064e2d39)
- [Reunião 01 — alinhamento inicial](https://app.notion.com/p/3b9afe4a2e90810484c7ef94455a2cb5)
- [Reunião 02 — vídeo e formulário](https://app.notion.com/p/3c7afe4a2e9081f7aa05f802ff435c6f)
- [Formulário inicial — proposta de perguntas](https://app.notion.com/p/3bfafe4a2e908152a5ced6848a131206)
- [Vídeo de apresentação — proposta de roteiro](https://app.notion.com/p/3c0afe4a2e9081028815c782af35fc75)

Se houver divergência entre este arquivo e uma decisão mais recente registrada no Notion, não assuma qual está correta: apresente a divergência antes de implementar.
