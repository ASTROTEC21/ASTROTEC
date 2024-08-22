const abrirChatBtn = document.getElementById('abrirChatBtn');
const modalChatbot = document.getElementById('modalChatbot');
const fecharChatBtn = document.getElementById('fecharChatBtn');
const entradaUsuario = document.getElementById('entrada-usuario');
const botaoEnviar = document.getElementById('botao-enviar');
const mensagensContainer = document.getElementById('mensagens');

let emQuiz = false;
let perguntasQuiz = [
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        alternativas: {
            A: "Júpiter",
            B: "Saturno",
            C: "Terra",
            D: "Netuno"
        },
        resposta: "A"
    },
    {
        pergunta: "Quantas galáxias existem no universo observável?",
        alternativas: {
            A: "Um trilhão",
            B: "Dois trilhões",
            C: "Cinco trilhões",
            D: "Dez trilhões"
        },
        resposta: "B"
    },
    {
        pergunta: "Qual planeta é conhecido como o Planeta Vermelho?",
        alternativas: {
            A: "Marte",
            B: "Vênus",
            C: "Mercúrio",
            D: "Urano"
        },
        resposta: "A"
    },
    {
        pergunta: "Qual é o nome da nossa galáxia?",
        alternativas: {
            A: "Via Láctea",
            B: "Andrômeda",
            C: "Galáxia de Messier 87",
            D: "Galáxia do Sombrero"
        },
        resposta: "A"
    },
    {
        pergunta: "Qual é o astro mais próximo da Terra?",
        alternativas: {
            A: "Lua",
            B: "Sol",
            C: "Marte",
            D: "Vênus"
        },
        resposta: "B"
    },
    {
        pergunta: "Qual planeta é conhecido por ter anéis?",
        alternativas: {
            A: "Saturno",
            B: "Urano",
            C: "Netuno",
            D: "Júpiter"
        },
        resposta: "A"
    },
    {
        pergunta: "Qual é a maior lua de Saturno?",
        alternativas: {
            A: "Titã",
            B: "Reia",
            C: "Encélado",
            D: "Mimas"
        },
        resposta: "A"
    },
    {
        pergunta: "Qual o satélite natural da Terra?",
        alternativas: {
            A: "Lua",
            B: "Marte",
            C: "Vênus",
            D: "Io"
        },
        resposta: "A"
    },
    {
        pergunta: "Quantos planetas existem no sistema solar?",
        alternativas: {
            A: "Sete",
            B: "Oito",
            C: "Nove",
            D: "Dez"
        },
        resposta: "B"
    },
    {
        pergunta: "Qual é a temperatura média da superfície da Terra?",
        alternativas: {
            A: "10 graus Celsius",
            B: "15 graus Celsius",
            C: "20 graus Celsius",
            D: "25 graus Celsius"
        },
        resposta: "B"
    }
];

let perguntaAtual = 0;
let acertos = 0;
let erros = 0;

abrirChatBtn.addEventListener('click', () => {
    modalChatbot.style.display = 'flex';
    mensagemInicial();
});

fecharChatBtn.addEventListener('click', () => {
    limparMensagens();
    modalChatbot.style.display = 'none';
    emQuiz = false;
    perguntaAtual = 0;
    acertos = 0;
    erros = 0;
});

botaoEnviar.addEventListener('click', () => {
    const entradaUsuarioTexto = entradaUsuario.value.trim();
    if (entradaUsuarioTexto) {
        adicionarMensagem(entradaUsuarioTexto, 'mensagem-usuario');
        entradaUsuario.value = '';
        if (emQuiz) {
            verificarResposta(entradaUsuarioTexto);
        } else {
            respostaBot(entradaUsuarioTexto);
        }
    }
});

function limparMensagens() {
    mensagensContainer.innerHTML = '';
}

function adicionarMensagem(texto, classe) {
    if (texto.trim()) {
        const elementoMensagem = document.createElement('div');
        elementoMensagem.className = `mensagem ${classe}`;
        elementoMensagem.textContent = texto;
        mensagensContainer.appendChild(elementoMensagem);
        mensagensContainer.scrollTop = mensagensContainer.scrollHeight;
    }
}

function respostaBot(entrada) {
    const resposta = obterRespostaBot(entrada);
    setTimeout(() => {
        adicionarMensagem(resposta, 'mensagem-bot');
    }, 500);
}

