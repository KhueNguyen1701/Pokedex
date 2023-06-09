const DEFAULT_VALUE = '__'
const searchInput = document.querySelector('.search-input')
const name = document.querySelector('.name-value')
const type = document.querySelector('.type-value')
const height = document.querySelector('.height-value')
const weight = document.querySelector('.weight-value')
const bio = document.querySelector('.bio-value')
// const pokemonImage = document.querySelector('.pokemon-img2')

searchInput.onchange = async function (event) {
    const value = event.target.value
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
    const data = await res.json()
    console.log(data)

    const value2 = event.target.value
    const res2 = await fetch(`https://pokeapi.co/api/v2/ability/${data.id}/`)
    const data2 = await res2.json()

    name.innerHTML = data.forms[0].name || DEFAULT_VALUE
    type.innerHTML = data.types[0].type.name || DEFAULT_VALUE
    height.innerHTML = ((data.height / 10) + ' m') || DEFAULT_VALUE
    weight.innerHTML = (data.weight + ' lbs') || DEFAULT_VALUE
    bio.innerHTML = data2.effect_entries[1].short_effect || DEFAULT_VALUE
    // pokemonImage.setAttribute('src', `http://pokeapi.co/media/sprites/pokemon/${pokemonImage}.png`)
}