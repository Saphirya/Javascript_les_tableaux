//for
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//forof
for (var i of arr) {
  console.log(i);
}

//foreach
arr.forEach((value, index) => {
  console.log(`value : ${value} , index : ${index}`);
});
