img="";
status="";
objects=[];

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelloaded );
    document.getElementById("status").innerHTML="Status : Detecting Objects";

}

function modelloaded(){
    console.log("Model has been loaded");
    status=true;
    objectDetector.detect(img, gotresult);
}

function gotresult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function draw(){
    image(img, 0 , 0, 640, 420);
   if(status!=""){
    for(index=0; index<objects.length; index++){
        document.getElementById("status").innerHTML="Status : objects dected";
        fill('#FF0000');
        percent=floor(objects[index].confidence*100);
        label_name=(objects[index].label);
        text(label_name+" "+percent+"%", objects[index].x, objects[index].y);
        noFill();
        stroke('#FF0000');
        rect(objects[index].x, objects[index].y, objects[index].height, objects[index].width);
    }
   }
   
    /*fill('#FF0000');
    text("Dog", 45, 75);
    noFill();
    stroke('#FF0000');
    rect(30, 60, 450,350);
    
    fill('#FF0000');
    text("Cat", 320, 120);
    noFill();
    stroke('#FF0000');
    rect(300, 90, 270, 320);*/
}