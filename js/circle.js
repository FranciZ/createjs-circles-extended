
function Circle(container, strokeWidth, strokeColor, radius, alpha){

    // constructor function
    console.log('New instance of circle created');

    this.container = container;
    this.strokeWidth = strokeWidth;
    this.strokeColor = strokeColor;
    this.radius = radius;
    this.alpha = alpha;

    this.draw();
    this.addEvents();

}

Circle.prototype.addEvents = function(){

    var self = this;

    this.shape.addEventListener('click', function(){

        // do something on click
        //TweenLite.to(self.shape, 0.2, {scaleX:10, scaleY:10});

    });

    this.shape.addEventListener('mouseover', function(){

        TweenLite.to(self.shape, 0.2, {alpha:1});

    });

    this.shape.addEventListener('mouseout', function(){

        TweenLite.to(self.shape, 0.2, {alpha:0.2});

    });

};

Circle.prototype.draw = function(){

    this.shape = new createjs.Shape();
    this.shape.graphics.setStrokeStyle(this.strokeWidth);
    this.shape.graphics.beginStroke(this.strokeColor);
    this.shape.graphics.drawCircle(0, 0, this.radius);
    // opacity
    this.shape.alpha = this.alpha;
    // blending mode
    this.shape.compositeOperation = 'lighter';

    this.container.addChild(this.shape);

};

Circle.prototype.setPosition = function(x, y){

    this.shape.x = x;
    this.shape.y = y;

};

Circle.prototype.setScale = function(scaleX, scaleY){

    this.shape.scaleX = scaleX;
    this.shape.scaleY = scaleY;

};

Circle.prototype.animateTo = function(duration, params){

    TweenLite.to(this.shape, duration, params);

};




