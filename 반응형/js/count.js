
    $(function(){
        var cnt1=0;
  
        counterFn();
  
        function counterFn(){
          id1=setInterval(counterFn,1);
  
          function counterFn(){
            cnt1++;
            if(cnt1>400){
              clearInterval(id1);
            }else{
              $(".number1").text(cnt1);
            }
          }
        }
      });
  
      $(function(){
        var cnt2=0;
  
        counterFn();
  
        function counterFn(){
          id2=setInterval(counterFn,1);
  
          function counterFn(){
            cnt2++;
            if(cnt2>1000){
              clearInterval(id2);
            }else{
              $(".number2").text(cnt2);
            }
          }
        }
      });
  
      $(function(){
        var cnt3=0;
  
        counterFn();
  
        function counterFn(){
          id3=setInterval(counterFn,1);
  
          function counterFn(){
            cnt3++;
            if(cnt3>8000){
              clearInterval(id3);
            }else{
              $(".number3").text(cnt3);
            }
          }
        }
      });
  