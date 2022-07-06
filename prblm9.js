var xa=1, xb=5,c=6;
root = xb * xb - 4 * xa * c;
let sqr= Math.sqrt(root);
let X1=(-xb + sqr)/(2* xa);
let firstroot= X1.toFixed(2);
let X2 = (-xb -sqr)/(2* xa);
let secondroot= X2.toFixed(2);
console.log("Problem 9) Root of a quadratic equation",xa,"x2,",xb,"x,",c,"constant is ",firstroot,"and",secondroot);