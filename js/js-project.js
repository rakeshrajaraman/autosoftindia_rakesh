$(document).ready(function(){

$('#left').click(function(){
var tmp = $(".active");
$(tmp).removeClass("active");
if($(tmp).is(':first-child')) {
$("#last").addClass("active");
}
else {
$(tmp).prev().addClass("active");
}
});

$('#right').click(function(){
var tmp = $(".active");
$(tmp).removeClass("active");
if($(tmp).is(':last-child')) {
$("#first").addClass("active");
}
else {
$(tmp).next().addClass("active");
}
});

});