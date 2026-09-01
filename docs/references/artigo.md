

Uma Arquitetura Pedagógica para o Ensino de Lógica
de Programação: Lições Aprendidas a partir de um
Projeto de Extensão
## Filipe J. Portilho
## 1
## , João V. F. Amaral
## 1
## , Nicole A. Rodrigues
## 1
## ,
## Cleon X. Pereira Junior
## 1
## , Newarney T. Costa
## 1
## 1
Instituto Federal Goiano (IF Goiano) – Campus Iporá
Avenida Oeste, 350 – 76.280-000 – Iporá – GO – Brasil
{filipe.portilho, joao.amaral, nicole.rodrigues1}@estudante.ifgoiano.edu.br,
{newarney.costa, cleon.junior}@ifgoiano.edu.br
Abstract.This work presented a pedagogical architecture (PA) for tea-
ching programming logic using the Python programming language. AP was
structured around seven pillars, including knowledge mastery, educational
objective and digital technology support. Using a web page linked to Google
Colab, digital technology was incorporated to facilitate the structuring of
content. This approach was innovative in an extension project aimed at
high school students at a public school in Iporá, Goiás. Thus, it is conclu-
ded that teaching programming logic supported by AP, in this scenario, can
contribute to student learning.
Resumo.Este trabalho apresenta uma arquitetura pedagógica (AP) para
o ensino de lógica de programação utilizando a linguagem de programação
Python. A AP foi estruturada em torno dos sete pilares, dentre eles domí-
nio do conhecimento, objetivo educacional e suporte da tecnologia digital.
Utilizando uma página web vinculada ao Google Colab, a tecnologia digi-
tal foi incluída para facilitar a estruturação do conteúdo. Esta abordagem
foi implementada em um projeto de extensão direcionado a estudantes do
ensino médio em uma escola pública. Assim, conclui-se que o ensino de
lógica de programação apoiado pela AP, nesse cenário, pode contribuir para
a aprendizagem dos estudantes.
## 1. Introdução
A curricularização da Extensão é uma realidade em muitas Instituições de Ensino
Superior (IES) no Brasil.  A partir Resolução n.º7 MEC/CNE/CES, de 18 de
dezembro de 2018 [Brasil/MEC 2018], houve uma aceleração em sua implantação e
consolidação nos projetos pedagógicos de curso [Silva et al. 2023]. Paralelo a esse
cenário, no Brasil, desde 2022, há diretrizes para incluir a computação na educação
básica, em consonância com a Base Nacional Comum Curricular (BNCC), conforme
a Resolução MEC/CNE Nº1, de 4 de outubro de 2022 [Brasil/MEC 2022]. Além
disso, a Sociedade Brasileira de Computação (SBC) estabeleceu as Diretrizes para
o ensino de computação na educação básica [SBC 2019].
Motivado pela necessidade de ações de extensão e o interesse pela inserção de
computação na educação básica, o curso de Bacharelado em Ciência da Computação

