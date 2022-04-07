
class Game {
    constructor(){
        this.player = 0;
    }
    start(){
        this.Player = new Player ();
    }

    movePlayer(direction){
        if(direction === "left"){
                this.player.moveLeft();
        }
        else if(direction === "right"){
                this.player.moveRight();
        }
    }
}


class Player {
    constructor(){
        this.positionX = 0;
    }

    moveLeft(){
        this.positionX--;
    }
    moveRight(){
        this.positionX++;
        console.log('move right' + this.position);
    }
}

const myPlayer = new Player();

myPlayer.moveLeft();
myPlayer.moveRight();