class Dustbin{
    constructor(x,y,w,h){
     var option = {
        isStatic: true,
      
     }
     this.body= Bodies.rectangle(x,y,w,h,option)
     this.w=w;
     this.h=h;

     World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER);
        fill(255)
        rect(0,0,this.w,this.h);
        pop()
    }
}