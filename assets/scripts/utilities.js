const char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function uid(prefix = 'uid') {
    return prefix + '-' + Date.now().toString(16) + Math.random().toString(16).substring(2);
}

export function randomString(charactes = char_list, length = 8) {
    let text = '';
    for (var i = 0; i < length; i++) {
        text += charactes.charAt(Math.floor(Math.random() * charactes.length));
    }
    return text;
}