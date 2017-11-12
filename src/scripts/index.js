"use strict";
var app = {};
function msg(moduleName) {
    return "Hi, I came from " + moduleName + " module";
}
$(document).ready(function () {
    var appId = 'app';
    // our rugular javascript
    app.javascriptModule.print(appId, msg('JavaScript'));
    // revealing module pattern with typescript
    app.typescriptModule1.print(appId, msg('TypeScript'));
    // refactored typescriptModule1 using classes and interfaces
    app.typescriptModule2.print(appId, msg('Refactored TypeScript'));
});
