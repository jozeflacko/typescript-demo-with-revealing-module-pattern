"use strict";

/**
  Regular Javascript file using Revealing module pattern
*/
var app = app || {};

app.javascriptModule = (function() {
      function print(appId, msg) {
        $(document.getElementById(appId)).append('<div>'+msg+'</div>');
      }
      return {
        print : print
      };
})();
