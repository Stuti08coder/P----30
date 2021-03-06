class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.5,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed < 3){
      this.body.display;
      }
      
      else{
        World.remove(world, this.body);
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y ,50,50);
      }
      
      
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}