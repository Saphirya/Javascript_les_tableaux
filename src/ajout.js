let arr = [1, 2, 3];
console.log(arr);

arr[0] = "un";
console.log(arr);

//ajouter des éléments dans le tableau au début avec unshift
arr.unshift("hello", 8);
console.log(arr);

//ajouter des éléments dans le tableau à la fin avec push
arr.push("world", 9);
console.log(arr);

//ajouter des éléments avec le spread
arr = [...arr, 7, 8, 9];
arr = [1992, ...arr];
console.log(arr);

//splice
arr.splice(0, 1, "terre", "soleil");
console.log(arr);
