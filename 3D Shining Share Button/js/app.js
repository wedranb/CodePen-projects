$(".cube").click(function(){
  $(this).toggleClass("clicked");
});

$(".tw").hover(function(){
  $(".side2").toggleClass("tw--hover");
});

$(".fb").hover(function(){
  $(".side2").toggleClass("fb--hover");
});

$(".gp").hover(function(){
  $(".side2").toggleClass("gp--hover");
});