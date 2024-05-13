(function ($, Drupal) {
  Drupal.behaviors.SlickConfig = {
    attach: function (context, settings) {
      // see http://kenwheeler.github.io/slick/#getting-started for example configurations
      var carousels = $(".js-carousel");
      carousels.each(function() {
        $(this).not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          adaptiveHeight: true,
          prevArrow: '<div class="slick-prev">prev</div>',
          nextArrow: '<div class="slick-next">next</div>',
          responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
        });
      });
    }
  };
} (jQuery, Drupal));
