class Box{
    constructor(x,y,width,height){
        var body_options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,body_options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}