/**
  Typescript file
  This is refactored typescriptModule1 using Typescript sugar
*/
interface TypescriptModule2I {
  /**
   * Print simple message
   *
   * @param appId: string where I print message
   * @param msg: string|null text I should print. If null default text will be printed
   * @return: void
   */
  print(appId: string, msg: string|null): void;
}
class TypescriptModule2 implements TypescriptModule2I {

  private printMsg = (appId: string, msg: string) => {
    $(document.getElementById(appId)).append(`<div>${msg}</div>`);
  }

  public print (appId: string, msg: string){
    this.printMsg(appId, msg);
  }
}

var app = app || {};
    app.typescriptModule2 = new TypescriptModule2();
