var c1offset=$(".con1inbox").offset();
   
    $(window).scroll(function(){
      if(c1offset=$(window).scrollTop()){
        $(".con1inbox").show();
      }else{
        $(".con1inbox").hide();
      }
   
    });
    

    $(function(){
      $(window).scroll(function(){
        $(".c2inbox").each(function(i){

          var a=$(this).position().top;
          var b=$(window).scrollTop()+$(window).height();

          if(b>a){
            $(".c2inbox").show();
          }else{
            $(".c2inbox").hide();
          }
        });
      });
    });

    $(function(){
      $(window).scroll(function(){
        $(".c3inbox").each(function(i){

          var a=$(this).position().top;
          var b=$(window).scrollTop()+$(window).height();

          if(b>a){
            $(".c3inbox").show();
          }else{
            $(".c3inbox").hide();
          }
        });
      });
    });

    $(function(){
      $(window).scroll(function(){
        $(".c4inboxtext").each(function(i){

          var a=$(this).position().top;
          var b=$(window).scrollTop()+$(window).height();

          if(b>a){
            $(".c4inboxtext").show();
          }else{
            $(".c4inboxtext").hide();
          }
        });
      });
    });

    $(function(){
      $(window).scroll(function(){
        $(".c5inbox").each(function(i){

          var a=$(this).position().top;
          var b=$(window).scrollTop()+$(window).height();

          if(b>a){
            $(".c5inbox").show();
          }else{
            $(".c5inbox").hide();
          }
        });
      });
    });

    $(function(){
      $(window).scroll(function(){
        $(".c6inbox").each(function(i){

          var a=$(this).position().top;
          var b=$(window).scrollTop()+$(window).height();

          if(b>a){
            $(".c6inbox").show();
          }else{
            $(".c6inbox").hide();
          }
        });
      });
    });