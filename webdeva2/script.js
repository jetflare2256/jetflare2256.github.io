//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");

const menu=document.querySelector("#menu");
menu.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");
function toggleMenus(){ /*open and close menu*/
    menuItemsList.classList.toggle("menuHide")
//if(menuItemsList.style.display=="block")
//menuItemsList.style.display="none";
//else menuItemsList.style.display="block";
}

/*find references to all the buttons and ball */
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const resetBtn = document.querySelector("#resetBtn");
const tank = document.querySelector("#tank");
var tankX = tankY = 0; //assign initial position of ball
var maxX = 800;
var maxY = 200;
var minX = -20;
var minY = -0;

//functions to update variables to control ball position
function ResetPos() {
    tankX=tankY=0; //reset to zero
    UpdateTankStyle();
    }
    function MovePos(leftInc, topInc) {
    tankX += leftInc;
    tankY += topInc;
    if (tankX >= maxX){
        tankX = maxX
    }
    if (tankY >= maxY){
        tankY = maxY
    }
    if (tankX <= minX){
        tankX = minX
    }
    if (tankY <= minY){
        tankY = minY
    }
    UpdateTankStyle();
    }
    //function to update ball css as well as display text
    function UpdateTankStyle(){
    tank.style.left = tankX+"px"; //set left property to ball x variable
    tank.style.top = tankY+"px"; //set top property to ball x variable
    tank.innerText = tankX + "," + tankY; //update ball text to show coordinate
    }

    //function just to move left (decrease left style)
function MoveLeft(){
    MovePos(-10,0);
    }
    //eventlisteners to activate MovePos
    leftBtn.addEventListener("click", MoveLeft);
    //leftBtn.addEventListener("click", MoveLeft(-10,0)); //wrong
    //cannot do like this. MoveLeft(-10,0) will execute immediately
    //using anonymous function to pass in arguments from eventlistener
    rightBtn.addEventListener("click", function () {
    MovePos(+10, 0)
    });
    upBtn.addEventListener("click", function () {
    MovePos(0, -10)
    });
    downBtn.addEventListener("click", function () {
    MovePos(0, +10)
    });
    resetBtn.addEventListener("click", ResetPos);

    document.addEventListener('keydown', (e) => {
        console.log(e);
        if (e.code === "ArrowRight"){
        MovePos(10,0);
        }
        if (e.code === "ArrowLeft"){
        MoveLeft();
        }
        if (e.code === "ArrowDown"){
        MovePos(0, +10);
        }
        if (e.code === "ArrowUp"){
        MovePos(0, -10);
        }
        //Need to inform user what keys to press. Better option: use switch case instead
        });
//select all subtopic pages
console.log(allpages);
hideall();
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
//show the page
onepage.style.display="block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});