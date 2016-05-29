//管道模块
function Pipe(img1, img2, x) {
    this.img1 = img1;
    this.img2 = img2;
    this.x = x;
    this.y = Math.random() * 250 + 50;
    this.speed = 0.1;
}
Pipe.prototype.updata = function (waitTime) {
    if (this.x < -52) {
        this.x = 1350;
        this.y = Math.random() * 250 + 50;
    }
    this.x = this.x - this.speed * waitTime;
}
Pipe.prototype.draw = function () {
    ctx.drawImage(this.img1, 0, 0, 52, 420, this.x, this.y - 420, 52, 420);
    ctx.drawImage(this.img2, 0, 0, 52, 420, this.x, this.y + 200, 52, 420);
    //描绘当前管道的路径，用于判断游戏结束条件
    ctx.rect(this.x, this.y - 420, 52, 420);
    ctx.rect(this.x, this.y + 200, 52, 420);
}