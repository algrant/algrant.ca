// I just want an animation class which deals 
// with variables and callbacks. Use it to animate the canvas.

// Supply it with Resolution, Array, and Callback(Array[i]), 
// and it will step through each array at said resolution,
// and call the callback!

//Based heavily on xAnimation.js of Cross-Browser.com

function simpanim(r){ 

  this.r = r || 10;

};

simpanim.prototype.init = function(a,c){
  //start simple with resolution.
  this.a = a;
  this.c = c;  
  this.l = a.length;
  this.d = 0;
  clearInterval(this.timer);
  this.timer = null;
};

simpanim.prototype.run = function(){
  
  var i = this;

  if(!this.timer) this.timer = setInterval(
    function() {
      if (i.d < i.l) { //still in array
        i.c(i.a[i.d]); // run callback
        i.d+=1;
      }
      else { //
        clearInterval(i.timer);
        i.timer = null;
      }
    }, this.r
  );
};

simpanim.prototype.pause = function(){
  

};

simpanim.prototype.resume = function(){
  

};