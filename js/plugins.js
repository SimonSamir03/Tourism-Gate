/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $('.carousel').carousel({
        interval: 4000
    });
    
    //Show Color Option When Click On The Gear//
    
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
    
    // Change Theme Color On Click //
    
    var colorLi = $(".color-option ul li");
    
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#FFD500").end()
        .eq(4).css("backgroundColor", "#129028");
    
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
});

// Loading Screen //

$(window).on('load', function () {
    "use strict";
    //Loading Elements
    $(".loading-overlay .sk-folding-cube").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(2000,
            function () {
            // Show Scroll
                $(this).remove();

            });
    });
});
