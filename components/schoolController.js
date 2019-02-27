import SchoolService from "./schoolService.js";
import ID from "../models/ID.js";
let _ss = new SchoolService()

function drawID() {
  let cards = _ss.ID
  let template = ''
  cards.forEach(card => {
    template += card.grabTemplate()
  })
  document.querySelector('#card').innerHTML = template
  document.querySelector('#card-form').innerHTML = `
<form>
        <div class="form-group">
          <label for="exampleInputEmail1">School</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter School Name">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Classroom</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter Classroom Name">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Teacher</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter Teacher Name">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Student</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter Student Name">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>`
}


export default class SchoolController {
  constructor() {
    _ss.addSubscriber('IDs', drawID)
    _ss.getIDs()
  }

  addID(event) {
    event.preventDefault()
    let form = event.target
    let newID = {
      name: form.name.value,
      teacher: form.teacher.value,
      school: form.school.value,
      classroom: form.classroom.value
    }
    _ss.addID(newID)
    form.reset()
  }
  removeID() {
    _ss.removeID
  }
  getIDs() {
    _ss.getIDs()
  }
}