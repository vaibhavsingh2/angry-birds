const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint;

var box1,box2,pig1,log1;
var backgroundImg;

var gameState="onSling";
var bg="sprites/bg1.png";
var score=0;

function preload(){
    getBackgroundImg();
}
function setup(){
    createCanvas(1200,400);

    engine=Engine.create();
    world=engine.world;
    ground=new Ground(600,height,1200,20);
    platform=new Ground(150,305,300,170);

box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
pig1=new Pig(810,350);
log1=new Log(810,260,380,PI/2);

box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
pig3=new Pig(810,250);

bird=new Bird(200,50);

box5=new Box(810,180,70,70);
log4=new Log(760,120,150,PI/7);
log5=new Log(870,120,150,-PI/7);

log3 =  new Log(810,180,300, PI/2);



slingshot=new SlingShot(bird.body,{x:200,y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    platform.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    bird.display();
    box5.display();
    log4.display();
    log5.display();
    log3.display();
    slingshot.display();

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    //gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/x1.jpg";
    }
    else{
        bg = "sprites/t1.jpeg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}