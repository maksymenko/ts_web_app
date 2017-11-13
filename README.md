## Type Script web app kick starter guide

### Getting started
```
npm run devserver
```
Then open `http://localhost:8000`

### Starter guide

#### Install nodejs `https://nodejs.org`
```
$ wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-x64.tar.xz
$ tar -xf node-v8.9.0-linux-x64.tar.xz
$ export PATH=$PATH:./node-v8.9.0-linux-x64/bin
```

#### Initiate project

* Initiate `npm` project (create `package.json`)
```
npm init -y
```
* Install `Typescript` compiler as dev dependency
```
npm install typescript -D
```

* Now lets create first Typescript class and compile to JavaScript to check how it works.
```
mkdir ./src
touch ./src/starter.ts
```
* Add content below to file:
```
class Starter {
  hello() {
    console.log('hello');
  }
}
let myStarte = new Starter();
myStarter.hello();
```

* Add npm script to compile `Typescript` class. Update package.json
 ```
  "scripts": {
    "compile": "tsc ./src/starter.ts",
  }
```
Generated `JavaScript` will be creates at the same folder (./src).


#### Typescript compile customization. 
Compilation process can be customized.  To do it compiler `tsc` uses `tsconfig.json` configuration file. Create this file manually or use `tsc` to initiate file for us.
```
  "scripts": {
    "init": "tsc --init"
  },
tsc --init
```
Update npm build script and run `tsc` command again. Now compiler knows where to find `ts` files and where generated files has to be created.
```
  "scripts": {
    "compile": "tsc -p ./"
  }
```
This command will ctreate `dist` folder and place generated files there. 

#### Add Webpack
In order to add application into html page all scripts have to be bundled.
`Webpack` can bundle all project files into one (or split into chunks) to use this bundle within html page.
* Add `webpack` as dev dependency.
```
npm install webpack -D
```
* Create configuraion file `webpack.config.js` so webpack knows what to and how to bundle project.
Configure webpack rule to compile `.ts` files to `.js`. Add `ts-loader` ad dev dependency to compile typescript.
```
npm install ts-loader -D
```
* Update `npm` script to use webpack to build project and create single `.js` bundle file.
```
  "scripts": {
    "build": "webpack"
  }
```
Next add webpack dev server to start web application. This server supports hot redeploy.
```
npm install webpack-dev-server -D
```
And script to start server
```
"scripts": {
    "devserver": "webpack-dev-server --port 8000 --inline --hot --progress  --history-api-fallback --color --content-base app --hot"
  }
```

### Add HTML page
Create index.html and webpack plugin to inset bundle into page.
```
npm install html-webpack-plugin -D
```

#### Run server
```
npm run devserver
```
Run browser and open url `http://localhost:8000`.





#### References
* https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
* https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html
* https://egghead.io/lessons/typescript-create-high-quality-npm-packages-using-typescript
* ts usage https://inviqa.com/blog/using-typescript-node-js 
