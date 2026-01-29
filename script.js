// ==========================================
// 1. BANCO DE DADOS DETALHADO (Dossiês + Quiz)
// ==========================================

const historyData = [
    // --- IDADE ANTIGA E MÉDIA ---
    {
        era: "Idade Antiga e Média",
        bg: "#5D4037",
        year: "c. 1185–1175 a.C.",
        title: "Guerra de Troia",
        details: {
            context: "Apesar da lenda citar o rapto de Helena, rainha de Esparta, por Páris de Troia, historiadores acreditam que a causa real foi econômica. Troia controlava o Estreito de Dardanelos, uma rota vital para o comércio entre o Mar Egeu e o Mar Negro, taxando navios gregos.",
            conflict: "Foi um cerco que durou 10 anos. Heróis gregos (Aqueus) como Aquiles e Odisseu enfrentaram os Troianos liderados por Heitor. A guerra foi marcada por duelos épicos e intervenções divinas na mitologia.",
            outcome: "A queda de Troia ocorreu não pela força, mas pela astúcia: o famoso <strong>Cavalo de Troia</strong>. Os gregos fingiram desistir, deixando um cavalo de madeira com soldados dentro. Troia foi saqueada e queimada.",
            trivia: "As ruínas da verdadeira Troia foram encontradas no século XIX por Heinrich Schliemann na atual Turquia. Ele descobriu que existiram várias 'Troias' construídas uma sobre a outra."
        },
        quiz: {
            question: "Qual estratégia garantiu a vitória dos gregos após 10 anos de cerco?",
            options: ["Um ataque frontal com toda a frota", "O uso do Cavalo de Troia com soldados dentro", "O duelo entre Aquiles e Heitor", "A destruição das muralhas por terremotos"],
            correct: 1 // Índice da resposta correta (0, 1, 2, 3)
        }
    },
    {
        era: "Idade Antiga e Média",
        bg: "#5D4037",
        year: "499–449 a.C.",
        title: "Guerras Médicas",
        details: {
            context: "O Império Persa, a maior superpotência da época, expandia-se para o oeste. As cidades gregas da Jônia se revoltaram contra o domínio persa com ajuda de Atenas, provocando a ira do Rei Dario I e Xerxes.",
            conflict: "Famosa pelos '300 de Esparta' nas Termópilas. Porém, a vitória decisiva foi naval: na Batalha de Salamina, a frota ateniense, mais ágil, destruiu a marinha persa.",
            outcome: "A vitória grega preservou a independência das cidades-estado e a nascente democracia. Atenas emergiu como a líder cultural e militar da Grécia (Liga de Delos).",
            trivia: "O mensageiro Fidípides correu de Maratona até Atenas (cerca de 40km) para anunciar a vitória contra os persas e morreu de exaustão logo após."
        },
        quiz: {
            question: "Qual batalha naval foi decisiva para a derrota da marinha persa?",
            options: ["Batalha das Termópilas", "Batalha de Maratona", "Batalha de Salamina", "Batalha de Plateia"],
            correct: 2
        }
    },
    {
        era: "Idade Antiga e Média",
        bg: "#5D4037",
        year: "431–404 a.C.",
        title: "Guerra do Peloponeso",
        details: {
            context: "O crescimento imperialista de Atenas assustou Esparta. A Grécia dividiu-se em dois blocos: a Liga de Delos (Atenas, naval) e a Liga do Peloponeso (Esparta, terrestre).",
            conflict: "Uma guerra de desgaste. Péricles morreu numa praga que dizimou Atenas. Esparta, com ajuda financeira persa, construiu uma frota e derrotou Atenas.",
            outcome: "Fim da hegemonia ateniense. Esparta impôs a oligarquia. A guerra enfraqueceu tanto os gregos que facilitou a futura invasão pela Macedônia.",
            trivia: "O historiador Tucídides escreveu sobre esta guerra focando na política e natureza humana, sem culpar os deuses. É o pai da análise política moderna."
        },
        quiz: {
            question: "Quem venceu a Guerra do Peloponeso?",
            options: ["Atenas", "Esparta", "Império Persa", "Macedônia"],
            correct: 1
        }
    },
    {
        era: "Idade Antiga e Média",
        bg: "#5D4037",
        year: "264–146 a.C.",
        title: "Guerras Púnicas",
        details: {
            context: "Roma (terrestre) e Cartago (naval) colidiram pelo controle da Sicília e do comércio no Mediterrâneo.",
            conflict: "Na 2ª Guerra, Aníbal Barca cruzou os Alpes com elefantes para atacar Roma. Ele venceu batalhas lendárias, mas não tomou a cidade.",
            outcome: "Roma destruiu Cartago completamente na 3ª Guerra. Roma tornou-se senhora do 'Mare Nostrum', transformando-se de República em Império.",
            trivia: "Aníbal é considerado um dos maiores estrategistas da história. Suas táticas de 'envolvimento duplo' em Canas ainda são estudadas hoje."
        },
        quiz: {
            question: "Qual animal Aníbal usou para cruzar os Alpes?",
            options: ["Cavalos Árabes", "Camelos", "Elefantes de Guerra", "Bois"],
            correct: 2
        }
    },
    {
        era: "Idade Antiga e Média",
        bg: "#5D4037",
        year: "732 d.C.",
        title: "Batalha de Poitiers",
        details: {
            context: "Após conquistar a Península Ibérica, o Califado Omíada avançou para a França. A Europa cristã estava em perigo de ser conquistada.",
            conflict: "Carlos Martel, líder dos Francos, usou infantaria pesada (falange) para resistir à cavalaria leve muçulmana.",
            outcome: "A expansão muçulmana na Europa Ocidental parou. Carlos Martel consolidou o poder da dinastia Carolíngia.",
            trivia: "Carlos ganhou o apelido 'Martel' (O Martelo) pela forma como 'martelou' seus inimigos nesta batalha."
        },
        quiz: {
            question: "Quem liderou os Francos na vitória que barrou o avanço muçulmano?",
            options: ["Carlos Magno", "Carlos Martel", "Rei Artur", "Ricardo Coração de Leão"],
            correct: 1
        }
    },
    {
        era: "Idade Antiga e Média",
        bg: "#5D4037",
        year: "1095–1291",
        title: "As Cruzadas",
        details: {
            context: "Convocadas pelo Papa Urbano II para retomar Jerusalém. Misturavam fervor religioso, busca por terras e interesses comerciais.",
            conflict: "A 1ª Cruzada conquistou Jerusalém. A 3ª teve o duelo entre Ricardo Coração de Leão e Saladino. A 4ª saqueou a cristã Constantinopla.",
            outcome: "Falharam em manter a Terra Santa, mas reabriram o comércio no Mediterrâneo e trouxeram especiarias e saberes árabes para a Europa.",
            trivia: "A 'Cruzada das Crianças' em 1212 foi trágica: milhares de jovens marcharam desarmados e acabaram mortos ou escravizados."
        },
        quiz: {
            question: "Qual foi o principal resultado econômico das Cruzadas?",
            options: ["A conquista definitiva de Jerusalém", "A reabertura comercial do Mediterrâneo", "A conversão dos muçulmanos", "O fim do comércio de especiarias"],
            correct: 1
        }
    },

    {
    era: "Idade Antiga e Média", bg: "#5D4037", year: "1206–1294",
        title: "Investidas Mongóis",
        details: {
            context: "Unificação das tribos das estepes por Genghis Khan.",
            conflict: "Uso genial de cavalaria leve e arqueiros montados. Conquistaram da China à Europa Oriental.",
            outcome: "Criação do maior império em área contígua da história. Abertura da Rota da Seda (Pax Mongolica).",
            trivia: "Os mongóis usavam um sistema de correio a cavalo extremamente eficiente chamado Yam."
        },
        quiz: { question: "Quem unificou as tribos mongóis?", options: ["Kublai Khan", "Genghis Khan", "Átila", "Tamerlão"], correct: 1 }
    },
    {
        era: "Idade Antiga e Média",
        bg: "#5D4037",
        year: "1337–1453",
        title: "Guerra dos Cem Anos",
        details: {
            context: "Disputa pelo trono francês entre Inglaterra e França, além de disputas territoriais em Flandres.",
            conflict: "Ingleses venceram no início com o arco longo. A França virou o jogo com Joana d'Arc, que levantou o moral das tropas.",
            outcome: "A Inglaterra perdeu terras no continente. Fortaleceu a identidade nacional na França e Inglaterra. Fim da cavalaria medieval.",
            trivia: "A guerra durou 116 anos. Foi aqui que canhões começaram a ser decisivos em cercos."
        },
        quiz: {
            question: "Qual figura histórica foi crucial para levantar o moral francês?",
            options: ["Napoleão Bonaparte", "Joana d'Arc", "Maria Antonieta", "Rei Luís XIV"],
            correct: 1
        }
    },
    {
        era: "Idade Antiga e Média",
        bg: "#5D4037",
        year: "1453",
        title: "Queda de Constantinopla",
        details: {
            context: "O Império Bizantino estava reduzido. O Sultão Mehmed II queria a cidade para consolidar o Império Otomano.",
            conflict: "Os otomanos usaram um supercanhão para derrubar as muralhas milenares. Os bizantinos foram superados em número.",
            outcome: "Fim da Idade Média. O bloqueio das rotas para o Oriente forçou a busca por caminhos marítimos (Grandes Navegações).",
            trivia: "Diz a lenda que o último imperador, Constantino XI, morreu lutando como um soldado comum e seu corpo nunca foi achado."
        },
        quiz: {
            question: "A Queda de Constantinopla marcou o fim de qual período histórico?",
            options: ["Idade Antiga", "Idade Média", "Idade Moderna", "Pré-História"],
            correct: 1
        }
    },

    // --- IDADE MODERNA ---
    {
        era: "Idade Moderna",
        bg: "#1A237E",
        year: "1519–1521",
        title: "Conquista do Império Asteca",
        details: {
            context: "Hernán Cortés chegou ao México. O Império Asteca dominava a região e tinha muitos inimigos locais devido aos tributos e sacrifícios.",
            conflict: "Cortés aliou-se aos inimigos dos astecas. Tecnologia (armas, aço, cavalos) e a varíola dizimaram os astecas em Tenochtitlán.",
            outcome: "Destruição da civilização asteca e início da colonização espanhola (Nova Espanha).",
            trivia: "Na 'Noite Triste', espanhóis morreram afogados no lago ao tentar fugir com os bolsos cheios de ouro roubado."
        },
        quiz: {
            question: "Além da tecnologia militar, o que ajudou a dizimar os astecas?",
            options: ["Fome causada por secas", "Doenças como a Varíola", "Ataque de piratas ingleses", "Terremotos"],
            correct: 1
        }
    },
    {
        era: "Idade Moderna", bg: "#1A237E", year: "1532–1572",
        title: "Conquista do Império Inca",
        details: {
            context: "Império Inca enfraquecido por guerra civil e varíola quando Pizarro chegou.",
            conflict: "Francisco Pizarro capturou o imperador Atahualpa em Cajamarca com poucos homens, mas muita tecnologia (armas de fogo).",
            outcome: "Colapso Inca e exploração das minas de prata dos Andes pela Espanha.",
            trivia: "Atahualpa ofereceu um quarto cheio de ouro por sua liberdade, pagou, mas foi executado mesmo assim."
        },
        quiz: { question: "Em qual região ficava o Império Inca?", options: ["México", "Andes (América do Sul)", "Brasil", "Caribe"], correct: 1 }
    },
    {
        era: "Idade Moderna",
        bg: "#1A237E",
        year: "1618–1648",
        title: "Guerra dos Trinta Anos",
        details: {
            context: "Começou como revolta religiosa no Sacro Império, mas virou luta política pela hegemonia europeia.",
            conflict: "Envolveu as grandes potências. Brutal para civis, com fome e doenças matando 30% da população alemã.",
            outcome: "Paz de Vestfália (1648): estabeleceu a soberania dos estados, base das relações internacionais modernas.",
            trivia: "A França (católica) lutou ao lado dos protestantes para enfraquecer seus rivais, provando que a política valia mais que a religião."
        },
        quiz: {
            question: "O que a Paz de Vestfália estabeleceu?",
            options: ["A soberania dos Estados nacionais", "O fim do protestantismo", "A união da Europa sob um rei", "A proibição de armas de fogo"],
            correct: 0
        }
    },
    {
        era: "Idade Moderna", bg: "#1A237E", year: "1642–1651",
        title: "Guerra Civil Inglesa",
        details: {
            context: "Disputa de poder entre o Rei Carlos I (absolutista) e o Parlamento.",
            conflict: "Realistas (Cavaleiros) vs Parlamentares (Cabeças Redondas) liderados por Oliver Cromwell.",
            outcome: "Execução do Rei Carlos I. Instauração temporária da República (Commonwealth).",
            trivia: "Foi a primeira vez que um monarca foi julgado e executado publicamente por seu próprio povo na Europa."
        },
        quiz: { question: "Quem liderou as forças do Parlamento?", options: ["Henrique VIII", "Oliver Cromwell", "Winston Churchill", "Ricardo Coração de Leão"], correct: 1 }
    },
    {
        era: "Idade Moderna", bg: "#1A237E", year: "1645–1654",
        title: "Insurreição Pernambucana",
        details: {
            context: "Domínio holandês no Nordeste do Brasil (Brasil Holandês).",
            conflict: "Luso-brasileiros se revoltaram contra a cobrança de dívidas e intolerância religiosa da WIC.",
            outcome: "Expulsão dos holandeses. Considerada o berço do Exército Brasileiro (Batalha dos Guararapes).",
            trivia: "A união de brancos, negros (Henrique Dias) e indígenas (Filipe Camarão) foi crucial."
        },
        quiz: { question: "Quem foi expulso do Nordeste brasileiro?", options: ["Franceses", "Espanhóis", "Holandeses", "Ingleses"], correct: 2 }
    },
    {
        era: "Idade Moderna", bg: "#1A237E", year: "1756–1763",
        title: "Guerra dos Sete Anos",
        details: {
            context: "Considerada por muitos a 'primeira guerra mundial' real, disputada em colônias e na Europa.",
            conflict: "Grã-Bretanha e Prússia contra França, Áustria e Rússia.",
            outcome: "Vitória britânica. França perdeu Canadá e influência na Índia. Inglaterra endividada taxou os EUA.",
            trivia: "A guerra preparou o cenário para as revoluções americana e francesa devido aos custos."
        },
        quiz: { question: "Qual país perdeu suas colônias na América do Norte?", options: ["Espanha", "Portugal", "França", "Holanda"], correct: 2 }
    },
    {
        era: "Idade Moderna",
        bg: "#1A237E",
        year: "1775–1783",
        title: "Independência dos EUA",
        details: {
            context: "A Inglaterra aumentou impostos nas 13 colônias sem dar representação política ('No taxation without representation').",
            conflict: "George Washington liderou colonos usando táticas de guerrilha. O apoio da França foi decisivo.",
            outcome: "Reconhecimento dos EUA. Primeira colônia a se libertar com ideais iluministas, inspirando outras revoluções.",
            trivia: "Benjamin Franklin encantou a nobreza francesa usando um chapéu de pele de castor para parecer um 'sábio americano'."
        },
        quiz: {
            question: "Qual país europeu deu apoio militar decisivo aos EUA?",
            options: ["Espanha", "Alemanha", "França", "Rússia"],
            correct: 2
        }
    },
    {
        era: "Idade Moderna",
        bg: "#1A237E",
        year: "1789–1799",
        title: "Revolução Francesa",
        details: {
            context: "França falida e desigual. O Terceiro Estado pagava tudo, enquanto Nobreza e Clero tinham privilégios.",
            conflict: "Queda da Bastilha, guilhotina e o Terror. O exército revolucionário (povo em armas) resistiu a invasões.",
            outcome: "Fim do Absolutismo. Declaração dos Direitos do Homem. Ascensão de Napoleão Bonaparte.",
            trivia: "A guilhotina foi inventada para ser uma forma 'igualitária' de execução, pois antes pobres eram enforcados (lento)."
        },
        quiz: {
            question: "Qual evento simboliza o início da Revolução Francesa?",
            options: ["A morte de Napoleão", "A Queda da Bastilha", "A invasão da Rússia", "A Guerra dos Cem Anos"],
            correct: 1
        }
    },
    {
        era: "Idade Moderna", bg: "#1A237E", year: "1791–1804",
        title: "Revolução Haitiana",
        details: {
            context: "Brutalidade da escravidão na colônia francesa de Saint-Domingue.",
            conflict: "Revolta massiva de escravizados liderada por Toussaint Louverture contra a França.",
            outcome: "Independência do Haiti. Primeira república governada por pessoas de ascendência africana.",
            trivia: "Foi a única revolta de escravizados na história que resultou na fundação de um estado."
        },
        quiz: { question: "Quem foi o principal líder revolucionário?", options: ["Simon Bolívar", "Toussaint Louverture", "Zumbi dos Palmares", "Nelson Mandela"], correct: 1 }
    },
    {
        era: "Idade Moderna", bg: "#1A237E", year: "1792–1802",
        title: "Guerras Revolucionárias",
        details: {
            context: "Monarquias europeias tentaram esmagar a recém-criada República Francesa.",
            conflict: "França contra Coalizões (Áustria, Prússia, Inglaterra). Uso do 'levée en masse' (alistamento em massa).",
            outcome: "Sobrevivência da Revolução e expansão das fronteiras francesas. Surgimento de Napoleão.",
            trivia: "O hino 'A Marselhesa' foi composto para encorajar as tropas revolucionárias."
        },
        quiz: { question: "O que permitiu à França resistir aos ataques?", options: ["Armas nucleares", "Alistamento em massa (cidadãos-soldados)", "Ajuda americana", "Muralhas intransponíveis"], correct: 1 }
    },

    // --- SÉCULO XIX ---
    {
        era: "Século XIX",
        bg: "#37474F",
        year: "1803–1815",
        title: "Guerras Napoleônicas",
        details: {
            context: "Napoleão queria unificar a Europa sob o modelo francês e destruir a economia britânica (Bloqueio Continental).",
            conflict: "Venceu em terra, perdeu no mar. A invasão da Rússia em 1812 foi o erro fatal: o 'General Inverno' dizimou seu exército.",
            outcome: "Congresso de Viena redesenhou o mapa. Nacionalismo despertou na Alemanha e Itália.",
            trivia: "Napoleão não era tão baixinho; sua guarda imperial era gigante, o que o fazia parecer pequeno."
        },
        quiz: {
            question: "Qual fator foi decisivo para a derrota de Napoleão na Rússia?",
            options: ["A traição de seus generais", "A falta de munição", "O inverno rigoroso e a terra arrasada", "A superioridade naval russa"],
            correct: 2
        }
    },
    {
        era: "Século XIX", bg: "#37474F", year: "1808–1833",
        title: "Independências Latinas",
        details: {
            context: "Fraqueza da Espanha (invadida por Napoleão) e ideais iluministas nas colônias.",
            conflict: "Líderes como Simón Bolívar e San Martín libertaram a América do Sul.",
            outcome: "Fragmentação do império espanhol em várias repúblicas (Venezuela, Colômbia, Argentina, etc).",
            trivia: "O Brasil seguiu um caminho diferente, tornando-se uma monarquia independente, não uma república, inicialmente."
        },
        quiz: { question: "Quem é conhecido como 'O Libertador'?", options: ["Dom Pedro I", "Simón Bolívar", "Che Guevara", "Fidel Castro"], correct: 1 }
    },
    {
        era: "Século XIX", bg: "#37474F", year: "1821–1829",
        title: "Independência Grega",
        details: {
            context: "Nacionalismo grego contra o domínio do Império Otomano.",
            conflict: "Apoio de potências europeias (Rússia, Reino Unido, França) aos gregos.",
            outcome: "Criação do estado grego moderno. Enfraquecimento otomano.",
            trivia: "O poeta Lord Byron morreu na Grécia lutando como voluntário pela causa grega."
        },
        quiz: { question: "Contra quem os gregos lutaram?", options: ["Romanos", "Turcos Otomanos", "Persas", "Italianos"], correct: 1 }
    },
    {
        era: "Século XIX", bg: "#37474F", year: "1853–1856",
        title: "Guerra da Crimeia",
        details: {
            context: "Rússia tentou expandir influência sobre o decadente Império Otomano.",
            conflict: "Rússia vs Aliança (França, Reino Unido, Otomanos). Cerco de Sebastopol.",
            outcome: "Derrota russa. Mostrou o atraso tecnológico da Rússia. Início da enfermagem moderna (Florence Nightingale).",
            trivia: "Foi a primeira guerra com cobertura fotográfica e uso de telégrafo."
        },
        quiz: { question: "Quem revolucionou a enfermagem nesta guerra?", options: ["Maria Curie", "Florence Nightingale", "Ana Néri", "Joana d'Arc"], correct: 1 }
    },
    {
        era: "Século XIX", bg: "#37474F", year: "1857–1858",
        title: "Revolta dos Cipaios",
        details: {
            context: "Soldados indianos (cipaios) se revoltaram contra a Companhia das Índias Orientais.",
            conflict: "Estopim: cartuchos de munição untados com gordura animal (ofensivo a hindus e muçulmanos).",
            outcome: "Vitória britânica brutal. A Índia passou a ser governada diretamente pela Coroa Britânica (Raj).",
            trivia: "Marcou o fim do domínio da empresa privada Companhia das Índias sobre a Índia."
        },
        quiz: { question: "O que desencadeou a revolta?", options: ["Impostos altos", "Gordura animal nos cartuchos", "Fome", "Proibição de religião"], correct: 1 }
    },
    {
        era: "Século XIX",
        bg: "#37474F",
        year: "1861–1865",
        title: "Guerra Civil Americana",
        details: {
            context: "Norte (industrial, abolicionista) vs Sul (agrário, escravocrata). A eleição de Lincoln causou a separação do Sul.",
            conflict: "Primeira guerra industrial (ferrovias, telégrafo). O Norte tinha mais fábricas e homens.",
            outcome: "Vitória do Norte, abolição da escravidão e preservação da união dos EUA.",
            trivia: "Morreram mais americanos nesta guerra do que em todas as outras guerras dos EUA juntas até o Vietnã."
        },
        quiz: {
            question: "Qual era a principal vantagem do Norte sobre o Sul?",
            options: ["Melhores generais", "Indústria e maior população", "Apoio da Inglaterra", "Conhecimento do terreno"],
            correct: 1
        }
    },
    {
        era: "Século XIX",
        bg: "#37474F",
        year: "1864–1870",
        title: "Guerra do Paraguai",
        details: {
            context: "Solano López invadiu o Brasil e Argentina. Formou-se a Tríplice Aliança (Brasil, Argentina, Uruguai).",
            conflict: "Guerra longa e sangrenta em pântanos. O Brasil teve que reorganizar seu exército sob comando de Caxias.",
            outcome: "Destruição da população paraguaia. O exército brasileiro ganhou força política (levando à República).",
            trivia: "No fim, o Paraguai usou crianças com barbas falsas para parecerem soldados (Batalha de Acosta Ñu)."
        },
        quiz: {
            question: "Quais países formaram a Tríplice Aliança?",
            options: ["Brasil, Argentina e Chile", "Brasil, Argentina e Uruguai", "Brasil, Paraguai e Uruguai", "Argentina, Chile e Peru"],
            correct: 1
        }
    },
    {
        era: "Século XIX", bg: "#37474F", year: "1870–1871",
        title: "Guerra Franco-Prussiana",
        details: {
            context: "Bismarck queria unificar a Alemanha e precisava de um inimigo comum (França).",
            conflict: "Exército prussiano, mais organizado, capturou o Imperador Napoleão III em Sedan.",
            outcome: "Unificação da Alemanha (II Reich) proclamada em Versalhes. França perdeu Alsácia-Lorena.",
            trivia: "O revanchismo francês por essa derrota foi uma das causas da Primeira Guerra Mundial."
        },
        quiz: { question: "Qual país nasceu dessa guerra?", options: ["Itália", "Alemanha", "Polônia", "Áustria"], correct: 1 }
    },
    {
        era: "Século XIX", bg: "#37474F", year: "1879–1884",
        title: "Guerra do Pacífico",
        details: {
            context: "Disputa por depósitos de salitre e guano no Deserto do Atacama.",
            conflict: "Chile contra a aliança de Bolívia e Peru.",
            outcome: "Vitória do Chile, que anexou territórios. A Bolívia perdeu sua saída para o mar.",
            trivia: "Até hoje a Bolívia reivindica diplomaticamente um acesso soberano ao oceano."
        },
        quiz: { question: "Qual país perdeu seu acesso ao mar?", options: ["Peru", "Chile", "Bolívia", "Equador"], correct: 2 }
    },
    {
        era: "Século XIX", bg: "#37474F", year: "1894–1895",
        title: "1ª Guerra Sino-Japonesa",
        details: {
            context: "Japão modernizado (Meiji) vs China da Dinastia Qing pelo controle da Coreia.",
            conflict: "O Japão demonstrou superioridade militar esmagadora.",
            outcome: "Japão ganhou Taiwan e influência. China exposta como frágil, levando à 'partilha' por potências.",
            trivia: "Marcou a ascensão do Japão como a primeira potência industrial não-ocidental."
        },
        quiz: { question: "Quem venceu o conflito?", options: ["China", "Japão", "Coreia", "Rússia"], correct: 1 }
    },
    {
        era: "Século XIX", bg: "#37474F", year: "1898",
        title: "Guerra Hispano-Americana",
        details: {
            context: "EUA apoiaram a independência de Cuba. Explosão do navio USS Maine.",
            conflict: "Guerra rápida. EUA derrotaram a Espanha no Caribe e nas Filipinas.",
            outcome: "Fim do império colonial espanhol. EUA ganharam Porto Rico, Guam e Filipinas.",
            trivia: "A imprensa sensacionalista (Yellow Press) nos EUA ajudou a incitar a guerra."
        },
        quiz: { question: "Qual colônia a Espanha perdeu no Caribe?", options: ["Brasil", "Cuba", "México", "Haiti"], correct: 1 }
    },

    // --- SÉCULO XX ---
    {
        era: "Século XX", bg: "#212121", year: "1900–1901",
        title: "Revolta dos Boxers",
        details: {
            context: "Sentimento anti-estrangeiro e anti-cristão na China ('Punhos Harmoniosos').",
            conflict: "Boxers cercaram o bairro diplomático em Pequim. Aliança de 8 nações invadiu para libertá-los.",
            outcome: "Derrota chinesa. A China foi forçada a pagar indenizações humilhantes.",
            trivia: "A Imperatriz Cixi apoiou os rebeldes, o que acelerou o fim da dinastia Qing."
        },
        quiz: { question: "Qual era o objetivo dos Boxers?", options: ["Industrializar a China", "Expulsar estrangeiros e cristãos", "Derrubar o Imperador", "Invadir o Japão"], correct: 1 }
    },
    {
        era: "Século XX", bg: "#212121", year: "1904–1905",
        title: "Guerra Russo-Japonesa",
        details: {
            context: "Rivalidade imperialista na Manchúria e Coreia.",
            conflict: "O Japão atacou de surpresa. Destruição da frota russa na Batalha de Tsushima.",
            outcome: "Primeira vez que uma nação asiática derrotou uma potência europeia moderna. Revolta de 1905 na Rússia.",
            trivia: "O Tratado de Portsmouth, que encerrou a guerra, foi mediado por Theodore Roosevelt."
        },
        quiz: { question: "Qual foi o impacto histórico da vitória japonesa?", options: ["Fim do Japão", "Derrota de uma potência europeia por uma asiática", "Início da URSS", "Paz mundial"], correct: 1 }
    },
    {
        era: "Século XX", bg: "#212121", year: "1910–1920",
        title: "Revolução Mexicana",
        details: {
            context: "Ditadura de Porfirio Díaz e desigualdade agrária.",
            conflict: "Luta complexa entre facções (Madero, Zapata, Villa, Carranza).",
            outcome: "Constituição de 1917 (direitos sociais e reforma agrária). Fim da velha oligarquia.",
            trivia: "Pancho Villa chegou a invadir uma cidade nos EUA, sendo perseguido pelo exército americano."
        },
        quiz: { question: "Qual era uma das principais demandas de Zapata?", options: ["Reforma Agrária (Terra e Liberdade)", "Monarquia", "Anexação aos EUA", "Escravidão"], correct: 0 }
    },
    {
        era: "Século XX", bg: "#212121", year: "1912–1913",
        title: "Guerras dos Balcãs",
        details: {
            context: "Nações balcânicas queriam expulsar os otomanos da Europa.",
            conflict: "Duas guerras rápidas. Primeiro contra os turcos, depois entre si (Bulgária vs ex-aliados).",
            outcome: "Sérvia dobrou de tamanho, assustando a Áustria-Hungria. O 'barril de pólvora' para a 1ª Guerra Mundial.",
            trivia: "A Albânia declarou independência durante esses conflitos."
        },
        quiz: { question: "A instabilidade nos Balcãs levou a qual grande conflito?", options: ["Guerra Fria", "Primeira Guerra Mundial", "Guerra do Vietnã", "Guerra da Coreia"], correct: 1 }
    },
    {
        era: "Século XX",
        bg: "#212121",
        year: "1914–1918",
        title: "Primeira Guerra Mundial",
        details: {
            context: "Imperialismo e alianças. O estopim foi o assassinato do Arquiduque Francisco Ferdinando.",
            conflict: "Guerra de Trincheiras: lama, gás e metralhadoras. Entrada dos EUA e saída da Rússia definiram o fim.",
            outcome: "Queda de 4 impérios. Tratado de Versalhes humilhou a Alemanha.",
            trivia: "No Natal de 1914, houve uma trégua não oficial onde soldados inimigos jogaram futebol."
        },
        quiz: {
            question: "Qual característica marcou os combates na frente ocidental?",
            options: ["Guerra Relâmpago", "Guerra de Trincheiras", "Guerra Naval", "Guerra de Guerrilha"],
            correct: 1
        }
    },
    {
        era: "Século XX", bg: "#212121", year: "1917–1922",
        title: "Guerra Civil Russa",
        details: {
            context: "Revolução Bolchevique de 1917 derrubou o Czar.",
            conflict: "Exército Vermelho (Comunistas/Trotsky) vs Exército Branco (Monarquistas/Conservadores).",
            outcome: "Vitória Vermelha. Criação da União Soviética (URSS).",
            trivia: "A família imperial Romanov foi executada no porão de uma casa em Ecaterimburgo."
        },
        quiz: { question: "Quem organizou o Exército Vermelho?", options: ["Stalin", "Lenin", "Trotsky", "Putin"], correct: 2 }
    },
    {
        era: "Século XX", bg: "#212121", year: "1936–1939",
        title: "Guerra Civil Espanhola",
        details: {
            context: "Polarização entre Republicanos (esquerda) e Nacionalistas (direita/fascistas).",
            conflict: "Francisco Franco recebeu ajuda de Hitler e Mussolini. Foi um 'ensaio' para a 2ª Guerra.",
            outcome: "Vitória de Franco e início de uma longa ditadura na Espanha.",
            trivia: "O bombardeio da cidade de Guernica inspirou a famosa obra de Pablo Picasso."
        },
        quiz: { question: "Qual pintor retratou o horror desta guerra?", options: ["Dalí", "Picasso", "Goya", "Velázquez"], correct: 1 }
    },
    {
        era: "Século XX",
        bg: "#212121",
        year: "1939–1945",
        title: "Segunda Guerra Mundial",
        details: {
            context: "Nazismo/Fascismo e expansionismo. Invasão da Polônia iniciou o conflito.",
            conflict: "Eixo vs Aliados. Blitzkrieg, Holocausto, Stalingrado e bombas atômicas.",
            outcome: "EUA e URSS como superpotências. Criação da ONU. Horror do genocídio revelado.",
            trivia: "A URSS sofreu as maiores perdas: 27 milhões de mortos. 80% das baixas alemãs foram no front leste."
        },
        quiz: {
            question: "Quais eram as duas superpotências que emergiram após a guerra?",
            options: ["Alemanha e Japão", "Reino Unido e França", "EUA e URSS", "China e Brasil"],
            correct: 2
        }
    },
    {
        era: "Século XX",
        bg: "#212121",
        year: "1947–1991",
        title: "Guerra Fria",
        details: {
            context: "Mundo bipolar: Capitalismo (EUA) vs Socialismo (URSS). Medo nuclear.",
            conflict: "Sem guerra direta. Corridas Espacial e Armamentista, e guerras por procuração (Vietnã, Coreia).",
            outcome: "Queda do Muro de Berlim e colapso da URSS. Hegemonia dos EUA.",
            trivia: "A CIA tentou usar gatos espiões com microfones (projeto 'Gato Acústico'), mas falhou."
        },
        quiz: {
            question: "Por que não houve conflito direto entre EUA e URSS?",
            options: ["Eles eram aliados secretos", "Medo da Destruição Mútua Nuclear", "Não tinham exércitos fortes", "A ONU proibiu"],
            correct: 1
        }
    },
    {
        era: "Século XX", bg: "#212121", year: "1950–1953",
        title: "Guerra da Coreia",
        details: {
            context: "Norte (comunista) invadiu o Sul (capitalista). Primeiro conflito armado da Guerra Fria.",
            conflict: "Intervenção da ONU (EUA) e da China. Guerra de movimento que virou impasse.",
            outcome: "Armistício (não paz). Fronteira mantida no Paralelo 38. Coreias divididas até hoje.",
            trivia: "Tecnicamente, as duas Coreias ainda estão em guerra, pois nunca assinaram um tratado de paz definitivo."
        },
        quiz: { question: "Como terminou a guerra?", options: ["Vitória do Norte", "Vitória do Sul", "Unificação", "Divisão no Paralelo 38"], correct: 3 }
    },
    {
        era: "Século XX", bg: "#212121", year: "1954–1962",
        title: "Independência da Argélia",
        details: {
            context: "Argélia era considerada parte da França, não colônia. FLN iniciou a luta armada.",
            conflict: "Guerra brutal de guerrilha, tortura e terrorismo urbano. Crise política na França.",
            outcome: "Independência da Argélia. Queda da 4ª República Francesa e retorno de De Gaulle.",
            trivia: "Cerca de 1 milhão de 'Pieds-Noirs' (colonos europeus) fugiram da Argélia para a França no fim."
        },
        quiz: { question: "Contra qual país a Argélia lutou?", options: ["Inglaterra", "França", "Espanha", "Itália"], correct: 1 }
    },
    {
        era: "Século XX",
        bg: "#212121",
        year: "1955–1975",
        title: "Guerra do Vietnã",
        details: {
            context: "Vietnã do Norte (comunista) queria unificar o país contra o Sul (apoiado pelos EUA).",
            conflict: "EUA usaram napalm, mas perderam para a guerrilha na selva. Protestos nos EUA.",
            outcome: "Retirada dos EUA e unificação do Vietnã sob comunismo.",
            trivia: "Guerrilheiros construíram cidades subterrâneas (túneis de Cu Chi) para se esconderem."
        },
        quiz: {
            question: "Qual tática os vietnamitas usaram para vencer a tecnologia americana?",
            options: ["Batalhas navais", "Guerra de Guerrilhas na selva", "Bombardeio aéreo massivo", "Uso de tanques pesados"],
            correct: 1
        }
    },
    {
        era: "Século XX", bg: "#212121", year: "1967",
        title: "Guerra dos Seis Dias",
        details: {
            context: "Tensão entre Israel e vizinhos árabes (Egito, Síria, Jordânia).",
            conflict: "Israel lançou um ataque aéreo preventivo, destruindo a força aérea egípcia no solo.",
            outcome: "Vitória esmagadora de Israel. Conquista de Jerusalém Oriental, Cisjordânia, Gaza e Golã.",
            trivia: "A guerra mudou o mapa do Oriente Médio em menos de uma semana."
        },
        quiz: { question: "Quem venceu a guerra em 6 dias?", options: ["Egito", "Israel", "Síria", "Jordânia"], correct: 1 }
    },
    {
        era: "Século XX", bg: "#212121", year: "1979–1989",
        title: "Guerra Soviético-Afegã",
        details: {
            context: "URSS invadiu o Afeganistão para apoiar um governo comunista impopular.",
            conflict: "Mujahedin (rebeldes islâmicos), apoiados pelos EUA, lutaram contra os soviéticos.",
            outcome: "Retirada soviética humilhante. Contribuiu para o fim da URSS. Ascensão de grupos extremistas.",
            trivia: "Frequentemente chamada de 'O Vietnã da União Soviética'."
        },
        quiz: { question: "Quem os EUA apoiaram neste conflito?", options: ["A URSS", "O Governo Comunista", "Os Mujahedin", "Ninguém"], correct: 2 }
    },
    {
        era: "Século XX", bg: "#212121", year: "1980–1988",
        title: "Guerra Irã-Iraque",
        details: {
            context: "Saddam Hussein (Iraque) invadiu o Irã aproveitando o caos da Revolução Islâmica.",
            conflict: "Guerra de trincheiras estilo 1ª Guerra Mundial, com uso de armas químicas.",
            outcome: "Impasse sangrento. Nenhum lado ganhou territórios significativos. Milhões de mortos.",
            trivia: "O Ocidente apoiou Saddam Hussein para conter o fundamentalismo iraniano."
        },
        quiz: { question: "Qual arma proibida foi usada no conflito?", options: ["Bomba H", "Armas Químicas", "Laser", "Drones"], correct: 1 }
    },
    {
        era: "Século XX", bg: "#212121", year: "1990–1991",
        title: "Guerra do Golfo",
        details: {
            context: "Iraque invadiu o Kuwait para controlar petróleo.",
            conflict: "Coalizão liderada pelos EUA (Operação Tempestade no Deserto) expulsou os iraquianos.",
            outcome: "Libertação do Kuwait. Saddam continuou no poder, mas enfraquecido.",
            trivia: "Ficou famosa pelas imagens de 'bombardeios cirúrgicos' e visão noturna na TV."
        },
        quiz: { question: "Qual país foi invadido pelo Iraque?", options: ["Irã", "Arábia Saudita", "Kuwait", "Israel"], correct: 2 }
    },
    {
        era: "Século XX", bg: "#212121", year: "1992–1995",
        title: "Guerra da Bósnia",
        details: {
            context: "Colapso da Iugoslávia. Tensões étnicas entre sérvios, croatas e bósnios muçulmanos.",
            conflict: "Cerco de Sarajevo e limpeza étnica (massacre de Srebrenica).",
            outcome: "Acordos de Dayton. Divisão política da Bósnia. Intervenção da OTAN.",
            trivia: "Foi o conflito mais sangrento na Europa desde a Segunda Guerra Mundial."
        },
        quiz: { question: "O que marcou negativamente este conflito?", options: ["Uso de bombas atômicas", "Limpeza étnica/Genocídio", "Invasão alienígena", "Paz rápida"], correct: 1 }
    },

    // --- SÉCULO XXI ---
    {
        era: "Século XXI",
        bg: "#004D40",
        year: "2001–2021",
        title: "Guerra no Afeganistão",
        details: {
            context: "Resposta ao 11 de setembro. Objetivo: destruir a Al-Qaeda e remover o Talibã.",
            conflict: "Ocupação rápida, mas insurgência longa do Talibã nas montanhas.",
            outcome: "Retirada dos EUA em 2021. Talibã retomou o poder.",
            trivia: "Foi a guerra mais longa da história dos Estados Unidos."
        },
        quiz: {
            question: "Qual evento desencadeou a invasão do Afeganistão?",
            options: ["Ataques de 11 de Setembro", "Guerra do Golfo", "Primavera Árabe", "Invasão da Ucrânia"],
            correct: 0
        }
    },
    {
        era: "Século XXI", bg: "#004D40", year: "2003–2011",
        title: "Guerra do Iraque",
        details: {
            context: "EUA acusaram Saddam Hussein de ter armas de destruição em massa (nunca encontradas).",
            conflict: "Invasão e queda rápida de Saddam. Seguiu-se uma longa insurgência e guerra civil sectária.",
            outcome: "Fim do regime Baathista. Instabilidade na região e surgimento do Estado Islâmico (ISIS).",
            trivia: "A estátua de Saddam sendo derrubada em Bagdá é a imagem icônica do início da guerra."
        },
        quiz: { question: "Qual foi a justificativa principal para a invasão?", options: ["Petróleo", "Armas de Destruição em Massa", "Apoio ao Irã", "Colonização"], correct: 1 }
    },
    {
        era: "Século XXI", bg: "#004D40", year: "2011–presente",
        title: "Guerra Civil Síria",
        details: {
            context: "Protestos da Primavera Árabe contra o governo de Bashar al-Assad.",
            conflict: "Guerra complexa envolvendo governo, rebeldes, curdos, ISIS e potências estrangeiras (Rússia, EUA).",
            outcome: "Assad manteve-se no poder com apoio russo. País fragmentado e crise humanitária.",
            trivia: "O conflito gerou uma das maiores crises de refugiados da história recente."
        },
        quiz: { question: "Qual movimento popular iniciou o conflito?", options: ["Revolução Cultural", "Primavera Árabe", "Queda do Muro", "Ocupa Wall Street"], correct: 1 }
    },
    {
        era: "Século XXI",
        bg: "#004D40",
        year: "2014–presente",
        title: "Conflito na Ucrânia",
        details: {
            context: "Ucrânia buscou o Ocidente (OTAN). Rússia viu como ameaça e invadiu.",
            conflict: "Guerra de atrito com drones e artilharia. Ocidente armou a Ucrânia.",
            outcome: "Em curso. Isolamento da Rússia e expansão da OTAN.",
            trivia: "Zelensky era comediante antes de ser presidente. Recusou fugir dizendo: 'Preciso de munição, não de carona'."
        },
        quiz: {
            question: "Qual foi uma consequência geopolítica direta da invasão russa?",
            options: ["Fim da OTAN", "Expansão da OTAN (Finlândia/Suécia)", "União da Rússia com a China", "Paz mundial imediata"],
            correct: 1
        }
    },
    {
        era: "Século XXI", bg: "#004D40", year: "2015–presente",
        title: "Guerra Civil no Iêmen",
        details: {
            context: "Rebeldes Houthis (apoiados pelo Irã) derrubaram o governo (apoiado pela Arábia Saudita).",
            conflict: "Bombardeios aéreos sauditas e bloqueio de portos. Guerra por procuração.",
            outcome: "Em curso. Descrita pela ONU como a pior crise humanitária do mundo (fome e cólera).",
            trivia: "O Iêmen controla o estreito de Bab el-Mandeb, rota vital do petróleo mundial."
        },
        quiz: { question: "Qual é a maior consequência atual deste conflito?", options: ["Avanço tecnológico", "Crise de fome em massa", "Paz no Oriente Médio", "Colonização de Marte"], correct: 1 }
    }
];