(BCC) do IF Goiano - Campus Iporá realiza diferentes atividades com a comuni-
dade local. Uma dessas ações possui enfoque no ensino de lógica de programação
para estudantes do ensino médio. O planejamento de tal ação instigou os membros
envolvidos (acadêmicos e docentes) a investigarem práticas exitosas cuja finalidade
se assemelhassem à proposta dessa ação.
Observa-se na literatura que a Arquitetura Pedagógica (AP) é uma ferra-
menta que apoia o processo de ensino-aprendizagem, ao utilizar elementos como:
abordagens pedagógicas distintas, software, internet, inteligência artificial, educa-
ção a distância, e concepção de tempo e de espaço. O intuito da AP é promover o
ensino de conteúdo de maneira articulada, ou seja, apresentando relações com con-
teúdos e metodologias diversas [Carvalho et al. 2005]. A partir do cenário posto,
observou-se oportuna a utilização de uma AP para o ensino de conteúdos iniciais
relacionados à lógica de programação.  Sendo assim, este trabalho objetiva apre-
sentar a execução de um projeto de extensão, cujo foco foi o ensino de lógica de
programação para estudantes do ensino médio, observando o impacto da utilização
de uma AP como suporte ao ensino.
- Revisão da Literatura
O ensino de lógica de programação na educação básica é um desafio emergente.
[Schuhmacher et al. 2016] apresenta que, “para a escola se estabelece o desafio e a
incumbência de formar e preparar o novo cidadão para enfrentar os desafios que estão
por vir e que a sociedade lhe exige, sem saber com certeza quais são, e muito menos
como ensiná-la”. A partir disso, instituições de ensino, educadores e pesquisadores
observam a importância da introdução a programação na educação básica.
Em [Sousa et al. 2015], foi destacada a importância do ensino de computação
para o desenvolvimento precoce de habilidades como ordenação do pensamento, re-
solução de problemas e raciocínio lógico e matemático. Além disso, segundo a SBC,
o ensino de computação, com foco em conceitos de lógica de programação, con-
tribui para a formação de cidadãos qualificados, utilizando estratégias envolventes
como computação desplugada, jogos educacionais e atividades de raciocínio lógico
## [SBC 2017].
O ensino na área de Computação também se beneficia de diversas arquite-
turas pedagógicas. Em [Marques and Tavares 2015], por exemplo, foi desenvolvida
uma AP para aprimorar a resolução de problemas de programação com estudantes
do curso de Engenharia da Computação em uma instituição federal de ensino. Para
abordar essa questão, foi criado um ambiente que facilita o envio de atividades,
feedback dos professores, consulta às soluções dos colegas e interação com outras
alternativas, permitindo uma compreensão das diversas abordagens para resolver
problemas relacionados à lógica de programação.
De maneira geral, não há uma limitação para o uso da AP, podendo ser em-
pregada nos mais variados níveis e modalidades de ensino, já que demonstra uma
versatilidade notável. Em APs com enfoque em programação, os autores buscam
metodologias para ensinar conteúdos que vão contribuir no ensino-aprendizagem de
conhecimento teórico e para o mercado de trabalho [Marques and Tavares 2015].
Dessa forma, observa-se que para facilitar o processo de aprendizagem, muitas APs

fazem o uso de tecnologias educacionais outras metodologias, sendo importante des-
tacar que a realização da implementação de metodologias diversas apresenta certas
dificuldades, como a falta de investimentos em escolas públicas.
- Materiais e métodos
A utilização da AP proposta ocorreu no âmbito de um projeto de extensão ofertado
pelo curso de Bacharelado em Ciência da Computação do IF Goiano – Campus Iporá
a uma escola pública estadual de nível médio. O público-alvo desse projeto foram
estudantes do ensino médio numa turma mista, contemplando os três anos finais
da educação básica. As aulas de introdução à lógica de programação ocorreram na
própria escola, como parte do conteúdo em uma disciplina eletiva para prática de
robótica, a partir da disponibilidade da escola. Ao todo, foram ministradas 8 aulas
em 4 encontros, no período de agosto a novembro de 2023, pelos estudantes do BCC,
sob supervisão de um docente orientador. As aulas ocorreram inicialmente sem a
utilização da Página Web e posteriormente com emprego desta nos dois últimos
encontros.
3.1. Arquitetura Pedagógica para o ensino de lógica de programação
Para a execução da AP utilizada como suporte no projeto de extensão, foi empre-
gada a estrutura metodológica descrita por [Menezes et al. 2020]. Na Figura 1, são
descritos os elementos propostos nessa AP. A seguir são detalhados cada um dos
eixos da AP proposta:
Figura 1. Elementos da Arquitetura Pedagógica proposta.
Fonte: [Portilho 2023, pp. 15]
1.Domínio de Conhecimento: introdução à programação usandoPython;
2.Objetivos Educacionais: ensinar lógica de programação, ensinarPython,
desenvolver o raciocínio lógico e o pensamento computacional, utilizar a com-
putação para à resolução de problemas;

