/*1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  ----- префиксная форма возвращает новое значение
d = b++; alert(d);           // 1  ----- постфиксная форма возвращает старое значение
c = (2+ ++a); alert(c);      // 5  ----- а присвоена 2, префикс значит сразу +1 =3  и сложит с +2 = 5
d = (2+ b++); alert(d);      // 4  ----- b было в постфиксе 1, но после присвоилась +1, т.е. к 6-ой строке она стала равна 2, но это постфикс, 2-ой и останется, плюс 2, равно 4
alert(a);                    // 3  ----- в начале равно 1, а после 2 раза прибавляли 1, стало 3
alert(b);                    // 3  ----- в начале равно 1, а после 2 раза прибавляли 1, стало 3 
Почему код даёт именно такие результаты? 


                                                                                                                            1.b  Для отработки этой темы. Самостоятельно
                                                                                                                            var a = 5, b = 10, c, d;
                                                                                                                            c = ++a; alert(c);           // 6
                                                                                                                            d = b++; alert(d);           // 10
                                                                                                                            c = (2+ ++a); alert(c);      // 9
                                                                                                                            d = (2+ b++); alert(d);      // 13
                                                                                                                            alert(a);                    // 7
                                                                                                                            alert(b);                    // 12


2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);

a *= 2 Это сокращенная запись просвоения a=a*2, соответсвенно в скобках получаем 2*2=4  и прибавляем +1.
Ответ x=5

3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. ### 
*/

/*
let a = +prompt("Введите отрицательное или положительное первое число");
let b = +prompt("Введите отрицательное или положительное второе число");

function calculate() {
    
    if (a>=0 && b>=0) {
        let plus = parseInt (a-b);
        console.log (plus + " a и b положительные, вывести их разность");
        alert (plus + " a и b положительные, вывести их разность");
    }
    else if(a<=0 && b<=0) {
        let multiplication = parseInt (a*b);
        console.log ( multiplication + " а и b отрицательные, вывести их произведение");
        alert ( multiplication + " а и b отрицательные, вывести их произведение");
    }
    else {
        let sum = parseInt (a+b);
        console.log(sum + " а и b разных знаков, вывести их сумму");
        alert (sum + " а и b разных знаков, вывести их сумму");
    }
}

calculate();




//4. Присвоить переменной radio значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от radio до 15. ### 

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    
    let radio= (randomInteger(0, 15));
    
    switch (radio){
        case 0:
            console.log(0);
        case 1:
            console.log(1);
        case 2:
            console.log(2);  
        case 3:
            console.log(3); 
        case 4:
            console.log(4);
        case 5:
            console.log(2);
        case 6:
            console.log(6);
        case 7:
            console.log(7);  
        case 8:
            console.log(8);
        case 9:
            console.log(9);
        case 10:
            console.log(10);
        case 11:
            console.log(11);
        case 12:
            console.log(12); 
        case 13:
            console.log(13);
        case 14:
            console.log(14);
        case 15:
            console.log(15); 
    }
/*

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. ### 
*/

let a=+prompt("Введите первое число");
let b=+prompt("Введите второе число");

function calculate1() {
    let sum = a+b;
    alert("сумма чисел "+sum);
    return;
}
function calculate2() {
    let minus = a-b;
    alert("разность чисел "+minus);
    return;
}
function calculate3() {
    let multiplication = a*b;
    alert("произведение чисел "+multiplication);
    return;
}
function calculate4() {
    let division = a/b;
    alert("частное чисел "+division);
    return;
}

calculate1(a,b);
calculate2(a,b);
calculate3(a,b);
calculate4(a,b);






/*

6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch). ### 

7. *Сравнить null и 0. Попробуйте объяснить результат. ### 

8. *С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.

*/

