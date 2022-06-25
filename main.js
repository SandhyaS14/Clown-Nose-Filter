noseY = 0;
noseX = 0;

function preload() {
    nose = loadImage("https://i.postimg.cc/43XXC13P/pixlr-bg-result.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(550,200);

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
}

function modelloaded() {
    console.log("PoseNet is initialized.")
}

function draw() {
    image(video, 0,0,300,300);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(noseX, noseY, 20);

    image(nose, noseX, noseY, 30, 30);
}

function snap() {
    save("clown_filter.png");
}


function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        console.log("The X-position of the nose is " + results[0].pose.nose.x);
        console.log("The Y-position of the nose is " + results[0].pose.nose.y);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}