$("#deleteAll").on("click", function() {
        console.log("entered func");
        var $boxes = $('input[name=deleteBox]:checked');
        console.log($boxes);
          var len = $boxes.length;
          $boxes.each(function(){
              for(var i =0;i<len;i++)
              {
                $($boxes[i]).parent().remove();
              }
          });
      });
         $("#addtoWatch").on("click", function() {
        console.log("entered 2 func");
        var $boxes = $('input[name=deleteBox]:checked');
        console.log($boxes);
          var len = $boxes.length;
              for(var i =0;i<len;i++)
              {
                var tmp = $($boxes[i]).parent().html();
                tmp = tmp.toString();
                console.log("TMP is");
                console.log(tmp);
                tmp = tmp.split('<')[0];
                console.log("TMP Now="+tmp);
                $('#watchList').append(tmp+"<br>");
              }
       
      });