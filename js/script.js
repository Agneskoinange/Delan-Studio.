
// Whatwedo
$(document).ready(function(){
  $("#D1, .p1").click(function(){
    $("#D1, .p1").toggle();
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


// $(document).ready(function(){
//     $("mouse").hover(function(){
//       $("#p").hide();
//     });
//   });

//   $(document).ready(function(){
//     $("mouse").hover(function(){
//       $("#p").show();
//     });
//   });

// $(document).ready(function(){

//   hover: function( fnOver, fnOut ) {
//     return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );

// $(document).ready(function(){
//     $(".p").hover(function () {
//     $(this).animate({opacity:'1'});
//     },
//     function () {
//     $(this).animate({opacity:'0'});
// })



// $(document).ready(function(){
//     $(".design").click(function(event) {
//         $(".design").toggle();
//         // $("#D1").toggle();
//         event.preventDefault();
//     });
//     $(".development").click(function(event) {
//         $(".development").toggle();
//         // $("#D2").toggle();
//         event.preventDefault();
//     });

//     $(".productmanagement").click(function(event) {
//         $(".productmanagement").toggle();
//         // $("#D3").toggle();

//         event.preventDefault();
// });
//     });
    

    // $(document).ready(function(){
    //     $(".design").on('mouseenter',function() {
    //         $(".p").show();
    
            
    //     });
    //     $(".design").on('mouseout',function() {
    //         $(".p").hide();
    //     });
    // });


    // $(document).ready(function(){
    //     $(".design").on('click',function() {
    //         $(".p").hide();
         
    //     });
    //     $(".design").on('click',function() {
    //         $(".p").show();
        
    //     });
    // });


//     $(document).ready(function(){
//         $(".design").click(function(){
//           $("p").hide();
//         });
//         $(".design").click(function(){
//           $("p").show();
//         });
//       });



// $(".overlay").hover(function(){
//     $(this).animate({opacity:'1'});
//   },
//   function(){
//     $(this).animate({opacity:'0'});
//   });



// $(document).ready(function() {
//     $('.project1').hide();
//     $('img').animate({
//         opacity:1
        
//     });

//     $('img').hover(function() {
//         $(this).stop().animate({opacity:.4},200);
//         $('.white-text').fadeIn();

//     }, function() {
//         $(this).stop().animate({opacity:1},500)
//         $('.white-text').fadeOut();
//     });


// });

// // contact-us
