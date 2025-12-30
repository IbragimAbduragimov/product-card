export class Modal {
  constructor(id) {
    this.id = id
    this.form = document.querySelector('.form-container')
  }
get() {
  this.emailData = Object.fromEntries(this.form)
  console.log(this.emailData)
}

  checkValidity() {
    this.form.checkValidity() ? true : false
}
  reset() {
    this.form .reset()
  }
}
const emailForm = document.getElementById('email-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const emailData = Object.fromEntries(formData.entries());
  console.log(emailData);
});