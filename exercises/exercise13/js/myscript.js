$(function() {

       $topIndex = 0;

       $( ".ui-draggable" ).draggable().css({"position":"absolute","top":"0px" });;

        $(".ui-draggable").click(function(){
            $topIndex=$topIndex+1;
            $(this).css("z-index",$topIndex);
        });

   });


        $(function(){
          $.okvideo({ source: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IvHbXoNFMz4" frameborder="0" allowfullscreen></iframe>',
                    volume: 100})
        });