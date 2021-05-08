$(window).on("load", function() {
  
  
  $("#thumbnail img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#slideshow-image img").attr("src", img_src);
  });
  
  $("#drink-thumbnail img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#drink-slideshow-image img").attr("src", img_src);
  });
  
  $("#bread-thumbnail img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#bread-slideshow-image img").attr("src", img_src);
  });
  
  $("#pasta-thumbnail img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#pasta-slideshow-image img").attr("src", img_src);
  });
  
  $("#sweets-thumbnail img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#sweets-slideshow-image img").attr("src", img_src);
  });
  
  
});