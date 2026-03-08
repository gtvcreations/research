import { Page } from './page.js';

let page = new Page();

setTimeout(function() {
    page.setProps({
        title: 'Class - Page Title Updated!'
    });
}, 5000);
