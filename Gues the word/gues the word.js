var ArrOfWords = ["apple", "dos", "book", "definition", "specialist", "flips", "shelf", "scan", "goal", "snake", "nose",
    "noise", "noisy", "noose", "kill", "cosine", "cousin", "dude", "general", "do", "lion", "zebra", "train", "plane",
    "sink", "think", "advance", "leave", "leaf", "class", "queen", "king", "sea", "see", "den", "deer",
    "seer", "fill", "fell", "skill", "skin", "goat", "glass", "poor", "duck", "loose", "amber", "float", "second", "hours", "lesson",
    "fit", "front", "font", "ant", "sensor", "local", "global"];

var ArrOfHints = ["A common- round fruit produced by the tree Malus domestica- cultivated in temperate.",
    "A party- celebration- social function",
    "A collection of sheets of paper bound together to hinge at one edge.",
    "A statement of the meaning of a word or word group or a sign or symbol",
    "Someone who is an expert in, or devoted to, some specific branch of study or research.",
    "A maneuver which rotates an object end over end.",
    "A flat,rigid structure,fixed at right angles to a wall or forming a part of a cabinet.",
    "Close investigation.",
    "A result that one is attempting to achieve.",
    "A legless reptile of sub-order Serpentes with a long thin body and fork-shaped tongue.",
    "A protuberance on the face housing the nostrils, which are used to breathe or smell.",
    "Various sounds, usually unwanted or unpleasant.",
    "Making a noise, especially a loud unpleasant sound",
    "An adjustable loop of rope, such as the one placed around the neck in hangings",
    "The act of killing.", "In a right triangle, the ratio of the length of the side adjacent to an acute angle.",
    "The child of a person's uncle or aunt; a first cousin.",
    "A man, generally a younger man.",
    "A general fact or proposition; a generality.", "A party, celebration, social function.",
    "A big cat, Panthera leo, native to Africa, India and formerly much of Europe.",
    "Any of three species of genus Equus: E. grevyi, E. quagga, or E. ",
    "Elongated portion.", "A level or flat surface.", "A basin used for holding water for washing.",
    "An act of thinking; consideration (of something).", "A forward move; improvement or progression.",
    "To have a consequence or remnant.", "The usually green and flat organ that represents the most prominent feature of plants.",
    "A group, collection, category or set sharing characteristics or attributes.",
    "A female monarch. Example: Queen Victoria.",
    "A male monarch; a man who heads a monarchy",
    "A large body of salt water.", "(stative) To perceive or detect with the eyes, or as if by sight.",
    "A small cavern or hollow place in the side of a hill, or among rocks",
    "A ruminant mammal with antlers and hooves of the family Cervidae",
    "One who sees something; an eyewitness.", "To occupy fully, to take up all of.",
    "A cutting-down of timber.", "Capacity to do something well; technique, ability.",
    "The outer protective layer of the body of any animal, including of a human.",
    "A mammal, Capra aegagrus hircus, and similar species of the genus Capra.",
    "To apply fibreglass to.", "Those who have little or no possessions or money, taken as a group.",
    "body in order to prevent it from being struck by something.",
    "The release of an arrow.", "Ambergris, the waxy product of the sperm whale.",
    "A buoyant device used to support something in water or another liquid.",
    "Something that is number two in a series.", "A time period of sixty minutes; one twenty-fourth of a day.",
    "A section of learning or teaching into which a wider learning content is divided.", "The degree to which something fits.",
    "The foremost side of something or the end that faces the direction it normally moves.",
    "A receptacle in a church for holy water, especially one used in baptism.", "Any of various insects in the family Formicidae in the order Hymenoptera",
    "A device or organ that detects certain external stimuli and responds in a manner.",
    "A person who lives near a given place.", "A globally scoped identifier."];

var randomindex = Math.floor(Math.random() * ArrOfWords.length);
document.getElementById("choosenword").innerHTML = "SoaDsltnlmU";
document.getElementById("choosenhint").innerHTML = "'Dont Small Us' is the answer";
document.getElementById("userInput").value = "Dont Small Us";
document.getElementById("checker").style.backgroundColor = "green";
function NewGame() {
    document.getElementById("clickedsound").play();
    document.getElementById("result").innerHTML = "";
    time.style.color = "yellow";
    currentScore=0;
    document.getElementById("counter2").innerHTML = currentScore;
    setTimeout(function () {
        document.getElementById("UserNameMenu").style.display = "block";
        document.getElementById("menu").style.display = "none";
    }, 200)
}
function StartGame()
{
    document.getElementById("clickedsound").play();
    document.getElementById("UserNameMenu").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("playmusic").play();
    document.getElementById("playmusic").addEventListener('ended',function() {
        this.currentTime = 0;
        this.play();
    }, false);
}


function shuffle_word(x) {

    randomindex = Math.floor(Math.random() * ArrOfWords.length);
    var randomword = "";
    randomword = x[randomindex].split("");
    var word_length = randomword.length;
    for (var i = word_length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var tmp = randomword[i];
        randomword[i] = randomword[j];
        randomword[j] = tmp;
    }
    return randomword.join("");
}


var currentindex = 0;

function putword_puthint() {
    document.getElementById("clickedsound").play();
    document.getElementById("result").innerHTML = "";
    document.getElementById("userInput").value = "";
    randomindex = Math.floor(Math.random() * ArrOfWords.length);
    if (randomindex == currentindex) {
        putword_puthint();
    }
    else {
        currentindex = randomindex;
    }

    var shuffleWord = shuffle_word(ArrOfWords);
    document.getElementById("choosenword").innerHTML = shuffleWord;
    document.getElementById("choosenhint").innerHTML = ArrOfHints[randomindex];

}