3.Conhecimento Prévio: é necessário ter conhecimentos básicos matemáti-
cos (adição, subtração, multiplicação e divisão);
4.Dinâmicas Interacionista-Problematizadoras: realizar um formulário
de autoavaliação sobre o relacionamento com as tecnologias, inovar na reali-
zação de atividades para averiguar o entendimento dos conteúdos nas aulas;
5.Mediações pedagógicas distribuídas: estudantes corrigindo as atividades
de outros estudantes, concebendo possibilidades para reflexões e reconstru-
ções de conhecimento, atividades em grupos;
6.Avaliação processual e cooperativa das aprendizagens: a avaliação
deve ser estruturada para ser feita por estudantes e docentes, ocorrer durante
o processo prático, refazer as atividades após o retorno da avaliação dos outros
estudantes, retorno do docente mostrando ações que podem ser melhoradas;
7.Suporte da tecnologia digital: produção de um site com os conteúdos pro-
postos, liberação de conteúdos conforme o andamento das aulas, hospedagem
no GitHub
## 123
, utilização de ferramentas para facilitar a comunicação com os
estudantes, uso doGoogle Colabnas atividades práticas e jogos digitais.
Foi criada uma página Web, comosuporte da tecnologia digital, para
apoiar a execução da AP. A Figura 2 mostra uma prévia da página inicial, dispo-
nível em um repositório no GitHub. O cabeçalho da página contém informações
sobre a instituição responsável pelo projeto, bem como os estudantes e professores
envolvidos. Abaixo do cabeçalho, há uma seção para exibir o título do projeto e
uma breve descrição do mesmo.
## Figura 2. Página Web.
Fonte: [Portilho 2023, pp. 19]
Em uma visão geral, a página inicial contempla links para o conteúdo de cada
aula. Cada um desses links redireciona o usuário para uma página noGoogle Colab
## 4
## ,
onde é disponibilizado o conteúdo e também caixas de execução de código. Assim,
o estudante tem a oportunidade de ter contato com o conteúdo, testar na prática os
exemplos e fazer exercícios, sem a necessidade de utilizar outra ferramenta, ou de
mudar de tela.
Outro aspecto abordado pela página Web foi a disponibilização dos planos
de aula, oferecendo suporte ao docente para a execução das aulas. Os planos foram
## 1
https://github.com/
## 2
https://github.com/filipe230/AP_TCC
## 3
https://filipe230.github.io/AP_TCC/index.html
## 4
https://colab.research.google.com

produzidos a partir do modelo proposto por [Monteiro 2022]
## 5
. Neste plano de aula
consta as informações do curso, os objetivos da aula, os conteúdos que serão mi-
nistrados em cada aula, as atividades executadas durante a aula (deixando claro o
tempo para ministrar cada conteúdo), os materiais que serão utilizados (slides, jogos,
ferramentas da computação plugada e desplugada, etc) e os métodos de avaliação
que serão utilizados na aula.
3.2. Planejamento das Aulas/Conteúdo
O conteúdo contemplado pela AP foi definido a partir de experiências anteriores
em projetos de extensão correlatos, além da literatura citada na Subseção 2. Sendo
assim, foi realizado um planejamento dos conteúdos que foram ministrados, utili-
zando as definições propostas no Domínio do Conhecimento da AP, sendo o ensino
de lógica de programação. O encadeamento do conteúdo foi delineado conforme pro-
posto por [Menezes 2010], sendo os seguintes conteúdos: 1-Origem e Surgimento dos
Computadores; 2-Computador e suas partes; 3-Conceito de Linguagem de Progra-
mação; 4-História, Empresas, IDE, Instalação; 5-Lógica de Programação, Entrada,
Saída, Algoritmo; 6-Fluxograma; 7-Variáveis e Tipagem de Dados; 8-Concatenação
de Dados; 9-Comandos de Atribuição; 10-Operadores Aritméticos; 11-Operadores
de Comparação; 12-Operadores Lógicos; 13-Estrutura Condicional; 14-Estrutura de
## Repetição.
Previamente, foi definido o tempo e a quantidade de aulas realizadas, levando
à divisão dos conteúdos em cada aula. Com isso, utilizando o plano de aula proposto
em [Monteiro 2022], foi realizado o planejamento da aula, que contém informações
do curso, os objetivos da aula, os conteúdos ministrados em cada aula, as atividades
executadas, deixando claro o tempo para ministrar cada conteúdo, os materiais que
serão utilizados, como slides, jogos, ferramentas da computação plugada e desplu-
gada, e os métodos de avaliação que serão utilizados na aula.
Para execução do projeto foram propostas 20 aulas de cinquenta minutos,
organizadas em 10 encontros, (2 aulas por encontro) com a proposição dos seguin-
tes conteúdos: Encontro 1 – Origem e surgimento dos computadores, computador
e suas partes, conceito de linguagem de programação,Python(história, empresas),
instalação, lógica de programação (entrada, saída, algoritmo e atividades práticas);
Encontro 2 – Fluxograma, variáveis e tipagem de dados e atividades práticas; En-
contro 3 – concatenação de dados, comandos de atribuição, operadores aritméticos
e atividades práticas; Encontro 4 – Operadores de comparação, operadores lógicos
e estrutura condicional (if); Encontro 5 – Estrutura condicional (else,elif); Encon-
tro 6 – Estrutura de repetição (for); Encontro 7 - Estrutura de repetição (while);
Encontros 8, 9, 10 – Projeto final (jogo ou atividade).
## 4. Resultados
Na Figura 3, é apresentada uma visão geral das etapas na execução da AP, co-
meçando pela definição do conteúdo a ser ministrado. Após isso, é apresentado o
encadeamento das próximas quatro etapas que podem formar subciclos, a depender
do conteúdo e da dinâmica utilizada pelo docente.
## 5
https://github.com/viniciusaguiarmonteiro/TCC_UnB_Vinicius_Aguiar_Monteiro

