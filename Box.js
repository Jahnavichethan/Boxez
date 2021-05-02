class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'frictionAir':0,
          'density':0.8
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill("#8E64F4");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }