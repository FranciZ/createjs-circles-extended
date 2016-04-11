var CIRCLE_COUNT = 25;

var canvas;
var stage;
var circles = [];

function init(){

    canvas = document.getElementById('my-canvas');
    stage = new createjs.Stage(canvas);
    stage.enableDOMEvents();
    stage.enableMouseOver(10);
    createjs.Ticker.setFPS(60);
    createjs.Touch.enable(stage);

}

function createCircles(){

    for(var i=0;i<CIRCLE_COUNT;i++){

        var circle = new Circle(stage, 15, '#113355', (i+1)*4, 1-i*0.02);

        circle.setScale(1.5, 1.5);
        circle.setPosition(Math.random()*400, Math.random()*500);
        circle.animateTo(2, { x:300, y:200, ease:Elastic.easeOut });

        circles.push(circle);

        createjs.Ticker.addEventListener('tick', tick);

        stage.addEventListener('stagemouseup', handleMouseUp);
        stage.addEventListener('stagemousemove', handleMouseMove);

    }

}

function handleMouseMove(){

    for(var i=0;i<circles.length;i++){

        var circle = circles[i];
        circle.animateTo(0.5, { delay:i/24, x:stage.mouseX, y:stage.mouseY, ease:SlowMo.ease.config(0.7, 0.7, false) });

    }

}

function handleMouseUp(){

    for(var i=0;i<circles.length;i++){

        var circle = circles[i];
        circle.animateTo(0.5, { delay:i/24, x:stage.mouseX, y:stage.mouseY, ease:SlowMo.ease.config(0.7, 0.7, false) });

    }

}


function tick(evt){

    stage.update(evt);

}

init();
createCircles();









