
$('#genre-list li').each(function() {
	$(this).on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
});

var sortHolder = $('#sort-holder'),
	sortHolderTarg = sortHolder.find('li a'),
	holderTarg = $('#holderTarg');

	sortHolderTarg.each(function() {
		$(this).on('click', function() {
			var text = $(this).text();
			holderTarg.text(text);
		});
	});

	
