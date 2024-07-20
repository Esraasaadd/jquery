///<reference types="../@types/jquery"/>;
$(document).ready(function(){
    $(".links").animate({width:"0"},0,function(){
        $(".links").css({visibility:"hidden"},0)
    })
    $(".innerText").not($(".first")).slideToggle(0);

    //textArea
    var maxLength = 100;
    $('Textarea').on('keyup', function() {
        var textLength = $(this).val().length;
        var textRemaining = maxLength - textLength;
        $(".number").html(textRemaining)
    });

});

$(".icon").on("click",function(){
    $(".links").animate({width:"0"},400,function(){
        $(".links").css({visibility:"hidden"},400)
    })
})
$(".open .container").on("click",function(){
    $(".links").animate({width:"250px"},400)
    $(".links").css({visibility:"visible"},400)
})

$('.sliderDown .toggle').on("click",function(){
    $('.innerText').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

$(".nav-link").on("click",function(e){
    let sectionId=$(e.target).attr("href")
    let sectionOffset=$(sectionId).offset().top;
    $("body").animate({scrollTop:sectionOffset},1000)
})

window.onload = function() {
    countDownToTime("10 october 2024 9:56:00");
}

    function countDownToTime(countTo) {
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
