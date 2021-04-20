$(document).ready(function(){

  $('.next').click(nextImage);
  $('.prev').click(prevImage);

  function nextImage(){
    /* referenze */
    var activeImg = $('.box-img img.active');
    var activeCircle = $('.circle i.active');
    /* tolgo classe active */
    activeImg.removeClass('active');
    activeCircle.removeClass('active');
    
    if(activeImg.hasClass('last')){
    /* dopo l'ultima img active passa alla prima */  
      $('.box-img img.first').addClass('active');
      $('.circle i.first').addClass('active');

    }else {
      /* active passa ad ogni img successiva */
      activeImg.next('img').addClass('active');
      activeCircle.next('i').addClass('active');

    }
    

  }

  function prevImage(){
    /* referenze */
    var activeImg = $('.box-img img.active');
    var activeCircle = $('.circle i.active');
    /* tolgo classe active */
    activeImg.removeClass('active');
    activeCircle.removeClass('active');
    /*  */
    if(activeImg.hasClass('first')){
      /* se arrivo alla prima, active passa all'ultima */
      $('.box-img img.last').addClass('active');
      $('.circle i.last').addClass('active');

    }else{
      /* active passa ad ogni img precedente */
      activeImg.prev('img').addClass('active');
      activeCircle.prev('i').addClass('active');

    }

  }

})