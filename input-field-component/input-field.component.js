class InputFieldComponent extends HTMLElement {

    #label = document.createElement('label');
    #input = document.createElement('input');

    #defaultData = {
        label: 'Label Name'
    };

    #data = {};

    get props() {
        return this.#data;
    }

    set setProps(aObj) {
        this.#data = {...this.#defaultData, ...aObj};;
        this.manipulateProps(this.#data);
    }

    set updateProps(aObj) {
        this.#data = {...this.#data, ...aObj};
        this.manipulateProps(this.#data);
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(this.#label);
        this.appendChild(this.#input);
    }

    disconnectedCallback() {
        this.removeChild(this.#label);
        this.removeChild(this.#input);
    }

    manipulateProps(propsData) {
        let props = propsData;

        if(props?.label) {
            this.#label.textContent = props.label
        }

        if(props?.id)
    }
}

customElements.define('input-field', InputFieldComponent);