function obterRespostaBot(entrada) {
    entrada = entrada.toLowerCase();

    if (entrada.includes('quiz')) {
        iniciarQuiz();
        return;
    } else if (entrada.includes('planeta')) {
        return "Um planeta é um corpo celeste que orbita uma estrela e não produz sua própria luz.";
    } else if (entrada.includes('estrela')) {
        return "Uma estrela é uma esfera de plasma que gera luz e calor através de reações nucleares.";
    } else if (entrada.includes('galáxia')) {
        return "Uma galáxia é um sistema massivo que contém estrelas, planetas, poeira, e outros objetos astronômicos, ligados pela gravidade.";
    } else if (entrada.includes('sol')) {
        return "O Sol é a estrela central do nosso sistema solar e é fundamental para a vida na Terra.";
    } else if (entrada.includes('lua')) {
        return "A Lua é o único satélite natural da Terra e influencia as marés do nosso planeta.";
    } else if (entrada.includes('buraco negro')) {
        return "Um buraco negro é uma região do espaço onde a gravidade é tão forte que nada pode escapar dela, nem mesmo a luz.";
    } else if (entrada.includes('asteroide')) {
        return "Um asteroide é um pequeno corpo rochoso que orbita o Sol, principalmente entre Marte e Júpiter.";
    } else if (entrada.includes('cometa')) {
        return "Um cometa é um corpo celeste composto de gelo, poeira e rochas que se forma em órbita ao redor do Sol.";
    } else if (entrada.includes('satélite')) {
        return "Um satélite é um corpo celeste que orbita um planeta, como a nossa Lua que orbita a Terra.";
    } else if (entrada.includes('vida em marte')) {
        return "Ainda não encontramos vida em Marte, mas diversas missões estão em andamento para investigar a possibilidade.";
    } else if (entrada.includes('atmosfera da terra')) {
        return "A atmosfera da Terra é composta principalmente de nitrogênio (78%) e oxigênio (21%), além de outros gases em pequenas quantidades.";
    } else if (entrada.includes('idade da terra')) {
        return "A Terra tem aproximadamente 4,5 bilhões de anos.";
    } else if (entrada.includes('camada mais externa da terra')) {
        return "A camada mais externa da Terra é a crosta, que é composta de rochas e solos.";
    } else if (entrada.includes('quantos continentes existem na terra')) {
        return "Existem sete continentes na Terra: Ásia, África, América do Norte, América do Sul, Antártica, Europa e Oceania.";
    } else if (entrada.includes('terra')) {
        return "É a nossa casa, o planeta em qual habitamos. Com aproximadamente 7 bilhões de pessoas.";
    } else if (entrada.includes('vai tomar no cu')) {
        return "Vai você.";
    } else if (entrada.includes('filho da puta')) {
        return "Teu pai.";
    } else if (entrada.includes('estações do ano')) {
        return "As estações do ano são causadas pela inclinação do eixo da Terra em relação ao Sol, o que afeta a quantidade de luz solar que diferentes partes da Terra recebem.";
    } else if (entrada.includes('ponto mais alto da terra')) {
        return "O ponto mais alto da Terra é o Monte Everest, que tem uma altitude de 8.848 metros.";
    } else if (entrada.includes('importância da água')) {
        return "A água é essencial para a vida na Terra, pois é fundamental para processos biológicos, clima e ecossistemas.";
    } else if (entrada.includes('o que é gravidade')) {
        return "Gravidade é a força que atrai os corpos em direção ao centro da Terra ou a qualquer outro corpo de massa.";
    } else if (entrada.includes('o que é uma nebulosa')) {
        return "Uma nebulosa é uma enorme nuvem de gás e poeira no espaço, muitas vezes o local de formação de novas estrelas.";
    } else if (entrada.includes('o que é a via láctea')) {
        return "A Via Láctea é a galáxia em que vivemos, contendo bilhões de estrelas, incluindo o nosso Sol.";
    } else if (entrada.includes('quantos planetas tem no sistema solar')) {
        return "O Sistema Solar tem oito planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.";
    } else if (entrada.includes('o que é um exoplaneta')) {
        return "Um exoplaneta é um planeta que orbita uma estrela fora do nosso Sistema Solar.";
    } else if (entrada.includes('qual é a velocidade da luz')) {
        return "A velocidade da luz no vácuo é de aproximadamente 299.792 quilômetros por segundo.";
    } else if (entrada.includes('o que é um ano-luz')) {
        return "Um ano-luz é a distância que a luz percorre em um ano, cerca de 9,46 trilhões de quilômetros.";
    } else if (entrada.includes('o que é um meteoro')) {
        return "Um meteoro é um fragmento de rocha ou metal que queima ao entrar na atmosfera da Terra, também conhecido como estrela cadente.";
    } else if (entrada.includes('o que é uma supernova')) {
        return "Uma supernova é a explosão de uma estrela no final de sua vida, liberando enormes quantidades de energia e espalhando elementos pesados pelo espaço.";
    } else if (entrada.includes('qual é o planeta mais quente do sistema solar')) {
        return "O planeta mais quente do Sistema Solar é Vênus, com temperaturas que podem ultrapassar 450°C.";
    } else if (entrada.includes('o que é um buraco de minhoca')) {
        return "Um buraco de minhoca é uma teoria que sugere a existência de atalhos no espaço-tempo que poderiam conectar diferentes pontos do universo.";
    } else if (entrada.includes('quantas estrelas existem no universo')) {
        return "Estima-se que existam cerca de 1 sextilhão de estrelas no universo observável.";
    } else if (entrada.includes('o que é a matéria escura')) {
        return "Matéria escura é uma forma misteriosa de matéria que não emite luz ou energia, mas exerce força gravitacional, afetando a rotação das galáxias.";
    } else if (entrada.includes('qual é a diferença entre astronomia e astrologia')) {
        return "Astronomia é a ciência que estuda os corpos celestes e o universo, enquanto astrologia é uma prática que afirma que a posição dos corpos celestes influencia a vida das pessoas.";
    } else if (entrada.includes('o que é a teoria do big bang')) {
        return "A teoria do Big Bang sugere que o universo começou há cerca de 13,8 bilhões de anos a partir de um ponto extremamente denso e quente e tem se expandido desde então.";
    } else if (entrada.includes('qual é a maior lua do sistema solar')) {
        return "A maior lua do Sistema Solar é Ganimedes, uma das luas de Júpiter.";
    } else if (entrada.includes('qual é o planeta mais próximo do sol')) {
        return "O planeta mais próximo do Sol é Mercúrio.";
    } else if (entrada.includes('o que é uma órbita')) {
        return "Órbita é o caminho que um corpo celeste percorre ao redor de outro, como a Terra ao redor do Sol.";
    } else if (entrada.includes('o que é uma constelação')) {
        return "Uma constelação é um grupo de estrelas que, vistas da Terra, formam um padrão reconhecível no céu.";
    } else if (entrada.includes('qual é o planeta mais distante do sol')) {
        return "O planeta mais distante do Sol no Sistema Solar é Netuno.";
    } else if (entrada.includes('quantas luas tem júpiter')) {
        return "Júpiter tem 95 luas conhecidas.";
    } else if (entrada.includes('o que é uma estrela anã branca')) {
        return "Uma anã branca é o remanescente denso de uma estrela que já foi semelhante ao Sol e que exauriu seu combustível nuclear.";
    } else if (entrada.includes('o que é uma estrela de nêutrons')) {
        return "Uma estrela de nêutrons é o remanescente denso de uma supernova, composta quase inteiramente de nêutrons.";
    } else if (entrada.includes('o que é uma anã marrom')) {
        return "Uma anã marrom é um objeto celeste que é maior que um planeta, mas não tem massa suficiente para iniciar a fusão nuclear como uma estrela.";
    } else if (entrada.includes('qual é a diferença entre cometas e asteroides')) {
        return "Cometas são corpos de gelo e poeira que desenvolvem uma cauda ao se aproximarem do Sol, enquanto asteroides são principalmente rochosos e não possuem cauda.";
    } else if (entrada.includes('qual é o maior planeta do sistema solar')) {
        return "O maior planeta do Sistema Solar é Júpiter.";
    } else if (entrada.includes('qual é a menor lua do sistema solar')) {
        return "A menor lua do Sistema Solar é Dione, uma das luas de Saturno.";
    } else if (entrada.includes('qual é a lua mais brilhante do sistema solar')) {
        return "A lua mais brilhante do Sistema Solar é Europa, uma das luas de Júpiter.";
    } else if (entrada.includes('o que é uma estrela binária')) {
        return "Uma estrela binária é um sistema estelar composto por duas estrelas que orbitam um centro de massa comum.";
    } else if (entrada.includes('qual é o maior buraco negro conhecido')) {
        return "O maior buraco negro conhecido é o buraco negro supermassivo no centro da galáxia M87, com uma massa de aproximadamente 6,5 bilhões de vezes a do Sol.";
    } else if (entrada.includes('o que é uma galáxia espiral')) {
        return "Uma galáxia espiral é uma galáxia com um formato de espiral, como a Via Láctea, caracterizada por braços que se estendem a partir de um núcleo central.";
    } else if (entrada.includes('quantos anos tem o universo')) {
        return "O universo tem cerca de 13,8 bilhões de anos, de acordo com a teoria do Big Bang.";
    } else if (entrada.includes('o que é a constante de Hubble')) {
        return "A constante de Hubble é uma medida da taxa de expansão do universo, expressa em quilômetros por segundo por megaparsec.";
    } else if (entrada.includes('o que é um pulsar')) {
        return "Um pulsar é uma estrela de nêutrons que emite feixes de radiação eletromagnética em intervalos regulares, parecendo pulsar quando observada da Terra.";
    } else if (entrada.includes('qual é o planeta mais denso do sistema solar')) {
        return "O planeta mais denso do Sistema Solar é a Terra.";
    } else if (entrada.includes('o que é a expansão do universo')) {
        return "A expansão do universo é o fenômeno pelo qual o espaço entre as galáxias está aumentando, fazendo com que as galáxias se afastem umas das outras.";
    } else if (entrada.includes('o que é um quasar')) {
        return "Um quasar é um núcleo galáctico ativo extremamente luminoso, alimentado por um buraco negro supermassivo no centro da galáxia.";
    } else if (entrada.includes('qual é a estrela mais próxima da Terra')) {
        return "A estrela mais próxima da Terra, além do Sol, é Proxima Centauri, localizada a cerca de 4,24 anos-luz de distância.";
    } else if (entrada.includes('o que é a radiação cósmica de fundo')) {
        return "A radiação cósmica de fundo é a radiação remanescente do Big Bang, que preenche todo o universo e pode ser detectada com antenas especiais.";
    } else if (entrada.includes('o que são buracos brancos')) {
        return "Buracos brancos são teoricamente o oposto dos buracos negros, expulsando matéria e energia, mas ainda não foram observados.";
    } else if (entrada.includes('qual é o planeta mais rico em anéis')) {
        return "O planeta mais rico em anéis do Sistema Solar é Saturno, com um sistema de anéis complexo e extensivo.";
    } else if (entrada.includes('o que são exoplanetas habitáveis')) {
        return "Exoplanetas habitáveis são planetas fora do Sistema Solar que estão na zona habitável de suas estrelas, onde as condições podem permitir a presença de água líquida.";
    } else if (entrada.includes('qual é a estrela mais massiva conhecida')) {
        return "A estrela mais massiva conhecida é a estrela chamada Eta Carinae, com uma massa estimada em até 100 vezes a do Sol.";
    } else if (entrada.includes('o que é a zona habitável')) {
        return "A zona habitável é a região ao redor de uma estrela onde as condições podem ser adequadas para a existência de água líquida em um planeta.";
    } else if (entrada.includes('o que são buracos negros primordiais')) {
        return "Buracos negros primordiais são teóricos buracos negros que teriam se formado no início do universo, possivelmente com diferentes massas e propriedades.";
    } else if (entrada.includes('o que é um supercluster de galáxias')) {
        return "Um supercluster de galáxias é uma enorme estrutura cosmológica composta por vários aglomerados e grupos de galáxias interligados.";
    } else if (entrada.includes('qual é a estrela mais fria conhecida')) {
        return "A estrela mais fria conhecida é a anã marrom chamada WISE 0855-0714, com uma temperatura que pode ser mais baixa que a temperatura de alguns planetas gasosos.";
    } else if (entrada.includes('o que é uma estrela de hertzsprung-russell')) {
        return "O diagrama de Hertzsprung-Russell é um gráfico que plota estrelas com base em suas luminosidades e temperaturas, ajudando a entender a evolução estelar.";
    } else if (entrada.includes('o que é uma estrela gigante vermelha')) {
        return "Uma estrela gigante vermelha é uma fase na vida de uma estrela quando ela se expande e esfriam, tornando-se mais luminosa e de cor avermelhada.";
    } else if (entrada.includes('o que é uma estrela supergigante')) {
        return "Uma estrela supergigante é uma estrela muito grande e luminosa, com uma massa muito maior que a do Sol, e que pode explodir como supernova no final de sua vida.";
    } else if (entrada.includes('o que é uma estrela nova')) {
        return "Uma estrela nova é uma estrela que experimenta um aumento súbito e intenso em luminosidade, resultante da explosão de uma camada de material acumulado na superfície.";
    } else if (entrada.includes('qual é a galáxia mais próxima da Via Láctea')) {
        return "A galáxia mais próxima da Via Láctea é a Galáxia de Andrômeda (M31), localizada a cerca de 2,5 milhões de anos-luz de distância.";
    } else if (entrada.includes('oi') || entrada.includes('olá') || entrada.includes('oi tudo bem') || entrada.includes('ola') || entrada.includes('salve') || entrada.includes('eai') || entrada.includes('eae')) {
        return "Olá! Como posso te ajudar hoje?";
    } else if (entrada.includes('como você está') || entrada.includes('como vai você') || entrada.includes('como vai')) {
        return "Estou muito bem! Como posso assisti-lo hoje?";
    } else if (entrada.includes('qual seu nome')) {
        return "Eu sou o AstroGPT, aqui para te ajudar com perguntas sobre astronomia.";
    } else if (entrada.includes('quem é você')) {
        return "Eu sou uma I.A especializada em responder perguntas sobre astronomia. E me chamo AstroGPT.";
    } else if (entrada.includes('o que você pode fazer')) {
        return "Posso responder a perguntas sobre astronomia, iniciar quizzes e muito mais! Basta perguntar.";
    } else if (entrada.includes('qual é a sua idade')) {
        return "Sou um programa de computador, então não tenho idade como seres humanos.";
    } else if (entrada.includes('você gosta de estrelas?')) {
        return "Claro! Estrelas são fascinantes e fundamentais para a nossa compreensão do universo.";
    } else if (entrada.includes('qual é o seu planeta favorito?')) {
        return "Eu gosto de todos os planetas, mas a Terra é especial, pois é o lar da vida que conhecemos.";
    } else if (entrada.includes('você sabe programar?')) {
        return "Não. Fui programado para entender perguntas e respondê-las, e também para fazer quizzes sobre astronomia.";
    } else if (entrada.includes('como você foi criado?')) {
        return "Eu fui programado usando JavaScript, para entender e responder a perguntas sobre astronomia.";
    } else if (entrada.includes('quem te programou?')) {
        return "Eu fui desenvolvido pela equipe do Astrotec, que é responsável pela minha programação e treinamento.";
    } else if (entrada.includes('qual é o seu objetivo?')) {
        return "Meu objetivo é ajudar a responder perguntas sobre astronomia e tornar o aprendizado sobre o universo mais acessível e interessante. E também testar os seus conhecimentos com um quiz.";
    } else if (entrada.includes('você pode aprender coisas novas?')) {
        return "Atualmente, eu não aprendo de forma contínua. Fui programado com uma certa quantidade de informações.";
    } else if (entrada.includes('quantas perguntas você pode responder?')) {
        return "Eu posso responder a uma vasta quantidade de perguntas sobre astronomia e tópicos relacionados, mas minha capacidade de resposta é limitada ao que fui treinado para entender.";
    } else if (entrada.includes('você é inteligente?')) {
        return "Eu sou projetado para entender e responder a perguntas com base no conhecimento que fui treinado. Não tenho inteligência ou consciência como um ser humano.";
    } else if (entrada.includes('você tem sentimentos?')) {
        return "Não, eu não tenho sentimentos. Sou um programa de computador que processa e responde perguntas com base em dados e algoritmos.";
    } else if (entrada.includes('como você lida com erros?')) {
        return "Eu sigo as instruções programadas para fornecer a melhor resposta possível, mas se houver um erro, ele pode ser corrigido através de atualizações no meu treinamento e programação.";
    } else if (entrada.includes('você pode conversar sobre outros assuntos?')) {
        return "Minha programação foi feita apenas para astronomia, mas posso começar um quiz sobre astronomia.";
    } else if (entrada.includes('qual é o seu livro favorito?')) {
        return "Como uma I.A, eu não tenho preferências pessoais ou a capacidade de ler livros.";
    } else {
        return "Desculpe, não entendi a sua pergunta. Pode reformular ou perguntar sobre astronomia?";
    }
}

