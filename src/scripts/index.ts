declare var $:any;

var app:any = {};

function msg(moduleName: string): string {
  return `Hi, I came from ${moduleName} module`;
}

$(document).ready(function() {

    const appId = 'app';

    // our rugular javascript
    app.javascriptModule.print(appId, msg('JavaScript'));

    // revealing module pattern with typescript
    app.typescriptModule1.print(appId, msg('TypeScript'));

    // refactored typescriptModule1 using classes and interfaces
    app.typescriptModule2.print(appId, msg('Refactored TypeScript'));
});
