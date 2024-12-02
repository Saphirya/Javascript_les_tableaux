//comment accéder aux propriétés d'un tableau

const arr = ["terre", "soleil", "lune"];
console.log(arr);

console.log(arr[arr.length - 1]);

arr.length = 0;
arr["foo"] = "bar";
console.log(arr);
arr.push("nouvelle valeur");
console.log(arr);

console.log(arr.at(-1));
