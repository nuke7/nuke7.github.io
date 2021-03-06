let names = ['Marton', 'Laci', 'Károly', 'Zsiga', 'Elemér'];

names.forEach((element) => {
    if (element === 'Marton') {
        $('ul').append('<li> My name is <b> ' + element + '</b></li>');
    } else {
        $('ul').append('<li> My name is ' + element + '</li>');
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using Javascript's jQuery library. How awesome!",
};

$('body').append(
    '<div><h1>' + additionalBlock.title + '</h1>',
    '<p>' + additionalBlock.text + '</p></div>',
);

let clicked = () => {
    $('#click-me').text('You clicked me');
    console.log('You clicked the button');
};

$("#click-me").click(clicked);

let clicked2 = () => {
    $('#click-me').text('Click Me!');
};

$("#reset").click(clicked2);

let change = function() {
    $('button').css('background-color', 'lightgreen');
    $('button').css('color', 'purple');
    $('button').css('border-radius', '15%');
    $('button').css('font-size', '2em');
};

$('#color-change').click(change);

var count = 0;

function countPlus() {
    count += 1;
    $('#colorify').text('Colorify pushed: ' + count + ' times');
};

function colorify() {
    //let color = document.getElementById("color").value;
    if (count <= 2) {
        $('button').css('background-color', $('#color').val());
        console.log(color);
    } else {
        $('body').css('background-color', $('#color').val());
    };
};

$('#colorify').click(colorify).click(countPlus);
//console.log($(`#color`).val());