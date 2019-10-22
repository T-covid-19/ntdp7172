// JavaScript Document

$(function(){
	
	$("#goTop").click(function(){

		$("html,body").animate({scrollTop:0},500);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});

