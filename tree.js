class Tree {
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("tree.png");
        World.add(world,this.image);
    } 

    display() {
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.w,this.h);
    }
 }