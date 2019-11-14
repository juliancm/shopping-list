$('#js-shopping-list-form').submit(function(e){
    e.preventDefault();
    $('.shopping-list').append(
        `<li>
            <span class="shopping-item">${$('#shopping-list-entry').val()}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`
    );
    $('#shopping-list-entry').val("");
})

$('.shopping-list').on('click', '.shopping-item-delete', function(e){
    $(this).parent().parent().remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
});


/*
The hash (#) specifies to select elements by their ID's
The dot (.) specifies to select elements by their classname
*/
