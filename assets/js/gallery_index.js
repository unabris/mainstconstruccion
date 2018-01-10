$(function() {
  'use strict';

  var itemsPerPage = 6;

  if ($(window).width() < 481) {
    itemsPerPage = 3;
  }

  var mixer = mixitup('.gallery', {
    selectors: {
      target: '.gallery__item',
      pageList: '.mixitup-pagination'
    },
    pagination: {
      limit: itemsPerPage
    },
    templates: {
      pager: '<div class="${classNames}" data-page="${pageNumber}">${pageNumber}</div>',
      pagerPrev: '<div class="${classNames}" data-page="prev">❮</div>',
      pagerNext: '<div class="${classNames}" data-page="next">❯</div>'
    }
  });
});
