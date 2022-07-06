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