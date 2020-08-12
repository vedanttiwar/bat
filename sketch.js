const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umblrela;
var drop=[];



function setup(){
    createCanvas(480,800);
    engine=Engine.create();
    world=engine.world;
    umblrela=new Umblrela(240,750,20,20);
    
}

function draw(){
    background(52,25,54);
    Engine.update(engine);
    if(frameCount%60===0){
        drop.push(new Drop(random(20,350),10,10));
    }

    for (var j=0;j<drop.lenght;j++){
        drop[j].display();
      }
      umblrela.display();

      drawSprites();
}   

