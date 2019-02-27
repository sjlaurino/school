import Student from "../models/student.js";
import Teacher from "../models/teacher.js";
import Classroom from "../models/classroom.js";
import ID from "../models/ID.js";


let _IDApi = axios.create({
  baseURL: 'http://localhost:3000/api/ID'
})

let _state = {
  IDs: {}
}

let _subscribers = {
  IDs: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}


export default class SchoolService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get ID() {
    return _state.IDs
  }

  getIDs() {
    _IDApi.get()
      .then(res => {
        let data = res.data.map(t => new ID(t))
        _setState('IDs', data)
      })
      .catch(err => _setState('error', err.response.data))
  }

  addID(rawID) {
    let newID = new ID(rawID)
    _IDApi.post('', newID)
      .then(res => {
        this.getIDs()
      })
      .catch(err => _setState('error', err.response.data))
  }
  removeID(id) {
    _IDApi.delete(id)
      .then(res => {
        this.getIDs()
      })
    // This one is on you to write.... 
    // The http method is delete at the todoId
  }

}