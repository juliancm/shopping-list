$("#shoppingForm").on('submit', function(e){
	var text = $('#addToList').val();
  $('#shoppingList').append($('<li>').append(text));
  $('#addToList').val('');
  e.preventDefault();
});

$('.shopping-list').on('click', 'shopping-item-delete', function(){
	$(this).remove();
});




/*

The hash (#) specifies to select elements by their ID's

The dot (.) specifies to select elements by their classname

*/
