$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(180,0,20,570, "black");//no cheating wall
    createPlatform(1200,650,200,20, "blue");//first platform
    createPlatform(200,550,770,20,"black" );//second platform
    createPlatform(450,440,200,20, "orange");//third platform
    createPlatform(300,320,100,20, "orange");//collectable
    createPlatform(800,320,300,20,"orange");//path
    createPlatform(1200,380,100,20,"red");//collectable
    createPlatform(1200,200,200,20, "lime" );//winning platform


    // TODO 3 - Create Collectables
    createCollectable("diamond",330,250,2,1);
    createCollectable("max",220,450,3,1);
    createCollectable("database",1200,130,2,1);
    createCollectable("steve",1230,300,2,1);

    
    // TODO 4 - Create Cannons
    createCannon("right",550,1500);
    createCannon("left",200,1500);
    createCannon("top",1200,1800)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
