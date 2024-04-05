const root = document.querySelector(':root');
const darkModeBtn = document.getElementById('dark-mode-toggle');
darkModeBtn.addEventListener('click', () => {
  if (root.dataset.theme == "dark") {
    root.dataset.theme = 'light';
  } else {
    root.dataset.theme = 'dark';
  }
  darkModeBtn.classList.toggle('light')
})

function userPreferenceCheck() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light )')
  if (mediaQuery.matches) {
    root.dataset.theme = 'light';
    darkModeBtn.classList.toggle('light')
  }
}
userPreferenceCheck();
const url = window.location.href;
console.log(url);