const cartas = [
    carta1 = {
        nome: "Aether",
        imagem: "imagens/aether.jpg",
        atributos: {
            ATAQUE: 6,
            DEFESA: 6,
            INTELIGÊNCIA: 6,
        }
    },
    carta2 = {
        nome: "Lumine",
        imagem: "imagens/lumine.jpg",
        atributos: {
            ATAQUE: 8,
            DEFESA: 7,
            INTELIGÊNCIA: 9,
        }
    },
    carta3 = {
        nome: "Amber",
        imagem: "imagens/amber.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 2,
            INTELIGÊNCIA: 3,
        }
    },
    carta4 = {
        nome: "Kaeya Alberich",
        imagem: "imagens/kaeya.jpg",
        atributos: {
            ATAQUE: 6,
            DEFESA: 5,
            INTELIGÊNCIA: 7,
        }
    },
    carta5 = {
        nome: "Lisa Minci",
        imagem: "imagens/lisa.jpg",
        atributos: {
            ATAQUE: 6,
            DEFESA: 4,
            INTELIGÊNCIA: 8,
        }
    },
    carta6 = {
        nome: "Barbara Pegg",
        imagem: "imagens/barbara.jpg",
        atributos: {
            ATAQUE: 2,
            DEFESA: 4,
            INTELIGÊNCIA: 3,
        }
    },
    carta7 = {
        nome: "Razor",
        imagem: "imagens/razor.jpg",
        atributos: {
            ATAQUE: 5,
            DEFESA: 6,
            INTELIGÊNCIA: 1,
        }
    },
    carta8 = {
        nome: "Xiangling",
        imagem: "imagens/xiangling.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 3,
            INTELIGÊNCIA: 4,
        }
    },
    carta9 = {
        nome: "Beidou",
        imagem: "imagens/beidou.jpg",
        atributos: {
            ATAQUE: 8,
            DEFESA: 7,
            INTELIGÊNCIA: 6,
        }
    },
    carta10 = {
        nome: "Xingqiu",
        imagem: "imagens/xingqiu.jpg",
        atributos: {
            ATAQUE: 5,
            DEFESA: 6,
            INTELIGÊNCIA: 7,
        }
    },
    carta11 = {
        nome: "Ningguang",
        imagem: "imagens/ningguang.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 6,
            INTELIGÊNCIA: 8,
        }
    },
    carta12 = {
        nome: "Fischl",
        imagem: "imagens/fischl.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 3,
            INTELIGÊNCIA: 4,
        }
    },
    carta13 = {
        nome: "Bennett",
        imagem: "imagens/bennett.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 5,
            INTELIGÊNCIA: 4,
        }
    },
    carta14 = {
        nome: "Noelle",
        imagem: "imagens/noelle.jpg",
        atributos: {
            ATAQUE: 6,
            DEFESA: 7,
            INTELIGÊNCIA: 4,
        }
    },
    carta15 = {
        nome: "Chongyun",
        imagem: "imagens/chongyun.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 3,
            INTELIGÊNCIA: 4,
        }
    },
    carta16 = {
        nome: "Sucrose",
        imagem: "imagens/sucrose.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 2,
            INTELIGÊNCIA: 7,
        }
    },
    carta17 = {
        nome: "Jean Gunnhildr",
        imagem: "imagens/jean.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 5,
            INTELIGÊNCIA: 8,
        }
    },
    carta18 = {
        nome: "Diluc Ragnvindr",
        imagem: "imagens/diluc.jpg",
        atributos: {
            ATAQUE: 8,
            DEFESA: 6,
            INTELIGÊNCIA: 7,
        }
    },
    carta19 = {
        nome: "Qiqi",
        imagem: "imagens/qiqi.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 7,
            INTELIGÊNCIA: 1,
        }
    },
    carta20 = {
        nome: "Mona Megistus",
        imagem: "imagens/mona.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 5,
            INTELIGÊNCIA: 8,
        }
    },
    carta21 = {
        nome: "Keqing",
        imagem: "imagens/keqing.jpg",
        atributos: {
            ATAQUE: 6,
            DEFESA: 5,
            INTELIGÊNCIA: 6,
        }
    },
    carta22 = {
        nome: "Venti",
        imagem: "imagens/venti.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 5,
            INTELIGÊNCIA: 9,
        }
    },
    carta23 = {
        nome: "Klee",
        imagem: "imagens/klee.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 4,
            INTELIGÊNCIA: 2,
        }
    },
    carta24 = {
        nome: "Diona",
        imagem: "imagens/diona.jpg",
        atributos: {
            ATAQUE: 2,
            DEFESA: 3,
            INTELIGÊNCIA: 3,
        }
    },
    carta25 = {
        nome: "Tartaglia",
        imagem: "imagens/tartaglia.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 6,
            INTELIGÊNCIA: 7,
        }
    },
    carta26 = {
        nome: "Xinyan",
        imagem: "imagens/xinyan.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 5,
            INTELIGÊNCIA: 4,
        }
    },
    carta27 = {
        nome: "Zhongli",
        imagem: "imagens/zhongli.jpg",
        atributos: {
            ATAQUE: 9,
            DEFESA: 10,
            INTELIGÊNCIA: 9,
        }
    },
    carta28 = {
        nome: "Albedo",
        imagem: "imagens/albedo.jpg",
        atributos: {
            ATAQUE: 5,
            DEFESA: 6,
            INTELIGÊNCIA: 9,
        }
    },
    carta29 = {
        nome: "Ganyu",
        imagem: "imagens/ganyu.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 5,
            INTELIGÊNCIA: 5,
        }
    },
    carta30 = {
        nome: "Xiao",
        imagem: "imagens/xiao.jpg",
        atributos: {
            ATAQUE: 9,
            DEFESA: 4,
            INTELIGÊNCIA: 6,
        }
    },
    carta31 = {
        nome: "Hutao",
        imagem: "imagens/hutao.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 4,
            INTELIGÊNCIA: 5,
        }
    },
    carta32 = {
        nome: "Rosaria",
        imagem: "imagens/rosaria.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 4,
            INTELIGÊNCIA: 6,
        }
    },
    carta33 = {
        nome: "Yanfei",
        imagem: "imagens/yanfei.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 4,
            INTELIGÊNCIA: 8,
        }
    },
    carta34 = {
        nome: "Eula Lawrence",
        imagem: "imagens/eula.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 5,
            INTELIGÊNCIA: 6,
        }
    },
    carta35 = {
        nome: "Kaedehara Kazuha",
        imagem: "imagens/kazuha.jpg",
        atributos: {
            ATAQUE: 6,
            DEFESA: 5,
            INTELIGÊNCIA: 5,
        }
    },
    carta36 = {
        nome: "Kamisato Ayaka",
        imagem: "imagens/ayaka.jpg",
        atributos: {
            ATAQUE: 5,
            DEFESA: 4,
            INTELIGÊNCIA: 5,
        }
    },
    carta37 = {
        nome: "Sayu",
        imagem: "imagens/sayu.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 2,
            INTELIGÊNCIA: 3,
        }
    },
    carta38 = {
        nome: "Naganohara Yoimiya",
        imagem: "imagens/yoimiya.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 3,
            INTELIGÊNCIA: 4,
        }
    },
    carta39 = {
        nome: "Kujou Sara",
        imagem: "imagens/sara.jpg",
        atributos: {
            ATAQUE: 6,
            DEFESA: 3,
            INTELIGÊNCIA: 6,
        }
    },
    carta40 = {
        nome: "Shogun Raiden",
        imagem: "imagens/raiden.jpg",
        atributos: {
            ATAQUE: 10,
            DEFESA: 7,
            INTELIGÊNCIA: 7,
        }
    },
    carta41 = {
        nome: "Sangonomiya Kokomi",
        imagem: "imagens/kokomi.jpg",
        atributos: {
            ATAQUE: 1,
            DEFESA: 6,
            INTELIGÊNCIA: 8,
        }
    },
    carta42 = {
        nome: "Thoma",
        imagem: "imagens/thoma.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 4,
            INTELIGÊNCIA: 5,
        }
    },
    carta43 = {
        nome: "Gorou",
        imagem: "imagens/gorou.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 7,
            INTELIGÊNCIA: 6,
        }
    },
    carta44 = {
        nome: "Arataki Itto",
        imagem: "imagens/itto.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 8,
            INTELIGÊNCIA: 1,
        }
    },
    carta45 = {
        nome: "Yunjin",
        imagem: "imagens/yunjin.jpg",
        atributos: {
            ATAQUE: 2,
            DEFESA: 4,
            INTELIGÊNCIA: 4,
        }
    },
    carta46 = {
        nome: "Shenhe",
        imagem: "imagens/shenhe.jpg",
        atributos: {
            ATAQUE: 9,
            DEFESA: 6,
            INTELIGÊNCIA: 4,
        }
    },
    carta47 = {
        nome: "Yae Miko",
        imagem: "imagens/miko.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 4,
            INTELIGÊNCIA: 7,
        }
    },
    carta48 = {
        nome: "Kamisato Ayato",
        imagem: "imagens/ayato.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 4,
            INTELIGÊNCIA: 7,
        }
    },
    carta49 = {
        nome: "Yelan",
        imagem: "imagens/yelan.jpg",
        atributos: {
            ATAQUE: 6,
            DEFESA: 4,
            INTELIGÊNCIA: 8,
        }
    },
    carta50 = {
        nome: "Kuki Shinobu",
        imagem: "imagens/shinobu.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 3,
            INTELIGÊNCIA: 7,
        }
    },
    carta51 = {
        nome: "Shikanoin Heizou",
        imagem: "imagens/heizou.jpg",
        atributos: {
            ATAQUE: 4,
            DEFESA: 4,
            INTELIGÊNCIA: 7,
        }
    },
    carta52 = {
        nome: "Collei",
        imagem: "imagens/collei.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 1,
            INTELIGÊNCIA: 4,
        }
    },
    carta53 = {
        nome: "Tighnari",
        imagem: "imagens/tighnari.jpg",
        atributos: {
            ATAQUE: 6,
            DEFESA: 4,
            INTELIGÊNCIA: 6,
        }
    },
    carta54 = {
        nome: "Dori",
        imagem: "imagens/dori.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 2,
            INTELIGÊNCIA: 5,
        }
    },
    carta55 = {
        nome: "Candace",
        imagem: "imagens/candace.jpg",
        atributos: {
            ATAQUE: 5,
            DEFESA: 6,
            INTELIGÊNCIA: 5,
        }
    },
    carta56 = {
        nome: "Cyno",
        imagem: "imagens/cyno.jpg",
        atributos: {
            ATAQUE: 7,
            DEFESA: 5,
            INTELIGÊNCIA: 6,
        }
    },
    carta57 = {
        nome: "Nilou",
        imagem: "imagens/nilou.jpg",
        atributos: {
            ATAQUE: 3,
            DEFESA: 3,
            INTELIGÊNCIA: 5,
        }
    }
]

