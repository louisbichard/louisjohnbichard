
    var $document_list = $('.DocumentList'); 
    var sizeOfWindow = $(window).height();

    var startPosition = ($document_list.offset().top) - sizeOfWindow;
    var endPosition =  (startPosition + $document_list.height()) + (sizeOfWindow);



    $(window).scroll(function(event) {
        var currentPosition = $(document).scrollTop();    
        if(currentPosition > startPosition && currentPosition < endPosition){
            var currentPositionInItem = currentPosition - startPosition;
            $document_list.scrollLeft(currentPositionInItem * 2);    
        }        
    });