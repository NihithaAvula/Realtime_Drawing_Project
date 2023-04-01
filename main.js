function preload(){

}

function setup(){
 canvas = createCanvas(500,500);
 canvas.position(700,110);
 video = createCapture(VIDEO);
 video.size(500,500);
 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
background("#FFFC2A");
}


function gotPoses(results){
if(results.length> 0){
    console.log(results);
    console.log("noseX = " + results[0].pose.nose.x);
    console.log("noseY = " + results[0].pose.nose.y);
    console.log("rightWristX = " + results[0].pose.rightWrist.x);
    console.log("leftWristX = " + results[0].pose.lefttWrist.x);

}
}