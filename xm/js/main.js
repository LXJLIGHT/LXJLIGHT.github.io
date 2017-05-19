var dh_hidden=document.querySelectorAll(".dh-hidden");
var daohang_hidden=document.querySelectorAll("#daohang-hidden");
var nav_line=document.querySelector(".nav-line");
Array.from(dh_hidden).forEach(function(dh_v,dh_i){
    /*dh_v.onmouseover=function(){
        nav_line.style.display="block";
        daohang_hidden[dh_i].style.height=230+"px";
    }

    dh_v.onmouseout=function(){
        nav_line.style.display="none";
        daohang_hidden[dh_i].style.height=0;
    }*/

    hover(dh_v,function(){
        nav_line.style.display="block";
        daohang_hidden[dh_i].style.height=230+"px";
    },function(){
        nav_line.style.display="none";
        daohang_hidden[dh_i].style.height=0;
    })
})

var bl_li=document.querySelectorAll(".banner-left>ul>li");
var blh_box=document.querySelectorAll(".blh-box");
Array.from(bl_li).forEach(function(bl_v,bl_i){
    bl_v.onmouseover=function(){
        blh_box[bl_i].style.top=-(10+43*bl_i)+"px";
        blh_box[bl_i].style.display="block";
    }

    bl_v.onmouseout=function(){
        blh_box[bl_i].style.display="none";
    }
})


var dians=document.querySelectorAll(".dian li");
var banner_tus=document.querySelectorAll(".banner-tu li");

var banner=document.querySelector(".banner");

var leftjiantou=document.querySelector(".jian-left1");
var rightjiantou=document.querySelector(".jian-right1");

