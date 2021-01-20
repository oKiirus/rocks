class   Stone {
    constructor(x,y,width,height){
        var box_options = {
            friction : 20,
            restitution : 0.2,
            density : 100
        }
        this.body = Bodies.rectangle(x,y,width,height,box_options) 
        this.width = height
        this.height = width
        World.add(world,this.body)
    }
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("black")
        rectMode(CENTER)
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}