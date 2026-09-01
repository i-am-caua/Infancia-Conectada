# Cuidado Digital — contexto do produto

## Registro

- **Registro:** marca
- **Plataforma:** web responsiva, com prioridade para celulares
- **Produto:** biblioteca editorial do projeto de extensão Cuidado Digital, do IF Goiano
- **Fase:** MVP funcional

## Para quem é

Pais, mães e demais responsáveis por crianças até o 5º ano do ensino fundamental. O público tem níveis variados de familiaridade com tecnologia e chegará principalmente por links compartilhados no canal de comunicação do projeto.

## Problema e propósito

Tecnologia já faz parte da rotina das famílias, mas informações sobre segurança, convivência e hábitos digitais costumam ser dispersas, alarmistas ou técnicas demais. O site deve oferecer aprofundamento confiável, acolhedor e aplicável ao cotidiano.

O formulário de pesquisa do projeto é uma iniciativa separada. Ele não é uma funcionalidade do site nem sua principal chamada para ação.

## Posicionamento

Um caderno digital de orientação do IF Goiano: institucional sem ser burocrático, didático sem infantilizar e cuidadoso sem provocar pânico.

## Conversão e evidências

- **Ação principal:** explorar artigos e temas.
- **Ação secundária:** conhecer o projeto e sua metodologia.
- **Mensagem central:** informação confiável para orientar crianças no mundo digital.
- **Caminho de confiança:** reconhecer uma situação cotidiana → compreender riscos e possibilidades → confiar na autoria e nas fontes → aplicar uma orientação simples.
- **Evidências disponíveis:** identidade institucional do IF Goiano, contexto do projeto de extensão e referências declaradas em cada artigo.
- **Não inventar:** depoimentos, métricas de impacto, parceiros, premiações ou validações ainda não documentadas.

## Personalidade da marca

Calma, cuidadosa, prática, editorial, acessível e institucional. A linguagem deve acolher dúvidas reais de famílias e usar frases diretas, exemplos cotidianos e explicações em português claro.

## Direção visual

- Seguir o Manual de Identidade Visual do IF Goiano e o sistema documentado em `DESIGN.md`.
- Usar Open Sans e as cores oficiais verde `#2f9e41`, vermelho `#cd191e` e preto.
- Para botões e links com texto branco, usar o verde de interface `#176b2d`, que preserva contraste AA.
- Priorizar ritmo editorial, listas e divisórias; evitar uma grade repetitiva de cartões.
- Aplicar a marca oficial sem reconstrução, distorção, recoloração ou redução abaixo dos limites do manual.

## Princípios de experiência

1. Orientar sem alarmar.
2. Cada página deve entregar ao menos uma ação útil.
3. O conteúdo vem antes da interface.
4. A confiança institucional precisa ser visível, não decorativa.
5. A leitura em celular é o cenário principal.
6. Navegação e conteúdo devem funcionar com teclado e tecnologias assistivas.

## Acessibilidade e qualidade

- Meta: WCAG 2.2 nível AA.
- Contraste mínimo de 4,5:1 para texto comum e 3:1 para texto grande e elementos gráficos relevantes.
- Foco sempre visível, navegação por teclado e link para pular ao conteúdo.
- Títulos hierárquicos, HTML semântico, linguagem simples e largura confortável de leitura.
- Respeitar `prefers-reduced-motion`; o MVP não depende de animações.
- Imagens informativas precisam de texto alternativo; ornamentos devem ser ignorados por leitores de tela.

## Arquitetura de informação do MVP

- **Início:** apresentação, conteúdo em destaque, artigos recentes e temas.
- **Artigos:** índice editorial de publicações.
- **Página de artigo:** título, resumo, autoria, datas, conteúdo e fontes.
- **Temas:** agrupamento das publicações por assunto.
- **Sobre:** contexto do projeto de extensão e síntese dos sete pilares descritos em `artigo.md`.
- **Página 404:** recuperação simples com retorno ao início.

## Referências negativas

O produto não deve parecer um portal alarmista, landing page comercial, painel administrativo, rede social, material infantilizado ou coleção de cards genéricos.

## Fonte de verdade

- `docs/references/artigo.md`: base acadêmica e estrutura metodológica.
- `docs/brand/novoManual_IFGoiano.pdf`: regras institucionais de marca.
- `public/brand/logoif.webp`: assinatura visual oficial fornecida ao projeto.
- `DESIGN.md`: decisões de interface e tokens do produto.
