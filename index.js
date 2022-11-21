$(".try1").hover(function () {
    $(this).children().toggleClass("white-background");
});

var toggled = false;

$(window).resize(() => {
    const windowObject = $(window);
    if (toggled === true && windowObject.width() > 991) {
        $(".li-contact").children().addClass("bg-white text-dark border-white");
        $(".navbar-nav .nav-item").children().addClass("text-white");
    } else if (toggled === true && windowObject.width() <= 991) {
        $(".li-contact").children().removeClass("bg-white text-dark border-white");
        $(".navbar-nav .nav-item").children().removeClass("text-white");
    } else {
        toggled = false;
    }
});

$(".navbar-toggler-icon").click(() => {
    if (toggled === false) {
        $(".li-contact").children().removeClass("bg-white text-dark border-white");
        $(".navbar-nav .nav-item").children().removeClass("text-white");
        toggled = true;
    } else {
        $(".li-contact").children().addClass("bg-white text-dark border-white");
        $(".navbar-nav .nav-item").children().addClass("text-white");
        toggled = false;
    }
});

