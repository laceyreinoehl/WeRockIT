$(function () {
    window.onscroll = function () {
        var top = $(window).scrollTop();
        if(top >= 500){
            $("#navbarLogo").slideDown('fast');
        } else{
            $("#navbarLogo").hide();
        }
    }

});