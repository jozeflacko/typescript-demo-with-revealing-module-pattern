# Typescript-and-revealing-module-pattern

This is a very simple app using Revealing module pattent with TypeScript and JQuery

Demo is an demonstration of how easily could be Typescript added into already existing.

- In the demo I am adding all modules/classes into on main object called app
- After build all Typescript files are transpiled into JavaScript files (Es5) and created
  right next to typescript files. Then this JavaScript files should be linked into the html pages.
- In this example not used any imports/exports

How to start app:
1. install typescript globally on your pc
2. navigate with command line to the folder where the project is saved
3. type: tsc
4. all Typescript files will be transpiled into JavaScript files
5. start browser and open index.html
6. For development to watch Typescript files and automatically transpile them on save write in command line: "tsc -w"
