//creating a log class 
class Log extends BaseClass{
    //PROPERTIES
    constructor(x, y, h, angle){
        
        super(x, y, 20, h, angle);

        this.image = loadImage("Images/wood2.png");

        Matter.Body.setAngle(this.body, angle); 

        
    }


}
