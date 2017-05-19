

$(".first>li>a").click(function () {
    $(".first>li>a").not(this).removeClass("active").next().slideUp();
    $(this).toggleClass("active");
    $(this).next().slideToggle().queue(function(){
        if($(".first").height()>$(".container").height()){
            $(".scroll").show();
        }else{
            $(".scroll").hide();
            $(".control").css("top",0);
            $(".first").css("margin-top",0);
            moveY=0;
        }
        $(this).dequeue();
    });
}).hover(function () {
    $(this).css({background: "red", color: "#fff"});
}, function () {
    $(this).css({background: "", color: ""});
})

$(".second li").click(function () {
    $(this).css({borderLeft: "5px solid #dedede", width: 195, color: "#fff"})
        .siblings().css({border: 0, width: 200, color: ""});
}).hover(function () {
    $(this).addClass("seactive");
}, function () {
    $(this).removeClass("seactive");
})

var my=0;                 //每一个拖拽移动的距离
var moveY=0;              //保存的是在下次拖拽开始之前的top值
var maxTop=$(".scroll").height()-$(".control").height();
var cha;

$(".control").mousedown(function(e){
    e.preventDefault();
    var sy=e.clientY;
    $(document).on("mousemove",move)

    function move(e){
        var ny=e.clientY;
        my=ny-sy;
        if(my+moveY<0){
            my=-moveY;
        }

        if(my+moveY>maxTop){
            my=maxTop-moveY;
        }

        cha=$(".first").height()-$(".container").height();
        var mt=(my+moveY)/maxTop*cha;
        $(".first").css("marginTop",-mt);


        $(".control").css("top",my+moveY);
    }

    $(document).on("mouseup",up);
    function up(){
        moveY+=my;
        $(document).off("mousemove",move);
        $(document).off("mouseup",up);
    }
})
