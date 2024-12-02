const arr = [
  {
    quantity: 10,
    name: "CHAUSSURES",
  },
  {
    quantity: 5,
    name: "CHEMISE",
  },
  {
    quantity: 12,
    name: "PANTALON",
  },
];

// const a = [];

// arr.forEach((value) => {
//   a.push(value.toLocaleLowerCase());
// });
// console.log(a);

//map
const a = arr.map((value) => {
  return value.name;
});
console.log(a);

//filter
const b = arr.filter((item) => {
  return item.quantity > 5;
});
console.log(b);

const x = arr
  .filter((item) => item.quantity >= 10)
  .map((item) => ({
    ...item,
    name: item.name.toLowerCase(),
  }));
console.log(x);
