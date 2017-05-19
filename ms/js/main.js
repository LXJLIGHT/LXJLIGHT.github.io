var con2con=document.querySelector(".con2con");
var pictures=document.querySelectorAll(".con2con li");
var dots=document.querySelectorAll(".con2con-dot li");
var nowdot=dots[0];
Array.from(dots).forEach(function(value,index){
    num=index;
    value.onmouseover=function(){
        // clearInterval(r);
        for(var i=0;i<dots.length;i++){
            dots[i].style.background="#fff";
            // con2con.style.marginLeft=-1200*num+"px";
        }
        this.style.background="#F1EFE8";
        con2con.style.marginLeft=-1200*index+"px";
    }
})

/*var num=0;
var r=setInterval(function(){
    if(num==0){
        con2con.style.transition="all 0.5s";
    }
    nowdot.style.background="#fff";
    dots[num].style.background="#F1EFE8";
    nowdot=dots[num];
    num++;
    con2con.style.marginLeft=-1200*num+"px";


    // nowdot=dots[num];
},2000);



con2con.addEventListener("transitionend",function(){
    if(num==pictures.length-1){
        con2con.style.transition="none";
        con2con.style.marginLeft=0;
        num=0;
        nowdot=dots[num];
    }
})*/
