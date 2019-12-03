var clickCount=0; 
let osc1;
let osc2;


//The setup function only happens once
function setup() {
	createCanvas(500, 500, WEBGL); //create a 500px X 500px canvas
 createCanvas(400, 400, WEBGL); //make a canvas that is 400px x 400px
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

//The draw function happens over and over again
function draw() {
  background(map(mouseX,0,width,0,255), map(mouseY,0,width,0,255),map(mouseY,0,width,100,150));
    osc1.freq(map(mouseX, 0, width, 100,400)); 
    osc2.freq(map(mouseY, 0, height, 100,400));
    
  rotateY(millis() / 1000);
   
    if (clickCount%2==0){
        
   background(map(mouseX,100,width,200,255),map(mouseY,0,width,100,150),map(mouseY,0,width,100,150));
//        stroke(0);
//        strokeWeight(2);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50); // center of canvas, 20px dia
    }
    else{
      fill(224,230,230)
  ellipsoid(30, 40, 40, 20, 8);   
    }
    console.log(clickCount);
}

function mouseClicked(){
    clickCount++;
    if (clickCount %2 == 1){
        osc1.start();
        osc2.start();
    }
    else{
        osc1.stop();
        osc2.stop();
    }
}
