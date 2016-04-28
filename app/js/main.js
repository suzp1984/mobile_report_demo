$(function() {
    
    var ah5 = new h5();
    ah5.addPage('face', 'text')
        .addComponent('logo', {text: 'logo',
                               width: 514,
                               height: 306,
                               
                               css: {
                                   backgroundColor: '#ff0000',
                                   left: 20,
                                   top: 50,
                                   opacity: 0
                               },
                               animateIn: {top: 50, opacity: 1},
                               animateOut: {top: 150, opacity: 0},
                               center: true})
          .addComponent('slogan', {text: 'logo'})
        .addPage('desc', 'page2')
        .addComponent('point', {
            type: 'point',
            width: 300,
            height: 300,
            data: [
                ["A", .4, 'green'],
                ["B", .2, 'yellow', 0, '-120%'],
                ["C", .2, 'red', 0, '120%' ]
            ],
            css: {
                bottom: 0,
                opacity: 0
            },
            animateIn: {bottom: 0,
                        opacity: 0},
            animateIn: {bottom: 80, opacity: 1},
            animateOut: {bottom: 0, opacity: 0},
            center: true
        })
        .addComponent('caption', {text: 'caption',
                                  width: 514,
                                  height: 306,
                                  
                                  css: {
                                      backgroundColor: '#ff0000',
                                      left: 20,
                                      top: 50,
                                      opacity: 0
                                  },
                                  animateIn: {top: 50, opacity: 1},
                                  animateOut: {top: 150, opacity: 0},
                                  center: true})
        .addPage('page-3', 'page3')
        .addComponent('caption', {text: 'courses',
                                  width: 514,
                                  height: 306,
                                  
                                  css: {
                                      backgroundColor: '#ff0000',
                                      left: 20,
                                      top: 50,
                                      opacity: 0
                                  },
                                  animateIn: {top: 50, opacity: 1},
                                  animateOut: {top: 150, opacity: 0},
                                  center: true})
        .loader();
     
    /*
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
     */

    /*
    var cfg = {
        type : 'base',
        text : 'text',
        width: 514,
        height: 306,

        css: {
            backgroundColor: '#ff0000',
            left: 20,
            top: 50,
            opacity: 0
        },
        animateIn: {top: 50, opacity: 1},
        animateOut: {top: 150, opacity: 0},
        center: true
    };
    
    var h5 = new H5ComponentBase('myName', cfg);
    
    
    $('body').append(h5);

    var load = true;
    $('body').click(function() {
        load = !load;
        $('.h5_component').trigger(load ? 'onLeave' : 'afterLoad');
    });
*/
    
});