var carta_jogador;
var carta_maquina;

function sortear(valor){
    return Math.floor(Math.random()*valor.length);
}

function sortearCarta(){
    let numero_carta_jogador = sortear(cartas);
    carta_jogador = cartas[numero_carta_jogador];
    
    let numero_carta_maquina = sortear(cartas);
    while(numero_carta_maquina == numero_carta_jogador){
       numero_carta_maquina = sortear(cartas);
    }
    carta_maquina = cartas[numero_carta_maquina];
    
    console.log(carta_jogador);
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
    montarCartaJogador();
}

function montarCartaJogador(){
    let nome_jogador = document.getElementById("nomeJogador");
    
    nome_jogador.innerHTML = carta_jogador.nome;
    
    let imagem_jogador = document.getElementById("imagemJogador");
    
    imagem_jogador.style.backgroundImage = `url(${carta_jogador.imagem})`;
    
    let opcoes_radio = "<div id='opcoes' class'carta-status'>"
    
    let opcoes_texto = "";

    for(let atributo in carta_jogador.atributos){
        opcoes_texto += `<input type='radio' name='atributo' class='statusRadio' id=${atributo} value=${atributo + ' ' + carta_jogador.atributos[atributo]}><label for=${atributo} class='statusLabel'><div>${atributo}</div><div>${carta_jogador.atributos[atributo]}</div></label>`;
    }
    
    statusJogador.innerHTML = opcoes_radio + opcoes_texto + "</div>";
}