// ==========================================
// 2. LÓGICA DO JOGO (ENGINE)
// ==========================================

let currentLevel = 0;
let earnedMedals = []; // Array para guardar medalhas: 0=Sem, 1=Ouro, 2=Prata, 3=Bronze

// Variáveis de Estado da Sessão Atual (Modal)
let sessionTabsRead = new Set();
let sessionQuizAttempts = 0;

// Elementos DOM
const timelineElement = document.getElementById('timeline');
const modal = document.getElementById('modal-overlay');
const actionBtn = document.getElementById('action-btn');
const closeModalBtn = document.getElementById('close-modal');
const body = document.body;
const progressBarFill = document.getElementById('progress-bar-fill');
const progressText = document.getElementById('progress-text');
const levelIndicator = document.getElementById('level-indicator');

// Elementos de Medalha
const goldCountEl = document.getElementById('gold-count');
const silverCountEl = document.getElementById('silver-count');
const bronzeCountEl = document.getElementById('bronze-count');

// Elementos do Quiz
const contentModeDiv = document.getElementById('content-mode');
const quizModeDiv = document.getElementById('quiz-mode');
const quizQuestionEl = document.getElementById('quiz-question');
const quizOptionsEl = document.getElementById('quiz-options');
const quizFeedbackEl = document.getElementById('quiz-feedback');

