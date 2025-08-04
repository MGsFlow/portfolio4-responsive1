
    $(function(){
        $(".menu-trigger").click(function(){
          $('.navi').toggle('slow');
         
        });
      });
  
      $(window).resize(function(){
  
        $(".navi").show();
      });