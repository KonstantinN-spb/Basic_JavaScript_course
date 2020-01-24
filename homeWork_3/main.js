// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


let a = [ 2 ], b = 2;
while ( b <= 100) {
    let check = 1;
    for ( let i = 0; i < a.length; i++) {
        if ( b % a[ i ] == 0) {
            check = 0;
        }
    }
    if ( check == 1 ) {
        a.push( b );
    }
    b++;
}
console.log ( a );


/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:*/

//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const basketParts = ['брюки', 'поло', 'свитер'];
const partsCost = [['брюки', 2000], ['поло', 1500], ['свитер', 2500]];


const getItemPrice = (item, array) => {
  const items = [];
  const costs = [];
  
  for (let i = 0; i < array.length; i++) {
    items.push(array[i][0]);
    costs.push(array[i][1]);
  }
  
  return costs[items.indexOf(item)];
};

const countBasketPrice = (basketArr, costArr) => {
  let totalCost = 0;
  for (let i = 0; i < basketArr.length; i++) {
    totalCost += getItemPrice(basketArr[i], costArr);
  }
  return totalCost;
};
console.log('Стоимость товаров' + partsCost);
console.log('Итоговая цена товаров' + countBasketPrice(basketParts, partsCost));



//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for ( var i = 0; i < 10; console.log(i++) )  {}


/*
5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/



let star=["x"];
while (star.length<=20){
    console.log(star);
    let starPlus=star.unshift("x")
}





        
