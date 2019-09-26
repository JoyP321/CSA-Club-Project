  
$(document).ready(function(){
	$(".titletext").mouseover(function(){
		$(".titletext").css({"font-size": "9vw"});
	});
	
	$(".titletext").mouseleave(function(){
		$(".titletext").css({"font-size": "8vw"});
	});
	
	$("#CSAPage").click(function(){
		$("#link").show();
	});
	
	
	
});