function loadGame() {
    const savedLevel = localStorage.getItem('historyHuntLevel');
    const savedMedals = localStorage.getItem('historyHuntMedals');

    currentLevel = savedLevel ? parseInt(savedLevel) : 0;
    earnedMedals = savedMedals ? JSON.parse(savedMedals) : new Array(historyData.length).fill(0);

    // Garantir que o array de medalhas tenha o tamanho certo se o jogo for atualizado
    if (earnedMedals.length < historyData.length) {
        const diff = historyData.length - earnedMedals.length;
        for (let i = 0; i < diff; i++) earnedMedals.push(0);
    }

    updateTheme(currentLevel);
    updateScoreboard();
}

function saveGame() {
    localStorage.setItem('historyHuntLevel', currentLevel);
    localStorage.setItem('historyHuntMedals', JSON.stringify(earnedMedals));
    updateScoreboard();
}

function updateTheme(index) {
    const safeIndex = Math.min(index, historyData.length - 1);
    const data = historyData[safeIndex];
    body.style.backgroundColor = data.bg;
}

function getMedalIcon(type) {
    if (type === 1) return '🥇';
    if (type === 2) return '🥈';
    if (type === 3) return '🥉';
    return '';
}

function updateScoreboard() {
    let g = 0, s = 0, b = 0;
    earnedMedals.forEach(m => {
        if (m === 1) g++;
        if (m === 2) s++;
        if (m === 3) b++;
    });
    goldCountEl.innerText = g;
    silverCountEl.innerText = s;
    bronzeCountEl.innerText = b;
}

