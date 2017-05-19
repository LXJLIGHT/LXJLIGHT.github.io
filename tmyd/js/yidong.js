// 当页面加载之后
// 执行函数
window.onload=function(){   
	// 常量 const
	// 设计大小
	const designWidh=750; 
	// 计算比例  
	const fontSize=100; 
	// 关键     
	function resizeFont(){  
		// 变量 var
		// 当前环境运行的屏幕大小
		var CW=document.documentElement.clientWidth;  

		// 当前屏幕大小乘多少能达到750
		var radio=CW/designWidh;                      
		var newFontSize=fontSize*radio;               

		document.querySelector("html").style.fontSize=newFontSize+"px";
	}

	// 执行resizeFont
	resizeFont();
	// 窗口大小改变时执行resizeFont
	window.onresize=resizeFont;
}