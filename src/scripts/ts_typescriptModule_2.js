"use strict";
var TypescriptModule2 = /** @class */ (function () {
    function TypescriptModule2() {
        this.printMsg = function (appId, msg) {
            $(document.getElementById(appId)).append("<div>" + msg + "</div>");
        };
    }
    TypescriptModule2.prototype.print = function (appId, msg) {
        this.printMsg(appId, msg);
    };
    return TypescriptModule2;
}());
var app = app || {};
app.typescriptModule2 = new TypescriptModule2();
