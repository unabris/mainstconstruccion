$(function() {
  'use strict';

  $("#slider").slidesjs({
    play: {
      active: false,
      effect: "slide",
      interval: 5000,
      auto: true,
      swap: true,
      pauseOnHover: true,
      restartDelay: 0
    },
    pagination: {
      active: false
    },
    navigation: {
      active: false
    }
  });
});
