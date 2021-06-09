const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png" ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

   
    if (backgroundImg){
        background(backgroundImg);
    }
    else {
        background("blue");
    }

    Engine.update(engine);



}

async function getBackgroundImg(){
    var responce = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responceJson = await responce.json()
    var datetime = responceJson.datetime;
    var hour = datetime.slice(11,13);


   console.log(hour);


   if(hour>=04 && hour<=06){
   
   bg="sunrise1.png";
   
   }
   else if (hour>=06 && hour<=08){
   bg="sunrise2.jpg";
   
   }
   else if (hour>=08 && hour<=09){
    bg="sunrise3.jpg";
    
    }
 else if (hour>=09 && hour<=10){
 bg="sunrise4.jpg";
        
 }
 else if (hour>=10 && hour<=11){
   bg="sunrise5.jpg";
            
  }
  else if (hour>=11 && hour<=16){
   bg="sunrise6.jpg";
                
 }
 else if (hour>=16 && hour<=17){
 bg="sunset7.jpg";
                    
 }
else if (hour>=17 && hour<=19){
  bg="sunset8.jpg";
                        
  }
  else if (hour>=19 && hour<=20){
  bg="sunset9.jpg";
                            
 }
 else if (hour>=20 && hour<=21){
 bg="sunset10.jpg";
    
 }
else if (hour>=21 && hour<=22){
  bg="sunset11.jpg";
  }
  else if (hour>=22 && hour<=04){
 bg="sunset12.jpg";
            
 }
        
backgroundImg=loadImage(bg);
 console.log(backgroundImg);
}
