//黑洞模块
//获得点击惊喜按钮
var callMeClick = document.getElementById('callMeClick');
//获得黑洞
var blackHole = document.getElementById("blackHole");
//    获得不同模块的id
var callMe = document.getElementById('callMe');
var blogs = document.getElementById('blogs');
var resume = document.getElementById('resume');
var power = document.getElementById('power');
var kill = document.getElementById('kill');
var face = document.getElementById('face');
var nav = document.getElementById('nav');
var cvs = document.getElementById('cvs');
var thankWatched = document.getElementById('thankWatched');
var blackTimer = null;
var flag = true;
callMeClick.onclick = function () {
    if (blackTimer == null) {
        blackHole.style.animation = "rotate1 20s ease-in";
        callMe.style.cssText = 'height:0px;width:0px;margin-left: 50%;';
        blogs.style.cssText = 'height:0px;width:0px;margin-left: 50%; overflow:hidden';
        resume.style.cssText = 'height:0px;width:0px;margin-left: 50%; overflow:hidden';
        power.style.cssText = 'height:0px;width:0px;margin-left: 50%; overflow:hidden';
        kill.style.cssText = 'height:0px;width:0px;margin-left: 50%; overflow:hidden';
        face.style.cssText = 'height:0px;width:0px;margin-left: 55%; overflow:hidden;margin-top:26%';
        nav.style.cssText = 'height:0px;width:0px;margin-left: 55%; overflow:hidden;margin-top:26%';
        setTimeout(function(){
            cvs.style.display = 'none';
            document.documentElement.style.height = '0px';
            thankWatched.style.cssText = 'height:710px;width:100%;top:0;';
        },20000);
    }
}
