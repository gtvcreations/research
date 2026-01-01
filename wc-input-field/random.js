import { ALPHABETS, alphabets, DIGITS } from './constants.js';

export function uniqueId(prefix = '') {
  return (prefix ?? '') + Date.now().toString(16) + Math.random().toString(16).substring(2);
}

export function randomString(charactes = `${ALPHABETS}${alphabets}${DIGITS}`, length = 8) {
  let text = '';
  for (var i = 0; i < length; i++) {
    text += charactes.charAt(Math.floor(Math.random() * charactes.length));
  }
  return text;
}

export function randomNumber(min = 0, max = 0) {
  if (min > max || min === max) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomArrayElement(arrayOfElements) {
  return arrayOfElements[Math.floor(Math.random() * arrayOfElements.length)];
}
