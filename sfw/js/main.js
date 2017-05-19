var imgs=document.querySelectorAll(".fade");
setInterval(move,3000);
var num=0;
var now=imgs[0];
function move(){
    num+=1;
    if(num>1){
        num=0;
    }

    now.classList.remove("active");

    imgs[num].classList.add("active");

    now=imgs[num];
}

var list_unstyled=document.querySelectorAll(".zndshidden>li");
var rank_item_content=document.querySelectorAll(".rank-item-content");
var nowli=rank_item_content[0];
Array.from(list_unstyled).forEach(function(lu_v,lu_i){
    lu_v.onmouseover=function(){
        nowli.classList.remove("active");
        rank_item_content[lu_i].classList.add("active");
        nowli=rank_item_content[lu_i];
    }
})

var nav_li=document.querySelectorAll(".nav li");
console.log(nav_li);
var nownav=nav_li[0];
Array.from(nav_li).forEach(function(nav_li_v,nav_li_i){
    nav_li.onclick=function(){
        nownav.classList.remove("active");
        nav_li_v.classList.add("active");
        nownav=nav_li_v;
    }
})