Figura 3. Visão geral da utilização da AP.
Na etapa 1, os docentes envolvidos realizam a listagem do conteúdo a ser mi-
nistrado e, na etapa 2, é feito o cronograma de aplicação do conteúdo, os objetivos
das aulas, os materiais de apoio e as atividades avaliativas, conforme descrito na
Seção 3.2. Na etapa 3, são trabalhadas atividades com os estudantes no intuito de
promover a fixação dos conceitos e estímulo ao desenvolvimento do conhecimento.
Na etapa 4, a expectativa é de prover maior dinâmica e interação entre os estudan-
tes a partir do conteúdo apresentado. Sendo assim, esses são estimulados a resol-
verem problemas em duplas ou grupos, visando a cooperação e o desenvolvimento
da metacognição. Note que a partir das etapas 2, 3 ou 4, a execução da AP num
encontro/aula pode ser finalizada, a depender do planejamento prévio, tornando-a
flexível em relação às restrições de tempo.
No planejamento de aulas, foi estabelecida a realização de 7 encontros (2 au-
las por encontro), abordando os conteúdos como mostrado na Seção 3.2. As datas
das aulas foram previamente acordadas com a gestão do colégio estadual, e cada
aula foi planejada para ter 50 minutos de duração (agrupadas em encontros de 2
aulas cada). Entretanto, apenas 4 encontros, totalizando 8 aulas, foram realizados,
pelo fato do colégio apresentar outras atividades concomitantes às aulas, cujo plane-
jamento extrapolava a autonomia do colégio. Com isso, não foi possível apresentar
os resultados de todas as aulas, já que não foi possível executar todo o cronograma
proposto, bem como todas aulas inicialmente planejadas. Nas aulas 1 e 2, foram
utilizados slides para a apresentação do conteúdo sem o suporte da AP. Já nas au-
las 3 e 4, a AP foi utilizada com apoio dos elementos disponíveis na Página Web
desenvolvida, incluindo o roteiro de aula formatado noGoogle Colab.
No encontro 1, foi apresentado o tema do projeto de extensão, que se integrou
a uma disciplina eletiva do colégio. Em seguida, houve a abordagem dos seguintes
tópicos: origem e surgimento dos computadores; estrutura do computador; lingua-
gem de programação;Python(história, empresas); IDE (Integrated Development
Environment- Ambiente de Desenvolvimento Integrado); instalação doPython; ló-
gica de programação (entrada, saída, algoritmo); e atividades práticas. Utilizou-se a
IDE on-lineProgramizpara a codificação, permitindo que os estudantes aplicassem
conceitos básicos por meio de exercícios. Ao final da aula, aplicou-se um questio-
nário com 10 questões de múltipla escolha para avaliar a compreensão do conteúdo
apresentado.  O resultado foi satisfatório, com mais de 70% de acertos.  Muitos
estudantes, tendo o primeiro contato com o conteúdo e a IDEProgramiz
## 6
, enfren-
taram dificuldades na execução das atividades práticas, além do uso do teclado do
computador.
## 6
https://www.programiz.com/

