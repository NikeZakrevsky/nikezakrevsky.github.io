class Tower {
    constructor(x, y, imageId) {
        this.x = x;
        this.y = y;
        this.imageId = imageId;
        this.bullets = [];
        this.lastShoot = 0;
    }

    draw() {
        ctx.save();
        ctx.translate(towers[j].x, towers[j].y);
        ctx.drawImage(getImageByName("180"), -32, -32, 64, 64);
        var angle = this.getAngle(towers[j]);
        ctx.rotate(angle + Math.PI / 2); 
        ctx.drawImage(getImageByName("249"), -32, -45, 62, 62);
        ctx.restore(); 
    }

    
    getAngle(tower) {
        if (enemies.length == 0) {
            return -Math.PI / 2;
        }
        for (var i = 0; i < enemyPoints.length; i++) {
            var result = Math.sqrt(Math.pow(enemies[0].currentPointX-tower.x, 2) + Math.pow(enemies[0].currentPointY-tower.y, 2))
        }
        if (result < 1000) {
            return Math.atan2(enemies[0].currentPointY - tower.y, enemies[0].currentPointX - tower.x);
        }
        else return -Math.PI / 2;
    }
}