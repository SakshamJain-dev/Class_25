class Bird extends BaseClass{
    //PROPERTIES
    constructor(x, y){
        
        super(x, y, 50, 50);    //transfers all the properties from the constructor of the base to the constructor of the sub class
        
        this.image = loadImage("Images/bird.png");

        
    }

    //FUNCTIONS
    display(){

        this.body.position.x = mouseX;
        this.body.position.y = mouseY; 

        super.display();

    }
}

/*
INHERITANCE

Parent --> Base CLass
Child  --> Sub-classes

Sub classes inherit or get everything(properties & functions) from the base class

*/
