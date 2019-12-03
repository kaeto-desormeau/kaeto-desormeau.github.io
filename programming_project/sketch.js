var redMouse;
var blueMouse;
let osc1;
let osc2;


//function draw() {
//    redMouse = map(mouseX, 0, 400,0, 255);
//    blueMouse = map(mouseY, 0,400, 0, 255);
////    console.log(redmouse);
//    background(redMouse, 0, blueMouse);
//    fill(255,0,0);
//    ellipse(100,100,200,200);
//
//    fill(255);
//    ellipse(mouseX,mouseY,100,100);
//}//declare 2 oscillator objects


function setup() {
    createCanvas(400, 400); //make a canvas that is 400px x 400px
    noStroke(); //remove outlines on shapes
    noCursor(); //do not display cursor in canvas (my sketch)
    osc1 = new p5.Oscillator(); //creating my oscillators
    osc2 = new p5.Oscillator();
    osc1.setType('sine'); //specifying waveform
    osc2.setType('sine');
    osc1.amp(.5,.5); //set oscillator volume
    osc2.amp(.5,.5);
    osc1.freq(240); // initializing oscillator frequency
    osc2.freq(240);
    osc1.start(); //start the oscillator audio
    osc2.start();
  
}

//declaring my own function
function ellipseMouse(){
    fill(255); //draw white ellipse at mouse location
    ellipse(mouseX,mouseY,10,10);
}

function draw() {
    osc1.freq(map(mouseX, 0, width, 100,400)); 
    osc2.freq(map(mouseY, 0, height, 100,400));
    
    var redMouse = map(mouseX, 0, width, 0, 255); //map mouse position to oscillator frequencies & bg color
    var blueMouse = map(mouseY, 0, height, 0, 255);
    background(redMouse, 0, blueMouse);
    
    fill(255,0,0); //set fill color to red
    
    //nested for loops to make grid of circles
    for(var i = 0; i < 10; i++){ //++ will increase the value of i by 1 each loop
       for (var e = 0; e < 10; e++){
           console.log(i + " " + e); //print i and e variables to console
        ellipse(50*i,50*e,50,50);
       }
    }
  
    ellipseMouse(); //call my custom function
}

function mouseClicked(){ //start audio with user interaction (mouse click)
    osc1.start();
    osc2.start();
}
