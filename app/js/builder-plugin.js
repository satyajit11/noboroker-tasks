(function($) {
    $.fn.parentNth = function(n) {
        var el = $(this);
        for(var i = 0; i < n; i++)
            el = el.parent();
        return el;
    };
    $.fn.colorChange = function(colortype,targetid) {
        var attr = $(this).attr('component-target');
        if(colortype == 'color'){
            if (typeof attr !== typeof undefined && attr !== false) {
                this.colorpicker().on('changeColor', function(event) {
                    $($(this).attr('component-target')).css('color',event.color.toHex());
                });                          
            }else {
                this.colorpicker().on('changeColor', function(event) {
                    $(targetid).css('color',event.color.toHex());
                });
            };
        }else if(colortype == 'bgcolor') {
            if (typeof attr !== typeof undefined && attr !== false) {
                this.colorpicker().on('changeColor', function(event) {
                    $($(this).attr('component-target')).css('background-color',event.color.toHex());
                });                          
            }else {
                this.colorpicker().on('changeColor', function(event) {
                    $(targetid).css('background-color',event.color.toHex());
                });
            };
        };
        return this;
    };
    $.fn.fontChange = function(targetid,defaultSize) {
        var attr = $(this).attr('component-target');
        if (typeof attr !== typeof undefined && attr !== false) {
            
            this.on('keyup keydown input', function(event) {
                var fontSize= parseInt($(this).val());
                if (isNaN(fontSize)){
                    $($(this).attr('component-target')).css('fontSize', defaultSize);
                }else {
                    $($(this).attr('component-target')).css('fontSize',fontSize+'px');
                }
            });                          
        }else {
            this.on('keyup keydown input', function(event) {
                var fontSize= parseInt($(this).val());
                if (isNaN(fontSize)){
                    $(targetid).css('font-size',defaultSize);
                }else {
                    $(targetid).css('font-size',fontSize+'px');
                }
            });
        };
        return this;
    };
    $.fn.alignment = function(targetid){
        var attr = $(this).attr('component-target');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).on('click',function(){
                var align = $(this).find(".cs-selected").attr('data-value');
                
                if(align == 'left' ){
                    $(targetid).css('text-align','left');
                }else if(align == 'right'){
                    $(targetid).css('text-align','right');
                }else if(align == 'center'){
                    $(targetid).css('text-align','center');
                }
            });                       
        }else {
            $(this).on('click',function(){
                var align = $(this).find(".cs-selected").attr('data-value');
                
                if(align == 'left' ){
                    $(targetid).css('text-align','left');
                }else if(align == 'right'){
                    $(targetid).css('text-align','right');
                }else if(align == 'center'){
                    $(targetid).css('text-align','center');
                }
            });
        };
        return this;
    };
    $.fn.scroller = function(targetid){
        this.on('click', function(event) {
            var target = "#" + this.getAttribute('data-scroll');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
        return this;
    };
    $.fn.clearForm = function() {
        return this.each(function() {
          var type = this.type, tag = this.tagName.toLowerCase();
          if (tag == 'form')
            return $(':input',this).clearForm();
          if (type == 'number' || type == 'password' || tag == 'textarea')
            this.value = '';
          else if (type == 'checkbox' || type == 'radio')
            this.checked = false;
          else if (tag == 'select')
            this.selectedIndex = -1;
        });
    };
    $.fn.sidescreen = function(targetid){
        $(this).on('click',function(){
            $(targetid).toggleClass('active');
            $('body').append($('<div/>', {
                class: 'sidescreen-backdrop in' 
            })).addClass('sidescreen-open');
        }),
        $(targetid).children().children().first().on('click', function(){
            console.log("dwdwdw");
            $(this).parentNth(2).removeClass('active');
            $('body').removeClass('sidescreen-open').find('.sidescreen-backdrop').first().remove();
        });
        return this;
    }
}(jQuery));