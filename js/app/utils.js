define([], function(){
  'use strict';

  var toFahrenheit = function(celsius) {
    if (typeof(celsius) != "number") {
      return null;
    } else {
      return (celsius * 9 / 5) + 32;
    }
  };

  return {toFahrenheit: toFahrenheit}
});
