$(document).ready(function () {

    function checkPosition() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $('.testimonial-sec .carousel .carousel-item').each(function () {

                console.log('Hello');
                var next = $(this).next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children().children(':first-child').clone().appendTo($(this).find('.card-group'));
    
                console.log('count --> ', $(this).siblings().length);
    
    
                for (var i = 0; i < $(this).siblings().length - 1; i++) {
                    next = next.next();
    
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }
                    next.children().children(':first-child').clone().appendTo($(this).find('.card-group'));
                }
            });
        } else{
            $('.testimonial-sec .carousel .carousel-item').each(function () {
                console.log(this);
            });
            
        }
    };

    checkPosition();

});



