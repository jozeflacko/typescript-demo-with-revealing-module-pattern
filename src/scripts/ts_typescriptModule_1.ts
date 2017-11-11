var app = app || {};

/**
  Typescript file
  This is a simple script using Revealing module pattent and TypeScript
*/
app.typescriptModule1 = (function() {

  const print = (appId: string, msg: string): void => {
    $(document.getElementById(appId)).append(`<div>${msg}</div>`);
  }
  return {
    print
  }

})();
