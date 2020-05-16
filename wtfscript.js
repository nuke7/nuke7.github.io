$('.card-holder').hide(0).delay(1000).slideDown(1000);

$('.newsletter-box').hide(0).delay(3200).slideDown(1000);

$('.nav').hide(0).delay(4500).slideDown(500);

$(".closex").click(function() {
    $(".newsletter-box").hide(500);
});

$(".nav").on("mouseover", function() {
    $(".newsletter-box").show(700);
});

$('.dialog').hide(0);

$('.card').click(function() {
    $(".dialog").dialog({
        show: {
            effect: "blind",
            duration: 700,
        },
        hide: {
            effect: "explode",
            duration: 700,
        }
    })
});

console.log("Marton Gombos");

$(function() {
    $("#dialog-faith").dialog({
        autoOpen: false,
        show: {
            effect: "bounce",
            duration: 1000
        },
        hide: {
            effect: "drop",
            duration: 1000
        },
    });
    $('#faith').on("click", function() {
        $("#dialog-faith").dialog("open");
    });
});

$(function() {
    $("#dialog-rule").dialog({
        autoOpen: false,
        show: {
            effect: "clip",
            duration: 1000
        },
        hide: {
            effect: "slide",
            duration: 1000
        },
    });
    $('#rule').on("click", function() {
        $("#dialog-rule").dialog("open");
    });
});

$(function() {
    $("#dialog-master").dialog({
        autoOpen: false,
        show: {
            effect: "drop",
            duration: 1000
        },
        hide: {
            effect: "clip",
            duration: 1000
        },
    });
    $('#master').on("click", function() {
        $("#dialog-master").dialog("open");
    });
});