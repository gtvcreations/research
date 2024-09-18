const instanceName = 'page';

class PageClass {

    static info = {
        version: '2024'
    };

    #data = {};

    getProps() {
        return this.#data;
    }

    setProps(aObj) {
        this.#data = { ...this.#data, ...aObj };
        this.#updateProps(aObj);
    }

    constructor() {
        this.#updateProps(this.#data);
    }

    #updateProps(aObj) {
        let props = aObj;
        for (const key in props) {
            if (key === 'title') {
                document.title = props[key];
            }
        }
    }
}

window[instanceName] = new PageClass();