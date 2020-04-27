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
            duration: 1000,
        },
        hide: {
            effect: "explode",
            duration: 1000,
        }
    })
});