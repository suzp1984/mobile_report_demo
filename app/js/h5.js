'usr strict';

var h5 = function() {
    this.id = ('h5_' + Math.random()).replace('.', '_');
    this.el = $('<div class="h5" id="' + this.id + '">');
    this.el.hide();
    $('body').append(this.el);

    this.addPage = function(name, text) {
        var page = $('<div class="h5_page section">');
        page.addClass('h5_page_' + name);
        page.text(text);
        this.el.append(page);
        this.currentPage = page;
        return this;
    };

    this.addComponent = function(name, cfg) {
        var cfg = cfg || {};
        cfg = $.extend({
            type: 'base'
        }, cfg);

        var cp;
        switch(cfg.type) {
        case 'base':
            cp = new H5ComponentBase(name, cfg);
            break;
        case 'point':
            cp = new H5ComponentPoint(name, cfg);
        default:
        }

        this.currentPage.append(cp);
        
        return this;
    };

    this.loader = function() {
        this.el.fullpage({
            onLeave: function(index, nextIndex, direction) {
                $(this).find('.h5_component').trigger('onLeave');
            },
            afterLoad: function(anchorName, index) {
                $(this).find('.h5_component').trigger('afterLoad');
            }
        }
        );

        this.el.show();
    };
};
