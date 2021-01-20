class Iron {
    constructor(x,y){
        var box_options = {
            friction : 20,
            restitution : 0.2,
            density : 100
        }
        this.body = Bodies.rectangle(x,y,80,50,box_options) 
        this.width = 80
        this.height = 50
        World.add(world,this.body)
    }
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("grey")
        rectMode(CENTER)
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}