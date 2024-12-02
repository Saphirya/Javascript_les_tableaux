const arr = [1, "deux", { foo: "bar" }, [1, 2, 3]];

const arr2 = Array(1, 2, 3);

const arr3 = new Array(1, 2, 3);

const arr4 = Array.from([1, 2, 3], (nbr) => nbr * 2);

console.log(Array.isArray({}));
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
