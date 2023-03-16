// fake-select
$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('active');
  $(this).addClass('active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').find('.fake-select__link').addClass('active');
});

// home
new Swiper(".branches-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".branches-slider-next",
    prevEl: ".branches-slider-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

new Swiper(".about-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

// branch
$(document).ready(function(){$('.slow').bind("click",function(e){var anchor=$(this);$('html, body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top},1000);e.preventDefault();});});


document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 768){
    new Swiper(".nav-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      freeMode: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }
})

new Swiper(".portfolio-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

// about
let video = document.querySelector("#video");
let playBtn = document.querySelector(".play-btn");
if(video){
  playBtn.addEventListener('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('collapse');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
  }, false);

  let $video = $("#video"),
  mousedown = false;

  $video.click(function(){
  if (this.paused) {
      this.play();
      return false;
  }
  return true;
  });

  $video.on('mousedown', function () {
  mousedown = true;
  });

  $(window).on('mouseup', function () {
  mousedown = false;
  });

  $video.on('play', function () {
    $video.attr('controls', '');
  });

  $video.on('pause', function () {
    $(playBtn).toggleClass('collapse');
  if (!mousedown) {
      $video.removeAttr('controls');
  }
  });

}

// vacancies
$(".collapse-item__link").click(function(){
    $(this).toggleClass("active");
    if($(this).find(".collapse-item__text")[0].innerHTML == "Подробнее"){
      $(this).find(".collapse-item__text")[0].innerHTML = "Свернуть"
    } else{
      $(this).find(".collapse-item__text")[0].innerHTML = "Подробнее"
    }
  }
)

// article
new Swiper(".news-slider", {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: ".news-slider-next",
    prevEl: ".news-slider-prev",
  },
});
