let getInput = () => {
    var todo = document.getElementById("todo").value;
    if ($('li').length < 5) {
        $('ul').append('<li id="list-item">' + todo + '</li>'); //onclick="done(this)"
        /*$('#todo-list li').attr('id', function(i) {
            return 'li' + (i + 1);*/
    } else {
        alert('ToDo list is full!')
    }
};

$('#todo-button').click(getInput);

$('')


let done = () => {
    var lis = document.getElementById('list-item')
    if (lis.textDecorationLineThrough == true) {
        $(lis).css("text-decoration", "none");
        $(lis).css("text-color", "lightgrey");
    } else {
        $(lis).css("text-decoration", "line-through");
    }

};

$('#list-item').click(done);