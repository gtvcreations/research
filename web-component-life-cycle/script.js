class MyComponent extends HTMLElement {

  static observedAttributes = ['myval'];

  connectedCallback() {
    console.log('Component created');
    this.textContent = 'My Component';
  }

  disconnectedCallback() {
    console.log('Component removed');
  }

  adoptedCallback() {
    console.log('Component moved to new page');
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log(`${attrName} attribute changed from ${oldValue} to ${newValue}`);
  }

}

customElements.define('my-component', MyComponent);

// Test
var myComp;

setTimeout(() => {
  myComp = document.createElement('my-component');
  document.body.appendChild(myComp);
  myComp.setAttribute('myval', 'hello');
}, 5000);

setTimeout(() => {
  // document.body.removeChild(myComp)
}, 10000);

setTimeout(() => {
  var mydiv = document.getElementById('mydiv');
  mydiv.appendChild(myComp);
}, 15000);

setTimeout(() => {
  var myframe = document.getElementById('myframe');
  myframe.contentWindow.document.body.appendChild(myComp);
}, 20000);
