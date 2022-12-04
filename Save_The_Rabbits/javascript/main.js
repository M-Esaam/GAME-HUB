var targetShooting = document.getElementById('target-shooting');


setInterval(getMouseCoord(),0.0001)

function getMouseCoord(){

    document.body.addEventListener('mousemove' , function(e){
        var y=e.clientY -25;
        var x=e.clientX -25;
        targetShooting.style.transform= `translate(${x}px,${y}px)` ;
        // targetShooting.style.transform=y+"px";
    })
}


var body=document.querySelector('body');
var bloodEffect = document.getElementById('bloodEffect')
var shotgun =document.getElementById('shotgunFiring')
var ateeeh =document.getElementById("ateeeh")
var shalaby =document.getElementById("shalaby")
var Bullets = document.getElementsByClassName('Bullets')
var BulletsNumber=5;
var BulletsNumberTotal=15
var NumberOfX=document.getElementById('NumberOfBullets')
var heart= document.getElementsByClassName('heart')
var heartsNumber=3;
emptyHeart=0
var NumberOfKills = document.getElementById('NumberOfKills')
var KillsNumberis=0;

var check = false
body.addEventListener('click',function(e){
    bloodEffect.style.opacity ='1';
    var A=e.clientX -33;
    var B=e.clientY -32;
    bloodEffect.style.left=A+'px';
    bloodEffect.style.top=B+ 'px';
    console.log(A,B)
    if(BulletsNumberTotal >0)
    {
         shotgun.play();
    }
   

    ateeeh.play()
    // shalaby.play()
    
        BulletsNumber --;
        BulletsNumberTotal--
        Bullets[BulletsNumber].src="images/EmptyBullet.png"
        NumberOfX.innerHTML=`${BulletsNumberTotal}X`
            if(BulletsNumber==0){
                heart[heartsNumber-1].src='images/Emptyheart.png'
                heartsNumber--
                emptyHeart++
                if(emptyHeart<3){        
                    for(var i=0 ; i<5 ; i++)
                    {
                        Bullets[i].src="images/Bullet.png"
                    }
                    BulletsNumber=5
            }
        }
})

function disappear(){
    bloodEffect.style.opacity -='0.2';
}
body.addEventListener('mouseup',function(){
    setInterval(disappear,800)
})


// ******************************** Start Nature Sound **********************************

var natureSound =document.getElementById('nature')
var muteOn = document.getElementById('muteOn');
var muteOff = document.getElementById('muteOff');
function playSound()
{
    natureSound.play()
    muteOn.style.display='none'
    muteOff.style.display='block'
}
function stopSound(){
    natureSound.pause();
    muteOn.style.display='block'
    muteOff.style.display='none'
}

muteOn.addEventListener('mouseover',function(){
    body.style.cursor='pointer';
    targetShooting.style.display='none'
    shotgun.pause()
      ateeeh.pause()
    shalaby.pause()
})
muteOn.addEventListener('mouseleave',function(){
    body.style.cursor='none';
    targetShooting.style.display='block'
})
muteOff.addEventListener('mouseover',function(){
    body.style.cursor='pointer';
    targetShooting.style.display='none'
    shotgun.pause()
    ateeeh.pause()
    shalaby.pause()
})
muteOff.addEventListener('mouseleave',function(){
    body.style.cursor='none';
    targetShooting.style.display='block'
})

// *********************************** End Nature Sound **********************************


// ************************************ Hunting Logic ************************************

var Eagle1 = document.getElementById('Eagle1')
var Eagle2 = document.getElementById('Eagle2')
var rabbit3 = document.getElementById('rabbit3')
var GameOver=0 ;

            // ******************* Eagle Attack and Size ***************
