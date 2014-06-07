define([
  'app/utils'
], function(Utils){
  'use strict';

  var run = function() {
    test('converts celsius to fahrenheit', function(){
      strictEqual(Utils.toFahrenheit(32),89.6,'converts 32c to 89.6F');
      strictEqual(Utils.toFahrenheit("hot"), null, 'returns null when given a string');
      strictEqual(Utils.toFahrenheit(), null, 'returns null when given undefined')
    });
  };

  return {run: run}
});
