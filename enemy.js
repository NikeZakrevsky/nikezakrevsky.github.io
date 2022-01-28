class Enemy {
    constructor(initPointX, initPointY, enemyPoints) {
        this.enemyPoints = enemyPoints;
        this.health = 10;
        this.initPointX = initPointX;
        this.initPointY = initPointY;
        this.currentPointX = initPointX;
        this.currentPointY = initPointY;
        this.hits = 0;
        this.enemyPointIndex = 0;
        this.ctx = ctx;
    }

    getSign() {
        var signX;
        var signY;
        if (this.enemyPoints[this.enemyPointIndex].x == this.currentPointX) {
            signX = 0;
        }
        if (this.enemyPoints[this.enemyPointIndex].x <  this.currentPointX) {
            signX = -1;
        }
        if (this.enemyPoints[this.enemyPointIndex].x >  this.currentPointX) {
            signX = 1;
        }

        if (this.enemyPoints[this.enemyPointIndex].y ==  this.currentPointY) {
            signY = 0;
        }
        if (this.enemyPoints[this.enemyPointIndex].y < this.currentPointY) {
            signY = -1;
        }
        if (this.enemyPoints[this.enemyPointIndex].y > this.currentPointY) {
            signY = 1;
        }

        return [signX, signY];
    }

    update() {
        var signs = this.getSign();

        this.currentPointX = this.currentPointX + signs[0];
        this.currentPointY = this.currentPointY + signs[1];
        
        if (this.currentPointX == enemyPoints[this.enemyPointIndex].x &&  this.currentPointY == enemyPoints[this.enemyPointIndex].y) {
            this.enemyPointIndex += 1;
        }
    }

    draw() {
        this.ctx.translate(this.currentPointX + 31, this.currentPointY + 31);

        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(0,255,0,1)";
        this.ctx.fillRect(-18, -32, (this.health - this.hits)*3, 5)
        this.ctx.lineWidth = "2";
        this.ctx.strokeStyle = "black";
        this.ctx.rect(-18, -32, 30, 5); 
        this.ctx.stroke();

        this.ctx.rotate(this.enemyPoints[this.enemyPointIndex].rotation * TO_RADIANS);
        this.ctx.drawImage(getImageByName("245"), -31, -31, 62, 62);

        this.ctx.translate(0, 0);
        this.ctx.setTransform(1,0,0,1,0,0);
    }
}