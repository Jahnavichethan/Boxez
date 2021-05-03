class Player{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=40;
        this.height=40;

        World.add(world,this.body);
    }
     display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push()
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     strokeWeight(1);
     stroke("black");
     fill("#F79CC0");
     rect(0, 0, this.width, this.height);
     pop();
     }
}
