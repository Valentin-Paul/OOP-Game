const game = new Game();
game.start();

document.addEventListener("keydown", function(event){
    console.log('Hello')
        switch(event.key){
            case "ArrowRight":
                game.movePlayer("right");
                break;
            case "ArrowLeft":
                game.movePlayer("left");
                break;
        }
    });

////// ---> andere Option  ///////
//     if(event.key === "ArrowRight"){
//         console.log("we want to move to the right")
//     } else if (event.key === "ArrowLeft"){
//         console.log("we want to move to the left")
//     }

// });