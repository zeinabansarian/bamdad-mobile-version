let test = $(".openMenu > ul > li")
// console.log(test);

$(".openMenu > ul > li >a").click(function(e) {
    e.preventDefault();
    console.log($(this).parent());
    if ($(this).parent().find('.openMegaMenu').hasClass("openUnderMenu")) {
        $(this).parent().find('.openMegaMenu').removeClass("openUnderMenu") 
    }
    else{

    $(this).parent().find('.openMegaMenu').addClass("openUnderMenu") 
    }
  });
  


$(".openMegaMenu>ul>li").click(function(e) {
    e.preventDefault();
    console.log(this);
    if ($(this).find('.closeUnderMenu').hasClass("openUnderMenu")) {
        $(this).find('.closeUnderMenu').removeClass("openUnderMenu") 
    }
    else{

        $(this).find('.closeUnderMenu').addClass("openUnderMenu") 
    }
  });
  

