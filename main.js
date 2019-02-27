import SchoolController from "./components/schoolController.js";

class App {
  constructor() {
    this.controllers = {
      schoolController: new SchoolController()
    }
  }
}

window['app'] = new App()  