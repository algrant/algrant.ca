//As I'm apparently going to play in javascript now. Might as well fix this.
//Based on this: http://www.cgl.uwaterloo.ca/~csk/projects/escherization/geo.py.txt

function Point( x, y ){

    this.x = x||0.0;
    this.y = y||0.0;
    
    this.add = function(p2){
        return new Point( this.x+p2.x, this.y+p2.y);
    };
    
    this.sub = function(p2){
        return new Point( this.x-p2.x, this.y-p2.y);
    };
    
    this.mult = function(s){
        return new Point( this.x*s, this.y*s);
    };
    
    this.div = function(s){
        return new Point(this.x/s, this.y/s);
    };
    
    this.neg = function(s){
        return new Point(-this.x, -this.y);
    };
    
    this.magnitude2 = function(){
        return this.x*this.x+this.y*this.y;
    };
    
    this.magnitude = function(){
        return Math.sqrt(this.magnitude2());
    };
    
    this.distance2 = function(p2){
        dx = this.x - p2.x;
        dy = this.y - p2.y;
        return dx*dx + dy*dy;
    };
        
    this.distance = function(p2){
        return Math.sqrt(this.distance2(p2));
    };
    
    this.normalise = function(){
        return this.div(this.magnitude());
    };
        
    this.scale = function(sx,sy){
        return new Point(this.x*sx, this.y*sy);
    };
    
};
    
function Transform( a, b, c, d, e, f){
    this.m=new Array();
    
    this.m[0] = a||1.0;
    this.m[1] = b||0.0;
    this.m[2] = c||0.0;
    this.m[3] = d||0.0;
    this.m[4] = e||1.0;
    this.m[5] = f||0.0;
    
    this.add = function(t2){
        return new Transform(
            this.m[0] + t2.m[0],
            this.m[1] + t2.m[1],
            this.m[2] + t2.m[2],
            this.m[3] + t2.m[3],
            this.m[4] + t2.m[4],
            this.m[5] + t2.m[5]
            );
    };
    
    this.sub = function(t2){
        return new Transform(
            this.m[0] + t2.m[0],
            this.m[1] + t2.m[1],
            this.m[2] + t2.m[2],
            this.m[3] + t2.m[3],
            this.m[4] + t2.m[4],
            this.m[5] + t2.m[5]
            );
    };
    
    this.mult = function(o2){
        if (o2 instanceof Transform){
            return new Transform(
                this.m[0] * o2.m[0] + this.m[1] * o2.m[3],
				this.m[0] * o2.m[1] + this.m[1] * o2.m[4],
				this.m[0] * o2.m[2] + this.m[1] * o2.m[5] + this.m[2],
				this.m[3] * o2.m[0] + this.m[4] * o2.m[3],
				this.m[3] * o2.m[1] + this.m[4] * o2.m[4],
				this.m[3] * o2.m[2] + this.m[4] * o2.m[5] + this.m[5] );
        }else{
            return new Point(
                this.m[0] * o2.x + this.m[1] * o2.y + this.m[2],
				this.m[3] * o2.x + this.m[4] * o2.y + this.m[5] );
        };
    };
    
    this.invert = function(){
        det = this.m[0]*this.m[4] - this.m[1]*this.m[3];
        return Transform(
            this.m[4] / det, -this.m[1] / det, 
			(this.m[1] * this.m[5] - this.m[2] * this.m[4]) / det,
			-this.m[3] / det, this.m[0] / det, 
			(this.m[2] * this.m[3] - this.m[0] * this.m[5]) / det );
    };
};
    
IDENTITY = new Transform( 1.0, 0.0, 0.0, 0.0, 1.0, 0.0 );

function translate( x, y ){
	return new Transform( 1.0, 0.0, x, 0.0, 1.0, y );
};

function rotate( t ){
    return new Transform(
        Math.cos( t ), -Math.sin( t ), 0.0,
        Math.sin( t ), Math.cos( t ), 0.0 );
};

function reflect(line){
	mag2 = line.magnitude2(); 
	return new Transform(
			(line.x*line.x-line.y*line.y)/mag2, 2*line.x*line.y/mag2, 0.0,
			2*line.x*line.y/mag2, (line.y*line.y-line.x*line.x)/mag2, 0.0 );
};

function rotateAround( p,t ){
    return translate( p.x, p.y ).mult(rotate( t )).mult(translate( -p.x, -p.y ));
};

function angleBetween(p1,p2){
    a1 = Math.atan2(p1.y,p1.x);
    a2 = Math.atan2(p2.y,p2.x);
    return a2-a1;
};

function linescross(p1,p2,p3,p4){
	D = (p1.x-p2.x)*(p3.y-p4.y) - (p1.y-p2.y)*(p3.x-p4.x);
	x = ((p3.x-p4.x)*(p1.x*p2.y-p1.y*p2.x)-(p1.x-p2.x)*(p3.x*p4.y-p3.y*p4.x))/D;
	y = ((p3.y-p4.y)*(p1.x*p2.y-p1.y*p2.x)-(p1.y-p2.y)*(p3.x*p4.y-p3.y*p4.x))/D;
	return new Point(x,y);
};

function centroid(p1,p2,p3,p4){
	return new Point((p1.x+p2.x+p3.x+p4.x)/4,(p1.y+p2.y+p3.y+p4.y)/4);
	};
	