
status = "";

function preload()
{
    video = createvideo('video.mp4');

}

function setup()
{
    canvas = createCanvas(480 , 380);
    canvas.center();
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image( video , 0 , 0 ,480 , 380);
}

function modelLoaded()
{
    console.log("Model Loaded !");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
