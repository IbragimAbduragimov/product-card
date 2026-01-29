async function getUsers() {
  console.log('Загрузка пользователей...');

  const usersFromStorage = localStorage.getItem('users'); 

  if(!usersFromStorage) {
    const response = await fetch('./users.json');
    const users = await response.json();

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          localStorage.setItem('users', JSON.stringify(users));
          resolve(users);
      }
        catch(error) {
          reject(new Error('Ошибка при загрузке пользователей'));
        }
      }, 3000);
    });  
    return users;
  } 
  else {
    console.log('пользователи уже загружены');
    return JSON.parse(localStorage.getItem('users'))
  } 
};

function renderUsers(users = []) {
  
  const userTemplate = document.getElementById('user-template');
  const userList = document.getElementById('users');
  const loading = document.getElementById('loading-container');

  loading.style.display = 'none';
  userList.innerHTML = '';

  users.forEach(user => {
    const userClone = userTemplate.content.cloneNode(true);

    const container = userClone.querySelector('.user-container')
    container.dataset.id = user.id

    userClone.querySelector('.user-id').textContent = `id: ${ user.id }`
    userClone.querySelector('.user-name').textContent = `Имя: ${ user.name }`;
    userClone.querySelector('.user-surname').textContent = `Фамилия: ${ user.surname }`;
    userClone.querySelector('.user-email').textContent = `Электронная почта: ${ user.email }`;
    userClone.querySelector('.user-age').textContent = `Возраст: ${ user.age }`;
    
    const btnDeleteUser =  userClone.querySelector('.btn-delete-user')

    btnDeleteUser.addEventListener('click', (event) => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = users.filter(user => user.id !== Number(container.dataset.id));

      localStorage.setItem('users', JSON.stringify(updatedUsers));
      container.remove();  
    });

    userList.appendChild(userClone);
  });
};

async function init() {
  const users = await getUsers();
  renderUsers(users);
}

init()

//Кнопка для удаления всех карточек

const btnDeleteUsers = document.getElementById('btn-delete-them');

btnDeleteUsers.addEventListener('click', () => {
  localStorage.removeItem('users');
  renderUsers();
});

// Кнопка для получения всех карточек

const btnShowUsers = document.getElementById('btn-show-all');

btnShowUsers.addEventListener('click', async() => {
  const users = await getUsers();
  renderUsers(users);
});