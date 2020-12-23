class ground{

    constructor(){
        
        var body_option={
            isStatic : true
        }

        this.body = Bodies.rectangle(400,650,800,20,body_option);
        World.add(world,this.body);
    }

    display(){

        rectMode(CENTER);
        fill("white");
        rect(400,650,800,20);
    }

}