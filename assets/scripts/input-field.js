import { uid } from './utilities.js';

const elementName = 'input-field';

class InputFieldComponent extends HTMLElement {

    #label = document.createElement('label');
    #input = document.createElement('input');

    #defaultData = {
        label: 'Label Name',
        id: '',
        type: 'text'
    };

    #data = {};

    get inputElem() {
        return this.#input;
    }

    get props() {
        return this.#data;
    }

    set props(aObj) {
        this.#data = { ...this.#defaultData, ...aObj };
        this.#updateProps(this.#data);
    }

    set setProps(aObj) {
        this.#data = { ...this.#data, ...aObj };
        this.#updateProps(aObj);
    }

    constructor() {
        super();
        this.#defaultData.id = uid(elementName);
        this.#updateProps(this.#defaultData);
    }

    connectedCallback() {
        this.appendChild(this.#label);
        this.appendChild(this.#input);
    }

    disconnectedCallback() {
        this.removeChild(this.#label);
        this.removeChild(this.#input);
    }

    #updateProps(aObj) {
        let props = aObj;
        console.log(props);
        for (const key in props) {
            if (key === 'label') {
                this.#label.textContent = props[key];
            } else if(!['elem'].includes(key)) {
                if (key === 'id') {
                    this.#setAttributes(this.#input, key, props[key]);
                    this.#setAttributes(this.#label, 'for', props[key]);
                } else {
                    this.#setAttributes(this.#input, key, props[key]);
                }
            }
        }
    }

    #setAttributes(elem, key, value) {
        elem.setAttribute(key, value);
    }
}

customElements.define(elementName, InputFieldComponent);