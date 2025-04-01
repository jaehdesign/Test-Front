import { render } from './base.js';
export function createCommunications(character, selector = 'body', position = 'beforeend') {
    const template = /*html*/ `
     <div class="communications on">
        <p class="text">${character.message}</p>
        <img class="picture" src="assets/${character.name}.jpg" alt="Imagen de ${character.name} ${character.family}" />
    </div>
    `;
    const element = render(selector, position, template);
    return element;
}
