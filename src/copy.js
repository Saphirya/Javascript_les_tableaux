const arr = [
  1,
  {
    name: "terre",
  },
  3,
];

//copier un tableau shallow

// const copy = arr.slice();
// const copy = [...arr];
// const copy = Array.from(arr);
// copy.push(4);
// console.log("arr :", arr);
// console.log("copy : ", copy);

//copier un tableau deep

// const copy = JSON.parse(JSON.stringify(arr));
// copy[1].name = "soleil";
// copy.push(4);

//nouvelle méthode with
const copy = arr.with(1, { name: "Mars" });
console.log("arr :", arr);
console.log("copy : ", copy);
