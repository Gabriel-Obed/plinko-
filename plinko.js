class Plinko{
    constructor(x, y, r){
        var option = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, r, option);
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}