function renderTimeline() {
    timelineElement.innerHTML = '';

    historyData.forEach((item, index) => {
        const card = document.createElement('div');
        let statusClass = 'locked';
        let icon = '🔒';

        if (index < currentLevel) {
            statusClass = 'completed';
            // Mostra a medalha ganha em vez do check, se houver
            const medal = getMedalIcon(earnedMedals[index]);
            icon = medal ? medal : '✅';
        } else if (index === currentLevel) {
            statusClass = 'unlocked';
            icon = '🔓';
        }

        card.className = `card ${statusClass}`;

        let cardHTML = `
            <div class="card-content">
                <span class="era-tag">${item.era}</span>
                <div class="card-title">${index <= currentLevel ? item.title : '??? Evento Oculto ???'}</div>
                <div class="card-year">${item.year}</div>
            </div>
            <div class="card-status">${icon}</div>
        `;

        card.innerHTML = cardHTML;

        if (index <= currentLevel) {
            card.onclick = () => openModal(index);
        }

        timelineElement.appendChild(card);
    });

    updateProgress();
}

function updateProgress() {
    const percentage = Math.floor((currentLevel / historyData.length) * 100);
    progressBarFill.style.width = `${percentage}%`;
    progressText.innerText = `${percentage}%`;
    levelIndicator.innerText = `Missão ${currentLevel + 1} de ${historyData.length}`;
}

