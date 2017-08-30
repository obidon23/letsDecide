function toggleMenuArrow() {
	var arrow = $(this).find('.arrow');

	arrow.toggleClass('open');
}

$('.search-btn').on('click', toggleMenuArrow);