'use strict'

window.lazyLoad = () => {
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"))

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          lazyImage.src = lazyImage.dataset.src
          lazyImage.srcset = lazyImage.dataset.srcset
          lazyImage.classList.remove("lazy")
          lazyImage.classList.add("lazy--loaded")
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    })
  }
}

window.onload = () => {
  window.lazyLoad()
}

jQuery(($) => {

  $(document).ready(() => {

    skillsEffect();

    $(document).on('click', '.filters--work .filter', function() {
      var siblings = $(this).siblings();

      $.map(siblings, (sibling) => {
        $(sibling).removeClass('active');
      });

      $(this).addClass('active');

      $('#works').isotope({
        filter: $(this).attr('data-filter')
      });
    });

    $('#works').isotope({
      filter: '*'
    });

    $('#tabs-about .tab').click(function(event) {
      if (! $(this).hasClass('active')) {
        $('#tabs-about .tab').removeClass('active');
        $(this).addClass('active');

        $('.about .area').removeClass('active');
        $(`${$(this).attr('data-href')}`).addClass('active');
      }

      event.preventDefault();
    });

    $('#tabs-services .tab').click(function(event) {
      if (! $(this).hasClass('active')) {
        $('#tabs-services .tab').removeClass('active');
        $(this).addClass('active');

        $('.services .area').removeClass('active');
        $(`${$(this).attr('data-href')}`).addClass('active');
      }

      event.preventDefault();
    });

    $('#slider-feedbacks').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      prevArrow: $('.slider--feedbacks .prev'),
      nextArrow: $('.slider--feedbacks .next'),
      appendDots: $('.slider__tools .slider__dots'),
      customPaging: (slider, index) => {
        let src = $(slider.$slides[index]).find('.author__thumbnail img').attr('src'),
            alt = $(slider.$slider[index]).find('.author__name').text();

        return `<img src="${src}" alt="${alt}" />`;
      }
    });

  })


  /**
   * Starting skill bars effect.
   */
  const skillsEffect = (transition = 2) => {

    var bars = [
      {
        element: $('#skill-ui .skill__bar'),
        width: 75,
        color: '#9c5da5'
      },
      {
        element: $('#skill-wd .skill__bar'),
        width: 85,
        color: '#11b0de'
      },
      {
        element: $('#skill-wp .skill__bar'),
        width: 70,
        color: '#d67f7f'
      },
      {
        element: $('#skill-hc .skill__bar'),
        width: 90,
        color: '#20bc9d'
      },
      {
        element: $('#skill-ad .skill__bar'),
        width: 85,
        color: '#bb8a36'
      },
    ];

    bars.forEach(bar => {

      bar.element.css({
        transition: String(transition) + 's',
        width: String(bar.width) + '%',
        background: bar.color
      });

    });

  }

})