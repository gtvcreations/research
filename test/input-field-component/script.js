import '../../assets/scripts/input-field.js';

var field1 = document.createElement('input-field');
document.body.appendChild(field1);
field1.props = {
    label: 'My Label',
    id: 'my-id',
    type: 'password'
};

field1.setProps = {
    label: 'Label updated'
};

var field2 = document.createElement('input-field');
document.body.appendChild(field2);
field2.props = {
    label: 'My Label',
    // id: 'my-id',
    type: 'password'
};

field1.inputElem.addEventListener('input', function(event) {
    console.log(event);
});