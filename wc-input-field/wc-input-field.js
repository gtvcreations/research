import { uniqueId } from './random.js';

const INSTANCE_NAME = 'gtv-input-field';

const DEFAULT_PROPS = {
    label: 'Label Name',
    id: '',
    type: 'text'
}

const IGNORE_SET_ATTRIBUTES = ['label', 'id', 'value', 'defaultValue']

class InputFieldComponent extends HTMLElement {

    static info = {
        modified: ''
    };

    #label = document.createElement('label');
    #input = document.createElement('input');

    #data = { ...DEFAULT_PROPS };

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
        this.#data.id = uniqueId(INSTANCE_NAME);
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

            if (!IGNORE_SET_ATTRIBUTES.includes(key)) {
                this.#setAttributes(this.#input, key, props[key]);
            }
        }
    }

    #setAttributes(aElem, aKey, aValue) {
        aElem.setAttribute(aKey, aValue);
    }
}

customElements.define(INSTANCE_NAME, InputFieldComponent);