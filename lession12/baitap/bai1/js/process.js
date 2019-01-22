$(function(){
	function check_arr($flage){
		// lay cac the input
		$input_arr = $('input');
		for( var i= 0; i< $input_arr.length; i++){
	   		$input_arr[i].checked = $flage;
  	 	}
	}
	$("#bntAll").click(function(){
		check_arr(true);
   	});
   	$("#bntReset").click(function(){
		check_arr(false);
   	});
});
