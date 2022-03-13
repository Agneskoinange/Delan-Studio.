
// Whatwedo
$(document).ready(function(){
  $("#D1, .p1").click(function(){
    $("#D1, .p1").toggle();
  });

});


$(document).ready(function(){
  $("#D2, .p2").click(function(){
    $("#D2, .p2").toggle();
  });
});

$(document).ready(function(){
  $("#D3, .p3").click(function(){
    $("#D3, .p3").toggle();
  });

});






// Porfolio

$(document).ready(function(){
  $(".img1").hover(function(){
    $(this).animate({opacity:0.2},700);
    $(".overlay1").show(700);
  },
  function(){
    $(this).animate({opacity:1},700);
    $(".overlay1").hide(700);
  });

});



$(document).ready(function(){
  $(".img2").hover(function(){
    $(this).animate({opacity:0.2},700);
    $(".overlay2").show(700);
  },
  function(){
    $(this).animate({opacity:1},700);
    $(".overlay2").hide(700);
  });

});

$(document).ready(function(){
  $(".img3").hover(function(){
    $(this).animate({opacity:0.2},700);
    $(".overlay3").show(700);
  },
  function(){
    $(this).animate({opacity:1},700);
    $(".overlay3").hide(700);
  });

});

$(document).ready(function(){
  $(".img4").hover(function(){
    $(this).animate({opacity:0.2},700);
    $(".overlay4").show(700);
  },
  function(){
    $(this).animate({opacity:1},700);
    $(".overlay4").hide(700);
  });

});

$(document).ready(function(){
  $(".img5").hover(function(){
    $(this).animate({opacity:0.2},700);
    $(".overlay5").show(700);
  },
  function(){
    $(this).animate({opacity:1},700);
    $(".overlay5").hide(700);
  });

});

$(document).ready(function(){
  $(".img6").hover(function(){
    $(this).animate({opacity:0.2},700);
    $(".overlay6").show(700);
  },
  function(){
    $(this).animate({opacity:1},700);
    $(".overlay6").hide(700);
  });

});

$(document).ready(function(){
  $(".img7").hover(function(){
    $(this).animate({opacity:0.2},700);
    $(".overlay7").show(700);
  },
  function(){
    $(this).animate({opacity:1},700);
    $(".overlay7").hide(700);
  });

});


$(document).ready(function(){
  $(".img8").hover(function(){
    $(this).animate({opacity:0.2},700);
    $(".overlay8").show(700);
  },
  function(){
    $(this).animate({opacity:1},700);
    $(".overlay8").hide(700);
  });

});


// contact US

$(document).ready(function(){
  $("form").submit(function(){
    alert("We have received your message. Thank you for reaching out to us.");
  });
});






