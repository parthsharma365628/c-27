class sling{
 constructor(bodyA,bodyB){
var opt={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:10
}
this.slings=Constraint.create(opt)
World.add(world,this.slings)

}   
display(){
    var pointA=this.slings.bodyA.position
    var pointB=this.slings.bodyB.position
    line(pointA.x,pointA.y,pointB.x.pointB.y)
}
}