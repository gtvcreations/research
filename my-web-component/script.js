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

var myComp = document.createElement('my-component');
document.body.appendChild(myComp);
myComp.setAttribute('myval', 'hello');
// document.body.removeChild(myComp);

var check = document.getElementById('check');
check.appendChild(myComp);

var myframe = document.getElementById('myframe');
myframe.contentWindow.document.body.appendChild(myComp);