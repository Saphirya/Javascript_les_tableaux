//comparaison via callback
const a = ["banana", "Orange", "ananas"];
a.sort((c, d) => c.localeCompare(d));
console.log(a);

//comparaison de nombres
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
b.sort((c, d) => c - d);
console.log(b);

//comparaison d'ojects
const c = [
  { nom: "banana", poids: 10 },
  { nom: "Orange", poids: 5 },
  { nom: "ananas", poids: 2 },
];
c.sort((c, d) => c.poids - d.poids);
console.log(c);

//toSorted()
const d = [
  { nom: "banana", poids: 10 },
  { nom: "Orange", poids: 5 },
  { nom: "ananas", poids: 2 },
];

const e = d.toSorted((g, h) => h.poids - g.poids);
console.log(e);

//toReversed()
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const y = x.toReversed();
console.log(y);