No encontro 2, foram revisados conceitos básicos do encontro 1 e apresenta-
mos novos tópicos: fluxograma, variáveis, tipagem de dados e atividades práticas.
Ao final da aula, foi proposta a resolução de exercícios, utilizando a IDE on-line
Programiz.  Os estudantes testaram implementações e manipulação de variáveis.
Também foi aplicado um questionário viaKahootcom exercícios relacionados ao
conteúdo da aula para avaliar a absorção de conhecimento. O resultado foi positivo,
com a maioria dos estudantes compreendendo a lógica dos exercícios e conseguindo
codificá-los.  Os monitores presentes na aula ofereceram suporte, incentivando os
estudantes na conclusão das atividades.  Nesse estágio, muitos estudantes ainda
enfrentavam desafios na utilização da IDEProgramiz.
No encontro 3, houve a revisão de conceitos sobre fluxograma, e variáveis,
incluindo seus tipos e exemplos. Em seguida, foram apresentados novos conteúdos,
como concatenação de dados, comandos de atribuição e operadores aritméticos. Fo-
ram discutidas formas de concatenação de dados e apresentado os principais opera-
dores aritméticos, explicando os seus significados. OGoogle Colabfoi utilizado como
ferramenta de apoio para acompanhar a explicação do conteúdo e para codificação
das atividades práticas da aula. Os estudantes puderam testar seus conhecimentos,
por meio da realização de exercícios básicos relacionados ao conteúdo ministrado
aos estudantes.
Nos encontros 1 e 2, os estudantes utilizaram a IDEProgramiz, enquanto a
partir do encontro 3, adotou-se a ferramentaGoogle Colabpara suporte e codifica-
ção. Anteriormente, com oProgramiz, os estudantes precisavam copiar os códigos
dos slides, o que resultava em uma interação limitada com as tecnologias utilizadas.
Com a transição para oGoogle Colab, houve um aumento no entusiasmo dos estu-
dantes, pois não era mais necessário copiar códigos e a página já continha todo o
conteúdo dos slides, facilitando a compreensão e interação durante as aulas. Para
a introdução dessa nova ferramenta, foi realizada uma breve explicação de como se
daria a dinâmica da aula e como os estudantes poderiam acessar oGoogle Colaba
partir da página Web criada para estruturar os conteúdos e atividades das aulas.
Com essa mudança, foi possível observar um maior desenvolvimento dos estudantes,
tornando o processo de ensino mais eficiente e, por vezes, mais eficaz.
No encontro 4, foram revisados os operadores aritméticos por meio da apre-
sentação de exemplos. Em seguida, foram abordados os operadores relacionais e a
estrutura condicional simples. Foram explorados os tipos de operadores relacionais
e sua aplicação prática na estrutura condicional utilizando a cláusula condicionalif
da linguagemPython. OGoogle Colabfoi utilizado como suporte para explicação
e codificação das atividades práticas, permitindo que os estudantes testassem seus
conhecimentos através da resolução de exercícios relacionados ao conteúdo. Nessa
aula, houve desafios em compreender a correta indentação na estrutura condicional
e em digitar caracteres especiais, como as aspas, por exemplo. Tais desafios foram
superados por meio da proposição de atividades práticas aos estudantes, baseados
nos exemplos fornecidos anteriormente.
Para avaliar o nível de satisfação dos estudantes em relação ao uso da AP,
foi aplicado um questionário ao final da última aula. O intuito foi o de verificar
se com o uso da AP, houve maior conforto aos estudantes contribuição, de alguma

