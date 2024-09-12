export function uid(prefix = 'uid') {
    return prefix + '-' + Date.now().toString(16) + Math.random().toString(16).substring(2);
}