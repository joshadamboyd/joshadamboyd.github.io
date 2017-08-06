'use strict';

$(function() {

  // Portfolio tabs
  $('#portfolioTabs a').click(function (evt) {
    evt.preventDefault();

    $(this).tab('show');
  });

});
