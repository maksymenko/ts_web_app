## Type Script web app starter guide

### Getting started

> *  Optional run docket linux container
```
docker run -t -i alpine /bin/sh
apk add ca-certificates
apk --update  add wget

```

* Install nodejs `https://nodejs.org`
```
$ wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-x64.tar.xz
$ tar -xf node-v8.9.0-linux-x64.tar.xz
$ export PATH=$PATH:./node-v8.9.0-linux-x64/bin
```



#### Initialize project

* Initiate `npm` project (create `package.json`)
```
npm init -y
```
* Install `Typescript` compiler 
```
npm install typescript -g
```

* Now lets create Typescript class and compile to JavaScript to check how it works.
```
modir ./src
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

* Compile `Typescript` file by script created above.
 ```
tsc ./src/starter.ts
```
Then we check file `Starter.js` in the same directory with original file.

#### Add `Typescript` configuration file.
`tsconfig.json` - is used to define how `ts` file is compiled into `js`.
```
tsc --init
```
Remove unused parameters to have clean file.

#### Add Webpack

`Webpack` is greate tool to bundle all project files into one (or split into chanks) to use this bunble within html page.
