$(document).ready(function(){
    $("div.show").click(function(){
        $("#design").show();
        $("div.show").hide();
    });
    $("div.show1").click(function(){
        $("#development").show();
        $("div.show1").hide();
    });
    $("div.show2").click(function(){
        $("#product").show();
        $("div.show2").hide();
    });
});
$(document).ready(function(){
    $("#design").click(function(){
        $("div.show").show();
        $("#design").hide();
    });
    $("#development").click(function(){
        $("div.show1").show();
        $("#development").hide();
    });
    $("#product").click(function(){
        $("div.show2").show();
        $("#product").hide();
    });
});

