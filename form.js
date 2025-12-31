export class Modal {
  constructor(id) {
    this.id = id
  }
getInfo() {
  this.form.addEventListener('submit', (event) => {
    event.preventDefault();
    this.form = document.querySelector('.form-container').value
    console.log(this.form)
  })
}

  checkValidity() {
    return this.form.checkValidity()
}
  reset() {
    this.form.reset()
  }
}

const modalRegist = new Modal('1')
modalRegist.getInfo()