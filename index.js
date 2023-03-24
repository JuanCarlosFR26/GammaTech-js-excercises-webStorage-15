// Ejercicios DOM - WebStorage

// Ejercicio 1

// Introduce en LocalStorage 3 variables distintas (no en forma de objeto) con tu nombre, edad y ciudad de origen.

// localStorage.setItem('name', 'Juanqui');
// localStorage.setItem('age', '28');
// localStorage.setItem('city', 'Jerez');

// // Ejercicio 2

// // En tu archivo JS, crea la variable counter y asígnale un valor de 5. Guárdala en LocalStorage.
// localStorage.setItem('counter', '5');
// let counter = parseInt(localStorage.getItem('counter'));


// // Muestra el contenido del LocalStorage en HTML.
// const body = document.querySelector('body');
// body.innerText = counter;

// // Ahora crea un botón que, cuando sea pulsado, aumente dicho contador en 1. El aumento se producirá en LocalStorage, y el HTML debe reflejar el cambio leyendo de LocalStorage también. En ningún momento el botón cambiará directamente el contador de HTML.
// const buttonAum = document.createElement('button');
// const buttonContainer = document.createElement('div');
// buttonContainer.appendChild(buttonAum)
// buttonAum.innerText = 'Aumentar';
// body.appendChild(buttonContainer);

// buttonAum.addEventListener('click', () => {
//     localStorage.counter = parseInt(localStorage.counter);
//     localStorage.counter++;
// })

// Ejercicio 3

// Crea un formulario con los campos nombre, email y contraseña. Cuando se envíe el formulario, se guardará la información en un único objeto de LocalStorage llamado users.
// const form = document.getElementById('form');
// const nameForm = document.getElementById('name');
// const pass = document.getElementById('pass');
// const email = document.getElementById('email');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let nameUser = nameForm.value;
//     let passUser = pass.value;
//     let emailUser = email.value;

//     const user = {
//         name: nameUser,
//         pass: passUser,
//         email: emailUser
//     }

//     localStorage.setItem('user', JSON.stringify(user))
// })


// Ejercicio 4
// Vamos a crear una web de compra-venta ilegal de pokemons. Se te proporcionará un JSON con información sobre pokemons. Debes crear 2 páginas de HTML: index y cart.

// Pinta en index la información de cada pokemon en forma de card, y añádele un botón de comprar a cada card, como si fuera una tienda online.
// El botón debe guardar la información de cada pokemon en LocalStorage, como si fuera un carrito de la compra.
// La página cart debe mostrar aquellos pokemons que hayan sido guardados en el LocalStorage. Si no hubiera ninguno, deberá mostrar: "Carrito vacío...".
// Por último, en cart, añade a cada pokemon que esté en el carrito un botón para eliminarlo del mismo.
const pokemons = [
	{ id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
	{ id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
	{ id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
	{ id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
	{ id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
	{ id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
	{ id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
	{ id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
	{ id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
	{ id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
	{ id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
	{ id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
	{ id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
	{ id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
	{ id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
	{ id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
	{ id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
	{ id: 18, name: 'abra', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png' },
	{ id: 19, name: 'kadabra', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png' },
	{ id: 20, name: 'alakazam', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png' }
]


// IndexPokemon.html y cart.html

const pokeContainer = document.getElementById('poke-card');
pokeContainer.style.display = 'flex';
pokeContainer.style.flexWrap = 'wrap';
pokeContainer.style.gap = '50px'
pokeContainer.style.padding = '25px';

pokemons.forEach((e) => {
    let pokemon = e;

    // Carta Info
    const card = document.createElement('div');
    card.style.width = '390px';
    card.style.height = '490px';
    card.style.border = '6px double #DC0ADC';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center'
    card.style.borderRadius = '12px';
    card.style.backgroundColor = '#A9ABC8';



    // Ids
    const h3 = document.createElement('h3');
    h3.innerText = 'Número de Pokédex: '
    h3.style.fontSize = '22px';

    // Count Id
    const span = document.createElement('span');
    span.innerText = pokemon.id;

    // Name
    const name = document.createElement('h2');
    name.innerText = pokemon.name;
    name.style.fontSize = '25px'

    // Img
    const img = document.createElement('img');
    img.setAttribute('src', pokemon.img)
    img.style.width = '280px'

    // Buy button
    const buttonBuy = document.createElement('button');
    buttonBuy.innerText = 'Comprar';
    buttonBuy.style.width = '100px';
    buttonBuy.style.height = '50px';
    buttonBuy.style.border = 'none';
    buttonBuy.style.backgroundColor = '#18E2E8';
    buttonBuy.style.color = '#ffffff';
    buttonBuy.style.borderRadius = '12px';
    buttonBuy.style.fontWeight = 'bold';
    buttonBuy.style.fontSize = '18px';

    buttonBuy.addEventListener('mouseover', () => {
        buttonBuy.style.backgroundColor = '#0612C8';
    })

    buttonBuy.addEventListener('mouseout', () => {
        buttonBuy.style.backgroundColor = '#18E2E8';
    })

    // Guardando en localStorage
    buttonBuy.addEventListener('click', () => {
        let id = pokemon.id
        let name = pokemon.name
        let img = pokemon.img
        // let arrPoke = [];

        let pokeBuy = {
            id: id,
            name: name,
            img: img
        }

        let arrPokes = JSON.parse(localStorage.getItem('pokemon'));

        arrPokes === null ? arrPokes = [pokeBuy]  : arrPokes.push(pokeBuy);

        


        // localStorage.setItem('pokemon', JSON.stringify(arrPoke));

        localStorage.setItem('pokemon', JSON.stringify(arrPokes))



    })


    // Añadiendo elementos al documento

    card.appendChild(h3);
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(buttonBuy);
    h3.appendChild(span);
    pokeContainer.appendChild(card)
})