Array.from(dians).forEach(function(ele,index){
    num=index;
    ele.onclick=function(){
        for(var i=0;i<dians.length;i++){
            dians[i].style.background="#6F4B35";
            // banner_tus[i].style.opacity=0;
            banner_tus[i].style.zIndex=1;
        }
        this.style.background="#D7E6F5";
        // banner_tus[index].style.opacity=1;
        banner_tus[index].style.zIndex=2;
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
        dians[i].style.background="#6F4B35";
        banner_tus[i].style.zIndex=1;
    }
    dians[num].style.background="#D7E6F5";
    banner_tus[num].style.zIndex=2;
}

banner.onmouseover=function(){
    clearInterval(t);
}

banner.onmouseout=function(){
    t=setInterval(move,2000);
}

leftjiantou.onclick=function(){
    num-=2;
    move();
}

rightjiantou.onclick=function(){
    move();
}

var jiantou2=document.querySelector(".content2 .jiantou");
var leftbtn2=document.querySelector(".content2 .jiantou .jian-left");
var rightbtn2=document.querySelector(".content2 .jiantou .jian-right");
var ul2=document.querySelector(".content2-bottom ul.content2-bottomjs");
rightbtn2.onclick=function(){
    ul2.style.marginLeft=-1226+"px";
    rightbtn2.style.opacity=0.5;
    leftbtn2.style.opacity=1;
}

leftbtn2.onclick=function(){
    ul2.style.marginLeft=0;
    leftbtn2.style.opacity=0.5;
    rightbtn2.style.opacity=1;
}

var t2=setInterval(move2,2000);
function move2(){
    if(leftbtn2.style.opacity==0.5){
        rightbtn2.onclick();
    }else{
        leftbtn2.onclick();
    }
}

jiantou2.onmouseover=function(){
    clearInterval(t2);
}

jiantou2.onmouseout=function(){
    t2=setInterval(move2,2000);
}



var jiantou7=document.querySelector(".content7 .jiantou");
var leftbtn7=document.querySelector(".content7 .jiantou .jian-left");
var rightbtn7=document.querySelector(".content7 .jiantou .jian-right");
var ul7=document.querySelector(".content7-bottom ul.content7-bottomjs");
rightbtn7.onclick=function(){
    ul7.style.marginLeft=-1226+"px";
    rightbtn7.style.opacity=0.5;
    leftbtn7.style.opacity=1;
}

leftbtn7.onclick=function(){
    ul7.style.marginLeft=0;
    leftbtn7.style.opacity=0.5;
    rightbtn7.style.opacity=1;
}

var t7=setInterval(move7,2000);
function move7(){
    if(leftbtn7.style.opacity==0.5){
        rightbtn7.onclick();
    }else{
        leftbtn7.onclick();
    }
}

jiantou7.onmouseover=function(){
    clearInterval(t7);
}

jiantou7.onmouseout=function(){
    t7=setInterval(move7,2000);
}

//内容content9
/*var content9_bigbox=document.querySelector(".content9-bigbox");
var content9_dians=document.querySelectorAll(".dian div");
var content9_left=document.querySelector(".content9-left-btn");
var content9_right=document.querySelector(".content9-right-btn");
var nowdian=content9_dians[0];
var prenum=0;
Array.from(content9_dians).forEach(function(content9_dian,content9_index){
    content9_dian.onclick=function(){
        content9_bigbox.style.marginLeft=-296*content9_index+"px";
        nowdian.classList.remove("content9-active");
        content9_dian.classList.add("content9-active");
        nowdian=content9_dians[content9_index];
        console.log(content9_index);
    }
})

function move_click(){
    nowdian.classList.remove("content9-active");
    console.log(prenum);
    prenum++;
    if(prenum==content9_dians.length){
        prenum=0;
    }
    if(prenum==-1){
        prenum=2;
    }

    content9_bigbox.style.marginLeft=-296*prenum+"px";
    content9_dians[prenum].classList.add("content9-active");
    nowdian=content9_dians[prenum];
}

content9_right.onclick=function(){
    move_click();
}

content9_left.onclick=function(){
    prenum-=2;
    move_click();
}*/

/*var c_bigbox=document.querySelectorAll(".content9-bottom>ul>li");  //4个li
var c_middlebox=document.querySelectorAll(".content9-bigbox");     //每个li里各自的li
console.log(c_middlebox);
var c_dians=document.querySelectorAll(".dian div");                //点
console.log(c_dians);
c_bigbox.forEach(function(c_v,c_i){
    
})*/


var prenum=0;
function content(content9_dians,content9_bigbox,content9_right,content9_left,nowdian){
    Array.from(content9_dians).forEach(function(content9_dian,content9_index){
        content9_dian.onclick=function(){
            content9_bigbox.style.marginLeft=-296*content9_index+"px";
            nowdian.classList.remove("content9-active");
            content9_dians[content9_index].classList.add("content9-active");
            nowdian=content9_dians[content9_index];
            console.log(content9_index);
        }
    })

    function move_click(){
        nowdian.classList.remove("content9-active");
        prenum++;
        if(prenum==content9_dians.length){
            prenum=0;
        }

        if(prenum==-1){
            prenum=content9_dians.length-1;
        }
        
        content9_bigbox.style.marginLeft=-296*prenum+"px";
        content9_dians[prenum].classList.add("content9-active");
        nowdian=content9_dians[prenum];
    }

    content9_right.onclick=function(){
        move_click();
    }

    content9_left.onclick=function(){
        prenum-=2;
        move_click();
    }
}

var content9_bigbox=document.querySelector(".content9-bigbox");
var content9_dians=document.querySelectorAll(".dian div");
var content9_left=document.querySelector(".content9-left-btn");
var content9_right=document.querySelector(".content9-right-btn");
content(content9_dians,content9_bigbox,content9_right,content9_left,content9_dians[0]);

var content9_bigbox1=document.querySelector(".content9-bigbox1");
var content9_dians1=document.querySelectorAll(".dian-js1 div");
var content9_left1=document.querySelector(".content9-left1-btn");
var content9_right1=document.querySelector(".content9-right1-btn");
content(content9_dians1,content9_bigbox1,content9_right1,content9_left1,content9_dians1[0]);

var content9_bigbox2=document.querySelector(".content9-bigbox2");
var content9_dians2=document.querySelectorAll(".dian-js2 div");
var content9_left2=document.querySelector(".content9-left2-btn");
var content9_right2=document.querySelector(".content9-right2-btn");
content(content9_dians2,content9_bigbox2,content9_right2,content9_left2,content9_dians2[0]);

var content9_bigbox3=document.querySelector(".content9-bigbox3");
var content9_dians3=document.querySelectorAll(".dian-js3 div");
var content9_left3=document.querySelector(".content9-left3-btn");
var content9_right3=document.querySelector(".content9-right3-btn");
content(content9_dians3,content9_bigbox3,content9_right3,content9_left3,content9_dians3[0]);