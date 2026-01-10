export class Modal {
  constructor(id) {
    this.id = id;
    this.password = document.querySelector('password-input');
    this.password2 = document.querySelector('password2-input');
    this.form = document.querySelector('.form-container').value;
    this.user = undefined;
  }
getInfo() {
  this.form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (this.password.value !== this.password2.value || !this.form.checkValidity())
    { 
      console.log('пароли не совпадают или форма не валидна');
    }
    else{
      this.form = event.target;
      this.data = new FormData(form);
      this.user = Object.fromEntries(data.entries());
      console.log(user);
    }
  })
}

  checkValidity() {
    return this.form.checkValidity();
}
  reset() {
    this.form.reset();
  }
}

const modalRegist = new Modal('1');