// --- LÓGICA DO MODAL ---

function openModal(index) {
    const data = historyData[index];
    const isCompleted = index < currentLevel;

    // Resetar Estados da Sessão
    sessionTabsRead.clear();
    sessionQuizAttempts = 0;

    // Resetar Visual do Modal
    contentModeDiv.classList.remove('hidden');
    quizModeDiv.classList.add('hidden');
    document.getElementById('modal-footer').classList.remove('hidden');

    // Preencher Infos
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-date').innerText = data.year;
    document.getElementById('modal-era-badge').innerText = data.era;

    // Preencher Conteúdo das Abas
    document.getElementById('tab-contexto').innerHTML = `<p>${data.details.context}</p>`;
    document.getElementById('tab-conflito').innerHTML = `<p>${data.details.conflict}</p>`;
    document.getElementById('tab-desfecho').innerHTML = `<p>${data.details.outcome}</p>`;
    document.getElementById('tab-curiosidade').innerHTML = `
        <div class="highlight-box">
            <strong>Você sabia?</strong><br>
            ${data.details.trivia}
        </div>
    `;

    // Resetar Abas visualmente
    openTab('contexto');

    // Configurar Botão de Ação
    const btn = actionBtn;
    if (isCompleted) {
        // Se já completou, botão fecha
        btn.disabled = false;
        btn.innerText = "Fechar Dossiê";
        btn.style.background = "#95a5a6";
        btn.onclick = closeModal;
    } else {
        // Se é nível atual, inicia bloqueado
        btn.disabled = true;
        btn.innerText = "Leia as 4 abas para liberar";
        btn.style.background = "#27ae60";
        btn.onclick = () => startQuiz(index);
    }

    modal.classList.remove('hidden');
}

