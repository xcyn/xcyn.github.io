//Sky模块
function Sky(img, x) {
    this.img = img;
    this.x = x;
    this.speed = 0.1;
}
Sky.prototype.updata = function (waitTime) {
    var self = this.x + 1350;
    if (this.x < -1350) {
        this.x = 1350 + self;
    }
    this.x = this.x - this.speed * waitTime;
}
Sky.prototype.draw = function () {
    ctx.drawImage(this.img, 0, 0, 800, 600, this.x, 0, 1350, 700);
}
