$(function() {
    $("#dialog-rule").dialog({
        autoOpen: false,
        show: {
            effect: "clip",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
    });
    $('#rule').on("click", function() {
        $("#dialog-rule").dialog("open");
    });
});

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