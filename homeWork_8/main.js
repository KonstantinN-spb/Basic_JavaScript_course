// 1. Для практикума из занятия 7 продумать, где можно применить замыкания.

//  я уже применял для выделение ячейки красным по двойному клику

for (let i = 0; i < 8; i++) {
  outNumber[i].ondblclick = changeColorOutNumb;
  outLetter[i].ondblclick  = changeColorOut;
}

function changeColorOut(){
  this.className = (this.className == 'letterName' ? 'letterName red':'letterName');
}
function changeColorOutNumb(){
  this.className = (this.className == 'NumberName' ? 'NumberName red':'NumberName');
}

// 2. Не выполняя кода, ответить, что выведет браузер и почему:

if (!("a" in window)) {
    var a = 1;
}

alert(a);
var b = function a(x) {
    x && a(--x);
};

alert(a);
function a(x) {
    return x * 2;
}

var a;
alert(a);
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}

b(1, 2, 3);
function a() {
    alert(this);
}
a.call(null);


// 3.надо написать bindFunc

var add = function(a,b) { return a+b;}
var add2 = bindFunc(add, 2);
add2(6) // outputs 8
add2(10) // outputs 12


