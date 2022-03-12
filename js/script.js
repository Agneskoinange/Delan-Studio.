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


    $(document).ready(function(){
        $(".design").click(function(){
          $("p").hide();
        });
        $(".design").click(function(){
          $("p").show();
        });
      });




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


});