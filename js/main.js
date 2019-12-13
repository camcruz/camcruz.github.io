function init() {
	initOverlay();
}

function initOverlay() {
	//$(".overlay").hide();
	$(".overlay-close").on("click", function(){
		$(".overlay").hide();
	});

	$(".overlay-target").on("click", function() {
		var thisCopy = $(this).clone();
		$(thisCopy).removeClass();
		showOverlay($(thisCopy).outerHTML());
	});
}

function showOverlay(content) {
	$(".overlay-content").html(content);
	$(".overlay").show();
}

jQuery.fn.outerHTML = function() {
  return jQuery('<div />').append(this.eq(0).clone()).html();
};

init();
