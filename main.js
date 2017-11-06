$(document).ready(function () {
    $("h3").text("TEXT").css({
        color:"green",
        background:"grey"
    }).append(function(i){
        return " №" + i;
    });
    $(".simple").css({
        shadow:"0 0 10px blue"
    })
    $("h3[class!='first']").append(document.createTextNode(":)"))
    $("h3[class='simple']").css("text-shadow","red 1px 1px 0, red -1px -1px 0")
})