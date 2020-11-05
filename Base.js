class BaseClass{
    //PROPERTIES
    constructor(x, y, w, h, angle){
        var options = {
            restitution: 0.8,
            friction:1.7,
            density:1
        };
        
        this.body = Bodies.rectangle(x, y, w, h, options);

        this.width = w;
        
        this.height = h;

        this.image  = loadImage("Images/base.png")
        
        World.add(world, this.body);
        
    }

    //FUNCTIONS
    display(){
        //add a new setting 

        push();

        fill(171, 255, 171);
        stroke("blue");
        
        translate(this.body.position.x, this.body.position.y) 
        rotate(this.body.angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //Delete the new settings 
        
        pop();

    }
}