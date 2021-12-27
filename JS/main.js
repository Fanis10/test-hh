$(document).ready(function() {

    $(".header__item-show").click(function() {
        $(this).toggleClass("header__item-show--active")
    })

    $("select").niceSelect()


    $(".header__burger").on("click", function() {
        $(".video__left").toggleClass("video__left--active")
        $(".header__burger").toggleClass("header__burger--active")
    });


});