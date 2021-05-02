const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5
var box6,box7,box8,box9
var box10,box11,box12,box13
var player,goal;
var engine, world;

function setup() {
    createCanvas(850,300);
    engine = Engine.create();
    world = engine.world;

  box1= new Box(100,150,50,30)
  box2= new Box(250,150,50,30)
  box3= new Box(400,150,50,30)
  box4= new Box(550,150,50,30)
  box5= new Box(700,150,50,30)
  box6= new Box(175,250,50,30)
  box7= new Box(325,250,50,30)
  box8= new Box(475,250,50,30)
  box9= new Box(630,250,50,30)
  box10= new Box(175,50,50,30)
  box11= new Box(325,50,50,30)
  box12= new Box(475,50,50,30)
  box13= new Box(630,50,50,30)

  player=new Player(40,40)
  goal=new Player(810,260)
  
}  

function draw() {
    rectMode(CENTER);
    background("#A30240")
    
    istouching(player,box10);
    istouching(player,box13);
    istouching(player,box12);
    istouching(player,box11);
    istouching(player,box9);
    istouching(player,box8);
    istouching(player,box7);
    istouching(player,box6);
    istouching(player,box5);
    istouching(player,box4);
    istouching(player,box3);
    istouching(player,box2);
    istouching(player,box1);

    wastouching(player,goal)

    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    player.display();
    goal.display();

}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    player.body.position.x=player.body.position.x+5
    
  }
  if(keyCode===LEFT_ARROW){
    player.body.position.x=player.body.position.x-5
   
  }if(keyCode===UP_ARROW){
    player.body.position.y=player.body.position.y-5
    
  }if(keyCode===DOWN_ARROW){
    player.body.position.y=player.body.position.y+5
    
  }

}

function istouching(player,box10){
  if(player.body.position.x-box10.body.position.x<player.width/2+box10.width/2
    &&box10.body.position.x-player.body.position.x<player.width/2+box10.width/2
    &&player.body.position.y-box10.body.position.y<player.height/2+box10.height/2
    &&box10.body.position.y-player.body.position.y<player.height/2+box10.height/2){
player.body.position.x=40;
player.body.position.y=40;

}
}

function wastouching(player,goal){
  if(player.body.position.x-goal.body.position.x<player.width/2+goal.width/2
    &&goal.body.position.x-player.body.position.x<player.width/2+goal.width/2
    &&player.body.position.y-goal.body.position.y<player.height/2+goal.height/2
    &&goal.body.position.y-player.body.position.y<player.height/2+goal.height/2){
      textSize(20)
      fill("white")
      text("YOU WON, GAMEOVER",325,100)

}
}
