

function include(){
  for(i=1; i<=8; i++){
    let main = document.querySelector("#table");
    let square = document.createElement("div");
    main.appendChild(square);

    square.className= "block number_" +i;
    square.id = "someID_"+i;

      if(i%2!=0){
        square.classList.add('black');
      }
      else{
        square.classList.add('white');
      }
  } 
}

let arrQvadro;

function double(){
  arrQvadro = [];
  for(j=1; j<=8; j++){
    let parent = document.querySelector("#someID_"+j);
    
    for(i=1; i<=8; i++) {
       
      let two = document.createElement("div");
      arrQvadro.push(two);
      parent.appendChild(two);
   
      two.className= "horizont" ;
      two.id = "horizontID_"+i+j;

      console.log(arrQvadro);

        
        if(i%2 == j%2){
          two.classList.add('white');
          
        }
        else {
          two.classList.add('black');
          
        }
    }
   
  } 
}
function alfaLine() {

    let letter = document.querySelector("#around");
    let horLine = document.createElement("div");
    letter.appendChild(horLine);

    horLine.className= "letterName"
    horLine.id = "letterName";

    for(i=0; i<=7; i++){
      let letterOne = document.querySelector("#letterName");
      let horLineOne = document.createElement("div");
      letterOne.appendChild(horLineOne);

      horLineOne.className= "realletterName"
      horLineOne.id = "letterName_ID_"+i;

      let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
      document.querySelector("#letterName_ID_"+i).innerHTML = arr_EN[0+i];
      
      
    }
   
  
}
function numberLine() {

  let number = document.querySelector("#around");
  let horNumber = document.createElement("div");
  number.appendChild(horNumber);

  horNumber.className= "NumberName"
  horNumber.id = "NumberName";

  for(i=1; i<=8; i++){
    let letterOne = document.querySelector("#NumberName");
    let horLineOne = document.createElement("div");
    letterOne.appendChild(horLineOne);

    horLineOne.className= "realNumberName"
    horLineOne.id = "NumberName_ID_"+i;

    document.querySelector("#NumberName_ID_"+i).innerHTML = i;
    
    
  }
}
function posision(){

  for(i=1; i<=8; i++){
    let arrFIG = ["1",'Слон', 'Конь', 'Ладья', 'Ферзь', 'Король', 'Ладья', 'Конь', 'Слон'];
    let arrPeshka = ["1", "Пешка","Пешка","Пешка","Пешка","Пешка","Пешка","Пешка","Пешка"]
    document.querySelector("#horizontID_"+i+"1").innerHTML = arrFIG[0+i];
    document.querySelector("#horizontID_"+i+"2").innerHTML = arrPeshka[0+i];
    document.querySelector("#horizontID_"+i+"7").innerHTML = arrPeshka[0+i];
    document.querySelector("#horizontID_"+i+"8").innerHTML = arrFIG[0+i];
  }
}




include();
double();
alfaLine();
numberLine();
posision();




for (var i = 0; i < arrQvadro.length; i++) {
  arrQvadro[i].onclick = changeColor;
}

function changeColor(){
  this.className = (this.className == 'horizont white' ? 'horizont green':'horizont white');
  // this.className = (this.className == 'horizont black' ? 'horizont green':'horizont black')
}


// function changeColor(){
//   if (this.className == 'white') { 
//     this.classList.add = 'green';
    
//   }  
//   else if (this.className ==  'green') {
//     this.classList.add = 'white';
//   }
//    else {
//    this.className = 'horizont white';
//   }

// }

// document.querySelector("#horizontID_11").addEventListener("click", change); 

// function change(){
//   changeColor.style.backgroundColor = 'green';
// }


// document.querySelector("#horizontID_11").onclick = function() {
//   document.querySelector('.horizont').classList.add('green');
// }

// document.querySelector("#horizontID_11").onclick = function(){this.className = (this.className == 'horizont white' ? 'horizont green':'horizont white')}


// const  changeColor = document.querySelectorAll(".horizont");
