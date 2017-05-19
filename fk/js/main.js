var weixinbtn=document.querySelector(".weixin");
var erweima=document.querySelector(".weixin-erweima");
weixinbtn.onmouseover=function(){
    erweima.style.display="block";
}

weixinbtn.onmouseout=function(){
    erweima.style.display="none";
}


var sou=document.querySelector(".sou");
sou.onfocus=function(){
    if(sou.value=="搜“衬衫”，体验与众不同"){
        sou.value="";
    }
}

sou.onblur=function(){
    if(sou.value==""){
        sou.value="搜“衬衫”，体验与众不同";
    }
}


var lis=document.querySelectorAll(".lists>li");
var seclists=document.querySelectorAll(".sublists");

var arr=[];    //用来存储每个二级标题的高度
Array.from(seclists).forEach(function(ul){
    var liss=ul.querySelectorAll("li");
    var heights=liss.length*30-20;
    arr.push(heights);

})


Array.from(lis).forEach(function(li,index){
    li.onmouseover=function(){
        seclists[index].style.height=arr[index]+"px";
    }

    li.onmouseout=function(){
        seclists[index].style.height=0;
    }
})




var banners=document.querySelectorAll(".banner li");
var dians=document.querySelectorAll(".dian li");
var banner=document.querySelector(".banner-kuang");
var prevbtn=document.querySelector(".zuojian");
var nextbtn=document.querySelector(".youjian");

Array.from(dians).forEach(function(ele,index){
    num=index;
    ele.onmouseover=function(){
        for(var i=0;i<dians.length;i++){
            dians[i].style.background="#DDDDDD"
            banners[i].style.zIndex=1;
        }
        this.style.background="#A10000";
        banners[index].style.zIndex=2;
    }
})

var t=setInterval(move,2000);
var num=0;
function move(){
    num++;
    if(num==dians.length){
        num=0;
    }
    if(num==-1){
        num=dians.length-1;
    }
    for(var i=0;i<dians.length;i++){
        dians[i].style.background="#DDDDDD"
        banners[i].style.zIndex=1;
        banners[i].style.opacity=0;
    }
    dians[num].style.background="#A10000";
    banners[num].style.zIndex=2;
    banners[num].style.opacity=1;
}

banner.onmouseover=function(){
    t=clearInterval(t);
}

banner.onmouseout=function () {
    t=setInterval(move,2000);
}

prevbtn.onclick=function(){
    num-=2;
    move();
}

nextbtn.onclick=function () {
    move();
}

var BlackTop=document.querySelector(".BlackTop");
console.log(BlackTop);
BlackTop.onclick=function(){
    animate(document.body,{scrollTop:0},500);
}