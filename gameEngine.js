import { resourceManager } from './resourceManager.js'
import { Enemy } from './enemy.js'
import { map, enemiesPath } from './map.js'
import { context, canvas } from './context.js'
import { Tower } from './tower.js'
import {towers, enemies } from './gameObjects.js'

class GameEngine {

    mouseX;
    mouseY;

    start() {
            enemies.push(new Enemy(100, 500, enemiesPath));

        canvas.addEventListener("mousedown", event => this.#doMouseDown(event), false);
        canvas.addEventListener("mousemove", event => this.#doMouseMove(event), false);

        resourceManager.loadAllResourcesFromDisk();

        requestAnimationFrame(()=>this.#draw());
    }

    #doMouseDown(event) {
        var tower = new Tower(this.mouseX * 64 + 32, this.mouseY * 64 + 32, '249');
        towers.push(tower)
    }

    #doMouseMove(event) {
        this.mouseX = Math.trunc(event.clientX/64);
        this.mouseY = Math.trunc(event.clientY/64);
    }

    #draw() {
        this.#drawMap();
        this.#drawEnemy();
        this.#drawTowers();
        this.#drawSquare();
        requestAnimationFrame(()=>this.#draw());
    }

    #drawEnemy() {
        enemies.forEach(enemy => {
            enemy.draw();
            enemy.update();
        });
    }

    #drawTowers() {
        towers.forEach(tower => {
            tower.draw();
        });
    }

    #drawSquare() {
        context.beginPath();
        context.lineWidth="1";
        context.strokeStyle="black";
        context.rect(64 * this.mouseX, 64 * this.mouseY, 64, 64);
        context.stroke();
    }

    #drawMap() {
        for(var i = 0; i < map.length; i++) {
            for(var j = 0; j < map[0].length; j++) {
                context.drawImage(resourceManager.getImageByName(map[i][j]), j*64, i*64);
            }
        }
    }

}

new GameEngine().start();