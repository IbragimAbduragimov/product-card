export class Form {

  constructor(id) {
    this.id = document.querySelector(id);
    this.user = undefined;
  }

  getValues() {
    this.form.addEventListener('click', () => {
      const formData = new FormData(this.form);
      const data = Object.fromEntries(formData.entries());
      return data;
    })
  }

  checkValidity() {
    return this.form.checkValidity();
  }
  reset() {
    this.form.reset();
  }
}
