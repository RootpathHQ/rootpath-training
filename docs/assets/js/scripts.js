
// Toggle Navigation
document.querySelector('.nav-button-open').addEventListener('click', function () {
  document.querySelector('.navigation-overlay').classList.add('visible');
});
document.querySelector('.nav-button-close').addEventListener('click', function () {
  document.querySelector('.navigation-overlay').classList.remove('visible');
});
