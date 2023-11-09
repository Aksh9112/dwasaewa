class Balls{
   constructor(x,y,r){
     var option = {
      isStatic:false,
      "restitution":0.1,
      "friction":0,
      "density":1.2

     }
     this.body = Bodies.circle(x,y,r,option);
     this.r=r

     World.add(world,this.body)
   }
   display(){
    ellipseMode(CENTER);
    fill("yellow")
    ellipse(this.body.position.x,this.body.position.y,this.r);

   }
}
