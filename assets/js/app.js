$(document).ready(()=>{
 $("#carousel").width($(window).width() * 2);
});


	var btnl = $("#left")
	var btnr = $("#right")

	$(btnl).click(() => {
		$(".imgs.3").css("position", "absolute").animate({
    left: 159,
    right: 430
	});
});

	var ph = $("#carousel").children().length();

	$(btnr).click(() => {
		$(".imgs.2").css("position", "absolute").animate({
    left: 159,
    right: 430
	});
});