import {Service} from './service';

class Starter {
  hello() {
    let service = new Service();
    service.sayHello('Tom');
  }
}
let myStarter = new Starter();
myStarter.hello();