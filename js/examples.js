$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});

   $("#toggle").click(function() {
    if ($('#panel').css('display') == 'block') {
        var height = '-=' + $('#panel').height();
    } else {
        var height = '+=' + $('#panel').height();
    }
    $("#panel").slideToggle("slow");
    $("#upper").animate({
        bottom: height
    }, "slow")
});

});