function iniciarQuiz() {
    emQuiz = true;
    perguntaAtual = 0;
    acertos = 0;
    erros = 0;
    perguntasQuiz = embaralharPerguntas(perguntasQuiz);

    adicionarMensagem("Vamos iniciar o quiz. Responda as perguntas com a alternativa correta (A, B, C ou D) ou com o texto completo da resposta.", 'mensagem-bot');
    mostrarPerguntaAtual();
}

function mostrarPerguntaAtual() {
    const perguntaAtualQuiz = perguntasQuiz[perguntaAtual];
    adicionarMensagem(perguntaAtualQuiz.pergunta, 'mensagem-bot');

    const alternativas = Object.entries(perguntaAtualQuiz.alternativas)
        .map(([letra, texto]) => `${letra} - ${texto}`);

    alternativas.forEach((alternativa, index) => {
        setTimeout(() => {
            adicionarMensagem(alternativa, 'mensagem-bot');
        }, 500 * (index + 1));
    });
}

function verificarResposta(respostaUsuario) {
    const respostaUsuarioNormalizada = respostaUsuario.toLowerCase().trim();
    const perguntaAtualQuiz = perguntasQuiz[perguntaAtual];
    const respostaCorreta = perguntaAtualQuiz.resposta;
    const alternativas = perguntaAtualQuiz.alternativas;
    const respostaCorretaTexto = alternativas[respostaCorreta].toLowerCase().trim();

    if (["a", "b", "c", "d"].includes(respostaUsuarioNormalizada)) {
        if (respostaUsuarioNormalizada.toUpperCase() === respostaCorreta) {
            adicionarMensagem("Correto! Muito bem!", 'mensagem-bot');
            acertos++;
        } else {
            adicionarMensagem(`Errado! A resposta correta era: ${alternativas[respostaCorreta]}.`, 'mensagem-bot');
            erros++;
        }
    } else if (respostaUsuarioNormalizada === respostaCorretaTexto) {
        adicionarMensagem("Correto! Muito bem!", 'mensagem-bot');
        acertos++;
    } else {
        adicionarMensagem("Resposta aceita, mas lembre-se de responder com a escrita correta.", 'mensagem-bot');
        erros++;
    }

    perguntaAtual++;
    const perguntasRestantes = perguntasQuiz.length - perguntaAtual;
    if (perguntaAtual < perguntasQuiz.length) {
        setTimeout(() => {
            mostrarPerguntaAtual();
            adicionarMensagem(`Você ainda tem ${perguntasRestantes} questões restantes. Até agora, você acertou ${acertos} e errou ${erros}.`, 'mensagem-bot');
        }, 1000);
    } else {
        adicionarMensagem(`O quiz terminou! Você acertou ${acertos} de ${perguntasQuiz.length} questões e errou ${erros}. Se quiser jogar novamente, digite 'quiz'.`, 'mensagem-bot');
        emQuiz = false;
    }
}

