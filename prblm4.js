const n= 9;
if(n>12){
  console.log("Error.There are only 12 months.");
}
else{
  let day;
  switch(n){
    case 1:
      day="January has 31 days";
      break;
    case 2:
      day="February has 28 days";
      break;
    case 3:
      day="March has 31 days";
      break;
    case 4:
      day="April has 30 days";
      break;
    case 5:
      day="May has 31 days";
      break;
    case 6:
      day="June has 30 days";
      break;
    case 7:
      day="July has 31 days";
      break;
    case 8:
      day="August has 31 days";
      break;
    case 9:
      day="September has 30 days";
      break;
    case 10:
      day="October has 31 days";
      break;
    case 11:
      day="November has 30 days";
      break;
    case 12:
      day="December has 31 days";
      break;
    
  }
  console.log("Problem 4)",day)
}