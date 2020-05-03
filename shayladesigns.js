
$(document).ready(function(){ 

  /* circles start */
jQuery(function($) {
   $('#circle1').mouseover(function() {
       //var dWidth = $(document).width() - 100, //  100 = image width
           //dHeight = $(document).height() - 100, //  100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });

   $('#circle2').mouseover(function() {
       //var dWidth = $(document).width() - 100, // 100 = image width
           //dHeight = $(document).height() - 100, // 100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });

   $('#circle3').mouseover(function() {
       //var dWidth = $(document).width() - 100, // 100 = image width
           //dHeight = $(document).height() - 100, // 100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });

   $('#circle4').mouseover(function() {
       //var dWidth = $(document).width() - 100, // 100 = image width
           //dHeight = $(document).height() - 100, // 100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });

   $('#circle5').mouseover(function() {
       //var dWidth = $(document).width() - 100, // 100 = image width
           //dHeight = $(document).height() - 100, // 100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });

   $('#circle6').mouseover(function() {
       //var dWidth = $(document).width() - 100, // 100 = image width
           //dHeight = $(document).height() - 100, // 100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });

    $('#circle7').mouseover(function() {
       //var dWidth = $(document).width() - 100, // 100 = image width
           //dHeight = $(document).height() - 100, // 100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });

   $('#circle8').mouseover(function() {
       //var dWidth = $(document).width() - 100, // 100 = image width
           //dHeight = $(document).height() - 100, // 100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });

   $('#circle9').mouseover(function() {
       //var dWidth = $(document).width() - 100, // 100 = image width
           //dHeight = $(document).height() - 100, // 100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });

   $('#circle10').mouseover(function() {
       //var dWidth = $(document).width() - 100, // 100 = image width
           //dHeight = $(document).height() - 100, // 100 = image height
        var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() + 1) + 1),
           nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
       $(this).animate({ right: nextX + 'px', top: nextY + 'px' });
   });
  });

});



/* Multiskilled */


$(document).ready(function(){
    $("#multiskilled").mouseenter(function(){
      $(".list").show(300);
    });
  });
  
  $(document).ready(function(){
    $("#multiskilled").mouseleave(function(){
      $(".list").hide(300);
    });
  });


  /* Location */
  
  $(document).ready(function(){
    $(".location").mouseenter(function(){
      $(".wrapper").show(300);
    });
  });
  
  $(document).ready(function(){
    $(".location").mouseleave(function(){
      $(".wrapper").hide(300);
    });
  });



/* Insightful*/
  
  $(document).ready(function(){
    $("#insightful").mouseenter(function(){
      $(".insight").show(550);
    });
  });
  
  $(document).ready(function(){
    $("#insightful").mouseleave(function(){
      $(".insight").hide(550);
    });
  });


  /* creative*/
  
  $(document).ready(function(){
    $("#creative").mouseenter(function(){
      $(".circlescover").hide(550);
    });
  });
  
 


  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
      document.getElementById("circlescontainer").style.display = "none";

    } else {
      document.getElementById("circlescontainer").style.height = "300px";
      document.getElementById("circlescontainer").style.width = "525px";
      document.getElementById("circlescontainer").style.display = "block";
    }
  }



  $(document).ready(function(){
    $("#creative").mouseenter(function(){
      $(".hover_circles").show(300);
    });
  });
  
  $(document).ready(function(){
    $("#creative").mouseleave(function(){
      $(".hover_circles").hide(300);
    });
  });


