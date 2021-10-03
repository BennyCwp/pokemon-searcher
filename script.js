const pokemonInput = document.querySelector("#pokemon");
const pokemonPhoto = document.querySelector("img");
const pokemonCharacteristic = document.querySelector("#characteristic");

async function searchPokemon() {
  try {
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonInput.value}/`
    );
    const data = await pokemon.json();
    const srcLink = data.sprites.front_shiny;
    pokemonPhoto.src = srcLink;
    const id = data.id;
    const characteristic = await fetch(
      `https://pokeapi.co/api/v2/characteristic/${id}`
    );
    const characteristicData = await characteristic.json();
    pokemonCharacteristic.textContent = `Characteristic: ${characteristicData.descriptions[2].description}`;
  } catch {
    pokemonCharacteristic.textContent = "";
  }
}

pokemonInput.addEventListener("change", searchPokemon);
