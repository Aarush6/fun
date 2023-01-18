noseX=0;
noseY=0;
function preload(){
clown=loadImage("https://i.postimg.cc/qvm837v1/m.png");
}
 function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
 }
 function modelloaded(){
   console.log('important stuff is being important stuff');
 }
 function draw(){
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(clown,noseX-20,noseY+0,50,30);
 }
 function Forever_remain_pictura(){
    save("virus.png")
 }
 function gotPoses(result){
   if(result.length>0){
      console.log(result);
      console.log("x is the noses position is" + result[0].pose.nose.x);
      console.log("y is the noses position is" + result[0].pose.nose.y);
      noseX= result[0].pose.nose.x;
      noseY=result[0].pose.nose.y;
   }
 }