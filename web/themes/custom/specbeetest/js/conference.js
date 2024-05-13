(function ($, Drupal) {
    Drupal.behaviors.specbeeTest = {
      attach: function attach(context, settings) {
        const tabElement = document.querySelectorAll('.conference__title');
        const tabContent = document.querySelectorAll('.conference__content');

        tabContent[0].style.display = "block";

        tabElement.forEach(function (i) {
          i.addEventListener('click', function (event) {
            $('.js-carousel').slick("refresh");
            for (let x = 0; x < tabElement.length; x++) {
              if (event.target.id == tabElement[x].id) {
                tabElement[x].className = tabElement[x].className.replace(" active", "");
                tabContent[x].style.display = "block";
                event.currentTarget.className += " active";
              } else {
                tabContent[x].style.display = "none";
                tabElement[x].className = tabElement[x].className.replace(" active", "");
              }
            }
          });
        });
      }
    };
  })(jQuery, Drupal);