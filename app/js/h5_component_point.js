'use strict';

var H5ComponentPoint = function(name, cfg) {
    var component = new H5ComponentBase(name, cfg);
    var base = cfg.data[0][1];

    $.each(cfg.data, function(idx, item) {
        var point = $('<div class="point point_' + idx + '">');
        point.text(item[0]);
        var name = $('<div class="name">' + item[0] + '</div>');
        var rate = $('<div class="rate">' + (item[1]*100) + '%</div>');
        name.append(rate);
        point.append(name);
        
        var per = (item[1]/base * 100) + '%';
        point.width(per).height(per);

        if(item[2]) {
            point.css('background-color', item[2]);
        }
        component.append(point);
    });
    
    return component;
};

