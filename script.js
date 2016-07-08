var num = [1,2,3,4,5,6,7,8,9,0,"."];
var arifmetic = ["*","/","+","-"];
var funbut= ["=","C"];
$(document).ready(function(){
    createButtons();

    $(".C").click(function(){
        var value = $("#dis").val();
        $(".history").append("<div><span class=\"val\">" + value + "</span><span class=\"remove\">X</span></div>");

        $("#dis").val("");       
    });
    $(".num").on("click",function(){
        var value = $("#dis").val();
        $("#dis").val(value + $(this).val());
    });
    $(".eval").on("click",function(){
        var value = $("#dis").val();
        $("#dis").val(value + "=" + eval(value));
    });
    $("h1").on("click",function(){
        $(".history").empty();
    })
    $(".history").on("click",".remove",function(){
        $(this).parent().remove();
    })
    $(".history").on("click",".val",function(){
        $("#dis").val($(this).text());
    })
});
function createButtons(){
    text = " <div class='row'>";
    for(i = 0; i < num.length; i++){
        text += "<button type='button' name= num[i] value= num[i] class='btn btn-default span num'>" + num[i] + "</button>";
    }
    text += "<button type='button'>" + "</button>";
    text += "<button type='button'>" + "</button>";
    text += "</div>";
    text += " <div class='row'>";
    for(i = 0; i < arifmetic.length; i++){
        text += "<button type='button' name= arifmetic[i] value= arifmetic[i] class='btn btn-default span num'>" + arifmetic[i] + "</button>";
    }
    text += "</div>";
    text += "<div class='row'>";
    for(i = 0; i < funbut.length; i++){
        text += "<button type='button' name= funbut[i] value=funbut[i] class='btn btn-default span num'>" + funbut[i] + "</button>";
    }
    text += "<button type='button'>" + "</button>";
    text += "<button type='button'>" + "</button>";
    text += "</div>";
    $("#CreateButtons").append(text);
}