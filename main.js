function setup(){
canvas = createCanvas(550,550);
canvas.position(560,150);
video = createCapture(VIDEO);
video.size(550,650);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    background('cyan');
    fill("blue");//it fills in the square in the canvas 
    stroke("turquoise");//its the color for the border
    document.getElementById("square_side").innerHTML = "the square length is"+diffrence+"px";
    square(nose_x,nose_y,diffrence);

}
function modelLoaded(){
    console.log("poseNet has successfully loaded");
}
function gotPoses(results){
  if(results.length > 0){//this makes sure your movements are stored inside The results array
      console.log(results);
      nose_x = results[0].pose.nose.x;
      nose_y = results[0].pose.nose.y;
      console.log("nose_x:"+nose_x+"nose_y:"+nose_y);
      left_wrist_x = results[0].pose.leftWrist.x;
      right_wrist_x = results[0].pose.rightWrist.x;
      diffrence = floor(left_wrist_x-right_wrist_x);
      console.log("leftWrist:"+left_wrist_x+"rightWrist:"+right_wrist_x+"diffrence:"+diffrence); 
    }
}
nose_x = 0;
nose_y = 0;
diffrence = 0;
left_wrist_x = 0;
right_wrist_x = 0;