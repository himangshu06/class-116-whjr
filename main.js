noseX = 0;
noseY = 0;
function preload(){
 clownnose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNET = ml5.poseNet(video,modelLoaded);
poseNET.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is intilized");
}

function draw(){
image(video,0,0,300,300);
image(clownnose,noseX,noseY,30,30);
}

function gotPoses(results){
     if(results.length > 0){
          console.log(results);
          noseX = results[0].pose.nose.x-10;
          noseY = results[0].pose.nose.y-10;
          console.log("noseX = "+noseX);
            console.log("noseY = "+noseY);
        }
         }

function takesnapshot(){
    save("Filter.png");
}


