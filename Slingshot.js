class Slingshot{
    constructor(BodyA,pointB){
        var option = {
            bodyA: BodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.05
        }
        this.pointB = pointB
        this.sling = Constraint.create(option)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA = null
 
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        
    }
}