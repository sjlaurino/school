export default class ID {
  constructor(data) {
    this.name = data.name
    this.teacher = data.teacher
    this.school = data.school
    this.classroom = data.classroom
  }

  grabTemplate() {
    return `
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://place-hold.it/200x200?text=Image Here" class="card-img">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">${this.name}</h3>
        <h4 class="card-title">${this.school}</h4>
        <h4 class="card-title">${this.teacher}</h4>
        <p class="card-text"><small class="text-muted">${this.classroom}</small></p>
      </div>
    </div>
  </div>
</div>
    `
  }
}