forma, para o processo de aprendizagem. O questionário utilizado foi o adaptado de
[Santana 2023].
Na Tabela 1, são apresentados os itens utilizados na aplicação do questioná-
rio. Para o preenchimento das respostas dos itens de 1 a 9, foi utilizada a escala
Likert com 5 níveis:Discordo Totalmente;Discordo Parcialmente;Indiferente;Con-
cordo Parcialmente; eConcordo Totalmente[Likert 1932]. A questão 10 teve caráter
livre e os discentes poderiam realizar comentários a respeito dos materiais utilizados
na aula realizada.
Tabela 1. Lista das questões aplicadas no questionário.
## Questões
Q1A qualidade da escrita dos materiais ajudou a manter minha atenção nas atividades.
Q2O modo como a informação foi organizada nas atividades ajudou a manter minha atenção
nas atividades.
Q3A variedade de materiais disponibilizados ajudou a manter minha atenção nas atividades.
Q4Os materiais didáticos usados (slide,Google Colab) foram úteis para o meu aprendizado.
Q5A aula promoveu a discussão e a interação entre os estudantes.
Q6A atribuição de tarefas ou atividades práticas ajudaram a reforçar o aprendizado.
Q7Me sinto confiante em aplicar o que aprendi.
Q8Enquanto eu trabalhava nas atividades durante as aulas, estava confiante de que poderia
aprender o conteúdo.
Q9A boa organização do conteúdo me ajudou a ter certeza de que aprenderia o material
disponibilizado.
Q10Deixe aqui seu comentário sobre o material apresentado e utilizado em aula.
O questionário supracitado, cujas respostas foram anônimas, foi utilizado no
sentido de prover um retorno acerca do desenvolvimento das aulas com os estudantes
e adequar o que fosse necessário no que diz respeito às impressões dos estudantes
acerca da utilização da AP. De maneira geral, a partir das respostas coletadas,
notou-se que as tecnologias utilizadas auxiliaram no desenvolvimento do conheci-
mento dos estudantes relacionados ao objetivo das aulas. Ressalta-se ainda que a
disponibilização da página Web promoveu interação dos estudantes com os materiais
propostos. A turma era composta por 17 estudantes e o questionário foi respondido
por 5 estudantes (29,4% do total). As respostas foram anônimas e voluntárias. Os
resultados são apresentados na Figura 4. Apesar da amostragem pequena, essa foi
somente uma das análises realizadas neste trabalho. Aspectos como observação dos
pesquisadores também foram considerados.
Para a análise quantitativa, as questões foram divididas em 2 grupos, consi-
derando seu aspecto central de avaliação, sendo ele:i) análise dos materiais utili-
zados;ii) aprendizagem percebida pelos estudantes. Relativo aos materiais (grupo
de questõesi), a análise envolveu as questões Q1, Q2, Q3, Q4, e Q9. Relativo à
aprendizagem (grupo de questõesii), foram analisadas as questões Q5, Q6, Q7 e
Q8. Ao observar as questões do grupoii, cerca de 80% das respostas consideram
que os materiais foram úteis durante os encontros para auxiliar na compreensão dos
conteúdos e realização de atividades; e quanto nas respostas do grupoii, aproxima-
damente 60% das respostas indicam que os materiais utilizados contribuíram para

