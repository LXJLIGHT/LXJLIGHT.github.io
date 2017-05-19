var sousuo_box=document.querySelector(".sousuo-box");
sousuo_box.onfocus=function(){
    if(sousuo_box.value=""){
        sousuo_box.value="休闲型男够出彩";
    }
}

sousuo_box.onblur=function(){
    if(sousuo_box.value=="休闲型男够出彩"){
        sousuo_box.value="";
    }
}


var topbar=document.querySelector(".topbar");
var fixleft=document.querySelector(".fix-left");
var fixright=document.querySelector(".righttop");
var floors=document.querySelectorAll(".floor");
var floorcontents=document.querySelectorAll(".floorcontent");
var totops=document.querySelectorAll(".totop");
var content1=document.querySelector(".content1");
var content2=document.querySelector(".content2");

window.onscroll=function(){
    var st=document.body.scrollTop;

    if(st>=content1.offsetTop){
        fixleft.style.width=35+"px";
        fixleft.style.height=332+"px";
    }else{
        fixleft.style.width=0;
        fixleft.style.height=0;
    }

    if(st>=content2.offsetTop){
        topbar.style.top=0;
    }else{
        topbar.style.top=-50+"px";
    }

    if(st==0){
        fixright.style.display="none";
    }else{
        fixright.style.display="block";
    }

    Array.from(floors).forEach(function(btn,index){
        btn.onclick=function(){
            var ot=floorcontents[index].offsetTop-55;
            animate(document.body,{scrollTop:ot});
        }
    })
}

Array.from(totops).forEach(function(totop){
    totop.onclick=function(){
        animate(document.body,{scrollTop:0},500);
    }
});

var move_boxs=document.querySelectorAll(".move-box");
var move_fixs=document.querySelectorAll(".move-fix");
var move_t;
Array.from(move_fixs).forEach(function(move_fix,move_index){

    hover(move_fix,function(){
        clearTimeout(move_t);
        move_t=setTimeout(function(){
            move_boxs[move_index].classList.add("show");
        },200)
    },function(){
        clearTimeout(move_t);
        if(move_boxs[move_index].classList.contains("show")){
            move_boxs[move_index].classList.remove("show");
            move_boxs[move_index].classList.add("hide");
        }
    });

   /* move_fix.onmouseover=function(){
        clearTimeout(move_t);
        move_t=setTimeout(function(){
            move_boxs[move_index].classList.add("show");
        },200)
    }

    move_fix.onmouseout=function(){
        clearTimeout(move_t);
        if(move_boxs[move_index].classList.contains("show")){
            move_boxs[move_index].classList.remove("show");
            move_boxs[move_index].classList.add("hide");
        }
    }*/

})

Array.from(move_boxs).forEach(function(move_box){
    move_box.addEventListener("animationend",function(){
        if(move_box.classList.contains("hide")){
            move_box.classList.remove("hide");
        }
    })
})



var header_kuang_right=document.querySelectorAll(".header-kuang-right li.more-js");
var sanjiao=document.querySelectorAll(".header-kuang-right li .sanjiao");
var submore_js=document.querySelectorAll(".submore-js");

Array.from(header_kuang_right).forEach(function(headerv,headeri){
    headerv.onmouseover=function(){
        header_kuang_right[headeri].style.background="#fff";
        sanjiao[headeri].style.transform="rotateX(180deg)";
        submore_js[headeri].style.display="block";
    }

    headerv.onmouseout=function(){
        header_kuang_right[headeri].style.background="";
        sanjiao[headeri].style.transform="rotateX(0)";
        submore_js[headeri].style.display="none";
    }



})



var banner = document.querySelector(".banner");
var banner_background = ["#FFE4ED", "#F03235", "#9AD6FB", "#B28542", "#C602FF", "#FEFFF7"];

var topbtns = document.querySelectorAll(".top li");
var xiaomaos = document.querySelectorAll(".top .xiaomao");

Array.from(topbtns).forEach(function (v, index) {
    v.onmouseover = function () {
        for (var i = 0; i < topbtns.length; i++) {
            xiaomaos[i].style.transform = "translateY(10px)";
        }
        xiaomaos[index].style.transform = "translateY(-10px)";
    }

    v.onmouseout=function(){
        xiaomaos[index].style.transform = "translateY(10px)";
    }
})

var bannerbox = document.querySelector(".banner-tu");
var pictures = document.querySelectorAll(".banner-middle-picture li");
var dots = document.querySelectorAll(".dot li");


