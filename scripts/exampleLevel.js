//Loading animations
player1 = new player();

const l1 = (p)=>{
    let backgroundImg;
    let velocity = 5;
    p.preload = function()
    {
        //Function to load sprites, textures, etc
        player1.preloadSprites(p);
        backgroundImg = p.loadImage('../sprite_folders/backgrounds/meadow.jpg');
    }

    p.setup = function()
    {
        //Initialization of canvas and other code that needs to be run once at the beginning of the level
        p.createCanvas(app.windowWidth, app.windowHeight);
        player1.loadAnimations(p);
    }

    p.draw = function()
    {
        //Function that draws each frame
        p.image(backgroundImg, -300, -300);
        player1.drawIdle(p);
    }

    p.mousePressed = function()
    {
        //ALWAYS CALL THIS PIECE OF CODE AFTER CREATING A NEW LEVEL
        //p.remove();
        //Example trigger for next level
        //app.nextLevel();
    }

    p.keyPressed = function()
    {
        console.log("key pressed: ", p.keyCode);
        if (p.keyCode === p.UP_ARROW) {
          player1.posY -= velocity;
        } else if (p.keyCode === p.DOWN_ARROW) {
          player1.posY += velocity;
        } else if (p.keyCode === p.RIGHT_ARROW) {
          player1.posX += velocity;
        } else if (p.keyCode === p.LEFT_ARROW) {
          player1.posX -= velocity;
        } else {
          console.log("wrong key");
        }
    }
}