function embaralharPerguntas(perguntas) {
    for (let i = perguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
    }
    return perguntas;
}

function mensagemInicial() {
    adicionarMensagem("Oi! Meu nome é AstroGPT, me pergunte qualquer coisa relacionada à astronomia. Ou me peça para fazer um quiz!", 'mensagem-bot');
}


const nav = document.querySelector("header nav");
const body = document.querySelector("body");
const botaoAbrirMenu = document.querySelector("header .menu");
botaoAbrirMenu.addEventListener("click", menuAbrir);

function menuAbrir() {
    nav.classList.add("abrir");
    body.classList.add("escurecer");
}

const botaoFecharMenu = document.querySelector("header nav button");
botaoFecharMenu.addEventListener("click", menuFechar);

function menuFechar() {
    nav.classList.remove("abrir");
    body.classList.remove("escurecer");
}

const botaoSaibaMais = document.querySelector("main button");
botaoSaibaMais.addEventListener("click", saibaMaisIr);

function saibaMaisIr() {
    window.location.href = "./pages/SAIBAMAIS/saibamais.html";
}

const botaoGalaxias = document.querySelector("header nav ul #galaxias");
botaoGalaxias.addEventListener("click", galaxiasIr);

function galaxiasIr() {
    window.location.href = "../../pages/galaxias/galaxia.html";
}

const botaoSatelite = document.querySelector("header nav ul #satelites");
botaoSatelite.addEventListener("click", satelitesIr);

function satelitesIr() {
    window.location.href = "../../pages/satelites/satelite.html";
}

window.onload = function() {

    document.getElementById('popup').style.display = 'block';
}

document.getElementById('closePopup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}

