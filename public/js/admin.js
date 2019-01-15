// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function(){
  let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
})

$('#file').change(function(e){
  var file = this.files[0];

  if(file.size < 5000000 && file.type.match('image/')){
    $('label').html(this.files[0].name + ' <i class="far fa-times-circle" id="close"></i>');
    $('#err_msg').text('');
    $('label').removeClass('hover')
    $('#close').addClass('hover');
    $("#file").prop('disabled', true);
    $('#close').click(function(){
      $('#file').val('');
      $('label').html('Choose a file <i class="fas fa-upload"></i>');
      $('label').addClass('hover')
      setTimeout(function(){
        $("#file").prop('disabled', false);

      }, 1)
    })
  }else if(file.size > 5000000){
    $('#err_msg').text('Image must be less than 5mb');
    $(this).val('');
    $('label').html('Choose a file <i class="fas fa-upload"></i>')

  }else if(!file.type.match('image/')){
    $('#err_msg').text('You can upload only image');
    $('label').html('Choose a file <i class="fas fa-upload"></i>');

  }
})
