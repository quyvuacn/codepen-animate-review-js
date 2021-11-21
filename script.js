$("header").append("<div class='glitch-window'></div>");
//fill div with clone of real header
$( ".glitched" ).clone().appendTo( ".glitch-window" );

$(".inspiration-button").click(function(){
   $(".header")[0].style.position = 'fixed'
   $(".inspiration-button")[0].style.display = 'none'

   $(".header").animate({
       'font-size' : '3rem',
       'top':0,     
   },2000,function(){
         $(".container")[0].style.display = 'flex'  
         var timelineSwiper = new Swiper ('.timeline .swiper-container', {
            direction: 'vertical',
            loop: false,
            speed: 1600,
            pagination: '.swiper-pagination',
            paginationBulletRender: function (swiper, index, className) {
              var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
              return '<span class="' + className + '">' + year + '</span>';
            },
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            breakpoints: {
              768: {
                direction: 'horizontal',
              }
            }
          });  
   })
  
})

$(".continue").click(function(){
   $(".container").animate({
      zoom:0,
   },1000,function(){
      $(".container")[0].style.display = 'none'
      $(".cards")[0].style.display='block'
      $.fn.commentCards = function(){
         return this.each(function(){ 
           var $this = $(this),
               $cards = $this.find('.card'),
               $current = $cards.filter('.card--current'),
               $next;
       
           $cards.on('click',function(){
             if ( !$current.is(this) ) {
               $cards.removeClass('card--current card--out card--next');
               $current.addClass('card--out');
               $current = $(this).addClass('card--current');
               $next = $current.next();
               $next = $next.length ? $next : $cards.first();
               $next.addClass('card--next');
             }
           });
       
           if ( !$current.length ) {
             $current = $cards.last();
             $cards.first().trigger('click');
           }
       
           $this.addClass('cards--active');
       
         })
       
       };
       
       $('.cards').commentCards(); 
       setInterval(
         function(){
           $cards.find('.card--current').click();  
         }, 
         6000 // Number of milliseconds to trigger the change, this equals 6 seconds
       )
       
   })
})






