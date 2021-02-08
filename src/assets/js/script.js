import { lazyLoad } from '../vendor/lazyLoad.js';
import { yandexMap } from '../vendor/yandexMap.js';
import '../vendor/jQuerySimpleCounter.js';

jQuery(($) => {

  lazyLoad();

  $(document).ready(() => {

    yandexMap();
    isotopeInit();
    slidersInit();
    dropdownsInit();
    scrollEventsInit();
    
  })

})

/**
 * Starting isotope initialization.
 */
const isotopeInit = () => {

  $('#works').isotope({
    filter: '*'
  });

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

}

/**
 * Starting sliders initialization.
 */
const slidersInit = () => {

  $('#slider-feedbacks').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
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

}

/**
 * Starting dropdowns initialization.
 */
const dropdownsInit = () => {

  $('[data-role="activator"]').on('click', function() {
    var area = $(`${$(this).data('href')}`);

    $(this).toggleClass('active');

    area.toggleClass('active');
  });

}

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

/**
 * Starting counter initialization. 
 */
const counterInit = (elements) => {
  
  elements.each((index, element) => {
    let end = parseInt($(element).data('count'));

    $(element).jQuerySimpleCounter({
      start: 1,
      end: end,
      easing:'swing',
      duration: 3000
    })
  });

}

/**
 * Starting scroll events initialization.
 */
const scrollEventsInit = () => {

  var reached = {
    about: false,
    facts: false
  }

  $(window).scroll(function() {
    var hT = $('#about').offset().top,
        hH = $('#about').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();

    if (wS > (hT + hH - wH) && !reached.about) {
        reached.about = true;
        skillsEffect();
    }
  });

  $(window).scroll(function() {
    var hT = $('#facts').offset().top,
        hH = $('#facts').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();

    if (wS > (hT + hH - wH) && !reached.facts) {
      reached.facts = true;
      counterInit($('#facts .fact .fact__count'));
    }
  });

}