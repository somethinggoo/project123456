noseX = 0;
noseY = 0;
image_Xposition = 0;
image_Yposition = 0;
function preload() { 
    img = loadImage("b.jpg")  
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        image_Xposition = noseX-20;
        image_Yposition = noseY+10;
        console.log("mustache X = " + image_Xposition);
        console.log("mustache Y = " + image_Yposition);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img,image_Xposition,image_Yposition,60,35)
}

function take_snapshot() {
    save('Desmonds_Mustache_Filter.png');
}