function growUp(){
    Eagle2.style.width += '100px';
}
function eagleGo_XY()
{
    Eagle2.style.left += 72+'px'
    Eagle2.style.top += 19+'px'
    // Eagle2.style.margin='0%'
}
var counter=10;
 setInterval(function(){ 
    if(counter < 170)
    {
        counter +=2;
    } 
    Eagle2.style.width = counter +'px';
 },50)

    // *************************** Falcon ******************************************
    var falcon2=document.getElementById('falcon2');
    var rabbit2=document.getElementById('rabbit2');
    var FalconPositionX=-133
    var FalconPositionY=350
    var FalconRotation = 45 ;
    var rabbit2PositionX=705;
    var rabbit2PositionY=195;
    
   
  

    var ReturnPostionX=135
    var ReturnPostionY=680
    
    var intervalFalcon= setInterval(function(){
        if(FalconPositionX<125 && FalconPositionY <700)
        {
        
            

            FalconPositionX+=4
            FalconPositionY+=5
            falcon2.style.marginTop = FalconPositionX +'px';
            falcon2.style.marginLeft= FalconPositionY+'px';
     
            
          
        }
        else{

                    ReturnPostionX -=2;
                    ReturnPostionY += 2;
                    falcon2.style.marginTop = ReturnPostionX +'px';
                    falcon2.style.marginLeft= ReturnPostionY+'px';
                    console.log(FalconPositionX ,FalconPositionY)
            
                FalconRotation -=2
            

                rabbit2PositionX +=2 ;
                rabbit2PositionY -=2 ;
                console.log("X is : " +rabbit2PositionX , rabbit2PositionY)
                rabbit2.style.marginTop =  rabbit2PositionY   +'px';
                rabbit2.style.marginLeft=  rabbit2PositionX   +'px';

                if(FalconRotation>-20){
                    FalconRotation -=2
                    falcon2.style.transform= ` rotate(${FalconRotation}deg)`
                    
                
                                    }
           
            }
            // if(FalconPositionX==1001 ){
            //     clearInterval(intervalFalcon)
            //  } 
        
     },50)

     falcon2.addEventListener('click',function(){
        falcon2.style.display='none'
        clearInterval(intervalFalcon)
        KillsNumberis++
        NumberOfKills.innerHTML=`${KillsNumberis}X`
        rabbit2.style.marginTop='195px'
        rabbit2.style.marginLeft='705px'
     })

     

                //  *********************************************

 var positionX =1900 ;
 var positionY =0 ;
 var interval2
 var EagleTakeRabbit=0;
 var israbbitTaken=0;
 var EagleCounter=0 ;

 var interval = setInterval(function(){ 
    if((positionX >=100) && (positionY <= 300))
    {
        positionX -=25
        positionY +=5
        Eagle2.style.marginleft = positionX+'px';
        Eagle2.style.marginTop =positionY+'px';
        // console.log(positionX ,positionY)
    } 
    else{

             EagleTakeRabbit = 1 ;
            //  console.log("Game Over")
             interval2= setInterval(function(){
            if((positionX >= -250) && (positionY >= -250)){

                positionX-=10;
                positionY-=10;
                Eagle2.style.marginleft = positionX+'px';
                Eagle2.style.marginTop =positionY+'px';

                rabbit3.style.marginleft = positionX+95+'px';
                rabbit3.style.marginTop = positionY+95+'px';
                EagleCounter ++ ;
                console.log(EagleCounter)
            
                // console.log(positionX ,positionY)
            }
            else{
                clearInterval(interval2)
            }
        }
        ,100)    
        // console.log("Game Over")      
        clearInterval(interval)
    } 
 },100)

 var disappearBird= 1
Eagle2.addEventListener('click',function(e){
      
            clearInterval(interval)
            clearInterval(interval2)
            if(EagleTakeRabbit==1)
            {
                israbbitTaken = 1 ;
            } 
            EagleTakeRabbit=0         
            KillsNumberis++
            NumberOfKills.innerHTML=`${KillsNumberis}X`
            Eagle2.style.display='none'
            rabbit3.style.marginTop='400px'
            rabbit3.style.marginLeft='900px'
        
})