a aprendizagem.
Figura 4. Resultados da aplicação do questionário.
Na Figura 4, para o item Q1, foram obtidos 40% de respostasConcordo To-
talmente, 40%Concordo Parcialmente, e 20%Indiferente. Em Q2, Q3, Q4 e Q5,
40% das respostas foramConcordo Totalmentee 60%Concordo Parcialmente. Em
Q6 e Q8, 60% das respostas foramConcordo Totalmentee 40%Concordo Parci-
almente. Em Q7, 40% das respostas foramConcordo Totalmente, 20%Concordo
Parcialmentee 40%Indiferente.  Em Q9, 60% foramConcordo Totalmente, 20%
Concordo Parcialmentee 20% naIndiferente.
A Questão Q10 possibilitou respostas de caráter aberto e os discentes pu-
deram expressar sua opinião por meio de texto. Nesta questão, houve comentários
como “top demais”, “foi divertido aprender”, e “Eu gostei bastante”.  Apesar do
baixo número de respostas, os comentários relativos à Q10, considerando a parti-
cipação voluntária e anônima, corroboraram percepção dos pesquisadores durante
as aulas. Nesse sentido, notou-se que utilizando a AP, houve maior interação e in-
teresse dos estudantes ao realizar as atividades propostas. Outro aspecto relevante
foi que os estudantes ficaram menos dispersos durante a exposição do conteúdo e a
realização das atividades. Uma possível explicação é a de que ao disponibilizar todo
o material de aula em uma “única tela”, sem a necessidade de busca de conteúdo
em outro meio para a realização das atividades, os estudantes tenham se sentido
motivados a ficar mais focados no contexto da atividade em si.
Com relação às percepções de pesquisadores, notou-se que nas aulas estrutu-
radas pela AP, que tiveram utilização dos slides, porém sem o suporte das demais
tecnologias, os estudantes sentiram desinteresse pelos conteúdos teóricos apresen-
tados, dando atenção apenas para momentos envolvendo exercícios com foco na
implementação de algoritmos. Nesses momentos, alguns estudantes apresentaram
dificuldades para implementação devido à falta de compreensão do conteúdo.
Nas aulas em que ocorreu a utilização do suporte da tecnologia digital, com
a página Web e oGoogle Colab, os estudantes apresentaram mais entusiasmo, já
que a interação com o material abordado ocorria a todo momento, em decorrência
da possibilidade de executar códigos/exemplos apresentados durante a exposição
do conteúdo e da não necessidade de fazer transição de aplicação no decorrer da

atividade. Por outro lado, foi observado que, com o uso da tecnologia digital, os
estudantes muitas vezes negligenciaram a parte teórica e já foram executar os exem-
plos.  Uma estratégia a ser aplicada para contornar tal situação, pode ser criar
exemplos com códigos que não executam sem a possibilidade da leitura da parte
teórica, onde haveria uma resposta para a correção do erro.
Os resultados mostram haver uma tendência dos estudantes considerarem
positivo o uso das páginas Web que subsidiaram a AP. Entretanto, é importante
destacar que a baixa quantidade de respostas não possibilita fazer qualquer gene-
ralização dessa proposta para além do escopo na qual foi utilizada. Dessa forma,
foi possível concluir que a utilização do suporte da tecnologia digital provido pela
AP, contribuiu para auxiliar no desenvolvimento das atividades propostas pelos do-
centes. Por meio do questionário, constatou-se que o uso de plataformas interativas
com o estudante, auxiliou no desenvolvimento e melhor compreensão dos conteúdos.
- Considerações finais
O ensino de lógica de programação tem apresentado crescimento significativo nas
instituições de ensino, já que essa temática possibilita o desenvolvimento do pen-
samento computacional, a capacidade para a resolução de problemas e o raciocínio
lógico nos estudantes. Além disso, a SBC está produzindo diretrizes mais específi-
cas, mostrando formas de implementação e os resultados que podem ser alcançados
a partir da inclusão da Computação na BNCC [SBC 2017].
Assim, uma possibilidade para auxiliar no ensino de lógica de programação
é a utilização da AP. [Azevedo 2021] apresenta que APs remetem ideias de como
tratar assuntos complexos em sala de aula, explicando que é possível obter resultados
satisfatórios em relação ao processo de ensino-aprendizagem. Com isso, a proposta
deste trabalho foi a criação de uma AP para o ensino de lógica de programação
com o uso da linguagem dePython. É importante ressaltar que na AP proposta é
possível a adaptação para uso de outras linguagens de programação.
O principal desafio para o desenvolvimento do projeto esteve em torno da
impossibilidade de atuação tanto do colégio, quando da equipe executora do projeto,
no sentido do surgimento de demandas externas e agendas até então não previstas
no calendário escolar. Em trabalhos futuros, pretende-se observar o emprego desse
recurso por um período maior de utilização.
Por fim, a implementação desta AP possibilitou ensinar com base em um pla-
nejamento prévio fundamentado nos pilares estabelecidos por [Menezes et al. 2020],
definindo o domínio do conhecimento, objetivos educacionais, conhecimento prévio,
mediações pedagógicas distribuídas, avaliação processual e cooperativa das apren-
dizagens, e suporte da tecnologia digital. Além disso, no contexto de uma ação de
extensão, cujo foco foi o ensino de lógica de programação comPython, observou-se
o envolvimento positivo do público-alvo na ação. Desse modo, foi proporcionado o
contato com temáticas como o raciocínio lógico, por exemplo, e fomentado o des-
pertar do interesse por parte dos estudantes, almejando uma jornada formativa na
área de Computação ou em áreas correlatas.

