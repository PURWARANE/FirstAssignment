let Nth = 15;
let series;
if(Nth <0){
  console.log("Problem 7)",Nth,"Error..PLease enter positive number")
}
else if(Nth == 0){
  console.log("Oth term in series is 0");
}
else{
  for(var ith=1;ith<=Nth;ith++){
  series = ith * ith;
  }
  console.log("Problem 7)",Nth,"Number of series 1,4,9,16... is ",series);
}