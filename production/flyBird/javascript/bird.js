//小鸟模块
//构造对象区块
function Bird(img, index, g, x, y) {
    this.img = img;
    this.index = index;
    this.g = g;
    this.x = x;
    this.y = y;
    this.wait = 0;
    this.speed = 0;
}
//数据更新区块
Bird.prototype.updata = function (waitTime) {
    this.wait = this.wait + waitTime;
    //小鸟拍翅膀区块
    if (this.wait > 100) {
        this.index = (this.index + 1) % 3;
        this.wait = this.wait - 100;
    }
    //小鸟下落区块
    this.speed = this.speed + this.g * waitTime;
    this.y = this.y + this.speed * waitTime;
}
//渲染区块
Bird.prototype.draw = function () {
    ctx.save();
    ctx.translate(this.x, this.y);
    var step = this.speed > 1 ? 1 : this.speed;
    ctx.rotate(this.rotate(90) * step / 1)
    ctx.drawImage(this.img, 52 * this.index, 0, 52, 45, -26, -22.5, 52, 45);
    ctx.restore();
}
//点击让小鸟飞起区块
Bird.prototype.fly = function () {
    var that = this;
    document.onclick = function () {
        that.speed = -0.3;
    }
}
//获取当前角度的位置
Bird.prototype.rotate = function (deg) {
    return deg / 180 * Math.PI;
}
