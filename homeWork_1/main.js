
/* 1. Задать температуру в градусах по Цельсию. 
Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, 
Tc – температура по Цельсию*/

var a = prompt ("какая температура в Цельсиях?");
var b = (9/5)*a+32;
console.log(b);
alert ("Температра по фаренгейту равна "+b+" градусам");


/* 2.Объявить две переменные: admin и name. Записать в name строку "Василий"; 
Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).*/


var admin = undefined;
var name = undefined;

name = "Василий";
admin = name;
alert(admin);
console.log(admin);

/* 3. Чему будет равно JS-выражение 1000 + "108"? 
    Ответ:
            1000 - число, "108" благодаря ковычкам становится строкой, произойдет конкетенация, т.е. склейка в одну строку 1000108.
*/


