// 导航
var dhbtns=document.querySelectorAll(".navbar .dh_duoyu");
var sanjiaos=document.querySelectorAll(".sanjiao");
var dhlists=document.querySelectorAll(".sublist");

Array.from(dhbtns).forEach(function(dh_value,dh_index){
    dh_value.onmouseover=function(){
        for(var i=0;i<dhbtns.length;i++){
            dhbtns[i].style.background="#E4E4E4";
            dhlists[i].style.display="none";
            sanjiaos[i].style.display="none";
        }
        dh_value.style.background="#F3F3F3";
        dhlists[dh_index].style.left=-260*dh_index-160+"px";
        dhlists[dh_index].style.display="block";
        sanjiaos[dh_index].style.display="block";
    }

    dh_value.onmouseout=function(){
        dhbtns[dh_index].style.background="#E4E4E4";
        dhlists[dh_index].style.display="none";
        sanjiaos[dh_index].style.display="none";
    }
})

var topcitys=document.querySelector(".topcity");
var sublist_box=document.querySelector(".sublist-box");
var fh=document.querySelector(".fh");
var sublist_box1=document.querySelector(".sublist-box1");
topcitys.onclick=function(){
    sublist_box.style.display="block";
}

fh.onclick=function(){
    sublist_box1.style.display="block";
}

// banner图
var banner_box=document.querySelector(".banner-box");
var imgs=document.querySelectorAll(".banner li");
var dots=document.querySelectorAll(".dot li");
var prebtn=document.querySelector(".prebtn");
var nextbtn=document.querySelector(".nextbtn");
var num=0;
var z=5;
var flag=true;
var lbt=setInterval(move,3000);
function move(){
    imgs[num].classList.add("leftOut");
    dots[num].classList.remove("active");
    num++;
    if(num==imgs.length){
        num=0;
    }
    imgs[num].classList.add("leftIn");
    dots[num].classList.add("active");
    imgs[num].style.zIndex=z++;
}

imgs.forEach(function(img){
    img.addEventListener("animationend",function(){
        img.className="";
        flag=true;
    })
})

banner_box.onmouseover=function(){
    clearInterval(lbt);
}

banner_box.onmouseout=function(){
    lbt=setInterval(move,3000);
}

Array.from(dots).forEach(function(dot,index){
    dot.onclick=function(){
        if(num==index){
            return;
        }
        if(num<index){
            imgs[num].classList.add("leftOut");
            imgs[index].classList.add("leftIn");
        }else{
            imgs[num].classList.add("rightOut");
            imgs[index].classList.add("rightIn");
        }

        dots[num].classList.remove("active");
        dot.classList.add("active");
        imgs[index].style.zIndex=z++;
        num=index;
    }
})

nextbtn.onclick=function(){
    if(flag){
        move();
        flag=false;
    }

}

prebtn.onclick=function(){
    if(flag){
        imgs[num].classList.add("rightOut");
        dots[num].classList.remove("active");
        num--;
        if(num==-1){
            num=imgs.length-1;
        }
        imgs[num].classList.add("rightIn");
        dots[num].classList.add("active");
        imgs[num].style.zIndex=z++;
        flag=false;
    }

}


// 优惠促销
var yhcx=document.querySelector(".yhcx");
var yhcx_tu=document.querySelector(".yhcx-tu ul");
var yhcxbtn_left=document.querySelector(".yhcxbtn-left");
var yhcxbtn_right=document.querySelector(".yhcxbtn-right");
var yhcx_t=setInterval(move2,2000);
var now=4;
var flag1=true;
function move2(){
    yhcx_tu.style.transition="all 1s";
    now++;
    yhcx_tu.style.marginLeft=-295*now+"px";
}

yhcx_tu.addEventListener("transitionend",function(){
    if(now==12){
        yhcx_tu.style.transition="none";
        now=4;
        yhcx_tu.style.marginLeft=-295*now+"px";

    }else if(now==0){
        yhcx_tu.style.transition="none";
        now=8;
        yhcx_tu.style.marginLeft=-295*now+"px";

    }
    flag1=true;
})

yhcx.onmouseover=function(){
    clearInterval(yhcx_t);
}

yhcx.onmouseout=function(){
    yhcx_t=setInterval(move2,2000);
}

yhcxbtn_left.onclick=function(){
    if(flag1){
        now-=2;
        move2();
        flag1=false;
    }

}

yhcxbtn_right.onclick=function(){
    if(flag1){
        move2();
        flag1=false;
    }

}





// 公告
var gonggao_middle=document.querySelector(".gonggao-middle");
var ggbtn_left=document.querySelector(".ggbtn-left");
var ggbtn_right=document.querySelector(".ggbtn-right");
var num1=0;
var ggt=setInterval(move1,2000);
function move1(){
    if(num1>=3){
        num1=0;
    }
    if(num1==-1){
        num1=3;
    }
    gonggao_middle.style.marginLeft=-479*num1+"px";
    num1++;
}

gonggao_middle.onmouseover=function(){
    clearInterval(ggt);
}

gonggao_middle.onmouseout=function(){
    ggt=setInterval(move1,2000);
}

ggbtn_left.onclick=function () {
    num1-=2;
    move1();
}

ggbtn_right.onclick=function () {
    move1();
}


