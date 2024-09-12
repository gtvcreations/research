import './input-field.component.js';

var field1 = document.createElement('input-field');
document.body.appendChild(field1);
field1.props = {
    label: 'My Label',
    id: 'my-id',
    type: 'password'
};

var field2 = document.createElement('input-field');
document.body.appendChild(field2);
field2.props = {
    label: 'My Label',
    // id: 'my-id',
    type: 'password'
};