const a = 5;
if(a<0){
  console.log("side of triangle cannot be zero");
}
else{
  const area = 1/4*(1.73*a*a);
  areaTriangle =area.toFixed(2);
  console.log("Problem 3) Area of Equilateral triangle is",areaTriangle,"with side",a);
}