/*Array.from(dots).forEach(function (ele, index) {
    num = index;
    ele.onmouseover = function () {
        for (var i = 0; i < dots.length; i++) {
            dots[i].style.background = "rgba(0,0,0,0.5)";
            pictures[i].style.opacity = 0.5;
            pictures[i].style.zIndex = 2;

        }
        this.style.background = "rgba(255,255,255,0.5)";
        pictures[index].style.opacity = 1;
        pictures[index].style.zIndex = 999;
        banner.style.background = banner_background[index];
    }

});*/
var come;
Array.from(dots).forEach(function (ele, index) {
    hover(ele,function(){
        clearTimeout(come);
        come=setTimeout(function(){
            num = index;
            for (var i = 0; i < dots.length; i++) {
                dots[i].style.background = "rgba(0,0,0,0.5)";
                pictures[i].style.opacity = 0;
                pictures[i].style.zIndex = 2;

            }
            ele.style.background = "rgba(255,255,255,0.5)";
            pictures[index].style.opacity = 1;
            pictures[index].style.zIndex = 999;
            banner.style.background = banner_background[index];
        },300)
    },function(){})

});


var t = setInterval(move, 2000);
var num = 0;
function move() {
    num++;
    if (num == dots.length) {
        num = 0;
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.background = "rgba(0,0,0,0.5)";
        pictures[i].style.zIndex = 2;
        pictures[i].style.opacity = 0;
    }
    dots[num].style.background = "rgba(255,255,255,0.5)";
    pictures[num].style.zIndex = 999;
    pictures[num].style.opacity = 1;
    banner.style.background = banner_background[num];
}

bannerbox.onmouseover = function () {
    clearInterval(t);
}

bannerbox.onmouseout = function () {
    t = setInterval(move, 2000);
}

var banner_tu_lefts=document.querySelectorAll(".left>li");
var banner_tu_left_rights=document.querySelectorAll(".banner-left-right-js");
var li_num=0;
Array.from(banner_tu_lefts).forEach(function(banner_tu_left,banner_tu_left_index){

    banner_tu_left.onmouseover=function(e){
        // e.stopPropagation();
        // e.cancelBubble=true;
        banner_tu_left_rights[banner_tu_left_index].style.top=-31.25*banner_tu_left_index+"px";
        banner_tu_left_rights[banner_tu_left_index].style.display="block";
    }

    banner_tu_left.onmouseout=function(){
        banner_tu_left_rights[banner_tu_left_index].style.display="none";
    }
    li_num=banner_tu_left_index;
})

/*var banner_left=document.querySelector(".banner-left");
banner_left.onmouseover=function(e){
    e.stopPropagation();
    banner_tu_left_rights[li_num].style.display="block";
    li_num++;
}*/


var bottom_kuang=document.querySelector(".bottom-kuang");
var bottom=document.querySelector(".bottom");
var bottoms = document.querySelectorAll(".bottom li");
var tops = document.querySelectorAll(".content1-left-top li");
var mask1 = document.querySelectorAll(".mask1");

var play=document.querySelectorAll(".bofang1");

var kuangs = document.querySelectorAll(".content1-right li");
var masks = document.querySelectorAll(".content1-right .mask");

bottoms.forEach(function (v, j) {
    v.onmouseover = function () {
        for (var i = 0; i < bottoms.length; i++) {
            tops[i].style.display = "none";
            mask1[i].style.display = "none";
        }
        tops[j].style.display = "block";
        mask1[j].style.display = "block";
    }
});

Array.from(kuangs).forEach(function (ele, i) {  
    ele.onmouseover = function () {
        masks[i].style.opacity = "1";
    };

    ele.onmouseout = function () {
        masks[i].style.opacity = "0";
    }
});

var a1=setInterval(move1,3000);
var a=0;
function move1(){
    a++;
    if(a==bottoms.length){
        a=0;
    }
    for(var k=0;k<bottoms.length;k++){
        tops[k].style.display="none";
        mask1[k].style.display="none";
        if(k>2){
            leftjiantou.onclick();
        }
    }
    tops[a].style.display="block";
    mask1[a].style.display="block";
    play[a].style.animation="xianshi1 .3s linear";
    if(a>2){
        rightjiantou.onclick();
    }
}

bottom_kuang.onmouseover=function(){
    clearInterval(a1);
}

var leftjiantou=document.querySelector(".zuojiantou");
var rightjiantou=document.querySelector(".youjiantou");
rightjiantou.onclick=function(){
    bottom.style.marginLeft=-488+"px";
    leftjiantou.style.display="block";
    rightjiantou.style.display="none";
}

leftjiantou.onclick=function(){
    bottom.style.marginLeft=0;
    leftjiantou.style.display="none";
    rightjiantou.style.display="block";
}

var fc=document.querySelector(".fc-item");
var num1=0;
setInterval(function(){
    num1++;
    if(num1==3){
        num1=0;
    }
    fc.style.transition="all 0.5s";
    fc.style.marginTop=-40*num1+"px";

},2000);


var banner_left_right_left_list=document.querySelectorAll(".banner-left-right-left-list li");
var banner_str=["#E54077","#427DEF","#6347ED","#E54077","#6347ED","#427DEF","#FA5C5C","#F8A86A"];
