function setup() {
  createCanvas(2000,8000);
  //background(0,0,0);
}

let mousepos = 25;
var firsttime = true;

function donothing(){
}

function draw() {
  if (firsttime){
    requestAnimationFrame(donothing,0.001);
    mousepos += 10;
  window.scroll({
  top: mousepos,
  behavior: 'smooth' 
   });
   }
  if (firsttime && mousepos > 350){
    firsttime = false;
  }
  clear();
  fill(0,0,0);
  rect(0,0,2000,1750);
  rect(0,2800,2000,2000);
  fill(200,0,0);
  rect(2000,0,2000,3000);
  
  frameRate(6000);
  if (mousepos < 25){
    mousepos = 25;
  }
  fill(mousepos - 25);
  
  textSize(150);
  
  text('Data security: Redefined',200,600);
  
  textSize(100);
  fill(mousepos - 100);
  
  text('Introducing Encryption code 2.2',200,900);
  
  fill(255);
  
  text('______________________',(mousepos/2)-1000,1400);
  text('______________________',(mousepos/-2)+1700,1400);
  text('______________________',(mousepos/2)-1000,1200);
  text('______________________',(mousepos/-2)+1700,1200);
  
  fill(mousepos - 500);
  text('All new features',700,1300);
  
  fill((-1 * mousepos)+255);
  textSize(125);
  fill(0);
  
  if (mousepos >= 1250){  
    if (mousepos <=1900){ 
      text('99 %',400,mousepos+500);
    } else 
      text('99 %',400,2400);
      
    if (mousepos <= 1450){ 
      text('Encryption accuracy',700,mousepos+500);
    } else {
      text('Encryption accuracy',700,2000);
    }
    }
    text('More efficient algorithms',700,2200);
    
    text('User satisfaction',700,2400);
    
  fill(255);
  if (mousepos >= 2100 && mousepos < 2140){
    text('••••••••••••••••••••',520,3000);
  } else if (mousepos >= 2140 && mousepos < 2180){
    text('S•••••••••••••••••••',520,3000);
  } else if (mousepos >= 2180 && mousepos < 2220){
    text('Se••••••••••••••••••',520,3000);
  } else if (mousepos >= 2220 && mousepos < 2260){
    text('Sec•••••••••••••••••',520,3000);
  } else if (mousepos >= 2260 && mousepos < 2300){
    text('Secu••••••••••••••••',520,3000);
  } else if (mousepos >= 2300 && mousepos < 2340){
    text('Secur•••••••••••••••',520,3000);
  } else if (mousepos >= 2340 && mousepos < 2380){
    text('Securi••••••••••••••',520,3000);
  } else if (mousepos >= 2380 && mousepos < 2420){
    text('Securit•••••••••••••',520,3000);
  } else if (mousepos >= 2420 && mousepos < 2460){
    text('Security••••••••••••',520,3000);
  } else if (mousepos >= 2460 && mousepos < 2500){
    text('Security •••••••••••',520,3000);
  } else if (mousepos >= 2500 && mousepos < 2540){
    text('Security i••••••••••',520,3000);
  } else if (mousepos >= 2540 && mousepos < 2580){
    text('Security is ••••••••',520,3000);
  } else if (mousepos >= 2580 && mousepos < 2620){
    text('Security is b•••••••',520,3000);
  } else if (mousepos >= 2620 && mousepos < 2660){
    text('Security is bu••••••',520,3000);
  } else if (mousepos >= 2660 && mousepos < 2700){
    text('Security is bui•••••',520,3000);
  } else if (mousepos >= 2700 && mousepos < 2740){
    text('Security is buil••••',520,3000);
  } else if (mousepos >= 2740 && mousepos < 2780){
    text('Security is built•••',520,3000);
  } else if (mousepos >= 2780 && mousepos < 2820){
    text('Security is built ••',520,3000);
  } else if (mousepos >= 2820 && mousepos < 2860){
    text('Security is built i•',520,3000);
  } else if (mousepos >= 2860){
    text('Security is built in',520,3000);
  } 
  
  textSize(45);
  
  fill(mousepos - 2400);
  text('Multiple Encryption algorithms', 100, 3200);
  text('Password protected Encryption', 800, 3200);
  text('4 try Password lockout', 1500, 3200);
  
  if (mousepos >= 3500){
    background(mousepos - 3500);
  }
  textSize(100);
  
  fill(3390 + 255 - mousepos);
  text('Encryption code', 100, 4300);
  fill(3390 + 400 - mousepos);
  text('Beta', 1100, 4300);
  fill(3390 + 550 - mousepos);
  text('Pro', 1600, 4300);
  
  
}

function mouseWheel(event) {
  print(mousepos);
  mousepos += event.delta;
  if (mousepos < 25){
    mousepos = 25;
  }
}
