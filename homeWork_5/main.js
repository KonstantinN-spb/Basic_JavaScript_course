let square,main;





function include(){
  for(i=1; i<=8; i++){
    let main = document.querySelector("#container");
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

function double(){
  
  for(i=1; i<=8; i++){
    let parent = document.querySelector("#someID_"+i);

    for(i=1; i<=8; i++) {
      let two = document.createElement("div");
      parent.appendChild(two);
   
      two.className= "horizont" ;
        
        if(i%2!=0){
          two.classList.add('black');
        }
        else{
          two.classList.add('white');
        }
    }
   
  } 
}

include();
double();



