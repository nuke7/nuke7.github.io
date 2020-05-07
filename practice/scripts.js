let name = 'Adam'
console.log(name + "'s apples")
console.log('hello world')

$('h1').text('We are having a break');
$('h3').html('something else is here - Likes: <strong> 13 </strong>');

$('strong').css('background', 'lightgreen');
$('strong').css('padding', '5px');

let color = 'blue'; //css class, not color name or code :) 

$('h2').toggleClass(color);

$('ul').append('<li> My name is ' + name + '</li>');

let username = document.getElementById("username").value;

let getInput = () => {
    var username = document.getElementById("username").value;
    if ($('li').length < 7) {
        if (username != "") {
            $('ul').append('<li> My name is ' + username + '</li>');
            alert('oh, hi ' + username + '!');
            $("input").val("");
        } else { alert("that's not a username") }
    }

};

/*let addButtonFunction = () => {
    if ($('li').length < 7) {
        $('ul').append('<li> My name is ' + username + '</li>');
    }
};*/


let removeButtonFunction = () => {
    if ($('li').length > 1) {
        $('li:last-child').remove();
    }
}

$('#add-b').click(getInput);
/*$('#add-b').click(addButtonFunction);*/

$('#remove-b').click(removeButtonFunction);

let colors = ['orange', 'lime', 'lightgreen', 'magenta', 'red'];
colors.push('purple');

colors.forEach((identifier) => { //identifier == colors numbers, as many, as colors there are 
    $('#box').append('<div class="box"></div>');
    $('.box:last-child').css('background', identifier);
});

for (let index = 0; index < colors.length; index++) {
    let identifier = colors[index];
    console.log(index);
}