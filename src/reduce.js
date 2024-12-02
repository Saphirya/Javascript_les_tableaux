const panier = [
  {
    quantity: 10,
    name: "CHAUSSURES",
    price: 50,
  },
  {
    quantity: 5,
    name: "CHEMISE",
    price: 10,
  },
  {
    quantity: 12,
    name: "PANTALON",
    price: 20,
  },
];

//reduce
const total = panier.reduce(
  (acc, value) => (acc += value.price * value.quantity),
  0
);
console.log(total);
