    (function() {
        var getStartPosition = function($elem) {
            return ($elem.offset().top) - sizeOfWindow;
        }

        var getEndPosition = function($elem, start) {
            return (start + $elem.height()) + (sizeOfWindow);
        }

        var invertDecimal = function(num) {
            return Math.round((Math.abs(num - 1)) * 100) / 100
        }

        var $document_list = $('.DocumentList');
        var sizeOfWindow = $(window).height();

        var startPosition = getStartPosition($document_list);
        var endPosition = getEndPosition($document_list, startPosition);
        var $leadText = $('.leadText');


        $(window).scroll(function(event) {
            var currentPosition = $(document).scrollTop();
            if (currentPosition > startPosition && currentPosition < endPosition) {
                var currentPositionInItem = currentPosition - startPosition;
                $document_list.scrollLeft(currentPositionInItem * 2);
            }
            currentPosition = (currentPosition > 650) ? 650 : currentPosition;
            $leadText.css({
                marginTop: currentPosition + 'px',
                opacity: (invertDecimal(currentPosition / 650))
            });
        });


        var $leadText = $('.leadText');
    })();