## Referências
Azevedo, R. C. (2021). Rp-uml: uma arquitetura pedagógica para apoiar ensino-
aprendizagem de modelagem de sistemas. Master’s thesis, Universidade Federal
do Amazonas, Manaus, AM, Brasil.
Brasil/MEC (2018). Resolução nº7, de 18 de dezembro de 2018. InDiário Oficial
[da] República Federativa do Brasil.
Brasil/MEC (2022). Resolução nº1, de 4 de outubro de 2022. InDiário Oficial [da]
República Federativa do Brasil.
Carvalho, M. J. S., de Nevado, R. A., and de Menezes, C. S. (2005). Arquiteturas
pedagógicas para educação à distância: concepções e suporte telemático. InBrazi-
lian Symposium on Computers in Education (Simpósio Brasileiro de Informática
na Educação-SBIE), pages 351–360.
Likert, R. (1932). A technique for the measurement of attitudes.Archives of psy-
chology.
Marques, G. R. and Tavares, O. (2015). Arquitetura pedagógica para aprendizagem
de programação.Nuevas Ideas en Informática Educativa TISE.
Menezes, C. S. d., Castro Júnior, A. N., and Aragón, R. (2020).  Arquiteturas
pedagógicas para aprendizagem em rede. InSérie de livros texto da CEIE-SBC.
Menezes, N. N. C. (2010).Introdução à programação com Python: algoritmos e
lógica de programação para iniciantes. Novatec.
Monteiro, V. A. (2022). Ensino do pensamento computacional utilizando scratch:
um relato de experiências com estudantes do ensino médio público no distrito
federal. Monografia, Universidade de Brasília, Brasília, DF, Brasil.
Portilho, F. J. (2023). Proposição de uma arquitetura pedagógica para o ensino de
lógica de programação. Monografia, Instituto Federal Goiano, Iporá, GO, Brasil.
Santana, T. S. (2023).  Requisitos em ação: uma arquitetura pedagógica para o
ensino de engenharia de requisitos. Master’s thesis, Universidade Federal de Goiás,
Goiânia, GO, Brasil.
SBC (2017). Diretrizes para o ensino de computação na educação básica. Sociedade
Brasileira de Computação.
SBC (2019). Diretrizes da sociedade brasileira de computação para o ensino de com-
putação na educação básica. relatório técnico n°001/2019. Sociedade Brasileira
de Computação.
Schuhmacher, É., Ropelato, D., and Schuhmacher, V. R. N. (2016). O desenvolvi-
mento do pensamento computacional no ensino médio por meio de ambientes de
programação the development of computational thinking in high school through
programming environments.
Silva, I. C., Moreira, G. R., Campos, L. M., Costa, N. T., Aranha, R. V., Barros,
V. H. A., and Junior, C. X. P. (2023). Integrando a extensão ao currículo: uma
análise sobre a curricularização da extensão em cursos de computação da região

centro-oeste. InAnais do XXXI Workshop sobre Educaçao em Computaçao, pages
## 522–532. SBC.
Sousa, A., Silva, S., Raiol, A. A., Sarges, J., and BEZERRA, F. d. L. (2015). O
universo ludico da programação de computadores com logo no ensino fundamental.
pages 51–60. XXIII Workshop sobre Educação em Informática.