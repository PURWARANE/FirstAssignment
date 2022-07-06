const N = 5;
if(N < 0){
  console.log("Entered number is Negative");
}
else if(N === 0){
  console.log('Factorial of 0 is 1');
}
else{
  let fact=1;
  for(var i=1; i<=N; i++){
    fact=fact*i;
  }
  console.log('Problem 1) Factorial of ',N,"is",fact);
}
