var mycanvas=document.getElementById("myCanvas");
var context= mycanvas.getContext("2d");
var myScore = document.getElementById("score");
var sndpoink = new Audio("poink.mp3");
var sndlose = new Audio("Lose.mp3");
var sndpadd = new Audio("paddHit.mp3");
var sndFinish = new Audio("Finished.mp3");


function PlayAudio(){

    sndpoink.play();

}

function PlayFinish(){


    sndFinish.play();


}

function PlayLose(){


    sndlose.play();


}
function PaddHit(){


    sndpadd.play();


}

function PauseLose(){

    sndlose.pause();

}


 
myScore.style.color = "white";
var ballX = 110 ;
var ballY = 130 ;
var ballXChange = 1;
var ballYChange = 1;
var radius = 2 ;
var paddX = 110 ;
var paddY = 140 ;
var paddWidth = 50 ;
var paddHeight = 4 ; 
var paddSpeed = 5 ;
var leftPressed = false ;
var rightPressed = false ;
var bricks = [];
var rowCount = 8 ;
var colCount = 12  ;
var numHitted = 0 ;
var lost = false ;
var isBlack = false;
var isRed = false;



function drawPaddle(){

    context.fillStyle = 'red';
    context.fillRect(paddX , paddY , paddWidth , paddHeight);
    
    }

function drawBall(){

context.strokeStyle = 'white';
context.fillStyle = 'white';
context.beginPath();
context.arc(ballX , ballY , radius , 0 ,2 * Math.PI);
context.fill();
context.stroke();

}



function collision(){
    if(ballX + radius > 300 || ballX - radius < 0)
    {
        ballXChange = -1 * ballXChange;
    }

    if(ballY + radius > 150 || ballY - radius < 0)
    {
        ballYChange = -1 * ballYChange;
    }

    if(ballX >= paddX && ballX <= paddX +paddWidth && ballY + radius >= paddY){
        ballYChange *= -1 ;
        PaddHit();
    }

    if(ballY + radius == 150)
    {
        
        lost = true ;
        
        context.beginPath();
        
        context.strokeText("Ur Score :" , 110, 90);
        context.strokeText(numHitted * 10 , 160, 90);

        if(lost==true)
        {
             PlayLose();
        }
        ballY + radius == 14;
        
        context.clearRect();
        context.closePath();

        

        
    }
}
        

function Score(){
    context.beginPath();
    context.strokeText("Score :", 230, 140);
    
        context.strokeText(numHitted * 100 , 270, 140);
    
    
        context.strokeText(numHitted * 50 , 270, 140);
    
    
    context.strokeText(numHitted * 10 , 270, 140);
    context.closePath();
}


function gameLoop(){

    context.clearRect(0 , 0 , 1200 , 800);
    drawBall();
    collision();
    drawPaddle();
    movement();
    drawBricks();
    Finished();
    myScore.innerHTML = "Score :  " + numHitted*10;
    myScore.style.fontSize = "60px";
    myScore.style.padding = "10px"
    ballX = ballX + ballXChange;
    ballY = ballY + ballYChange;

}




function Finished(){
    if(numHitted == (rowCount*colCount)){

        
        context.beginPath();
        context.strokeText("Good Job", 110, 75);
        context.strokeText("Ur Score :" , 110, 90);
        PlayFinish();
        context.strokeText((numHitted * 10)-10 , 140, 90);
        context.clearRect();
        context.closePath();
        
        
        

    }
}


function movement(){
    if(leftPressed && paddX - paddSpeed>=0){
        paddX-= paddSpeed;
    }
    else if(rightPressed && paddX + paddSpeed +paddWidth <= 300){
        paddX+= paddSpeed;
    }
}

function keyIsDown(e){
    if(e.keyCode == 37){
        leftPressed = true;
    }
    else if(e.keyCode == 39){
        rightPressed = true;
    }
}
function keyIsUp(e){
    if(e.keyCode == 37){
        leftPressed = false;
    }
    else if(e.keyCode == 39){
        rightPressed = false;
    }
}

function Brick(x1 , y1 , color1){

    this.x = x1;
    this.y = y1; 
    this.width = 20; 
    this.height = 10;
    this.color = color1;
    this.hitted = false ;

}
for(var r = 0 ; r < rowCount ; r++){
    bricks[r]=[];
    for(var c= 0 ; c <colCount ; c++){
        var startX = (c*25) ;
        var startY =  (r*8);
        var red = Math.floor(Math.random()*256);
        var green = Math.floor(Math.random()*256);
        var blue = Math.floor(Math.random()*256);
        var color = "rgb(" +red +","+green + "," + blue+")";
        if(color==("rgb(" +0 +","+0 + "," + 0+")")){
            isBlack = true;
        }
        if(color==("rgb(" +0 +","+green + "," + blue+")")){
            isRed = true;
        }
        bricks[r][c]=new Brick(startX , startY ,color);
    }
}

function drawBricks(){
    for(var r = 0 ; r < rowCount ; r++){
        for(var c= 0 ; c <colCount ; c++){
            if(!bricks[r][c].hitted){
            context.beginPath();
            context.rect(bricks[r][c].x , bricks[r][c].y,bricks[r][c].width,bricks[r][c].height/1.5 )
            context.fillStyle = bricks[r][c].color;
            context.fill();
            context.closePath();
            }

            if(!bricks[r][c].hitted){
            if(ballX + radius >=bricks[r][c].x && ballX - radius <= bricks[r][c].x +bricks[r][c].width 
                && ballY + radius >= bricks[r][c].y && ballY - radius <= bricks[r][c].y + bricks[r][c].height){
                    PlayAudio();
                    bricks[r][c].hitted=true;
                    ballYChange *=-1;
                    numHitted++;

                }
                if(ballX - radius <=bricks[r][c].x && ballX + radius >= bricks[r][c].x +bricks[r][c].width 
                    && ballY - radius <= bricks[r][c].y && ballY + radius >= bricks[r][c].y + bricks[r][c].height){
                        
                        bricks[r][c].hitted=true;
                        ballXChange *=-1;
                        numHitted++;
    
                    }
                
                
            }
        }
    }
}



document.addEventListener("keydown",keyIsDown);
document.addEventListener("keyup", keyIsUp);
document.addEventListener("keypress", Start)

context.beginPath();
context.strokeStyle = "white"
context.fillStyle = "balck";
context.strokeText("Press Enter To Begin", 100, 75);
context.fill();
context.stroke();
context.closePath();

function Start(e){
        
    if(e.keyCode == 13){
        myScore.style.border = "1px solid White"
        setInterval(gameLoop , 12);
    }
}

