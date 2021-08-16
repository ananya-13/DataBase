var hypnoticBall;
var database;

function setup(){
    createCanvas(500,500);
    database =firebase.database();
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
    var hypnoticBallPosition=database.ref("ball/position"); //we are locating the path given in database or reffering to a particular feild in database
    hypnoticBallPosition.on("value",readPosition) //on is listener whenever value changes in the databse the readPosition function will be called and value is predefined string

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/
function readPosition(data){
    position = data.val(); // val read the value from the database and store it in the position variable
    hypnoticBall.x=position.x; // storing the value in the databae to the sprite position
    hypnoticBall.y=position.y;

}
function writePosition (x,y){
    database.ref("ball/position").set({ // set is to write to the database 
    "x":position.x+x,
    "y":position.y+y
    })
}