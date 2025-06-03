import projects from './projects.js';

const root = document.querySelector(':root');
const darkModeBtn = document.getElementById('dark-mode-toggle');

function persistUserPreference() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light )')
  const preferedMode = localStorage.getItem('prefers-color-scheme') || 'dark';
  root.dataset.theme = (mediaQuery.matches || preferedMode == 'light')? "light": "dark";
}

function changeTheme(){
  const theme = root.dataset.theme;
  const newTheme = theme == "dark"? "light": "dark";
  root.dataset.theme = newTheme;
  localStorage.setItem("prefers-color-scheme", newTheme)
}

function addLinkDelay(e){
  e.preventDefault();
  setTimeout(()=>{
    window.location.href = this.href;
  }, 150)
}

function create(tag, optionsObj){
  const element = document.createElement(tag);
  Object.entries(optionsObj).forEach(entry =>{
    const [key, value] = entry;
    element[key] = value
  })
  return element;
}

function createProjectElement(prj, page){
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project')
  projectDiv.innerHTML = `
  <a href="${prj.link}" class="project-title to-reveal link-shadow-container">
    <div class="link-text text">${prj.title}</div>
  </a>
  ${page == 'projects'? `<img src="${prj.image}" alt="${prj.title} image" loading="lazy">`: ""}
  <p class="project-description">${prj.descreption}</p>`;
  projectDiv.querySelector('a').addEventListener('click', addLinkDelay);
  return projectDiv;
}

function displayProjects(projectsList){
  const projectsContainer = document.querySelector('.selected-projects .projects');
  const page = projectsContainer.dataset.page;
  let addedProjects = 0;
  for (let i = 0, len = projectsList.length; i < len; i++) {
    const project = projectsList[i];
    if (!project.displayed) continue;
    if (!project.displayedIn.includes(page)) continue;
    addedProjects++
    const projectDiv = createProjectElement(project, page, i+1);
    projectsContainer.insertAdjacentElement('beforeend', projectDiv)
  }
  if (addedProjects % 2 === 1) projectsContainer.classList.add('expand-first-project')
};


const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('reveal')){
      entry.target.classList.add('reveal')
    }
  })
});

darkModeBtn.addEventListener('click', changeTheme)
window.addEventListener('DOMContentLoaded', ()=>{
  persistUserPreference();
  displayProjects(projects);
  const headings = document.querySelectorAll('.to-reveal');
  headings.forEach(heading => observer.observe(heading))
  document.querySelector('footer .copy .year').textContent = new Date().getFullYear();
})