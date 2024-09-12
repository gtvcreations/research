import { uid } from '../assets/scripts/utilities.js';

var textNode = document.createTextNode(uid());
document.body.append(textNode);