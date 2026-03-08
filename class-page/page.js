export class Page {

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
    // read the title from the title tag, this sould be a default for title
    // provide a method to restore the default title of the page
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
