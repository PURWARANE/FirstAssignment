//Problem 1
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

//Problem 2
const N1 = 12;
let cube=0;
if(N1===0){
   console.log('Cube of 0 is 0');
}
else if(N1<0){
  cube=N1*N1*N1;
  console.log('Problem 2) Cube of ',N1,"is",cube);
}
else{
  cube=N1*N1*N1;
  console.log('Problem 2) Cube of ',N1,"is",cube);
}

//Problem 3
const a = 5;
if(a<0){
  console.log("side of triangle cannot be zero");
}
else{
  const area = 1/4*(1.73*a*a);
  areaTriangle =area.toFixed(2);
  console.log("Problem 3) Area of Equilateral triangle is",areaTriangle,"with side",a);
}

//Problem 4
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

//Problem 5
const A = 60;
let cTof;
cTof= A * 9 / 5 + 32;
cTofTemp = cTof.toFixed(2);
console.log("Problem 5) ",A,"Celcius to Farenheit is",cTofTemp);

//Problem 6
let Number;
Number=prompt('Problem 6) Enter an integer number ');
var sumOfNumber=0;
for(var Ni=1; Ni<=Number; Ni++){
  sumOfNumber = sumOfNumber + Ni;
}
console.log("Problem 6) Sum of 1 to",Number,"is",sumOfNumber);

//Problem 7
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


//Problem 8
let text1=" Purwa Anand Rane";
let text2 =text1.split(' ').join('');
let text= text2.length;
  
console.log("Problem 8) String",text1,"after removing whitespace is",text2,"and length of final string is",text);

//Problem   9
var xa=1, xb=5,c=6;
root = xb * xb - 4 * xa * c;
let sqr= Math.sqrt(root);
let X1=(-xb + sqr)/(2* xa);
let firstroot= X1.toFixed(2);
let X2 = (-xb -sqr)/(2* xa);
let secondroot= X2.toFixed(2);
console.log("Problem 9) Root of a quadratic equation",xa,"x2,",xb,"x,",c,"constant is ",firstroot,"and",secondroot);

  

//Problem 12
let np=55;
function isPalindrome(np){
  var rev = 0;
    for (var ip = np; Math.trunc(ip) > 0; ip /= 10){
      rev = ((rev*10) + (Math.trunc(ip)%10));
    }
  return (np==rev);
}
console.log("Problem 12) Entered number is",np,"Palendroms are ");
function countPal(min,  max){
  for (var i = min; i <=max; i++){
    if(isPalindrome(i)){
      console.log(i+" " );
    }
  }
}
countPal(10,55);

//Probelm 13
let ns=5;
let seriesnumber;
for(let is=1;is<=ns;is++){
  if(is==ns){
    seriesnumber =ns * (ns+1);
  }
}
console.log("Problem 13)",ns,"number of the series is",seriesnumber);

//Problem 14
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



//Problem 15
function Postfix(expression){
  let stack=[];
  for(var ie=0;ie<expression.length;i++){
    let c= expression[i];
    if(!isNaN( parseInt(c))){
      stack.push(c.charCodeAt(0)-'0'.charCodeAt(0));
    }
    else{
      let varex1 =stack.pop();
      let varex2 =stack.pop();

      switch(c){
        case '+':
          stack.push(varex2+varex1);
          break;
        case '-':
          stack.push(varex2-varex1);
          break;
        case '*':
          stack.push(varex2 * varex1);
          break;
        case '/':
          stack.push(varex2/varex1);
          break;         
      }
    }
  }
  return stack.pop();
}
let expression = "5 3 1 * + 9 -";
document.write("Output is", Postfix(expression));