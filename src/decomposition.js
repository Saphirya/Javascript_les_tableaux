const arr = [1, 2, 3];

//operateur rest
const [a, ...rest] = arr;
console.log(a); //donne 1
console.log(rest); //donne [2, 3]

// operateur rest sur tableau imbriqué
const arr2 = [[1, 2], 3];

const [[c, d], e] = arr2;
console.log(c); //donne 1
console.log(d); //donne 2
console.log(e); //donne 3

//recuperer uniquement le deuxieme élément
const arr3 = [2, 4, 6];
const [, h] = arr3;
console.log(h); //donne 4

//skip le premier élément
const arr4 = [2, 4, 6];
const [, ...arr5] = arr4;
console.log(arr5); //donne 4
