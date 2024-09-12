import { uid } from './utilities.js';

var textNode = document.createTextNode(uid());
document.body.append(textNode);