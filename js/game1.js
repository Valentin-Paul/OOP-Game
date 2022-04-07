
class Game {
    constructor(create, draw){
        this.time = 0;
        this.player = null;
        this.obstacles = [];
        this.create = create;
        this.draw = draw;
    }

    start(){
        // create & draw player
        this.player = new Player();
        this.player.domElement = this.create("player"); //create a dom element with the class "player"
        this.draw(this.player);

        setInterval( () => {
            // move obstacles
            this.obstacles.forEach( (obstacle) => {
                obstacle.moveDown();
                this.draw(obstacle);
                this.detectColission(obstacle)
            });
            // create & draw an obstacles
            if(this.time % 10 === 0){
                const newObstacle = new Obstacle();
                newObstacle.domElement = this.create("obstacle");
                this.obstacles.push(newObstacle);
                // this.draw(this.obstacles);
            }
            this.time++;
        }, 50);
    }obstacle

    detectColission(obstacle){
        if(this.player.positionX < obstacle.positionX + obstacle.width &&
            this.player.positionX + this.player.width > obstacle.positionX &&
            this.player.positionY < obstacle.positionY + obstacle.height &&
            this.player.height + this.player.positionY > obstacle.positionY){
                alert('game over');
            }
    };

    movePlayer(direction){
        if(direction === "left"){
            this.player.moveLeft();
        } else if (direction === "right"){
            this.player.moveRight();
        }
        this.draw(this.player);
    }
}


class Player {
    constructor() {
        this.positionX = 45;
        this.positionY = 0;
        this.width = 10;
        this.height = 10;
        this.domElement = null;
    }
    moveLeft() {
        if(this.positionX > 0)
        this.positionX--
    }

    moveRight() {
        if(this.positionX < 90)
        this.positionX++;
    }
}


class Obstacle {
    constructor(){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
        this.positionY = 100;
        this.positionX = getRandomInt(0,95);
        this.width = 5;
        this.height = 5;
        this.domElement = null;
    }
    moveDown(){
        this.positionY--;
    }
}

