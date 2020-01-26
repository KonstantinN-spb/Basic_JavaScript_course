/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

// нашел 2 способа решения этой задачи. 1-ый самый понятный для новичка, 2-ой ближе к теме.

function numberRandom(min,max){
  return Math.floor(Math.random() * (max-min+1)+min);
}
let mainNumber = [numberRandom(0,1100)];

function output(){
  if(mainNumber<999){
    console.log(mainNumber);
        let first, second, three;
        function divided (){
          // случайное 3-значное число делим на 100 и получаем первую цифру
          first = Math.floor(mainNumber/100);  
          console.log(first);
          // теперь из случайного числа вычитаем эту сотую часть, которую получили в прошлом пункте
          second = Math.floor((mainNumber-(first*100))/10);
          console.log(second);
          // теперь просто из рандомного вычитаем сумму 1 и 2 чилас и получаем в отстаке 3-е число
          three = mainNumber-((first*100)+(second*10));
          console.log(three);  
        }
      divided();
      }
  else {
    console.log("число превышает 999");
    numberRandom();
  }
}
output();



function numberRandom(min,max){
  return Math.floor(Math.random() * (max-min+1)+min);
}
let run = numberRandom(0,1100);

function output2(){
  if(run<999){
    console.log("случанойе число "+run);
      let runST = "0"+run;
      let arrRun = Array.from(run);
      console.log("Сотые- " +runST[1]);
      console.log("десятки- "+runST[2]);
      console.log("единица- "+runST[3]);
  }
  else {
    console.log("число превышает 999");
    numberRandom();
  }
}
output2();












