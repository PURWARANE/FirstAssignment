let nr= prompt("problem 14)enter array length:");
console.log("Array elements",nr);
let k = prompt("to rotate after how many number: ");
console.log("enter elemnts to rotate: ",k)
var arr =[];
for(var iNn=0;iNn<nr;iNn++){
  arr[iNn] = prompt('Enter array element',(iNn+1));
}
function leftRotate(arr, nr, k){
  let mod = k % nr;
  for (let i = 0; i < nr; i++){
    console.log((arr[(mod + i) % nr]) + " ");
  }
}
console.log("Problem 11) Array elements are",arr);
leftRotate(arr, nr, k);