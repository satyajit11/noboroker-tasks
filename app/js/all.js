$(document).on('click','.link-add a', function(){
    $(this).addClass('d-none');
    $(this).parentNth(2).find('.card-addition_input').removeClass('d-none');
});
$(document).on('click','.cancel', function(){
    $(this).parentNth(2).find('textarea').val('');
    $(this).parentNth(3).find('.link-add a').removeClass('d-none');
    $(this).parentNth(2).addClass('d-none');
});
$(document).on('click','.card-list span', function(){
    $(this).parent().remove();
});
$(document).on('click','.btn-info', function(){
    var listText = $.trim($(this).parentNth(2).find('textarea').val());
    if(listText === ""){
        
    }else{
        $(this).parentNth(2).find('textarea').val('');
        $(this).parentNth(3).find('.link-add a').removeClass('d-none');
        $(this).parentNth(2).addClass('d-none');
        $(this).parentNth(4).find('.card-body').append("<div class='col-12 d-flex ui-state-highlight card-list'>" + listText + "<span><i class='far fa-trash-alt'></i></span></div>");
        
    };
});

$( function() {
    $( ".card-body.droptrue" ).sortable({
        placeholder: "ui-state-highlight1",
      connectWith: ".card-body"
    });
 
    $( ".card-body.dropfalse" ).sortable({
        placeholder: "ui-state-highlight1",
      connectWith: ".card-body",
    });
    $( ".card-body.dropfalse1" ).sortable({
        placeholder: "ui-state-highlight1",
        connectWith: ".card-body",
    });
    $( "#sortable1, #sortable2, #sortable3" ).disableSelection();
  } );