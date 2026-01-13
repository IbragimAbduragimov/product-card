export class Form {

  constructor(id) {
    this.id = id;
    this.user = undefined;
  }

  getValues() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    this.form.reset();

    return data;
  }

  checkValidity() {
    return this.form.checkValidity();
  }
  reset() {
    this.form.reset();
  }
}