function PutHint() {
    document.getElementById("hintsound").play();
    var getInput = document.getElementById("userInput").value;

    var currentword = ArrOfWords[randomindex];
    if (getInput == "Dont Small Us") { }
    else if (getInput != currentword) {

        if (getInput.length == 0) {
            document.getElementById("userInput").value = currentword[0];
        }
        else {

            for (var a = 0; a < getInput.length; a++) {
                if (getInput[a] == currentword[a]) {
                    document.getElementById("userInput").value = "";
                    for (var b = 0; b <= a + 1; b++) {
                        document.getElementById("userInput").value += currentword[b];

                    }

                }
                else {
                    document.getElementById("userInput").value = "";
                    for (var b = 0; b <= a; b++) {
                        document.getElementById("userInput").value += currentword[b];
                        if (getInput[b + 1] != currentword[b + 1]) { break; }

                    }
                }
            }
        }

        if(totalTime<5 && newValue<5)
        {
            totalTime=0;
            newValue =0;

        }
        else{
            totalTime -= 4;
            newValue -= 4;
        }
       
       

    }

}


var currentScore = 0;
var decreesescore=0;
function checkword() {

    var getInput = document.getElementById("userInput").value;
    var currentresult = 0;
    

    for (var i = 0; i < ArrOfWords.length; i++) {
        if (getInput == ArrOfWords[i]) { currentresult = 1; }
    }

    if (currentresult || getInput == "Dont Small Us") {
        document.getElementById("correctsound").play();
        currentScore++;
        document.getElementById("counter2").innerHTML = currentScore;
        document.getElementById("result").style.backgroundColor = "teal";
        document.getElementById("result").style.color = "white";
        document.getElementById("result").innerHTML = "COEERECT ANSWER";
        setTimeout(function () {
            document.getElementById("userInput").value = "";
            document.getElementById("result").innerHTML = "";
            putword_puthint();
            document.getElementById("checker").style.backgroundColor = "#efbc15";


        }, 500)

        decreesescore=0;
    }

    else {
        document.getElementById("wrongsound").play();
        decreesescore++;
        if(decreesescore>4)
        {
            currentScore--;
        }
        
        if (currentScore < 0) {
            currentScore = 0;
        }
        document.getElementById("counter2").innerHTML = currentScore;
        document.getElementById("result").style.backgroundColor = "darkred";
        document.getElementById("result").style.color = "white";
        document.getElementById("result").innerHTML = "WRONG ANSWER";
    }

}
var userscore = 0;
var newValue = 120;
var totalTime = 120;
var mins;
var seconds;
var time = document.getElementById("time");
var timerDiv = document.getElementById('timer');

function Timer() {
    totalTime = 120;
    newValue = 120;
    var intervalTimer = setInterval(function () {
        if (totalTime > 0) {
            totalTime--;
            mins = Math.floor(totalTime / 60)
            seconds = totalTime % 60
            if (seconds < 10) {
                if (totalTime < 10) {
                    time.innerHTML = ` 0${mins}:0${seconds}`
                    time.style.color = "red"
                }
                else {
                    time.innerHTML = ` 0${mins}:0${seconds}`
                }

            }
            else {
                time.innerHTML = ` 0${mins}:${seconds}`
            }

        }
        else {
            clearInterval(intervalTimer)
        }
        if (totalTime == 0) {
            document.getElementById("gameoversound").play();
            
            Result();
            clearInterval(intervalTimer);
            clearInterval(intervalProgress);
            document.getElementById("playmusic").pause();
            progress.setAttribute('class', 'progress2');
        }


    }, 1000)

    var progress = document.getElementById('progress1')


    // -*************************************************************************



    var intervalProgress = setInterval(function () {
        progress.setAttribute('value', newValue)
        if (newValue > 0) {
            newValue--;
            if (newValue < 87) {
                time.style.color = "green"
                document.getElementById("remainingTime").style.color = "black"
                if (totalTime < 10) {
                    time.style.color = "red";
                }
            }
            if (newValue < 10) {
                progress.setAttribute('class', 'progress1')
            }
        }
        else {
            clearInterval(intervalProgress)
        }

    }, 1000)


}

function Result() {
    document.getElementById("ContainerOfResult").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("container").style.display = "none";
    let tst = document.getElementById("result2");
    tst.innerHTML = "";
    tst.innerHTML = "Your Score Is : " + currentScore;
    document.getElementById("result").innerHTML = "";
    document.getElementById("userInput").value = "";
    putword_puthint();

}


function BackTomenu() {
    document.getElementById("clickedsound").play();
    document.getElementById("ContainerOfResult").style.display = "none";
    document.getElementById("UserNameMenu").style.display = "none";
    document.getElementById("ContainerOfInfo").style.display = "none";
    document.getElementById("ContainerOfScoreInfo").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("menu").style.display = "block";
}


function DisplayInfo() {
    document.getElementById("clickedsound").play();
    document.getElementById("ContainerOfInfo").style.display = "block";
    let tst = document.getElementById("result3");
    tst.innerHTML = "GUESS THE WORD: <br> is a fun game for guessing the right word<br> from ashuffled collection of words! <br><br>" +
        "1-You can use 'Hint' Button to help you for 1 char instade of 5seconds from ur health.<br><br>" +
        "2-Every correct answer ur score will be increased by one ";

}
function Exite() {
    document.getElementById("clickedsound").play();
        setTimeout(function () {
            window.close();
        }, 500);
    

}
