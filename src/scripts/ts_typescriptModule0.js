"use strict";
/**
  Typescript file

  add "ts_" prefix to the file to easily recognize
  that transpiled .js file came from .ts file
  and should be not changed!
*/
app.typescriptModule = (function () {
    var print = function (appId, msg) {
        $(document.getElementById(appId)).append("<div>" + msg + "</div>");
    };
    return {
        print: print
    };
})();
