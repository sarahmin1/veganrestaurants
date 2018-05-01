$(document).ready(function () {
	$(".filter").on("change", function (e) {
		e.preventDefault();

		var filter = $(this).val();

		$(".item.active").removeClass("active");

		$("." + filter).addClass("active");

		/*** some of this code was taken from "brainless coder" on stack overflow and include the url https://stackoverflow.com/questions/23430949/jquery-multiple-dropdown-filter-menu/23433834 */

		$(".filter").on("change", function () {
			/*** A map creates an array based on what function you call for it
			In this case we're telling the map to return each value of ".filter" that's selected
			So we have two dropdown lists with the class filter, so it looks at the value of both  "on change" and then returns that value as (e).val();
			Finally, we use the .join method and tell it to join our values that were returned as a string by using a "." for example [manhattan.american] */
			var filters = $.map($(".filter").toArray(), function (e) {
				return $(e).val();
			}).join(".");
			$(".item.active").removeClass("active"); /*** here we remove all .item.active class */
			$("div." + filters).addClass("active"); /*** then we add class active to all our divs with the classes that we determined from our array, so we are adding active class to (div.manhattan.american), for example. then, only the items with those two classes will show */
		});


	});
});