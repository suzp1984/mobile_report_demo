var H5ComponentPolyline = function(name, cfg) {
    var component = new H5ComponentBase(name, cfg);

    var w = cfg.width;
    var h = cfg.height;

    var cns = $('<canvas>');
    var ctx = cns[0].getContext('2d');
    cns[0].width = ctx.width = w;
    cns[0].height = ctx.height = h;

    var step = 10;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#AAAAAA";

    var text_w = w/step >> 0;
    
    // window.ctx = ctx;
    for (var i = 0; i < step + 1; i++) {
        var y = (h / step) * i;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);

        if (cfg.data[i]) {
            var text = $('<div class="text">');
            text.text(cfg.data[i][0]);
            text.css('width', text_w/2).css('left', x/2);

            component.append(text);
        }
        
    }

    step = cfg.data.length + 1;
    for (var i = 0; i < step + 1; i++) {
        var x = (w / step) * i;
        ctx.moveTo(x,0);
        ctx.lineTo(x,h);
    }
    
    ctx.stroke();

    component.append(cns);

    var cns = $('<canvas>');
    var ctx = cns[0].getContext('2d');
    cns[0].width = ctx.width = w;
    cns[0].height = ctx.height = h;
    //cns.css('background-color', "#00ffffff");
    cns.css('opacity', 0.5);

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FF8878";

    var row_w = w / (cfg.data.length + 1);
    ctx.moveTo(row_w, h - h * cfg.data[0][1]);
    for (i in cfg.data) {
        var item = cfg.data[i];
        var x = row_w * i + row_w;
        var y = h - h * item[1];
        
        ctx.lineTo(x, y);
        ctx.arc(x, y, 5, 0, 2*Math.PI);
        ctx.fillStyle = item[2] ? item[2] : '#595959';
        ctx.fillText(((item[1] * 100) >> 0) + '%', x-10, y-10);
        ctx.moveTo(x, y);
        console.log(item);
    }

    ctx.stroke();

    component.append(cns);
        
    return component;
};