function openTab(tabName) {
    // UI das Abas
    const contents = document.getElementsByClassName('tab-content');
    for (let c of contents) c.classList.remove('active-content');
    const btns = document.getElementsByClassName('tab-btn');
    for (let b of btns) b.classList.remove('active');

    document.getElementById(`tab-${tabName}`).classList.add('active-content');

    // Encontrar botão e ativar
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        if (btn.innerText.toLowerCase().includes(tabName)) {
            btn.classList.add('active');
        }
    });

    // LÓGICA DE LEITURA
    // Se o nível ainda não foi completado, rastrear leitura
    if (currentLevel < historyData.length) { // Checa limites
        // Adiciona ao Set de lidos
        sessionTabsRead.add(tabName);
        checkReadingProgress();
    }
}

function checkReadingProgress() {
    // Se já leu as 4 abas (contexto, conflito, desfecho, curiosidade)
    if (sessionTabsRead.size >= 4) {
        actionBtn.disabled = false;
        actionBtn.innerText = "Responder Desafio ⚔️";
    }
}

// --- LÓGICA DO QUIZ ---

function startQuiz(index) {
    // Esconde conteúdo, mostra quiz
    contentModeDiv.classList.add('hidden');
    quizModeDiv.classList.remove('hidden');
    document.getElementById('modal-footer').classList.add('hidden'); // Esconde botão principal

    const data = historyData[index];
    quizQuestionEl.innerText = data.quiz.question;
    quizFeedbackEl.classList.add('hidden');

    // Gerar Opções
    quizOptionsEl.innerHTML = '';
    data.quiz.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(index, i, btn);
        quizOptionsEl.appendChild(btn);
    });
}

