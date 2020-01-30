let square;

function include(){
  for(i=1; i<=8; i++){
    let square = document.createElement("div"+i);
    document.body.append(square);

    document.querySelector('div'+i).style.width = '100px';
    document.querySelector('div'+i).style.height = '100px';

      if(i%2!=0){
        document.querySelector('div'+i).style.background = 'black';
      }
      else{
        document.querySelector('div'+i).style.background = 'white';
      }
  }
}

include();




