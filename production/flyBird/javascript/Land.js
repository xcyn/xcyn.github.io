//Sky模块
function Land(img, x) {
    this.img = img;
    this.x = x;
    this.speed = 0.1;
}
Land.prototype.updata = function (waitTime) {
    var self = this.x + 336;
    if (this.x < -336) {
        this.x = 336 * 4 + self;
    }
    this.x = this.x - this.speed * waitTime;
}
Land.prototype.draw = function () {
    ctx.drawImage(this.img, 0, 0, 336, 112, this.x, 700 - 150, 336, 150);
}
