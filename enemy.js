import { context } from './context.js'
import { resourceManager } from './resourceManager.js'
import { enemiesPath } from './map.js'

export class Enemy {
    constructor(initPointX, initPointY, enemyPoints) {
        this.health = 10;
        this.initPointX = initPointX;
        this.initPointY = initPointY;
        this.currentPointX = initPointX;
        this.currentPointY = initPointY;
        this.hits = 0;
        this.TO_RADIANS = Math.PI/180; 
        this.enemyPointIndex = 0;
    }

    getSign() {
        var signX;
        var signY;
        if (enemiesPath[this.enemyPointIndex].x == this.currentPointX) {
            signX = 0;
        }
        if (enemiesPath[this.enemyPointIndex].x <  this.currentPointX) {
            signX = -1;
        }
        if (enemiesPath[this.enemyPointIndex].x >  this.currentPointX) {
            signX = 1;
        }

        if (enemiesPath[this.enemyPointIndex].y ==  this.currentPointY) {
            signY = 0;
        }
        if (enemiesPath[this.enemyPointIndex].y < this.currentPointY) {
            signY = -1;
        }
        if (enemiesPath[this.enemyPointIndex].y > this.currentPointY) {
            signY = 1;
        }

        return [signX, signY];
    }

    update() {
        var signs = this.getSign();

        this.currentPointX = this.currentPointX + signs[0];
        this.currentPointY = this.currentPointY + signs[1];
        
        if (this.currentPointX == enemiesPath[this.enemyPointIndex].x &&  this.currentPointY == enemiesPath[this.enemyPointIndex].y) {
            this.enemyPointIndex += 1;
        }
    }

    draw() {
        context.translate(this.currentPointX + 31, this.currentPointY + 31);

        context.beginPath();
        context.fillStyle = "rgba(0,255,0,1)";
        context.fillRect(-18, -32, (this.health - this.hits)*3, 5)
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.rect(-18, -32, 30, 5); 
        context.stroke();

        context.rotate(enemiesPath[this.enemyPointIndex].rotation * this.TO_RADIANS);
        context.drawImage(resourceManager.getImageByName("245"), -31, -31, 62, 62);

        context.translate(0, 0);
        context.setTransform(1,0,0,1,0,0);
    }
}