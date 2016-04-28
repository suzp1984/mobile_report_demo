'use strict';

var H5ComponentBase = function(name, cfg) {
    var cfg = cfg || {type : 'base'};
    var name = name || 'base';
    
    var id = ('h5_component_' + Math.random()).replace('.', '_');
    var cls = 'h5_component_' + cfg.type + ' h5_component_name_' + name;
    var clsName = 'h5_component_name_' + name;
    var component = $('<div class="h5_component ' + cls + '" id="' + id + '">');
    cfg.text && component.text(cfg.text);
    cfg.width && component.width(cfg.width/2);
    cfg.height && component.height(cfg.height/2);
    cfg.css && component.css(cfg.css);
    
    cfg.bg && component.css('backgroundImage', 'url(' + cfg.bg + ')');
    if (cfg.center === true) {
        component.css({
            marginLeft: (cfg.width/4 * -1) + 'px',
            left: '50%'
        });
    }

    component.on('afterLoad', function() {
        component.addClass(clsName + '_load').removeClass(clsName + '_leave');
        cfg.animateIn && component.animate(cfg.animateIn);
        return false;
    });

    component.on('onLeave', function() {
        component.addClass(clsName + '_leave').removeClass(clsName + '_load');
        cfg.animateOut && component.animate(cfg.animateOut);
        return false;
    });
    
    return component;
};










