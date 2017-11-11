"use strict";
var app = app || {};
/**
  Typescript file
  This is a simple script using Revealing module pattent and TypeScript
*/
app.typescriptModule1 = (function () {
    var print = function (appId, msg) {
        $(document.getElementById(appId)).append("<div>" + msg + "</div>");
    };
    return {
        print: print
    };
})();