function montarCartaMaquina(){
    let nome_maquina = document.getElementById("nomeMaquina");
    
    nome_maquina.innerHTML = carta_maquina.nome;
    
    let imagem_maquina = document.getElementById("imagemMaquina");
    
    imagem_maquina.style.backgroundImage = `url(${carta_maquina.imagem})`;
    
    let opcoes_radio = "<div id='opcoes' class'carta-status'>"
    
    let opcoes_texto = "";
    
    for(let atributo in carta_maquina.atributos){
        opcoes_texto += `<div name='atributo' class='statusLabel' value=${atributo + ' ' + carta_maquina.atributos[atributo]}><div>${atributo}</div><div>${carta_maquina.atributos[atributo]}</div></div>`;
    }
    
    statusMaquina.innerHTML = opcoes_radio + opcoes_texto + "</div>";
}

function obtemAtributoSelecionado(){
    let radio_atributos = document.getElementsByName("atributo");
    
    for(i = 0; i < radio_atributos.length; i++){
        if(radio_atributos[i].checked){
            return radio_atributos[i].value;
        }
    }
}

function jogar(){
    let atributo_selecionado = obtemAtributoSelecionado();
    let resultado = document.getElementById("resultado");
    
    if(carta_jogador.atributos[atributo_selecionado] > carta_maquina.atributos[atributo_selecionado]){
        resultado.innerHTML = "Você Venceu!";
    } else if (carta_maquina.atributos[atributo_selecionado] > carta_jogador.atributos[atributo_selecionado]){
        resultado.innerHTML = "Você Perdeu!";
    } else{
        resultado.innerHTML = "Empate!";
    }
    
    montarCartaMaquina();
}