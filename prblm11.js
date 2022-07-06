var inputarr =[];
let x;
let Ne =prompt("problem 11) Enter array elements");
for(var iN=0;iN<=Ne;iN++){
  inputarr[iN] = prompt('Enter array element',(iN+1));
}
console.log("Problem 11) Array elements:",inputarr);
function countInArray(inputarr, element) {
  let repeat_count = 0;
  for (let i = 0; i < inputarr.length; i++) {
    if (inputarr[i] === element) {
      repeat_count++;
    }
  }
  return repeat_count;
}
var point=inputarr.sort(function(a,b){return b-a;});
console.log(" Array elements:",point);