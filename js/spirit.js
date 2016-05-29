//    精灵区块
var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
function spirit(img, index, direction, x, y) {
    this.img = img;
    this.index = index;
    this.direction = direction;
    this.x = x;
    this.y = y;
    this.speed = 0.1;
    this.wait = 0;
}
spirit.prototype.update = function (waitTime) {
    this.wait = this.wait + waitTime;
    if (this.wait > 150) {
        this.index = (this.index + 1) % 8;
        this.wait = this.wait - 150;
    }
    switch (this.direction) {
        case 0:
            this.x = this.x - this.speed * waitTime;
            break;
        case 2:
            this.y = this.y - this.speed * waitTime;
            break;
        case 4:
            this.x = this.x + this.speed * waitTime;
            break;
        case 6:
            this.y = this.y + this.speed * waitTime;
            break;
    }
}
spirit.prototype.draw = function () {
    ctx.drawImage(this.img, this.index * 256, this.direction * 256, 256, 256, this.x, this.y, 256, 256)
}
//精灵的极限
spirit.prototype.limitation = function () {
    if (this.x < 1 && this.y < 710 / 2) {
        this.direction = 6;
    } else if (this.x < 1 && this.y > 500) {
        this.direction = 4;
    } else if (this.x > 1200 && this.y > 500) {
        this.direction = 2;
    } else if (this.x > 1200 && this.y < 1) {
        this.direction = 0;
    }
}
spirit.prototype.click = function () {
    var that = this;
    document.addEventListener('click', function (e) {
        if (e.layerX > 200 && e.layerX < 1150 && e.layerY > 0 && e.layerY < 300) {
            that.direction = 2;
        } else if (e.layerX > 0 && e.layerX < 200 && e.layerY > 0 && e.layerY < 710) {
            that.direction = 0;
        } else if (e.layerX > 200 && e.layerX < 1150 && e.layerY > 500 && e.layerY < 710) {
            that.direction = 6;
        } else if (e.layerX > 1150 && e.layerX < 1366 && e.layerY > 0 && e.layerY < 710) {
            that.direction = 4;
        }
    })
}

//获取精灵帧图片
var spiritImg = new Image();
spiritImg.src = 'images/canvasGirl.png';
//    创建精灵
spirit1 = new spirit(spiritImg, 0, 0, 0, 0);
//点击屏幕控制精灵
spirit1.click();
var lastTime = new Date();

function loop() {
    var waitTime = new Date() - lastTime;
    lastTime = new Date();
    ctx.clearRect(0, 0, 1366, 710);
    spirit1.update(waitTime);
    spirit1.draw();
    //精灵到达屏幕极限自动移动位置
    spirit1.limitation();
    requestAnimationFrame(loop);
}
loop();
