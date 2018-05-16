//clicking on span removes that li
$("ul").on("click", ".bin", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//clicking on done toggles completed class
$("ul").on("click", ".done", function(){
	$(this).parent().toggleClass("completed");
	event.stopPropagation();
});

//pressing enter on input appends new li
$("input[type='text']").on("keypress", function(event){
	var str = $("#todo-text").val();
	//if enter is pressed
	if(event.which === 13 && str != "" && str != null) {
		//get value of input
		var str = $(this).val();
		//add input as new li
		$("ul").append("<li><span class='done'><i class='fa fa-check'></i></span><span class='bin'><i class='fas fa-trash-alt'></i></span>" 
			+ str + "</li>");
		//clear input
		$(this).val("");
	}

});

//clicking on add toggles input
$(".add").on("click",function(){
	$(".new-task").slideToggle();
	$("#todo-text").focus();
});