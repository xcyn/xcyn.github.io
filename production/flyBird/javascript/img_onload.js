//图片加载模块
//创建一个数组用于记录路径
var imgSrc = ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png']
//创建一个数组用于记录images标签
var imgObj = [];
//遍历每一个路径，让他们插入不同的img标签里。这样就实现了获得多个img标签。
imgSrc.forEach(function (v) {
    var img = new Image();
    img.src = 'images/' + v;
    img.addEventListener('load', listener);//让图片加载完成以后实现监听事件
    imgObj.push(img);
})
//定义监听事件
var count = 0;
function listener() {
    count++;
    if (count >= imgSrc.length) {
        main();//图片完全加载之后执行main函数
    }
}
