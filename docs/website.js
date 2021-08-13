function setup() {
  createCanvas(2000,10000);
  //background(0,0,0);
}

let mousepos = 25;
var firsttime = true;

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}

disableScroll();

function donothing(){
}


function preload(){
  
logo = loadImage("logo.png");
processor = loadImage("processor.gif");
}

var ftime = true;
var x = 2;
enableScroll();

function draw() {
  if (ftime){
    mousepos = 25;
    ftime = false;
    firsttime = true;
  }
  if (firsttime){
    requestAnimationFrame(donothing,0.001);
    mousepos += 10;
  window.scroll({
  top: mousepos,
  behavior: 'smooth' 
   });
   }
   
  window.scroll({
  top: mousepos,
  behavior: 'smooth' 
   });
   
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
    } else{
      text('99 %',400,2400);
    }
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
    text('•••••••••••••••••••••',520,3000);
  } else if (mousepos >= 2140 && mousepos < 2180){
    text('S••••••••••••••••••••',520,3000);
  } else if (mousepos >= 2180 && mousepos < 2220){
    text('Se•••••••••••••••••••',520,3000);
  } else if (mousepos >= 2220 && mousepos < 2260){
    text('Sec••••••••••••••••••',520,3000);
  } else if (mousepos >= 2260 && mousepos < 2300){
    text('Secu•••••••••••••••••',520,3000);
  } else if (mousepos >= 2300 && mousepos < 2340){
    text('Secur••••••••••••••••',520,3000);
  } else if (mousepos >= 2340 && mousepos < 2380){
    text('Securi•••••••••••••••',520,3000);
  } else if (mousepos >= 2380 && mousepos < 2420){
    text('Securit••••••••••••••',520,3000);
  } else if (mousepos >= 2420 && mousepos < 2460){
    text('Security•••••••••••••',520,3000);
  } else if (mousepos >= 2460 && mousepos < 2500){
    text('Security ••••••••••••',520,3000);
  } else if (mousepos >= 2500 && mousepos < 2540){
    text('Security i•••••••••••',520,3000);
  } else if (mousepos >= 2540 && mousepos < 2580){
    text('Security is •••••••••',520,3000);
  } else if (mousepos >= 2580 && mousepos < 2620){
    text('Security is b••••••••',520,3000);
  } else if (mousepos >= 2620 && mousepos < 2660){
    text('Security is bu•••••••',520,3000);
  } else if (mousepos >= 2660 && mousepos < 2700){
    text('Security is bui••••••',520,3000);
  } else if (mousepos >= 2700 && mousepos < 2740){
    text('Security is buil•••••',520,3000);
  } else if (mousepos >= 2740 && mousepos < 2780){
    text('Security is built••••',520,3000);
  } else if (mousepos >= 2780 && mousepos < 2820){
    text('Security is built •••',520,3000);
  } else if (mousepos >= 2820 && mousepos < 2860){
    text('Security is built i••',520,3000);
  } else if (mousepos >= 2860 && mousepos <= 2880){
    text('Security is built in•',520,3000);
  } else if (mousepos >= 2880){
    text('Security is built in.',520,3000);
  }
  
  textSize(45);
  
  fill(mousepos - 2400);
  text('Multiple Encryption algorithms', 100, 3300);
  text('Password protected Encryption', 800, 3300);
  text('4 try Password lockout', 1500, 3300);
  text('Make it very difficult ', 100, 3500);
  text('to decipher and manipulate ', 100, 3600);
  text('Only the password can', 800, 3500);
  text('unlock your message', 800, 3600);
  text('Locks you out after', 1500, 3500);
  text('4 wrong attempts', 1500, 3600);
  
  if (mousepos >= 3500 && mousepos <= 4900){
    background(mousepos - 3500);
  }
   
  textSize(100);
  
  fill(3390 + 255 - mousepos);
  text('Encryption code', 100, 4300);
  fill(3390 + 400 - mousepos);
  text('Beta', 1100, 4300);
  fill(3390 + 550 - mousepos);
  text('Pro', 1600, 4300);
  fill(3390 + 600 - mousepos);
  textSize(60);
  text('All the good stuff.', 100, 4500);
  text('Secure. Simple interface.', 700, 4500);
  text('Stellar performance',700,4700);
  text('The prototype for', 1400, 4500);
  text('the professional', 1400, 4700);
  
  if (mousepos >= 4900 && mousepos <= 5700){
    background(5000 - mousepos);
  }
  tint(255, 250); 
  rect(0,4800,2000,3000);
  fill(mousepos - 4500);
  textSize(80);
  text('Data security',50,5050);
  text('Across devices',50,5200);
  text('Python script',1400,5050);
  text('Web Service',1400,5200);
  
  if (mousepos >= 5600){
    tint(255, 250); 
    image(processor,500, 7000, 1000, 500);
  }
  tint(255, 250); 
    if (mousepos >= 5630){
      fill(mousepos - 6700,mousepos - 6300,mousepos - 6500);
      text('Encryption code 2.2 Processor',500,7000);
      textSize(50);
      fill(mousepos - 6500,mousepos - 6700,mousepos - 6900);
      text('The fastest and most efficient data processor ever built by Encryption code',100,7500);
    }
  fill(255);
  if (mousepos >= 5600){
    tint(255, 250 - (mousepos - 6300));
    fill(255);
   
  } else {
    // full brightness at 5315   5239   make it wait there for some time
    tint(255, (mousepos - 5239)*4); 
  }
  x = 3;
  textSize(45);
  
  text('______________________',(mousepos/2)-4900,5100);
  if (mousepos >= 5240 && mousepos <= 5400){ // 5300
    image(logo, (1000 - ((mousepos-5200)*x/2)), mousepos - (mousepos-5400), (mousepos-5200)*x, ((mousepos-5200)*2*x*9/16));
    fill(mousepos-5300,mousepos-5200,mousepos-5100);
    text('Binge worthy processor capability',50,5700 - (mousepos - 5300));
    fill(mousepos-5200,mousepos-5100,mousepos-5300);
    text('Outstanding efficiency and speed',1300,5900);
    fill(mousepos-5200,mousepos-5300,mousepos-5400);
    text('Excellent Encryption accuracy',50,6000);
  } else if (mousepos >= 5400 && mousepos <= 5550){
    image(logo, 700, mousepos + mousepos-5400, 600, ((5400-5200)*2*x*9/16)); // 5700
    fill(mousepos-5300,mousepos-5200,mousepos-5100);
    text('Binge worthy processor capability',50,5700 - (mousepos - 5300));
    fill(mousepos-5200,mousepos-5100,mousepos-5300);
    text('Outstanding efficiency and speed',1300,5900);
    fill(mousepos-5200,mousepos-5300,mousepos-5400);
    text('Excellent Encryption accuracy',50,6000);
    
  } else if  (mousepos >= 5550 && mousepos <= 5677){
    fill(mousepos-5300,mousepos-5200,mousepos-5100);
    text('Binge worthy processor capability',50,5700 - (mousepos - 5300));
    fill(mousepos-5200,mousepos-5100,mousepos-5300);
    text('Outstanding efficiency and speed',1300,5900);
    fill(mousepos-5200,mousepos-5300,mousepos-5400);
    text('Excellent Encryption accuracy',50,6000);
    image(logo, (1000 - ((mousepos-5350)*x/2)), mousepos - (mousepos-5700), (mousepos-5350)*x, ((mousepos-5350)*2*x*9/16));
  } else if (mousepos >= 5677){
    fill(225 - (mousepos - 5677));
    text('Binge worthy processor capability',50,5700 - (mousepos - 5300));
    text('Outstanding efficiency and speed',1300,5900);
    text('Excellent Encryption accuracy',50,6000);
    image(logo, (1000 - ((mousepos-5350)*x/2)), mousepos - (mousepos-5700), (mousepos-5350)*x, ((mousepos-5350)*2*x*9/16));
  }
}

function mouseWheel(event) {
  print(mousepos);
  print(event);
  mousepos += event.delta;
  if (mousepos < 25){
    mousepos = 25;
  }
  if (event.delta != 1){
    firsttime = false;
  }
}
