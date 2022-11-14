(function () {
	// close效果
	$(".jq-adClose").click(function (event) {
		/* Act on the event */
		event.preventDefault();
		$(".adBox").fadeOut();
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			if ($(".goTop").hasClass("hide")) {
				$(".goTop").toggleClass("hide");
			}
		} else {
			$(".goTop").addClass("hide");
		}
	});

	$(".jq-goTop").click(function (e) {
		e.preventDefault();
		$("html,body").animate(
			{
				scrollTop: 0
			},
			1000
		);
	});
});
