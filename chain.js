class Chain {
constructor(x,y){
    var options= {
        bodyA: x, 
        bodyB: y,
        length: 200,
 stiffness: 0.4
    }
    this.chain= Constraint.create (options)
    World.add(world, this.chain)
}
display(){
    var pointA= this.chain.bodyA.position
    var pointB= this.chain.bodyB.position
    push ();
    strokeWeight(5)
    stroke("blue")
    line (pointA.x, pointA.y, pointB.x, pointB.y)
    pop ();
}

}