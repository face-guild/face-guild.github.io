const arrow2 = document.querySelector('#arrow2');
const arrow3 = document.querySelector('#arrow3');
const arrow1 = document.querySelector('#arrow1');
const arrow4 = document.querySelector('#arrow4');
const dropped = document.querySelector('#dropped');
const droppedd = document.querySelector('#droppedd');
const arrowClass = document.querySelector('.arrow');
const dropList = document.querySelector('#dropList');
const dropListt = document.querySelector('#dropListt');
const logoutBtn = document.querySelector('#logoutBtn');
const logoutBtn2 = document.querySelector('#logoutBtn2');
const hallOfFame = document.querySelector('#hallOfFame');
const hallOfFame2 = document.querySelector('#hallOfFame2');
const hallOfFame3 = document.querySelector('#hallOfFame3');
const hallOfFame4 = document.querySelector('#hallOfFame4');

dropList.addEventListener('click', () => {
  dropped.classList.toggle('active');
  arrow2.classList.toggle('active');
  arrow1.classList.toggle('active');
});
dropListt.addEventListener('click', () => {
  droppedd.classList.toggle('active');
  arrow3.classList.toggle('active');
  arrow4.classList.toggle('active');
  console.log(arrow2.classList);
  console.log(arrow1.classList);
});
// arrow2.addEventListener('click', () => {
//   console.log(dropped.classList);
//   dropped.classList.toggle('active');
//   arrow2.classList.toggle('active');
//   arrow1.classList.toggle('active');
// });

function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  console.log(email, password);

  if (
    email.toLowerCase() === 'faceguildoperation@gmail.com' &&
    password === 'facepass1'
  ) {
    localStorage.setItem('user', JSON.stringify('userLogin'));
    location.href = 'officerAccess.html';
  } else {
    alert('Wrong Credentials');
  }
}

function checkLogin() {
  console.log('checkLogin');
  if (JSON.parse(localStorage.getItem('user')) === 'userLogin') {
    location.href = 'officerAccess.html';
  } else {
    location.href = 'login.html';
  }
}
function logout() {
  localStorage.removeItem('user');
  location.href = 'login.html';
}

function onLoad() {
  console.log('onLoad worked');
  if (JSON.parse(localStorage.getItem('user')) === 'userLogin') {
    logoutBtn.classList.add('activee');
    logoutBtn2.classList.add('activee');
    hallOfFame.classList.add('activee');
    hallOfFame2.classList.add('activee');
    hallOfFame3.classList.add('activee');
    hallOfFame4.classList.add('activee');
  } else {
    logoutBtn.classList.remove('activee');
    logoutBtn2.classList.remove('activee');
    hallOfFame3.classList.remove('activee');
    hallOfFame4.classList.remove('activee');
  }
}
