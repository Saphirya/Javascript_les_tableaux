let arr = [1, 2, 3, 4, 5];
// arr.shift(); //envoi tout vers la gauche et supprime le premier élément
// arr.pop(); //dernier element
[, ...arr] = arr;
console.log(arr);

//methode splice - supprime des éléments a partir d'un index

let arr5 = [1, 2, 3, 4, 5];
arr5.splice(2, 2);
console.log(arr5);
