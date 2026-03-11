class WcHelloWorld extends HTMLElement {
  connectedCallback() {
    this.textContent = 'Hello World!';
  }
}

customElements.define('wc-hello-world', WcHelloWorld);
