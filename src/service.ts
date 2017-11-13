class Service {
  sayHello(name: string) {
    let body = document.getElementsByTagName("body")[0];
    let appElement = document.createElement("div");
    appElement.innerText = 'Hello ' + name;
    body.appendChild(appElement);
  }
}

export {Service};