//  *********************************** Tiger *************************************

var TigerTimer=document.getElementById("TIGER");

// function AnimateTiger()
// {
//   	TigerTimer.style.
//   	TigerTimer = setInterval("MoveTiger()", 20);
// }

// TigerTimer = setInterval("MoveTiger()", 20);

// function MoveTiger()
// {
// 	document.getElementById("TIGER").style.left= (parseInt(document.getElementById("TIGER").style.left)-2)+"px";
// 	if (parseInt(document.getElementById("TIGER").style.left) < 0)
// 	 {
// 		clearInterval(TigerTimer);
// 		document.getElementById('h1').style.display="inline-block" ;

// 	}
// }
TigerTimer.style.left = '1180px'
var rabbit1 = document.getElementById('rabbit1')
TigerTimer.style.opacity=0+'%'
var newleft = 1200 ;
var rabbitMove=1
var intervalTiger
var NumberOfTigerKills =0 ;
var TigerKills = document.getElementById('NumberOfTigerKills')


setTimeout(function(){
    TigerTimer.style.opacity=100+'%' 
    intervalTiger= setInterval(function(){

        if(israbbitTaken != 1 && EagleTakeRabbit !=1 )
        {
            setTimeout(function(){
                rabbit3.style.marginLeft=(newleft -80)+'px'
            },800)
      
        }
        if(EagleTakeRabbit == 0 && EagleCounter <20)
        {
            setTimeout(function(){
                rabbit3.style.marginLeft=(newleft -80)+'px'
            },1000)
        }

        if(newleft > -200)
        {
            newleft -= 30 ;
            TigerTimer.style.left = newleft +'px'
            // console.log(newleft)
            
           if(newleft <=400 && rabbitMove==1){
            rabbit1.style.marginLeft=newleft-70+'px'; 
           }
            
        }
        else{
            clearInterval(intervalTiger)
        }
        
    },100)
},8000)


TigerTimer.addEventListener('click',function(e){
        rabbitMove=0;
        disappearBird -= 0.1 ;
        TigerTimer.style.display='none';
        NumberOfTigerKills++
        TigerKills.innerHTML = `${NumberOfTigerKills}X`
        clearInterval(intervalTiger)
        rabbit3.style.marginLeft='900px'
      
})







// ********************************** timer *************************

var time=document.getElementById("time")
var timerDiv=document.getElementById('timer')
var totalTime = 120 ;
var mins;
var seconds;

var intervalTimer=setInterval(function(){
  if(totalTime>0)
  {
    totalTime--
    mins = Math.floor(totalTime/60)
    seconds = totalTime % 60
    if(seconds<10){
        if(totalTime<10)
        {
            time.innerHTML= ` 0${mins}:0${seconds}`
            time.style.color="red"
            // timerDiv.style.backgroundColor=""

        }
        else{
            time.innerHTML= ` 0${mins}:0${seconds}`
        }
       
    }
    else{
        time.innerHTML= ` 0${mins}:${seconds}`
    }

  } 
  else{
        clearInterval(intervalTimer)    
  } 
   
},1000)

var progress= document.getElementById('progress1')

newValue=120;
var intervalProgress= setInterval(function(){
    progress.setAttribute('value' ,newValue )
    if(newValue>0)
    {
        newValue--;
        if(newValue<78){
            time.style.color="green"
            document.getElementById("remainingTime").style.color="black"
            if(totalTime<10)
            {
                time.style.color="red"
            }
        }
        if(newValue<20){
            progress.setAttribute('class','progress1')
        }
    }
    else{
        clearInterval(intervalProgress)
    }
  
},1000)

// **************************************** Game Over  ************************************************

var gameOver = document.getElementById('gameOver')

if(emptyHeart==2)
{
     console.log("Game Over")  
}

