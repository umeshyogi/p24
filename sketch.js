const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1,stone2,stone3;
var rubber1;
var iron1 ;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new stone(550,50,10)
    stone2 = new stone(650,250,10)
    stone3 = new stone(750,350,10)
    rubber1 = new Rubber(800,100,40)
    iron1 = new iron(300,450)
    console.log(hammer)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    stone3.display();
    rubber1.display();
    iron1.display();
 
}