function handleAnswer(levelIndex, optionIndex, btnElement) {
    const data = historyData[levelIndex];
    const correctIndex = data.quiz.correct;

    // Desabilitar cliques repetidos momentaneamente
    const allOpts = document.querySelectorAll('.quiz-option');
    allOpts.forEach(b => b.disabled = true);

    if (optionIndex === correctIndex) {
        // ACERTOU
        btnElement.classList.add('correct');
        quizFeedbackEl.innerText = "Correto! Avançando...";
        quizFeedbackEl.style.color = "#27ae60";
        quizFeedbackEl.classList.remove('hidden');

        // Calcular Medalha
        let medal = 3; // Bronze
        if (sessionQuizAttempts === 0) medal = 1; // Ouro
        else if (sessionQuizAttempts === 1) medal = 2; // Prata

        // Salvar Medalha
        earnedMedals[levelIndex] = medal;

        // Aguarda 1.5s e avança
        setTimeout(() => {
            completeLevel(levelIndex);
        }, 1500);

    } else {
        // ERROU
        btnElement.classList.add('wrong');
        quizFeedbackEl.innerText = "Incorreto. Tente novamente.";
        quizFeedbackEl.style.color = "#c0392b";
        quizFeedbackEl.classList.remove('hidden');

        sessionQuizAttempts++;

        // Reabilitar botões após erro para tentar de novo
        setTimeout(() => {
            allOpts.forEach(b => b.disabled = false);
            btnElement.classList.remove('wrong'); // Remove estilo de erro
            quizFeedbackEl.classList.add('hidden');
        }, 1000);
    }
}

function completeLevel(index) {
    if (index === currentLevel) {
        currentLevel++;
        saveGame();
        updateTheme(currentLevel);
        renderTimeline();
        closeModal();

        setTimeout(() => {
            const cards = document.querySelectorAll('.card');
            if (cards[currentLevel]) {
                cards[currentLevel].scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 300);
    }
}

function closeModal() {
    modal.classList.add('hidden');
}

function resetGame() {
    if (confirm("ATENÇÃO: Isso apagará todo o seu progresso e medalhas. Deseja recomeçar?")) {
        localStorage.removeItem('historyHuntLevel');
        localStorage.removeItem('historyHuntMedals');
        loadGame(); // Recarrega do zero
        renderTimeline();
        window.scrollTo(0, 0);
    }
}

closeModalBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target == modal) closeModal(); };

// Iniciar
loadGame();
renderTimeline();