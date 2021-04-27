var canvas;
var block1, block2, block3, block4;
var ball, edges;
var music;

function preload(){

    // load sound here
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,590,180,20);
    block1.shapeColor = "yellow";
          //block1
    block2 = createSprite(300,590,180,20);
    block2.shapeColor = "blue";
          //block2
    block3 = createSprite(500,590,180,20);
    block3.shapeColor = "red";
          //block3
    block4 = createSprite(700,590,180,20);
    block4.shapeColor = "green";
          //block4
    ball = createSprite(random(20,750),100,25,25);
    ball.shapeColor = rgb(255,255,255);

    //write code to add velocityX and velocityY
    ball.velocityX = 4;
    ball.velocityY = 4;
}

function draw() {
    background(0);

    edges=createEdgeSprites();
    ball.bounceOff(edges);

    //write code to stop music
    if (ball.x < 0){
        music.stop();
        ball.velocityX = 3;
    }
    else if(ball.x > 800){
        music.stop();
        ball.velocityX = -3;
    }

    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "yellow";
        music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "blue";
        music.play();

        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
        
    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();

    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }

    drawSprites();
}
