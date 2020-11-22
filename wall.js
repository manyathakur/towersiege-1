class wall{
    constructor(x,y,width){
       var Liam={
           restitution:0.5,
           frictiion:20
       }
       this.wall = Bodies.rectangle(x,y,width,30,Liam);
       this.w = width;
       World.add(world,this.wall);
    }
    block(){
        var pos = this.wall.position;
        var angle = this.wall.angle;

        push();
        //translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.w,30);
        pop();
    }
}