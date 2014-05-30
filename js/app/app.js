define([
  'jquery',
  'bootstrap'
], function ($, bootstrap) {
  'use strict';

  var id = "content";

  var initialize = function () {
    $('body').append('<div id="'+id+'">Hello from  id inside</div>');
  };

  var getId = function () {
    return id;
  };

  var currentTime = function (){
    var date = new Date();
    return [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ].join(':');
  };

  var displayTime = function (){
    var html = [
      '<div class="alert">',
        '<button type="button" class="close" data-dismiss="alert">&times;</button>',
        'The time is ',
        currentTime(),
      '</div>'
    ].join('');

    $('#' + id).html(html);
  };

  return {
    initialize: initialize,
    getId: getId,
    displayTime: displayTime
  }
});
