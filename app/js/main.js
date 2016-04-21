$(function() {
    $('#h5').fullpage({
        'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],
        onLeave: function(index, nextIndex, direction) {
            $('#h5').find('.page').eq(index-1).trigger('onLeave');
        },
        afterLoad: function(anchorName, index) {
            $('#h5').find('.page').eq(index-1).trigger('afterLoad');
        }
    }
                     );

    $('.page').on('onLeave', function() {
        console.log($(this).attr('id'), "==>>", 'onLeave');
        $(this).find('.component').trigger('onLeave');
    });

    $('.page').on('afterLoad', function() {
        console.log($(this).attr('id'), "==>>", "afterLoad");
        $(this).find('.component').trigger('afterLoad');
    });

    $('.component').on('onLeave', function() {
        $(this).fadeOut();
        return false;
    });

    $('.component').on('afterLoad', function() {
        $(this).fadeIn();
        return false;
    });
});
