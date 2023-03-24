let pokemon = JSON.parse(localStorage.getItem('pokemon'));



const pokeContainer = document.getElementById('cart-container');
pokeContainer.style.display = 'flex';
pokeContainer.style.flexWrap = 'wrap';
pokeContainer.style.gap = '50px'
pokeContainer.style.padding = '25px';

pokemon.forEach((e) => {
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
    buttonBuy.innerText = 'Eliminar';
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

    buttonBuy.addEventListener('click', () => {
        card.remove();
        localStorage.removeItem('pokemon')
    })

    // // Guardando en localStorage
    // buttonBuy.addEventListener('click', () => {
    //     let id = pokemon.id
    //     let name = pokemon.name
    //     let img = pokemon.img

    //     let pokeBuy = {
    //         id: id,
    //         name: name,
    //         img: img
    //     }

    //     localStorage.setItem('pokemon', JSON.stringify(pokeBuy));

    // })


    // Añadiendo elementos al documento

    card.appendChild(h3);
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(buttonBuy);
    h3.appendChild(span);
    pokeContainer.appendChild(card)
})