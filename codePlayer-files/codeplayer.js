$(document).ready(function() {

	var htmlCode = $("#htmlCode").val();
	var cssCode = $("#cssCode").val();

	$("iframe").contents().find("html").html('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>' 
		+ "<style>" + cssCode + "</style>" + htmlCode);
	document.getElementById('resultFrame').contentWindow.eval( $('#jsCode').val() );

	//code i found online to make tab key work in textarea
	$('textarea').keydown(function (e) {
    if (e.keyCode == 9) {
    	var myValue = "\t";
    	var startPos = this.selectionStart;
    	var endPos = this.selectionEnd;
    	var scrollTop = this.scrollTop;
    	this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos,this.value.length);
    	this.focus();
    	this.selectionStart = startPos + myValue.length;
    	this.selectionEnd = startPos + myValue.length;
    	this.scrollTop = scrollTop;

    	e.preventDefault();
    	}
	});


	var menuBarHeight = $("#menuBar").height();
	var windowHeight = $(window).height();

	$(".codeContainer").height(windowHeight-menuBarHeight);


	$("li").click(function() {
		$(this).toggleClass("selected");

		var activeDiv = $(this).html();

		$("#"+activeDiv+"code").toggle();

		var showingDiv = $(".codeContainer").filter(function() {
			return $(this).css("display")!="none";
		}).length;

		$(".codeContainer").width(100/showingDiv+"%")
	});


	$("button").click(function() {
		var htmlCode = $("#htmlCode").val();
		var cssCode = $("#cssCode").val();

		$("iframe").contents().find("html").html('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>' 
			+ "<style>" + cssCode + "</style>" + htmlCode);
		document.getElementById('resultFrame').contentWindow.eval( $('#jsCode').val() );
	});

})