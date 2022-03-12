// $("id=div2").hover(
//     function () {
//         $(this).append($("<span> HOVERING!!!!! </span>"));
//     });


// $.(document).ready({}
//     $("#hide").click(function(){
//         $("p").hide();
//       });
      
//       $("#show").click(function(){
//         $("p").show();
//       });


$(document).ready(function(){
    $("mouse").hover(function(){
      $("#p").hide();
    });
  });

  $(document).ready(function(){
    $("mouse").hover(function(){
      $("#p").show();
    });
  });