class Sand {
    constructor(x,y,r){
        var box_options = {
            friction : 1,
            restitution : 0.2,
            density : 1
        }
        this.body = Bodies.circle(x,y,r,box_options) 
        this.r = r
        World.add(world,this.body)
    }
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("yellow")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r) 
        pop()
        
    }
}