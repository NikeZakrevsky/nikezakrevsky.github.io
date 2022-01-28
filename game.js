"use strict";

var bullet_current_x = 0;
var bullet_current_y = 0

function drawBullet() {
    for (var j = 0; j < towers.length; j++) {
        var angle = getAngle(towers[j]);
        var angle1 = (angle + Math.PI / 2);
        if (angle1 < 0)
            angle1 += Math.PI * 2
        if (towers[j].lastShoot > 30 && enemies.length != 0) {
            towers[j].lastShoot = 0;
            var bullet = new Bullet(towers[j].x + 60 * Math.sin(angle1),  towers[j].y - 60 * Math.cos(angle1));
            towers[j].bullets.push(bullet);
        }
        var i = 0;
        while (i < towers[j].bullets.length) {
            ctx.drawImage(getImageByName("275"), towers[j].bullets[i].currentPointX, towers[j].bullets[i].currentPointY);
            if (Math.hypot(towers[j].bullets[i].currentPointX-enemies[0].currentPointX, towers[j].bullets[i].currentPointY-enemies[0].currentPointY) < 20) {
                towers[j].bullets.splice(i,1);
                enemies[0].hits += 1;
                if (enemies[0].hits == 10) {
                    enemies.splice(0,1)

                    if (enemies.length == 0) {
                        for(var k = 0; k < towers.length; k++) {
                            towers[k].bullets = [];
                            towers[k].lastShoot = 0;
                        }
                    }
                }
            }
            else {
                var a = (towers[j].bullets[i].currentPointY - enemies[0].currentPointY) / (towers[j].bullets[i].currentPointX - enemies[0].currentPointX)
                var b = enemies[0].currentPointY - a * enemies[0].currentPointX;
                
                if ((angle >= Math.PI / 2 && angle <= Math.PI) || (angle >= -Math.PI && angle <= -Math.PI / 2)) {
                    towers[j].bullets[i].currentPointX -= 2
                }
                else {
                    towers[j].bullets[i].currentPointX += 2
                }
                towers[j].bullets[i].currentPointY = a * towers[j].bullets[i].currentPointX + b; 
                i += 1;
            }
        }
    }
}

function drawMenu() {
    ctx.drawImage(getImageByName("180"), 350, 630);
    ctx.drawImage(getImageByName("249"), 350, 630-25);

    ctx.drawImage(getImageByName("180"), 410, 630);
    ctx.drawImage(getImageByName("204"), 410, 630-25);

    ctx.drawImage(getImageByName("180"), 470, 630);
    ctx.drawImage(getImageByName("206"), 470, 630-15);
}
