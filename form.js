export class Form {

  constructor(id) {
    this.id = id;
    this.user = undefined;
  }

  getInfo(form) {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
        this.form = event.target;
        this.data = new FormData(form);
        this.user = Object.fromEntries(data.entries());
        console.log(user);
    })
  }

  checkValidity() {
    return this.form.checkValidity();
  }
  reset() {
    this.form.reset();
  }
}
