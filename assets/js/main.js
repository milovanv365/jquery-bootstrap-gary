$(document).ready(function(){
    $(".img-donate").hover(function(){
        $(this).attr("src", function(index, attr){
            return attr.replace("-pink", "-grey");
        });
    }, function(){
        $(this).attr("src", function(index, attr){
            return attr.replace("-grey", "-pink");
        });
    });

    $(".faq-question > p").click(function(){
        let index = $(this).index()
        $(".faq-answer > div").removeClass("d-block")
        $(".faq-answer > div").eq(index - 1).addClass("d-block")
    })

    $(".case-study-question > p").click(function(){
        let index = $(this).index()
        $(".case-study-answer > div").removeClass("d-flex")
        $(".case-study-answer > div").eq(index).addClass("d-flex")
    })
});