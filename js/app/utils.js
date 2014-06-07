define([], function(){
  'use strict';

  var toFahrenheit = function(celsius) {
    if (isNaN(parseFloat(celsius)) || !isFinite(celsius)) {
      return null;
    } else {
      return (celsius * 9 / 5) + 32;
    }
  };

  return {toFahrenheit: toFahrenheit}
});
