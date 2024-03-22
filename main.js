const body = document.querySelector('body');
const darkModeBtn = document.getElementById('dark-mode-toggle');
darkModeBtn.addEventListener('click', () => {
  if (body.dataset.theme == "dark") {
    body.dataset.theme = 'light';
  } else {
    body.dataset.theme = 'dark';
  }
})

function userPreferenceCheck() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light )')
  if (mediaQuery.matches) {
    body.dataset.theme = 'light';
  }
}