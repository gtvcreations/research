import './wc-input-field.js';

var field1 = document.createElement('gtv-input-field');
document.body.appendChild(field1);

field1.setProps({
    label: 'My Label',
    id: 'my-id',
    type: 'text',
    defaultValue: 'hello'
});

field1.setProps({
    label: 'Label updated'
});

var field2 = document.createElement('gtv-input-field');
document.body.appendChild(field2);

field2.setProps({
    label: 'My Label',
    type: 'password',
    value: 'hello'
});

field1.getInputElem().addEventListener('input', function(event) {
    console.log(event);
});
