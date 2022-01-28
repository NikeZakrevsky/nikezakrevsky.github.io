import { ResouceManager } from './resourceManager.js'
import * as mapData from './map.js'

class GameEngine {

    #resourceManager = new ResouceManager();
    #canvas;

    start() {
        console.log('start');
        this.resourceManager.loadAllResourcesFromDisk();
        this.canvas = this.getCanvas();

        requestAnimationFrame(draw);
    }

    #getCanvas() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");
        canvas.addEventListener("mousedown", doMouseDown, false);

        return canvas;
    }

    #draw() {
        this.drawMap()
        requestAnimationFrame(draw);
    }

    #drawMap() {
        for(var i = 0; i < map.length; i++) {
            for(var j = 0; j < map[0].length; j++) {
                ctx.drawImage(getImageByName(map[i][j]), j*64, i*64);
            }
        }
    }

}

console.log('eee')

new GameEngine().start();