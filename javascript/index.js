// Volgorde commentaar overal:
// - constanten
// - let
// - functions
// - event listeners

//const voor defaultgezicht die op inlogscherm staat
const plaatjeVeranderen = document.getElementById("defaultgezicht");

//get id vanuit html voor name input
const nameInput = document.getElementById("nameInput");

//get id vanuit html voor beginnen knop op begischerm
const welkomKnop = document.getElementById("welkomButton");

//const voor de sections op html
const sectionInlog = document.getElementById("sectionInlog")
const sectionGame = document.getElementById("sectionGame")

//cosnt voor de mysteryGezichten
const mysteryGezichten = ["img/boos.jpeg", "img/clouds.jpeg", "img/hartje.jpeg"];

//selector vanuit html voor h2
const h2 = document.querySelector("h2");

//const voor beginhoofd
const lucasKop = document.getElementById("lucas");

//const voor mysteryBtn
const mysteryBtn = document.getElementById("mysteryBtn");

//const voor etenaudio
const etenAudio = new Audio("sounds/etensound.mp3")

//pizza knop
const pizzabalkKnop = document.getElementById("pizzabalkBtn");

//slapenknop
const slaapKnop = document.getElementById("slapenbalkBtn");

//pilsknop
const pilsKnop = document.getElementById("pilsBtn");

//let voor username
let userName;

//let voor de pilshealth
let pilshealth = 10;

//let voor de pizzahealth
let pizzahealth = 10;

//let voor de slaaphealth
let slapenhealth = 10; 

//slapeninterval
let slapenInterval;

//timer die plaatje in het begin veranderd na 3000 milliseconde
setTimeout(() => { 
plaatjeVeranderen.src = "img/hartje.jpeg";
}, 3000);

//dit is het inputveld voor je naam en zorgt voor de sections die je ziet of niet ziet
function logInput() {
    userName = nameInput.value;
    h2.textContent = "hi, " + userName;
    sectionInlog.style.display = "none"
    sectionGame.style.display = "block"
}

//mysteryface function
function genereerMysteryFace() {
lucasKop.src = mysteryGezichten[Math.floor(Math.random() * 3)]
}

//pils functions

setInterval(function() {
    let healthvariable = document.getElementById("pilsbalk");
    healthvariable.value = pilshealth;
    }, 100);
    
    function pilsdrinken(){
        pilshealth += 10;
        if (pilshealth > 100) {
            pilshealth = 100; // zorgt ervoor dat hij niet stopt als hij bij 100 is
            lucasKop.src = "img/brak.jpeg";
        } else  {
            lucasKop.src = "img/feesten.jpeg";
        }
    }
    
//hier heb ik aan chatgpt om hulp gevraagd!
// Function to decrease the pils health slowly over time
          function decreaseHealth() {
            if (pilshealth > 0) {
                pilshealth -= 0.1; // Decrease health by 0.1
            }
        }

// pizza Functions

setInterval(function() {
    let pizzavariable = document.getElementById("pizzabalk");
     pizzavariable.value = pizzahealth;
     }, 100);
            
            function pizzaeten(){
                pizzahealth += 10;
                if (pizzahealth > 100) {
                    pizzahealth = 100; // zorgt ervoor dat hij niet stopt als hij bij 100 is
                    lucasKop.src = "img/engel.jpeg";
                    etenAudio.play();
                } else {
                    lucasKop.src = "img/duimomhoog.jpeg";
                }
            }
            
//hier heb ik aan chatgpt om hulp gevraagd!
// Function to decrease the enemy health slowly over time
                  function decreasePizza() {
                    if (pizzahealth > 0) {
                        pizzahealth -= 0.1; // Decrease health by 0.1
                    }
                }


// slaapknop functions
               
setInterval(function() {
    let slaapvariable = document.getElementById("slapenbalk");
    slaapvariable.value = slapenhealth;
    }, 100);

    function slapen(){
        slapenhealth += 10;
        if (slapenhealth > 100) {
            slapenhealth = 100; // zorgt ervoor dat hij niet stopt als hij bij 100 is
            lucasKop.src = "img/slapen.jpeg";
        } else {
            lucasKop.src = "img/zen.jpeg";
        }
    }

    function decreaseSlaap() {
        if (slapenhealth > 0) {
            slapenhealth -= 0.1; // decrease health by 0.1
        } 
        
    }

// function die begin lucas geirriteerd maakt
    function nietBlij() {
        if (pilshealth, pizzahealth, slapenhealth < 40){
            lucasKop.src = "img/geirriteerd.jpeg"
        }
    }

    nietBlij()

//intervals

//hier heb ik aan chatgpt om hulp gevraagd!
        setInterval(decreaseSlaap, 100);
  
//hier heb ik aan chatgpt om hulp gevraagd!
        setInterval(decreasePizza, 100);

//hier heb ik aan chatgpt om hulp gevraagd!
        setInterval(decreaseHealth, 100);


//EL voor pils drinken
pilsKnop.addEventListener("click", pilsdrinken)

//EL voor pizza eten
pizzabalkKnop.addEventListener("click", pizzaeten);

slaapKnop.addEventListener("click", slapen)

//EL voor de mystery face
mysteryBtn.addEventListener("click", genereerMysteryFace)

//EL voor naaminput
welkomKnop.addEventListener("click", logInput)










