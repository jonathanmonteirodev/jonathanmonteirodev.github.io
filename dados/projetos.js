
var projetos = [
    {
        src: "img/sites/gestus.png",
        nome: "Gestus",
        ano: 2020,
        tipo: "site",
        conteudo: '<p>"Melhorar a vida das pessoas desenvolvendo projetos de impacto social com um time forte sonhador" Essa é a missão do Time Enactus UFC , o qual desenvolve 4 projetos de impacto social com base nos Objetivos de Desenvolvimento Sustentável (ODSs) da ONU. Nesse contexto, 9,7 milhões de brasileiros são surdos, dos quais 70% não compreende plenamente a língua portuguesa e apenas 1% tem carteira de trabalho assinada, segundo o último Censo do IBGE. Pensando nessa problemática o Time desenvolveu o Projeto Caleidoscópio, que visa ao empoderamento da comunidade surda por meio do apoio institucional à ASOF (Associação dos Surdos Organizados de Fortaleza), de modo a desenvolver ações que fomentem o empreendedorismo na Associação e da aplicação do Gestus - recurso educativo digital voltado para sensibilização de crianças em idade escolar sobre a cultura surda e Língua de Sinais - em escolas de Fortaleza e Região Metropolitana</p><p>O contato tardio com a LIBRAS (Língua Brasileira de Sinais) é um dos principais obstáculos enfrentados pelas escolas quanto à inclusão de alunos surdos na chamada sala de aula convencional. Isso ocorre porque não há incentivo para aprender LIBRAS, assim como existe no idioma português, embora ambos sejam idiomas oficiais do Brasil. O Projeto Gestus visa aproximar o contato de crianças, entre 7 e 10 anos, com o ensino da LIBRAS, a fim de tornar natural esse processo de aquisição da língua do segundo país, bem como o processo de adaptação de crianças ouvintes com surdos crianças no mesmo espaço escolar.</p>',
        participacao: '<h5>Minha participação no <b>Gestus - Enactus UFC</b></h5><p>Entrei na Enactus em março de 2020 com o objetivo de aprimorar o desenvolvimento do jogo do Gestus, implementar a fase final e participar da criação da fase ambiental do jogo.</p>',
        linguagens: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
        codigo: 'https://github.com/gestusjogo/gestusjogo.github.io',
        site: 'https://gestusjogo.github.io/'
    },    {
        src: "img/sites/socialteen.png",
        nome: "Social Teen",
        ano: 2016,
        tipo: "site",
        conteudo: '',
        participacao: '<h5>Minha participação no <b>SocialTeen</b></h5><p></p>',
        linguagens: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
        codigo: 'https://github.com/socialteen/socialteen.github.io',
        site: 'https://socialteen.github.io/'
    },
    {
        src: "img/jogos/goMonkey.png",
        nome: "GO MONKEY!",
        ano: 2020,
        tipo: "jogo",
        conteudo: '<p>O jogo "GO MONKEY!" foi desenvolvido em 2020 para a cadeira de <b>Matemática Aplicada a Multimídia</b> no segundo semestre do curso de <b>Sistemas e Mídias Digitais</b> da <b>Universidade Federal do Ceará</b>. O objetivo do trabalho foi criar um releitura de um jogo clássico da segunda geração de video games( Atari 2600, Magnavox Odyssey 2, entre outros). O escolhido por mim foi o Squish \'em. O Squish\'em, também conhecido como Squish\'em Sam, é um videogame de 1983 projetado por Tony Ngo e publicado pela Sirius Software para a família de 8 bits Atari, VIC-20, Commodore 64, MSX e o console ColecoVision.</p><p>O macaco Squish(Em homenagem ao nome original do jogo) tem como objetivo resgatar o seu pequeno filhote capturado por uma águia e levado ao ninho da mesma no topo de uma imensa árvore. Squish tem que escalar no cipos e andar nos troncos da árvore enquanto derruba lagartos e esquiva das pedras jogadas pela águia.</p>',
        participacao: '<h5>Minha participação no <b>Go Monkey!</b></h5><p>Foi meu primeiro jogo desenvolvido individualmente, tanto a parte da programação quanto a de design, que foi um grande desafio pois não sabia como criar artes e animações muito bem, mas acredito que consegui ficar satisfeito com o resultado. O personagem e suas animações foram desenvolvidos com Adobe Illustrator e com base nos típicos desenhos de macacos. A águia e os lagartos foram baseados em animais reais e suas animações foram com base em movimentos básicos de animação.</p>',
        linguagens: ['Godot Engine', "GDScript"],
        codigo: 'https://github.com/jonathanmonteirodev/Go_monkey',
        zip: "window.location.href='https://github.com/jonathanmonteirodev/Go_monkey/raw/master/GOMONKEY.zip';",
        exe: "window.location.href='https://github.com/jonathanmonteirodev/Go_monkey/raw/master/GOMONKEY.exe';",
        pck: "window.location.href='https://github.com/jonathanmonteirodev/Go_monkey/raw/master/GOMONKEY.pck';"
    },
    {
        src: "img/designs/baby.png",
        nome: "Animação macaco bebê chorando",
        ano: 2020,
        tipo: "design",
        conteudo: '',
        participacao: '<h5>Minha participação na animação <b>macaco bebê chorando</b></h5>',
        linguagens: ['Illustrator', 'Photoshop']
    },
    {
        src: "img/designs/squish_andar.png",
        nome: "Animação squish andando",
        ano: 2020,
        tipo: "design",
        conteudo: '',
        participacao: '<h5>Minha participação na animação <b>squish atacando</b></h5>',
        linguagens: ['Illustrator', 'Photoshop']
    },
    {
        src: "img/designs/squish_atacar.png",
        nome: "Animação squish atacando",
        ano: 2020,
        tipo: "design",
        conteudo: '',
        participacao: '<h5>Minha participação na animação <b>squish atacando</b></h5>',
        linguagens: ['Illustrator', 'Photoshop']
    },
];

var design_infos = [
    {
        nome: "Animação macaco bebê chorando",
        frames: 4,
        altura: 153,
        largura: 625
    },
    {
        nome: "Animação squish atacando",
        frames: 7,
        altura: 346,
        largura: 1581
    },
    {
        nome: "Animação squish andando",
        frames: 10,
        altura: 397,
        largura: 3206
    }
];


function compararAno(a, b) {
    if (a.ano < b.ano) {
        return -1;
    }else if(b.ano < a.ano) {
        return 1;
    }
    // a deve ser igual a b
    return 0;
}
projetos = projetos.sort(compararAno);