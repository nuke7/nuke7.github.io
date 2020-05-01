let getInput = () => {
    var todo = document.getElementById("todo").value;
    if ($('li').length < 5) {
        if (todo != "") {
            $('ul').append("<li>" + todo + "</li>");
            $('li:last-child').click((event) => {
                $(event.target).toggleClass('line');
                $(event.target).hide(400);
            });
            $('input').val('');
        } else {
            alert('Nothing is not a valid ToDo!')
        }
    } else {
        alert('ToDo list is full!')
    }
};

$('#todo-button').click(getInput);

$('li:last-child').click((event) => {
    // $(this).siblings().removeClass('underline');
    $(event.target).toggleClass('line');
    $(event.target).hide(400);
    // $(this).toggleClass('line');
});

let removeButtonFunction = () => {
    if ($('li').length > 0) {
        $('li').remove();
        /*$('li:first-child').slideUp(400);*/
    }
};

$('#remove-b').click(removeButtonFunction);


/*let done = () => {*/
/*var lis = document.getElementById('list-item')*/
/*if ('#list-item'.textDecoration == true) {
        $('#list-item').css("text-decoration", "none");
    } else {
        $('#list-item').css("text-decoration", "line-through");
        $('#list-item').css("text-color", "grey");
    }
};*/

/*$('#list-item').click(done);*/