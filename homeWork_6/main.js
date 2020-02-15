function bindFunc(func, a){
  return func.bind(null, a);
}

var add = function(a,b) { return a+b;}
var add2 = bindFunc(add, 2);
console.log(add2(6));  // outputs 8
console.log(add2(10)); // outputs 12