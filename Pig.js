class Pig extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/IMG_20190627_184744(2).png");
      this.image = loadImage("sprites/IMG_20190627_184744(1).png");
      this.image = loadImage("sprites/IMG_20190627_123739(1).png");
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
     
   }
  
  
  
  };