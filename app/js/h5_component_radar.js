var H5ComponentRadar = function(name, cfg) {
    var component = new H5ComponentBase(name, cfg);

    var w = cfg.width;
    var h = cfg.height;

    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    component.append(cns);

    var r = w/2;
    

    var step = cfg.data.length;
        
    var isBlue = false;
    for (s = 10; s > 0; s--) {
        ctx.beginPath();
        for (var i = 0; i < step; i++) {
            var rad = (2*Math.PI / 360) * (360/step) * i;
            var x = r + Math.sin(rad) * r * (s/10);
            var y = r + Math.cos(rad) * r * (s/10);
            if (i == 0) {
                ctx.moveTo(x, y);
            }
            
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = (isBlue = !isBlue) ? "#99c0ff" : "#f1f9ff";
        ctx.fill();
    }
    
    ctx.beginPath();
    for (var i = 0; i < step; i++) {
        var rad = (2*Math.PI / 360) * (360/step) * i;
        var x = r + Math.sin(rad) * r;
        var y = r + Math.cos(rad) * r;

        ctx.moveTo(r, r);
        ctx.lineTo(x, y);

        
        if (cfg.data[i]) {
            var text = $('<div class="text">');
            text.text(cfg.data[i][0]);
                        
            if (x > w /2) {
                text.css('left', w/2);
            } else {
                text.css('right', (w-x)/2);
            }

            if (y > h/2) {
                text.css('top', y/2);
            } else {
                text.css('bottom', (h-y)/2);
            }
            
            component.append(text);
        }
    }
    ctx.strokeStyle = "#f1f1f1";
    ctx.stroke();


    // data layer
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    component.append(cns);

    

    ctx.strokeStyle = "#f00";
    
    var drawRadar = function(per) {
        ctx.clearRect(0,0,w,h);
        ctx.beginPath();
        for (var i = 0; i < step; i++) {
            var rad = (2*Math.PI / 360) * (360/step) * i;
            var rate = cfg.data[i][1] * per;
            var x = r  + Math.sin(rad) * r * rate;
            var y = r  + Math.cos(rad) * r * rate;

            ctx.lineTo(x, y);

        }

        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = "#ff7676";
        for (var i = 0; i < step; i++) {
            var rad = (2*Math.PI / 360) * (360/step) * i;
            var rate = cfg.data[i][1] * per;
            var x = r  + Math.sin(rad) * r * rate;
            var y = r  + Math.cos(rad) * r * rate;

            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
        }
    };

    drawRadar(1);
    
    component.on('onLoad', function() {
        var s = 0;
        for (var i = 0; i < 100; i++) {
            setTimeout(function() {
                s += .01;
            }, i*10+500);
        }
    });

    component.on('onLeave', function() {
    });
    
    return component;
};



