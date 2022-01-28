import { context } from './context.js'
import { resourceManager } from './resourceManager.js'
import { enemiesPath } from './map.js'
import { enemies } from './gameObjects.js';

export class Tower {
    constructor(x, y, imageId) {
        this.x = x;
        this.y = y;
        this.imageId = imageId;
        this.bullets = [];
        this.lastShoot = 0;
    }

    draw() {
        context.save();
        context.translate(this.x, this.y);
        context.drawImage(resourceManager.getImageByName("180"), -32, -32);
        var angle = this.getAngle();
        context.rotate(angle + Math.PI / 2); 
        context.drawImage(resourceManager.getImageByName("249"), -32, -45);
        context.restore(); 
    }

    
    getAngle() {
        if (enemies.length == 0) {
            return -Math.PI / 2;
        }
        for (var i = 0; i < enemiesPath.length; i++) {
            var result = Math.sqrt(Math.pow(enemies[0].currentPointX-this.x+32, 2) + Math.pow(enemies[0].currentPointY-this.y+32, 2))
        }
        if (result < 1000) {
            return Math.atan2(enemies[0].currentPointY - this.y + 32, enemies[0].currentPointX - this.x + 32);
        }
        else return -Math.PI / 2;
    }
}