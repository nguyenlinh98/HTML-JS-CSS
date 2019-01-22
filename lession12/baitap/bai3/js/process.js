$(function(){
	function show_div()
	{
		// an the div trong content
		 $('.content div').hide();
		 $indexActive = $('.active').index();
		 // eq xd vtri
		 $divFirstActive = $('.content div').eq($indexActive).show();
	}
	show_div();
	$('li').click(function(){
		$('li').removeClass('active');
		// lay ra the 
		$(this).addClass('active');
		$index = $(this).index();
		show_div();
	});
});
