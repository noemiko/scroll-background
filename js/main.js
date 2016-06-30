$(document).ready(function() {
    listenerToScrollTOnTheTop();
    listenerToScrollToDescription();
    listenerScrollToHistory();
});

function listenerToScrollTOnTheTop()
{


	$("#up").on("click", function( e ) 
	{
	$('html, body').animate({
    scrollTop: $(".cd-fixed-bg.cd-bg-1").offset().top
	}, 1000);
	
	  
	});
};

function listenerToScrollToDescription()
{
	$("#shortDescription").on("click", function( e ) 
	{
		$('html, body').animate({
    	scrollTop: $(".cd-scrolling-bg.cd-color-2").offset().top-100
		}, 1000);
	
	});
};

function listenerScrollToHistory()
{
	$("#biggerStory").on("click", function( e ) 
	{
		$('html, body').animate({
    	scrollTop: $(".cd-scrolling-bg.cd-color-3").offset().top
		}, 1000);
	
	});
};
