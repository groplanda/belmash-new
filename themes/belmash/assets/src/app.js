require('slick-carousel');

import $ from 'jquery';
import Modals from './modules/Modals';
import RemoveDisabled from './modules/RemoveDisabled';
window.$ = window.jQuery = $;

$(document).ready(function() {

  $('.open-info').on('click', function(e){
    const modalSelector = document.getElementById('modal');
    modalSelector.classList.add('loading');
    $.request('onShowMore', {
      data: {
        'id': e.target.dataset.id,
      },
      update: {'@modal.htm' : '#modal',}
    })
    .done(() => {
      setTimeout(() => {
        modalSelector.classList.remove('loading');
      }, 300)
    });
  })


  $('.slider__home').slick({
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<div class="prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
    nextArrow: '<div class="next"><i class="fas fa-long-arrow-alt-right"></i></div>',
  });
  $('.partners__slider').slick({
    slidesToShow: 4,
    infinite: true,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('form').on('ajaxSuccess', function(event) {
    event.currentTarget.reset();
  });
  $(window).on('ajaxInvalidField', function(event, fieldElement, fieldName, errorMsg, isFirst) {
    $(fieldElement).closest('.form-group').addClass('has-error');
  });

  $(document).on('ajaxPromise', '[data-request]', function() {
    $(this).closest('form').find('.form-group.has-error').removeClass('has-error');
  });

})

document.addEventListener('DOMContentLoaded', () => {
  const navbarMenu = document.querySelector('.navbar'),
        navbar = document.querySelector('.navbar__list'),
        hamburgerMenu = document.getElementById('menuToggle'),
        drawlerMenu = document.querySelector('.mobile__nav'),
        loading = document.getElementById('loading');
  Modals();

  loading.classList.add('fade');
  setTimeout(() => {
    loading.remove();
  }, 1000)

  RemoveDisabled('#checkbox-modal', '.popup .button');
  RemoveDisabled('#checkbox', '.footer__form-ajax .button');

  navbar.addEventListener('click', e => {
    const target = e.target;
    if(target && target.parentNode.classList.contains('has-child')) {
      e.stopPropagation();
      target.nextElementSibling.classList.toggle('open')
    }
  })
  hamburgerMenu.addEventListener('click', () => {
    drawlerMenu.classList.toggle('open');
  })

  if(/iPhone|Android/i.test(navigator.userAgent)){
    drawlerMenu.append(navbar);
  }

  window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth <= 600) {
      drawlerMenu.append(navbar);
    } else {
      navbarMenu.appendChild(navbar);
    }
  });

})