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
});