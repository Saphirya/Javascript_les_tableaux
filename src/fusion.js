//concatenation des tableaux
const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];
// const c = a.concat(b).concat(d);
const c = [...a, ...b, ...d];
console.log(c);
