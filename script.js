 const redRect = document.querySelector('.rect-red');
 const blueRect = document.querySelector('.rect-blue');
 const headings = document.querySelector('.heading');

let redX = 0;
let blueX = 545;

let redY = 200;
let blueY = 200;

let redSpeed = 3;
let blueSpeed = 3;


let index = 0;

function moveRed() {
    

    redX += redSpeed;
      redY  += redSpeed;
    redRect.style.left = redX + 'px';

    //Reverse the rectangle if it hits the boundaris

    if(redX <=0 || redX + redRect.offsetWidth >=600)
   {

      redSpeed *= -1;
  
   }

}

function moveRedY() {
    

  redY += redSpeed;
    redRect.style.top = redY +'px';
    
    if(redY <=0 || redY + blueRect.offsetHeight >=600){
     
     redSpeed *=-1; 
    }
 
}






function moveBlue() {

 blueX -= blueSpeed;
 
 blueRect.style.left = blueX + "px";
 
 if(blueX <=0 || blueX + blueRect.offsetWidth>=600){

       blueSpeed *= -1;

 }  
}


function moveBlueY() {
    
 blueY +=blueSpeed;

     blueRect.style.top    =  blueY + 'px';


     if(blueY <=0 || blueY + blueRect.offsetHeight >=600){

        blueSpeed *= -1; 
     }


}

function collision() {
    
   if(redX + redRect.offsetWidth >= blueX && redX <= blueX+ blueRect.offsetWidth ){

    blueSpeed *= -1;
    redSpeed *= -1;

   
   }


}


setInterval(()=>{
// moveRed();
// moveBlue();
// collision();

moveRedY();
moveBlueY();
},20);