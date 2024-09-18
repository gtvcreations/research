import { uid } from './utilities.js';

const elementName = 'input-field';
const defaultProps = {
    label: 'Label Name',
    id: '',
    type: 'text'
};
const ignoreSetAttributes = ['label', 'id', 'value', 'defaultValue'];

class InputFieldComponent extends HTMLElement {

    static info = {
        shadowDOM: false,
        version: '2024'
    };

    #label = document.createElement('label');
    #input = document.createElement('input');

    #data = { ...defaultProps };

    getInputElem() {
        return this.#input;
    }

    getProps() {
        return this.#data;
    }

    setProps(aObj) {
        this.#data = { ...this.#data, ...aObj };
        this.#updateProps(aObj);
    }

    constructor() {
        super();
        this.#data.id = uid(elementName);
        this.#updateProps(this.#data);
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
        for (const key in props) {
            if (key === 'label') {
                this.#label.textContent = props[key];
            }

            if (key === 'id') {
                this.#setAttributes(this.#input, key, props[key]);
                this.#setAttributes(this.#label, 'for', props[key]);
            }

            if (key === 'value') {
                this.#input.value = props[key];
            }

            if (key === 'defaultValue') {
                this.#setAttributes(this.#input, 'value', props[key]);
            }

            if (!ignoreSetAttributes.includes(key)) {
                this.#setAttributes(this.#input, key, props[key]);
            }
        }
    }

    #setAttributes(aElem, aKey, aValue) {
        aElem.setAttribute(aKey, aValue);
    }
}

customElements.define(elementName, InputFieldComponent);