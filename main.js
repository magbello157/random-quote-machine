$(document).ready(function () {
	getNewQuote();
	function getNewQuote () {
		$.ajax({
			url: "http://api.forismatic.com/api/1.0/",
			jsonp: "jsonp",
			dataType: "jsonp",
			data: {
				method: "getQuote",
				lang: "en",
				format: "jsonp"
			},
			success: function (response) {
				$("#quote").html(response.quoteText);
				if (response.quoteAuthor) {
					$("#author").html("- " + response.quoteAuthor);
				} else {
					$("author").html("- Unknown");
				}
			}
		});
	}
	$("#new-quote").on("click", function (event) {
		event.preventDefault();
		getNewQuote();
	});

	$("#tweet-quote").on("click", function(event) {
		event.preventDefault();
		
	});
});