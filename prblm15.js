function Postfix(expression){
  let stack=[];
  for(var ie=0;ie<expression.length;ie++){
    let c= expression[ie];
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
let expression = "531*+9-";
console.log("Output is", Postfix(expression));