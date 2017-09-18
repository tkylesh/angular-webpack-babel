//pokemon-list.component.js

function pokemonListCtrl() {
}

module.exports = {
  template: require('./pokemon-list.html'),
  controller: pokemonListCtrl,
  bindings: {
    pokemons: '='
  }
}