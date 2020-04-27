let BookCount = 20;

for (let i = 1; i < BookCount; i++) {
    if (i % 2 == 0) {
        $('ul').append('<li>' + i + ' is an even number.</li>')
    }

};

let add = (a, b) => {
    return a + b;
}

let printNumbersTill = (n) => {
    for (let i = 1; i <= n; i++) {
        /*$('ul').append('<li>' + i + '</li>');*/ //numbers are added to the unorderd list
        /*console.log(i);*/
        document.write(i + ',');
    }
};

printNumbersTill(15);

let getGreetingTo = (name) => {
    /*alert("oh, hi " + name + '!');*/
};

getGreetingTo("Mark");

var array = [0, 3, 6, 7, 9];

let printValues = (array) => {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

printValues(array);

let myNumbers = [10, 20, 31, 50, 12];

myNumbers.forEach((element) => { //element === number in this case; could have written number or any string
    console.log(element);
});

$('#fox-1').text('Macrotis');
$('#fox-2').css("border", "5px solid purple");
$('.box').css("background-color", "yellow");

let color = "purple";
let number = 10;
let word = "cool";



let submit = () => {
    var color = document.getElementById("color").value;
    var number = document.getElementById("number").value;
    if (color == "purple") {
        $('.north').css("background-color", color);
    } else {
        $('.north').text("only purple pls");
    };
    if (number > 100) {
        $('.east').text("whoah, that's a big nubmer!");
    } else {
        $('.east').text("just a regular number pls");
    }
};

$('#submit').click(submit);