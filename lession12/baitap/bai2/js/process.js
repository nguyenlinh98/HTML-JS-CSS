$(function(){
	$original = parseInt($('#text').css('font-size'));
	$('#btnsmall').click(function(){
		var incert = parseInt($('#text').css('font-size'));
		$('#text').css('font-size', incert*0.75);
		return false;
	});
	$('#btnbig').click(function(){
		var incert = parseInt($('#text').css('font-size'));
		$('#text').css('font-size', incert*1.25);
		return false;
	});
 	$('#resert').click(function(){
		$('#text').css('font-size',$original);
		return false;
	});
});
