class paper{

    constructor(){

        var options ={
            isStatic : true
        }
        this.body = Bodies.circle(100,625,30,options);
        World.add(world,this.body);
    }

    display(){

        ellipseMode(CENTER);
        fill("magenta")
        ellipse(this.body.position.x,this.body.position.y,30);
        this.keyPressed();
    }

    keyPressed(){
        if(keyCode === UP_ARROW){
            this.body.applyForce(this.body,this.body.position,{x:85,y:-85});
        }
    }
    

}