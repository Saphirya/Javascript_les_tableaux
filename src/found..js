//indique l'indes ou l'on trouve l"élément
//fonctionne avec les primitives
const arr = ["un", "deux", "trois"];
console.log(arr.indexOf("deux"));

//includes
console.log(arr.includes("deux"));

const arr2 = [
  {
    name: "terre",
  },
  {
    name: "soleil",
  },
  {
    name: "lune",
  },
];
const index = arr2.findIndex((elem) => elem.name === "soleil");

console.log(index);

//methode find

const arr3 = [
  {
    name: "terre",
    index: 4,
  },
  {
    name: "soleil",
  },
  {
    name: "lune",
  },
  {
    name: "terre",
    index: 2,
  },
];

const index2 = arr3.findIndex((elem) => elem.name === "terre");
const lastIndex = arr3.findLastIndex((elem) => elem.name === "terre");
const elems = arr3.find((elem) => elem.name === "terre");
const lastElems = arr3.findLast((elem) => elem.name === "terre");

const isAny = arr3.some((elem) => elem.name === "terre");

console.log(index2);
console.log(lastIndex);
console.log(elems);
console.log(lastElems);
console.log(isAny);
