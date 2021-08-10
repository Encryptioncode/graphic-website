function setup() {
  createCanvas(2000,8000);
  //background(0,0,0);
}

let mousepos = 25;
var firsttime = true;

function donothing(){
}

function preload(){
  i1 = loadImage("Videoframes/ezgif-frame-001.jpg");
i2 = loadImage("Videoframes/ezgif-frame-002.jpg");
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
  
  if (mousepos >= 3500 && mousepos <= 4600){
    background(mousepos - 3500);
  }
   
  textSize(100);
  
  fill(3390 + 255 - mousepos);
  text('Encryption code', 100, 4300);
  fill(3390 + 400 - mousepos);
  text('Beta', 1100, 4300);
  fill(3390 + 550 - mousepos);
  text('Pro', 1600, 4300);
  
  if (mousepos >= 4600 && mousepos <= 5700){
    background(4800 - mousepos);
  }
  
  //rect(0,5000,2000,3000);
  if (mousepos < 4754){
  image(i1, 300, 5000, 1000, 500);
  } else if (mousepos >= 4754 && mousepos < 4756){
  image(i2, 300, 5000, 1000, 500);
  } else if (mousepos >= 4756 && mousepos < 4758){
  image(i3, 300, 5000, 1000, 500);
  } else if (mousepos >= 4758 && mousepos < 4760){
  image(i4, 300, 5000, 1000, 500);
  } else if (mousepos >= 4760 && mousepos < 4762){
  image(i5, 300, 5000, 1000, 500);
  } else if (mousepos >= 4762 && mousepos < 4764){
  image(i6, 300, 5000, 1000, 500);
  } else if (mousepos >= 4764 && mousepos < 4766){
  image(i7, 300, 5000, 1000, 500);
  } else if (mousepos >= 4766 && mousepos < 4768){
  image(i8, 300, 5000, 1000, 500);
  } else if (mousepos >= 4768 && mousepos < 4770){
  image(i9, 300, 5000, 1000, 500);
  } else if (mousepos >= 4770 && mousepos < 4772){
  image(i10, 300, 5000, 1000, 500);
  } else if (mousepos >= 4772 && mousepos < 4774){
  image(i11, 300, 5000, 1000, 500);
  } else if (mousepos >= 4774 && mousepos < 4776){
  image(i12, 300, 5000, 1000, 500);
  } else if (mousepos >= 4776 && mousepos < 4778){
  image(i13, 300, 5000, 1000, 500);
  } else if (mousepos >= 4778 && mousepos < 4780){
  image(i14, 300, 5000, 1000, 500);
  } else if (mousepos >= 4780 && mousepos < 4782){
  image(i15, 300, 5000, 1000, 500);
  } else if (mousepos >= 4782 && mousepos < 4784){
  image(i16, 300, 5000, 1000, 500);
  } else if (mousepos >= 4784 && mousepos < 4786){
  image(i17, 300, 5000, 1000, 500);
  } else if (mousepos >= 4786 && mousepos < 4788){
  image(i18, 300, 5000, 1000, 500);
  } else if (mousepos >= 4788 && mousepos < 4790){
  image(i19, 300, 5000, 1000, 500);
  } else if (mousepos >= 4790 && mousepos < 4792){
  image(i20, 300, 5000, 1000, 500);
  } else if (mousepos >= 4792 && mousepos < 4794){
  image(i21, 300, 5000, 1000, 500);
  } else if (mousepos >= 4794 && mousepos < 4796){
  image(i22, 300, 5000, 1000, 500);
  } else if (mousepos >= 4796 && mousepos < 4798){
  image(i23, 300, 5000, 1000, 500);
  } else if (mousepos >= 4798 && mousepos < 4800){
  image(i24, 300, 5000, 1000, 500);
  } else if (mousepos >= 4800 && mousepos < 4802){
  image(i25, 300, 5000, 1000, 500);
  } else if (mousepos >= 4802 && mousepos < 4804){
  image(i26, 300, 5000, 1000, 500);
  } else if (mousepos >= 4804 && mousepos < 4806){
  image(i27, 300, 5000, 1000, 500);
  } else if (mousepos >= 4806 && mousepos < 4808){
  image(i28, 300, 5000, 1000, 500);
  } else if (mousepos >= 4808 && mousepos < 4810){
  image(i29, 300, 5000, 1000, 500);
  } else if (mousepos >= 4810 && mousepos < 4812){
  image(i30, 300, 5000, 1000, 500);
  } else if (mousepos >= 4812 && mousepos < 4814){
  image(i31, 300, 5000, 1000, 500);
  } else if (mousepos >= 4814 && mousepos < 4816){
  image(i32, 300, 5000, 1000, 500);
  } else if (mousepos >= 4816 && mousepos < 4818){
  image(i33, 300, 5000, 1000, 500);
  } else if (mousepos >= 4818 && mousepos < 4820){
  image(i34, 300, 5000, 1000, 500);
  } else if (mousepos >= 4820 && mousepos < 4822){
  image(i35, 300, 5000, 1000, 500);
  } else if (mousepos >= 4822 && mousepos < 4824){
  image(i36, 300, 5000, 1000, 500);
  } else if (mousepos >= 4824 && mousepos < 4826){
  image(i37, 300, 5000, 1000, 500);
  } else if (mousepos >= 4826 && mousepos < 4828){
  image(i38, 300, 5000, 1000, 500);
  } else if (mousepos >= 4828 && mousepos < 4830){
  image(i39, 300, 5000, 1000, 500);
  } else if (mousepos >= 4830 && mousepos < 4832){
  image(i40, 300, 5000, 1000, 500);
  } else if (mousepos >= 4832 && mousepos < 4834){
  image(i41, 300, 5000, 1000, 500);
  } else if (mousepos >= 4834 && mousepos < 4836){
  image(i42, 300, 5000, 1000, 500);
  } else if (mousepos >= 4836 && mousepos < 4838){
  image(i43, 300, 5000, 1000, 500);
  } else if (mousepos >= 4838 && mousepos < 4840){
  image(i44, 300, 5000, 1000, 500);
  } else if (mousepos >= 4840 && mousepos < 4842){
  image(i45, 300, 5000, 1000, 500);
  } else if (mousepos >= 4842 && mousepos < 4844){
  image(i46, 300, 5000, 1000, 500);
  } else if (mousepos >= 4844 && mousepos < 4846){
  image(i47, 300, 5000, 1000, 500);
  } else if (mousepos >= 4846 && mousepos < 4848){
  image(i48, 300, 5000, 1000, 500);
  } else if (mousepos >= 4848 && mousepos < 4850){
  image(i49, 300, 5000, 1000, 500);
  } else if (mousepos >= 4850 && mousepos < 4852){
  image(i50, 300, 5000, 1000, 500);
  } else if (mousepos >= 4852 && mousepos < 4854){
  image(i51, 300, 5000, 1000, 500);
  } else if (mousepos >= 4854 && mousepos < 4856){
  image(i52, 300, 5000, 1000, 500);
  } else if (mousepos >= 4856 && mousepos < 4858){
  image(i53, 300, 5000, 1000, 500);
  } else if (mousepos >= 4858 && mousepos < 4860){
  image(i54, 300, 5000, 1000, 500);
  } else if (mousepos >= 4860 && mousepos < 4862){
  image(i55, 300, 5000, 1000, 500);
  } else if (mousepos >= 4862 && mousepos < 4864){
  image(i56, 300, 5000, 1000, 500);
  } else if (mousepos >= 4864 && mousepos < 4866){
  image(i57, 300, 5000, 1000, 500);
  } else if (mousepos >= 4866 && mousepos < 4868){
  image(i58, 300, 5000, 1000, 500);
  } else if (mousepos >= 4868 && mousepos < 4870){
  image(i59, 300, 5000, 1000, 500);
  } else if (mousepos >= 4870 && mousepos < 4872){
  image(i60, 300, 5000, 1000, 500);
  } else if (mousepos >= 4872 && mousepos < 4874){
  image(i61, 300, 5000, 1000, 500);
  } else if (mousepos >= 4874 && mousepos < 4876){
  image(i62, 300, 5000, 1000, 500);
  } else if (mousepos >= 4876 && mousepos < 4878){
  image(i63, 300, 5000, 1000, 500);
  } else if (mousepos >= 4878 && mousepos < 4880){
  image(i64, 300, 5000, 1000, 500);
  } else if (mousepos >= 4880 && mousepos < 4882){
  image(i65, 300, 5000, 1000, 500);
  } else if (mousepos >= 4882 && mousepos < 4884){
  image(i66, 300, 5000, 1000, 500);
  } else if (mousepos >= 4884 && mousepos < 4886){
  image(i67, 300, 5000, 1000, 500);
  } else if (mousepos >= 4886 && mousepos < 4888){
  image(i68, 300, 5000, 1000, 500);
  } else if (mousepos >= 4888 && mousepos < 4890){
  image(i69, 300, 5000, 1000, 500);
  } else if (mousepos >= 4890 && mousepos < 4892){
  image(i70, 300, 5000, 1000, 500);
  } else if (mousepos >= 4892 && mousepos < 4894){
  image(i71, 300, 5000, 1000, 500);
  } else if (mousepos >= 4894 && mousepos < 4896){
  image(i72, 300, 5000, 1000, 500);
  } else if (mousepos >= 4896 && mousepos < 4898){
  image(i73, 300, 5000, 1000, 500);
  } else if (mousepos >= 4898 && mousepos < 4900){
  image(i74, 300, 5000, 1000, 500);
  } else if (mousepos >= 4900 && mousepos < 4902){
  image(i75, 300, 5000, 1000, 500);
  } else if (mousepos >= 4902 && mousepos < 4904){
  image(i76, 300, 5000, 1000, 500);
  } else if (mousepos >= 4904 && mousepos < 4906){
  image(i77, 300, 5000, 1000, 500);
  } else if (mousepos >= 4906 && mousepos < 4908){
  image(i78, 300, 5000, 1000, 500);
  } else if (mousepos >= 4908 && mousepos < 4910){
  image(i79, 300, 5000, 1000, 500);
  } else if (mousepos >= 4910 && mousepos < 4912){
  image(i80, 300, 5000, 1000, 500);
  } else if (mousepos >= 4912 && mousepos < 4914){
  image(i81, 300, 5000, 1000, 500);
  } else if (mousepos >= 4914 && mousepos < 4916){
  image(i82, 300, 5000, 1000, 500);
  } else if (mousepos >= 4916 && mousepos < 4918){
  image(i83, 300, 5000, 1000, 500);
  } else if (mousepos >= 4918 && mousepos < 4920){
  image(i84, 300, 5000, 1000, 500);
  } else if (mousepos >= 4920 && mousepos < 4922){
  image(i85, 300, 5000, 1000, 500);
  } else if (mousepos >= 4922 && mousepos < 4924){
  image(i86, 300, 5000, 1000, 500);
  } else if (mousepos >= 4924 && mousepos < 4926){
  image(i87, 300, 5000, 1000, 500);
  } else if (mousepos >= 4926 && mousepos < 4928){
  image(i88, 300, 5000, 1000, 500);
  } else if (mousepos >= 4928 && mousepos < 4930){
  image(i89, 300, 5000, 1000, 500);
  } else if (mousepos >= 4930 && mousepos < 4932){
  image(i90, 300, 5000, 1000, 500);
  } else if (mousepos >= 4932 && mousepos < 4934){
  image(i91, 300, 5000, 1000, 500);
  } else if (mousepos >= 4934 && mousepos < 4936){
  image(i92, 300, 5000, 1000, 500);
  } else if (mousepos >= 4936 && mousepos < 4938){
  image(i93, 300, 5000, 1000, 500);
  } else if (mousepos >= 4938 && mousepos < 4940){
  image(i94, 300, 5000, 1000, 500);
  } else if (mousepos >= 4940 && mousepos < 4942){
  image(i95, 300, 5000, 1000, 500);
  } else if (mousepos >= 4942 && mousepos < 4944){
  image(i96, 300, 5000, 1000, 500);
  } else if (mousepos >= 4944 && mousepos < 4946){
  image(i97, 300, 5000, 1000, 500);
  } else if (mousepos >= 4946 && mousepos < 4948){
  image(i98, 300, 5000, 1000, 500);
  } else if (mousepos >= 4948 && mousepos < 4950){
  image(i99, 300, 5000, 1000, 500);
  } else if (mousepos >= 4950 && mousepos < 4952){
  image(i100, 300, 5000, 1000, 500);
  } else if (mousepos >= 4952 && mousepos < 4954){
  image(i101, 300, 5000, 1000, 500);
  } else if (mousepos >= 4954 && mousepos < 4956){
  image(i102, 300, 5000, 1000, 500);
  } else if (mousepos >= 4956 && mousepos < 4958){
  image(i103, 300, 5000, 1000, 500);
  } else if (mousepos >= 4958 && mousepos < 4960){
  image(i104, 300, 5000, 1000, 500);
  } else if (mousepos >= 4960 && mousepos < 4962){
  image(i105, 300, 5000, 1000, 500);
  } else if (mousepos >= 4962 && mousepos < 4964){
  image(i106, 300, 5000, 1000, 500);
  } else if (mousepos >= 4964 && mousepos < 4966){
  image(i107, 300, 5000, 1000, 500);
  } else if (mousepos >= 4966 && mousepos < 4968){
  image(i108, 300, 5000, 1000, 500);
  } else if (mousepos >= 4968 && mousepos < 4970){
  image(i109, 300, 5000, 1000, 500);
  } else if (mousepos >= 4970 && mousepos < 4972){
  image(i110, 300, 5000, 1000, 500);
  } else if (mousepos >= 4972 && mousepos < 4974){
  image(i111, 300, 5000, 1000, 500);
  } else if (mousepos >= 4974 && mousepos < 4976){
  image(i112, 300, 5000, 1000, 500);
  } else if (mousepos >= 4976 && mousepos < 4978){
  image(i113, 300, 5000, 1000, 500);
  } else if (mousepos >= 4978 && mousepos < 4980){
  image(i114, 300, 5000, 1000, 500);
  } else if (mousepos >= 4980 && mousepos < 4982){
  image(i115, 300, 5000, 1000, 500);
  } else if (mousepos >= 4982 && mousepos < 4984){
  image(i116, 300, 5000, 1000, 500);
  } else if (mousepos >= 4984 && mousepos < 4986){
  image(i117, 300, 5000, 1000, 500);
  } else if (mousepos >= 4986 && mousepos < 4988){
  image(i118, 300, 5000, 1000, 500);
  } else if (mousepos >= 4988 && mousepos < 4990){
  image(i119, 300, 5000, 1000, 500);
  } else if (mousepos >= 4990 && mousepos < 4992){
  image(i120, 300, 5000, 1000, 500);
  } else if (mousepos >= 4992 && mousepos < 4994){
  image(i121, 300, 5000, 1000, 500);
  } else if (mousepos >= 4994 && mousepos < 4996){
  image(i122, 300, 5000, 1000, 500);
  } else if (mousepos >= 4996 && mousepos < 4998){
  image(i123, 300, 5000, 1000, 500);
  } else if (mousepos >= 4998 && mousepos < 5000){
  image(i124, 300, 5000, 1000, 500);
  } else if (mousepos >= 5000 && mousepos < 5002){
  image(i125, 300, 5000, 1000, 500);
  } else if (mousepos >= 5002 && mousepos < 5004){
  image(i126, 300, 5000, 1000, 500);
  } else if (mousepos >= 5004 && mousepos < 5006){
  image(i127, 300, 5000, 1000, 500);
  } else if (mousepos >= 5006 && mousepos < 5008){
  image(i128, 300, 5000, 1000, 500);
  } else if (mousepos >= 5008 && mousepos < 5010){
  image(i129, 300, 5000, 1000, 500);
  } else if (mousepos >= 5010 && mousepos < 5012){
  image(i130, 300, 5000, 1000, 500);
  } else if (mousepos >= 5012 && mousepos < 5014){
  image(i131, 300, 5000, 1000, 500);
  } else if (mousepos >= 5014 && mousepos < 5016){
  image(i132, 300, 5000, 1000, 500);
  } else if (mousepos >= 5016 && mousepos < 5018){
  image(i133, 300, 5000, 1000, 500);
  } else if (mousepos >= 5018 && mousepos < 5020){
  image(i134, 300, 5000, 1000, 500);
  } else if (mousepos >= 5020 && mousepos < 5022){
  image(i135, 300, 5000, 1000, 500);
  } else if (mousepos >= 5022 && mousepos < 5024){
  image(i136, 300, 5000, 1000, 500);
  } else if (mousepos >= 5024 && mousepos < 5026){
  image(i137, 300, 5000, 1000, 500);
  } else if (mousepos >= 5026 && mousepos < 5028){
  image(i138, 300, 5000, 1000, 500);
  } else if (mousepos >= 5028 && mousepos < 5030){
  image(i139, 300, 5000, 1000, 500);
  } else if (mousepos >= 5030 && mousepos < 5032){
  image(i140, 300, 5000, 1000, 500);
  } else if (mousepos >= 5032 && mousepos < 5034){
  image(i141, 300, 5000, 1000, 500);
  } else if (mousepos >= 5034 && mousepos < 5036){
  image(i142, 300, 5000, 1000, 500);
  } else if (mousepos >= 5036){
  image(i143, 300, 5000, 1000, 500);
  }
}

function mouseWheel(event) {
  print(mousepos);
  mousepos += event.delta;
  if (mousepos < 25){
    mousepos = 25;
  }
  if (event.delta != 1){
    firsttime = false;
  }
}
