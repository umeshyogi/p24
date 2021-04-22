class stone {
    constructor (x,y,radius){
        var options = {
            "friction" :0.9,
            "restitution":0.8,
            "density":12,
        }
        this.body=Matter.Bodies.circle(x,y,radius,options)
        this.x=x;
        this.y=y;
        this.radius=radius;
        Matter.World.add(world,this.body)
    }
    display(){
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("black")
        ellipse(0,0,this.radius,this.radius)
        pop ()
    }
}