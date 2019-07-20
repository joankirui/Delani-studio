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
$(document).ready(function(){
    $("form").submit(function(){
        var name = $("textarea#textarea").val();
        var name = $("input#email").val();
        var name = $("input#name").val();
        if($("input#name").val() && $("input#email").val() && $("textarea#textarea").val() !=""){
            alert(name+" we have received your message.Thankyou for contacting us!!");
        }
        else
        {
            alert("please enter your name,email and message.")
        }
    });
});
