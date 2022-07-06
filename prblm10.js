const arr =[3,9,1,44,6];
let  n = arr.length;
let res =[];
function evenodd(arr,n){
  let evenArr = [];
  let oddArr = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 != 1) {
      evenArr.push(arr[i]);
    }
    else {
      oddArr.push(arr[i]);
    }
  }
  point=evenArr.sort(function(a,b){return a-b;});
  for(let j=0; j<n;j++){
  if(j%2 !=1){
    res.push(oddArr[i]);
  }
  else{
    res.push(point);
  }

}
evenodd(arr, n);
console.log("array is:",res);
