import { createCharacter } from './components/character.js';
import DATA from './data.json' with {type: 'json'}



DATA.forEach((character) => {
    createCharacter('ul', 'afterbegin', character);
})

