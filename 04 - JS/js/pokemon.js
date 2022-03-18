const fetchPokemon = () => {
    const pokeName = document.getElementById("searchBox");
    let pokeInput = pokeName.value.toLowerCase();
    url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; // url de la API de pokemon
    fetch(url).then((res) => { //Esta función de fetch regresa una promesa consultada del API y esa promesa se maneja con .then
        if(res.status != "200") {
            // console.log(res);
            pokeImage("./img/pokemon-cubone.gif");
            let a = document.getElementsByClassName("hide");
            for (let i = 0; i < a.length; i++) {
                a[i].style.visibility = "hidden";
            }
        } else {
            let a = document.getElementsByClassName("hide");
            for (let i = 0; i < a.length; i++) {
                a[i].style.visibility = "visible";
            }
            return res.json();
        }
    }).then((data) => { // Otra promesa a manejar
        // console.log(data); informacion completa del pokemon
        let img = data.sprites.front_default; // informacion de la imagen default del pokemon
        let type = data.types;
        let stats = data.stats;
        let movs = data.moves;
        let arr = []
        let arr2 = []
        let arr3 = []

        type.forEach(type => {
            arr.push(type.type.name)
        });

        stats.forEach(stats => {
            arr2.push(stats.base_stat)
        });

        movs.forEach(movs => {
            arr3.push(movs.move.name)
        });

        pokeImage(img);
        pokeType(arr);
        pokeStats(arr2);
        pokeMoves(arr3);
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokemonImg");
    pokeImg.src = url;
}

const pokeType = (arr) => {
    const type1 = document.getElementById("typesUm");
    const type2 = document.getElementById("typesDois");
    let baseTextdois = document.getElementById('baseTextdois');
    baseTextdois.style.color = 'gray';

    type1.src = `./img/types/${arr[0].toLowerCase()}.png`;

    if (arr[1] == undefined) {
        type2.src = './img/types/empty.png';
    } else {
        type2.src = `./img/types/${arr[1].toLowerCase()}.png`;
    }
}

const pokeStats = (arr) => {
    let baseText = document.getElementById('baseText');
    let hp = document.getElementById('hp');
    let atk = document.getElementById('atk');
    let def = document.getElementById('def');
    let spAtk = document.getElementById('spatk');
    let spDef = document.getElementById('spdef');
    let spd = document.getElementById('spd');

    baseText.style.color = 'gray';

    hp.innerHTML = 'Hp: ' + arr[0];
    atk.innerHTML = 'Attack: ' + arr[1];
    def.innerHTML = 'Defense: ' + arr[2];
    spAtk.innerHTML = 'Sp. Atk: ' + arr[3];
    spDef.innerHTML = 'Sp. Def: ' + arr[4];
    spd.innerHTML = 'Speed: ' + arr[5];
}

const pokeMoves = (arr) => {
    let baseText3 = document.getElementById('basetext3');
    let mv1 = document.getElementById('mov1');
    let mv2 = document.getElementById('mov2');
    let mv3 = document.getElementById('mov3');
    let mv4 = document.getElementById('mov4');

    baseText3.style.color = 'gray';

    mv1.innerHTML = arr[0];
    mv2.innerHTML = arr[1];
    mv3.innerHTML = arr[2];
    mv4.innerHTML = arr[3];

}

fetchPokemon();