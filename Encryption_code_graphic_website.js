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
  frames = [loadImage("Videoframes/ezgif-frame-001.jpg"),loadImage("Videoframes/ezgif-frame-002.jpg")];
i3 = loadImage("Videoframes/ezgif-frame-003.jpg");
i4 = loadImage("Videoframes/ezgif-frame-004.jpg");
i5 = loadImage("Videoframes/ezgif-frame-005.jpg");
i6 = loadImage("Videoframes/ezgif-frame-006.jpg");
i7 = loadImage("Videoframes/ezgif-frame-007.jpg");
i8 = loadImage("Videoframes/ezgif-frame-008.jpg");
i9 = loadImage("Videoframes/ezgif-frame-009.jpg");
i10 = loadImage("Videoframes/ezgif-frame-010.jpg");
i11 = loadImage("Videoframes/ezgif-frame-011.jpg");
i12 = loadImage("Videoframes/ezgif-frame-012.jpg");
i13 = loadImage("Videoframes/ezgif-frame-013.jpg");
i14 = loadImage("Videoframes/ezgif-frame-014.jpg");
i15 = loadImage("Videoframes/ezgif-frame-015.jpg");
i16 = loadImage("Videoframes/ezgif-frame-016.jpg");
i17 = loadImage("Videoframes/ezgif-frame-017.jpg");
i18 = loadImage("Videoframes/ezgif-frame-018.jpg");
i19 = loadImage("Videoframes/ezgif-frame-019.jpg");
i20 = loadImage("Videoframes/ezgif-frame-020.jpg");
i21 = loadImage("Videoframes/ezgif-frame-021.jpg");
i22 = loadImage("Videoframes/ezgif-frame-022.jpg");
i23 = loadImage("Videoframes/ezgif-frame-023.jpg");
i24 = loadImage("Videoframes/ezgif-frame-024.jpg");
i25 = loadImage("Videoframes/ezgif-frame-025.jpg");
i26 = loadImage("Videoframes/ezgif-frame-026.jpg");
i27 = loadImage("Videoframes/ezgif-frame-027.jpg");
i28 = loadImage("Videoframes/ezgif-frame-028.jpg");
i29 = loadImage("Videoframes/ezgif-frame-029.jpg");
i30 = loadImage("Videoframes/ezgif-frame-030.jpg");
i31 = loadImage("Videoframes/ezgif-frame-031.jpg");
i32 = loadImage("Videoframes/ezgif-frame-032.jpg");
i33 = loadImage("Videoframes/ezgif-frame-033.jpg");
i34 = loadImage("Videoframes/ezgif-frame-034.jpg");
i35 = loadImage("Videoframes/ezgif-frame-035.jpg");
i36 = loadImage("Videoframes/ezgif-frame-036.jpg");
i37 = loadImage("Videoframes/ezgif-frame-037.jpg");
i38 = loadImage("Videoframes/ezgif-frame-038.jpg");
i39 = loadImage("Videoframes/ezgif-frame-039.jpg");
i40 = loadImage("Videoframes/ezgif-frame-040.jpg");
i41 = loadImage("Videoframes/ezgif-frame-041.jpg");
i42 = loadImage("Videoframes/ezgif-frame-042.jpg");
i43 = loadImage("Videoframes/ezgif-frame-043.jpg");
i44 = loadImage("Videoframes/ezgif-frame-044.jpg");
i45 = loadImage("Videoframes/ezgif-frame-045.jpg");
i46 = loadImage("Videoframes/ezgif-frame-046.jpg");
i47 = loadImage("Videoframes/ezgif-frame-047.jpg");
i48 = loadImage("Videoframes/ezgif-frame-048.jpg");
i49 = loadImage("Videoframes/ezgif-frame-049.jpg");
i50 = loadImage("Videoframes/ezgif-frame-050.jpg");
i51 = loadImage("Videoframes/ezgif-frame-051.jpg");
i52 = loadImage("Videoframes/ezgif-frame-052.jpg");
i53 = loadImage("Videoframes/ezgif-frame-053.jpg");
i54 = loadImage("Videoframes/ezgif-frame-054.jpg");
i55 = loadImage("Videoframes/ezgif-frame-055.jpg");
i56 = loadImage("Videoframes/ezgif-frame-056.jpg");
i57 = loadImage("Videoframes/ezgif-frame-057.jpg");
i58 = loadImage("Videoframes/ezgif-frame-058.jpg");
i59 = loadImage("Videoframes/ezgif-frame-059.jpg");
i60 = loadImage("Videoframes/ezgif-frame-060.jpg");
i61 = loadImage("Videoframes/ezgif-frame-061.jpg");
i62 = loadImage("Videoframes/ezgif-frame-062.jpg");
i63 = loadImage("Videoframes/ezgif-frame-063.jpg");
i64 = loadImage("Videoframes/ezgif-frame-064.jpg");
i65 = loadImage("Videoframes/ezgif-frame-065.jpg");
i66 = loadImage("Videoframes/ezgif-frame-066.jpg");
i67 = loadImage("Videoframes/ezgif-frame-067.jpg");
i68 = loadImage("Videoframes/ezgif-frame-068.jpg");
i69 = loadImage("Videoframes/ezgif-frame-069.jpg");
i70 = loadImage("Videoframes/ezgif-frame-070.jpg");
i71 = loadImage("Videoframes/ezgif-frame-071.jpg");
i72 = loadImage("Videoframes/ezgif-frame-072.jpg");
i73 = loadImage("Videoframes/ezgif-frame-073.jpg");
i74 = loadImage("Videoframes/ezgif-frame-074.jpg");
i75 = loadImage("Videoframes/ezgif-frame-075.jpg");
i76 = loadImage("Videoframes/ezgif-frame-076.jpg");
i77 = loadImage("Videoframes/ezgif-frame-077.jpg");
i78 = loadImage("Videoframes/ezgif-frame-078.jpg");
i79 = loadImage("Videoframes/ezgif-frame-079.jpg");
i80 = loadImage("Videoframes/ezgif-frame-080.jpg");
i81 = loadImage("Videoframes/ezgif-frame-081.jpg");
i82 = loadImage("Videoframes/ezgif-frame-082.jpg");
i83 = loadImage("Videoframes/ezgif-frame-083.jpg");
i84 = loadImage("Videoframes/ezgif-frame-084.jpg");
i85 = loadImage("Videoframes/ezgif-frame-085.jpg");
i86 = loadImage("Videoframes/ezgif-frame-086.jpg");
i87 = loadImage("Videoframes/ezgif-frame-087.jpg");
i88 = loadImage("Videoframes/ezgif-frame-088.jpg");
i89 = loadImage("Videoframes/ezgif-frame-089.jpg");
i90 = loadImage("Videoframes/ezgif-frame-090.jpg");
i91 = loadImage("Videoframes/ezgif-frame-091.jpg");
i92 = loadImage("Videoframes/ezgif-frame-092.jpg");
i93 = loadImage("Videoframes/ezgif-frame-093.jpg");
i94 = loadImage("Videoframes/ezgif-frame-094.jpg");
i95 = loadImage("Videoframes/ezgif-frame-095.jpg");
i96 = loadImage("Videoframes/ezgif-frame-096.jpg");
i97 = loadImage("Videoframes/ezgif-frame-097.jpg");
i98 = loadImage("Videoframes/ezgif-frame-098.jpg");
i99 = loadImage("Videoframes/ezgif-frame-099.jpg");
i100 = loadImage("Videoframes/ezgif-frame-100.jpg");
i101 = loadImage("Videoframes/ezgif-frame-101.jpg");
i102 = loadImage("Videoframes/ezgif-frame-102.jpg");
i103 = loadImage("Videoframes/ezgif-frame-103.jpg");
i104 = loadImage("Videoframes/ezgif-frame-104.jpg");
i105 = loadImage("Videoframes/ezgif-frame-105.jpg");
i106 = loadImage("Videoframes/ezgif-frame-106.jpg");
i107 = loadImage("Videoframes/ezgif-frame-107.jpg");
i108 = loadImage("Videoframes/ezgif-frame-108.jpg");
i109 = loadImage("Videoframes/ezgif-frame-109.jpg");
i110 = loadImage("Videoframes/ezgif-frame-110.jpg");
i111 = loadImage("Videoframes/ezgif-frame-111.jpg");
i112 = loadImage("Videoframes/ezgif-frame-112.jpg");
i113 = loadImage("Videoframes/ezgif-frame-113.jpg");
i114 = loadImage("Videoframes/ezgif-frame-114.jpg");
i115 = loadImage("Videoframes/ezgif-frame-115.jpg");
i116 = loadImage("Videoframes/ezgif-frame-116.jpg");
i117 = loadImage("Videoframes/ezgif-frame-117.jpg");
i118 = loadImage("Videoframes/ezgif-frame-118.jpg");
i119 = loadImage("Videoframes/ezgif-frame-119.jpg");
i120 = loadImage("Videoframes/ezgif-frame-120.jpg");
i121 = loadImage("Videoframes/ezgif-frame-121.jpg");
i122 = loadImage("Videoframes/ezgif-frame-122.jpg");
i123 = loadImage("Videoframes/ezgif-frame-123.jpg");
i124 = loadImage("Videoframes/ezgif-frame-124.jpg");
i125 = loadImage("Videoframes/ezgif-frame-125.jpg");
i126 = loadImage("Videoframes/ezgif-frame-126.jpg");
i127 = loadImage("Videoframes/ezgif-frame-127.jpg");
i128 = loadImage("Videoframes/ezgif-frame-128.jpg");
i129 = loadImage("Videoframes/ezgif-frame-129.jpg");
i130 = loadImage("Videoframes/ezgif-frame-130.jpg");
i131 = loadImage("Videoframes/ezgif-frame-131.jpg");
i132 = loadImage("Videoframes/ezgif-frame-132.jpg");
i133 = loadImage("Videoframes/ezgif-frame-133.jpg");
i134 = loadImage("Videoframes/ezgif-frame-134.jpg");
i135 = loadImage("Videoframes/ezgif-frame-135.jpg");
i136 = loadImage("Videoframes/ezgif-frame-136.jpg");
i137 = loadImage("Videoframes/ezgif-frame-137.jpg");
i138 = loadImage("Videoframes/ezgif-frame-138.jpg");
i139 = loadImage("Videoframes/ezgif-frame-139.jpg");
i140 = loadImage("Videoframes/ezgif-frame-140.jpg");
i141 = loadImage("Videoframes/ezgif-frame-141.jpg");
i142 = loadImage("Videoframes/ezgif-frame-142.jpg");
i143 = loadImage("Videoframes/ezgif-frame-143.jpg");
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
  if (mousepos >= 4654){
  if (mousepos < 4754){ 
  image(frames[0], 300, 4800, 1500, 844);
  } else if (mousepos >= 4754 && mousepos < 4756){
  image(frames[1], 300, 4800, 1500, 844);
  } else if (mousepos >= 4756 && mousepos < 4758){
  image(i3, 300, 4800, 1500, 844);
  } else if (mousepos >= 4758 && mousepos < 4760){
  image(i4, 300, 4800, 1500, 844);
  } else if (mousepos >= 4760 && mousepos < 4762){
  image(i5, 300, 4800, 1500, 844);
  } else if (mousepos >= 4762 && mousepos < 4764){
  image(i6, 300, 4800, 1500, 844);
  } else if (mousepos >= 4764 && mousepos < 4766){
  image(i7, 300, 4800, 1500, 844);
  } else if (mousepos >= 4766 && mousepos < 4768){
  image(i8, 300, 4800, 1500, 844);
  } else if (mousepos >= 4768 && mousepos < 4770){
  image(i9, 300, 4800, 1500, 844);
  } else if (mousepos >= 4770 && mousepos < 4772){
  image(i10, 300, 4800, 1500, 844);
  } else if (mousepos >= 4772 && mousepos < 4774){
  image(i11, 300, 4800, 1500, 844);
  } else if (mousepos >= 4774 && mousepos < 4776){
  image(i12, 300, 4800, 1500, 844);
  } else if (mousepos >= 4776 && mousepos < 4778){
  image(i13, 300, 4800, 1500, 844);
  } else if (mousepos >= 4778 && mousepos < 4780){
  image(i14, 300, 4800, 1500, 844);
  } else if (mousepos >= 4780 && mousepos < 4782){
  image(i15, 300, 4800, 1500, 844);
  } else if (mousepos >= 4782 && mousepos < 4784){
  image(i16, 300, 4800, 1500, 844);
  } else if (mousepos >= 4784 && mousepos < 4786){
  image(i17, 300, 4800, 1500, 844);
  } else if (mousepos >= 4786 && mousepos < 4788){
  image(i18, 300, 4800, 1500, 844);
  } else if (mousepos >= 4788 && mousepos < 4790){
  image(i19, 300, 4800, 1500, 844);
  } else if (mousepos >= 4790 && mousepos < 4792){
  image(i20, 300, 4800, 1500, 844);
  } else if (mousepos >= 4792 && mousepos < 4794){
  image(i21, 300, 4800, 1500, 844);
  } else if (mousepos >= 4794 && mousepos < 4796){
  image(i22, 300, 4800, 1500, 844);
  } else if (mousepos >= 4796 && mousepos < 4798){
  image(i23, 300, 4800, 1500, 844);
  } else if (mousepos >= 4798 && mousepos < 4800){
  image(i24, 300, 4800, 1500, 844);
  } else if (mousepos >= 4800 && mousepos < 4802){
  image(i25, 300, 4800, 1500, 844);
  } else if (mousepos >= 4802 && mousepos < 4804){
  image(i26, 300, 4800, 1500, 844);
  } else if (mousepos >= 4804 && mousepos < 4806){
  image(i27, 300, 4800, 1500, 844);
  } else if (mousepos >= 4806 && mousepos < 4808){
  image(i28, 300, 4800, 1500, 844);
  } else if (mousepos >= 4808 && mousepos < 4810){
  image(i29, 300, 4800, 1500, 844);
  } else if (mousepos >= 4810 && mousepos < 4812){
  image(i30, 300, 4800, 1500, 844);
  } else if (mousepos >= 4812 && mousepos < 4814){
  image(i31, 300, 4800, 1500, 844);
  } else if (mousepos >= 4814 && mousepos < 4816){
  image(i32, 300, 4800, 1500, 844);
  } else if (mousepos >= 4816 && mousepos < 4818){
  image(i33, 300, 4800, 1500, 844);
  } else if (mousepos >= 4818 && mousepos < 4820){
  image(i34, 300, 4800, 1500, 844);
  } else if (mousepos >= 4820 && mousepos < 4822){
  image(i35, 300, 4800, 1500, 844);
  } else if (mousepos >= 4822 && mousepos < 4824){
  image(i36, 300, 4800, 1500, 844);
  } else if (mousepos >= 4824 && mousepos < 4826){
  image(i37, 300, 4800, 1500, 844);
  } else if (mousepos >= 4826 && mousepos < 4828){
  image(i38, 300, 4800, 1500, 844);
  } else if (mousepos >= 4828 && mousepos < 4830){
  image(i39, 300, 4800, 1500, 844);
  } else if (mousepos >= 4830 && mousepos < 4832){
  image(i40, 300, 4800, 1500, 844);
  } else if (mousepos >= 4832 && mousepos < 4834){
  image(i41, 300, 4800, 1500, 844);
  } else if (mousepos >= 4834 && mousepos < 4836){
  image(i42, 300, 4800, 1500, 844);
  } else if (mousepos >= 4836 && mousepos < 4838){
  image(i43, 300, 4800, 1500, 844);
  } else if (mousepos >= 4838 && mousepos < 4840){
  image(i44, 300, 4800, 1500, 844);
  } else if (mousepos >= 4840 && mousepos < 4842){
  image(i45, 300, 4800, 1500, 844);
  } else if (mousepos >= 4842 && mousepos < 4844){
  image(i46, 300, 4800, 1500, 844);
  } else if (mousepos >= 4844 && mousepos < 4846){
  image(i47, 300, 4800, 1500, 844);
  } else if (mousepos >= 4846 && mousepos < 4848){
  image(i48, 300, 4800, 1500, 844);
  } else if (mousepos >= 4848 && mousepos < 4850){
  image(i49, 300, 4800, 1500, 844);
  } else if (mousepos >= 4850 && mousepos < 4852){
  image(i50, 300, 4800, 1500, 844);
  } else if (mousepos >= 4852 && mousepos < 4854){
  image(i51, 300, 4800, 1500, 844);
  } else if (mousepos >= 4854 && mousepos < 4856){
  image(i52, 300, 4800, 1500, 844);
  } else if (mousepos >= 4856 && mousepos < 4858){
  image(i53, 300, 4800, 1500, 844);
  } else if (mousepos >= 4858 && mousepos < 4860){
  image(i54, 300, 4800, 1500, 844);
  } else if (mousepos >= 4860 && mousepos < 4862){
  image(i55, 300, 4800, 1500, 844);
  } else if (mousepos >= 4862 && mousepos < 4864){
  image(i56, 300, 4800, 1500, 844);
  } else if (mousepos >= 4864 && mousepos < 4866){
  image(i57, 300, 4800, 1500, 844);
  } else if (mousepos >= 4866 && mousepos < 4868){
  image(i58, 300, 4800, 1500, 844);
  } else if (mousepos >= 4868 && mousepos < 4870){
  image(i59, 300, 4800, 1500, 844);
  } else if (mousepos >= 4870 && mousepos < 4872){
  image(i60, 300, 4800, 1500, 844);
  } else if (mousepos >= 4872 && mousepos < 4874){
  image(i61, 300, 4800, 1500, 844);
  } else if (mousepos >= 4874 && mousepos < 4876){
  image(i62, 300, 4800, 1500, 844);
  } else if (mousepos >= 4876 && mousepos < 4878){
  image(i63, 300, 4800, 1500, 844);
  } else if (mousepos >= 4878 && mousepos < 4880){
  image(i64, 300, 4800, 1500, 844);
  } else if (mousepos >= 4880 && mousepos < 4882){
  image(i65, 300, 4800, 1500, 844);
  } else if (mousepos >= 4882 && mousepos < 4884){
  image(i66, 300, 4800, 1500, 844);
  } else if (mousepos >= 4884 && mousepos < 4886){
  image(i67, 300, 4800, 1500, 844);
  } else if (mousepos >= 4886 && mousepos < 4888){
  image(i68, 300, 4800, 1500, 844);
  } else if (mousepos >= 4888 && mousepos < 4890){
  image(i69, 300, 4800, 1500, 844);
  } else if (mousepos >= 4890 && mousepos < 4892){
  image(i70, 300, 4800, 1500, 844);
  } else if (mousepos >= 4892 && mousepos < 4894){
  image(i71, 300, 4800, 1500, 844);
  } else if (mousepos >= 4894 && mousepos < 4896){
  image(i72, 300, 4800, 1500, 844);
  } else if (mousepos >= 4896 && mousepos < 4898){
  image(i73, 300, 4800, 1500, 844);
  } else if (mousepos >= 4898 && mousepos < 4900){
  image(i74, 300, 4800, 1500, 844);
  } else if (mousepos >= 4900 && mousepos < 4902){
  image(i75, 300, 4800, 1500, 844);
  } else if (mousepos >= 4902 && mousepos < 4904){
  image(i76, 300, 4800, 1500, 844);
  } else if (mousepos >= 4904 && mousepos < 4906){
  image(i77, 300, 4800, 1500, 844);
  } else if (mousepos >= 4906 && mousepos < 4908){
  image(i78, 300, 4800, 1500, 844);
  } else if (mousepos >= 4908 && mousepos < 4910){
  image(i79, 300, 4800, 1500, 844);
  } else if (mousepos < 5112){
  image(i80, 300, 4800, 1500, 844);
  } else if (mousepos >= 5112 && mousepos < 5114){
  image(i81, 300, 4800, 1500, 844);
  } else if (mousepos >= 5114 && mousepos < 5116){
  image(i82, 300, 4800, 1500, 844);
  } else if (mousepos >= 5116 && mousepos < 5118){
  image(i83, 300, 4800, 1500, 844);
  } else if (mousepos >= 5118 && mousepos < 5120){
  image(i84, 300, 4800, 1500, 844);
  } else if (mousepos >= 5120 && mousepos < 5122){
  image(i85, 300, 4800, 1500, 844);
  } else if (mousepos >= 5122 && mousepos < 5124){
  image(i86, 300, 4800, 1500, 844);
  } else if (mousepos >= 5124 && mousepos < 5126){
  image(i87, 300, 4800, 1500, 844);
  } else if (mousepos >= 5126 && mousepos < 5128){
  image(i88, 300, 4800, 1500, 844);
  } else if (mousepos >= 5128 && mousepos < 5130){
  image(i89, 300, 4800, 1500, 844);
  } else if (mousepos >= 5130 && mousepos < 5132){
  image(i90, 300, 4800, 1500, 844);
  } else if (mousepos >= 5132 && mousepos < 5134){
  image(i91, 300, 4800, 1500, 844);
  } else if (mousepos >= 5134 && mousepos < 5136){
  image(i92, 300, 4800, 1500, 844);
  } else if (mousepos >= 5136 && mousepos < 5138){
  image(i93, 300, 4800, 1500, 844);
  } else if (mousepos >= 5138 && mousepos < 5140){
  image(i94, 300, 4800, 1500, 844);
  } else if (mousepos >= 5140 && mousepos < 5142){
  image(i95, 300, 4800, 1500, 844);
  } else if (mousepos >= 5142 && mousepos < 5144){
  image(i96, 300, 4800, 1500, 844);
  } else if (mousepos >= 5144 && mousepos < 5146){
  image(i97, 300, 4800, 1500, 844);
  } else if (mousepos >= 5146 && mousepos < 5148){
  image(i98, 300, 4800, 1500, 844);
  } else if (mousepos >= 5148 && mousepos < 5150){
  image(i99, 300, 4800, 1500, 844);
  } else if (mousepos >= 5150 && mousepos < 5152){
  image(i100, 300, 4800, 1500, 844);
  } else if (mousepos >= 5152 && mousepos < 5154){
  image(i101, 300, 4800, 1500, 844);
  } else if (mousepos >= 5154 && mousepos < 5156){
  image(i102, 300, 4800, 1500, 844);
  } else if (mousepos >= 5156 && mousepos < 5158){
  image(i103, 300, 4800, 1500, 844);
  } else if (mousepos >= 5158 && mousepos < 5160){
  image(i104, 300, 4800, 1500, 844);
  } else if (mousepos >= 5160 && mousepos < 5162){
  image(i105, 300, 4800, 1500, 844);
  } else if (mousepos >= 5162 && mousepos < 5164){
  image(i106, 300, 4800, 1500, 844);
  } else if (mousepos >= 5164 && mousepos < 5166){
  image(i107, 300, 4800, 1500, 844);
  } else if (mousepos >= 5166 && mousepos < 5168){
  image(i108, 300, 4800, 1500, 844);
  } else if (mousepos >= 5168 && mousepos < 5170){
  image(i109, 300, 4800, 1500, 844);
  } else if (mousepos >= 5170 && mousepos < 5172){
  image(i110, 300, 4800, 1500, 844);
  } else if (mousepos >= 5172 && mousepos < 5174){
  image(i111, 300, 4800, 1500, 844);
  } else if (mousepos >= 5174 && mousepos < 5176){
  image(i112, 300, 4800, 1500, 844);
  } else if (mousepos >= 5176 && mousepos < 5178){
  image(i113, 300, 4800, 1500, 844);
  } else if (mousepos >= 5178 && mousepos < 5180){
  image(i114, 300, 4800, 1500, 844);
  } else if (mousepos >= 5180 && mousepos < 5182){
  image(i115, 300, 4800, 1500, 844);
  } else if (mousepos >= 5182 && mousepos < 5184){
  image(i116, 300, 4800, 1500, 844);
  } else if (mousepos >= 5184 && mousepos < 5186){
  image(i117, 300, 4800, 1500, 844);
  } else if (mousepos >= 5186 && mousepos < 5188){
  image(i118, 300, 4800, 1500, 844);
  } else if (mousepos >= 5188 && mousepos < 5190){
  image(i119, 300, 4800, 1500, 844);
  } else if (mousepos >= 5190 && mousepos < 5192){
  image(i120, 300, 4800, 1500, 844);
  } else if (mousepos >= 5192 && mousepos < 5194){
  image(i121, 300, 4800, 1500, 844);
  } else if (mousepos >= 5194 && mousepos < 5196){
  image(i122, 300, 4800, 1500, 844);
  } else if (mousepos >= 5196 && mousepos < 5198){
  image(i123, 300, 4800, 1500, 844);
  } else if (mousepos >= 5198 && mousepos < 5200){
  image(i124, 300, 4800, 1500, 844);
  } else if (mousepos >= 5200 && mousepos < 5202){
  image(i125, 300, 4800, 1500, 844);
  } else if (mousepos >= 5202 && mousepos < 5204){
  image(i126, 300, 4800, 1500, 844);
  } else if (mousepos >= 5204 && mousepos < 5206){
  image(i127, 300, 4800, 1500, 844);
  } else if (mousepos >= 5206 && mousepos < 5208){
  image(i128, 300, 4800, 1500, 844);
  } else if (mousepos >= 5208 && mousepos < 5210){
  image(i129, 300, 4800, 1500, 844);
  } else if (mousepos >= 5210 && mousepos < 5212){
  image(i130, 300, 4800, 1500, 844);
  } else if (mousepos >= 5212 && mousepos < 5214){
  image(i131, 300, 4800, 1500, 844);
  } else if (mousepos >= 5214 && mousepos < 5216){
  image(i132, 300, 4800, 1500, 844);
  } else if (mousepos >= 5216 && mousepos < 5218){
  image(i133, 300, 4800, 1500, 844);
  } else if (mousepos >= 5218 && mousepos < 5220){
  image(i134, 300, 4800, 1500, 844);
  } else if (mousepos >= 5220 && mousepos < 5222){
  image(i135, 300, 4800, 1500, 844);
  } else if (mousepos >= 5222 && mousepos < 5224){
  image(i136, 300, 4800, 1500, 844);
  } else if (mousepos >= 5224 && mousepos < 5226){
  image(i137, 300, 4800, 1500, 844);
  } else if (mousepos >= 5226 && mousepos < 5228){
  image(i138, 300, 4800, 1500, 844);
  } else if (mousepos >= 5228 && mousepos < 5230){
  image(i139, 300, 4800, 1500, 844);
  } else if (mousepos >= 5230 && mousepos < 5232){
  image(i140, 300, 4800, 1500, 844);
  } else if (mousepos >= 5232 && mousepos < 5234){
  image(i141, 300, 4800, 1500, 844);
  } else if (mousepos >= 5234 && mousepos < 5236){
  image(i142, 300, 4800, 1500, 844);
  } else if (mousepos >= 5236 && mousepos < 5238){
  image(i143, 300, 4800, 1500, 844);
  } }
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
    image(logo, (1000 - ((mousepos-5350)*x/2)), mousepos - (mousepos-5700), (mousepos-5350)*x, ((mousepos-5350)*2*x*9/16));
    fill(mousepos-5300,mousepos-5200,mousepos-5100);
    text('Binge worthy processor capability',50,5700 - (mousepos - 5300));
    fill(mousepos-5200,mousepos-5100,mousepos-5300);
    text('Outstanding efficiency and speed',1300,5900);
    fill(mousepos-5200,mousepos-5300,mousepos-5400);
    text('Excellent Encryption accuracy',50,6000);
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
