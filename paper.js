class paper{
    constructor(x,y,r){
    var options = {
        restitution = 0.2,
        density = 1.2,
        friction = 1
    }

    this.x=x
    this.y=y
    this.r=r
    this.image=loadImage("paper.png");
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
}

    display()
    {
        var paperpos = this.body.position;

        push()
        translate(paperpos.x,paperpos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill("blue")
        ellipse(0,0,this.r,this.r)
        pop()
    }

}