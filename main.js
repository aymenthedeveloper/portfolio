const root = document.querySelector(':root');
const darkModeBtn = document.getElementById('dark-mode-toggle');

darkModeBtn.addEventListener('click', () => {
  
  if (root.dataset.theme == "dark") {
    root.dataset.theme = 'light';
    localStorage.setItem("prefers-color-scheme", "light")
  } else {
    root.dataset.theme = 'dark';
    localStorage.setItem("prefers-color-scheme", "dark")
  }
  darkModeBtn.classList.toggle('light')
})

function userPreferenceCheck() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light )')
  const preferedMode = localStorage.getItem('prefers-color-scheme') || 'dark';
  if (mediaQuery.matches || preferedMode == 'light') {
    root.dataset.theme = 'light';
    darkModeBtn.classList.add('light')
  } else {
    root.dataset.theme = 'dark';
    darkModeBtn.classList.remove('light')
  }
}



function createProjectElement(prj, page, i){
  const projectDiv = document.createElement('div');
  const delay = 10 * i;
  projectDiv.classList.add('project')
  if (page == 'projects'){
    projectDiv.innerHTML = `
    <a href="${prj.link}" class="project-title to-reveal link-shadow-container" style="--delay: ${delay}ms">
      <div class="link-text text">${prj.title}</div>
    </a>
    <img src="${prj.image}" alt="${prj.title} image" loading="lazy">
    <p class="project-description">${prj.descreption}</p>`;
  } else {
    projectDiv.innerHTML = `
    <a href="${prj.link}" class="project-title to-reveal link-shadow-container" style="--delay: ${delay}ms">
      <div class="link-text text">${prj.title}</div>
    </a>
    <p class="project-description">${prj.descreption}</p>`;
  }
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
const projects = [
  {
    title: 'Job list with filter',
    image: './projects/jobListing.jpg',
    descreption: 'This React app provides a modern and minimal platform for browsing job listings. Users can filter jobs dynamically by keywords, enabling a seamless search experience tailored to their skills and interests.',
    link: 'https://job-listing-topaz.vercel.app/',
    displayed: true,
    displayedIn: ['projects', 'home']
  },
  {
    title: 'Interactive Comments Section',
    image: './projects/commentSection.jpg',
    descreption: 'A comment section implementation with CRUD operations, allowing users to manage and reply to comments entirely on the front end. Built using HTML, CSS, and vanilla JavaScript.',
    link: 'https://aymenthedeveloper.github.io/Interactive-comments-section/',
    displayed: true,
    displayedIn: ['projects', 'home']
  },
  {
    title: 'E-commerce Product Page',
    image: './projects/ecommerce-product-page.jpg',
    descreption: 'An intuitive e-commerce product page showcasing detailed product information, enhanced by a lightbox mode for a better image-viewing experience.',
    link: 'https://aymenthedeveloper.github.io/E-commerce-product-page/',
    displayed: true,
    displayedIn: ['projects', 'home']
  },
  {
    title: 'Interactive To-Do App',
    image: './projects/todoApp.jpg',
    descreption: 'An interactive to-do app that offers dark/light mode, task filtering by status, and a smooth drag-and-drop feature for reordering. Created with HTML, CSS, and JavaScript.',
    link: 'https://aymenthedeveloper.github.io/todo-app/',
    displayed: true,
    displayedIn: ['projects', 'home']
  },
  {
    title: 'Product List with Cart',
    image: './projects/product-list-with-cart.jpg',
    descreption: 'A dynamic shopping list app that lets you add and remove products, confirm your order, and view the total amount. Built with HTML, CSS, and JavaScript.',
    link: 'https://aymenthedeveloper.github.io/product-list-with-cart/',
    displayed: true,
    displayedIn: ['projects', 'home']
  },
  {
    title: 'Interactive Card Form',
    image: './projects/interactiveCardForm.jpg',
    descreption: 'This form simplifies card details writing by checking user input and displaying information on an example card, enhancing interactivity and visual aiding user comprehension.',
    link: 'https://aymenthedeveloper.github.io/Interactive-card-details-form/',
    displayed: true,
    displayedIn: ['projects']
  },
  {
    title: 'Time Tracking Dashboard',
    image: './projects/timeTrackingDashboard.jpg',
    descreption: 'The Time Tracking Dashboard is a powerful tool designed to help you monitor and manage your time effectively. It provides a comprehensive overview of your daily, weekly, and monthly activities.',
    link: 'https://aymenthedeveloper.github.io/time-tracking-dashboard/',
    displayed: true,
    displayedIn: ['projects']
  },
  {
    title: 'Social Media Dashboard',
    image: './projects/socialMedia.jpg',
    descreption: 'This dashboard shows the overall growth of several social media accounts, including Instagram, Twitter, Facebook, and YouTube. It displays the overall number of followers, how much has increased since yesterday, and the percentage.',
    link: 'https://aymenthedeveloper.github.io/Social-Media-Dashboard/',
    displayed: true,
    displayedIn: ['projects']
  },
  {
    title: 'Pricing Component',
    image: './projects/pricingComponent.jpg',
    descreption: 'A responsive pricing page with a toggle feature that allows users to easly switch between monthly and annual plans. Built using HTML, CSS, and vanilla JavaScript.',
    link: 'https://aymenthedeveloper.github.io/pricing-component-with-toggle/',
    displayed: true,
    displayedIn: ['projects']
  },
  {
    title: 'Aesthetic Digital Clock',
    image: './projects/digitalClock.jpg',
    descreption: 'An Instagram story inspired me to create this digital clock project. I fell in love with it instantly because I had never seen a clock like that before, so I decided to make one myself using HTML, CSS, and JavaScript.',
    link: 'https://aymenthedeveloper.github.io/digital-clock/',
    displayed: true,
    displayedIn: ['projects']
  },
  {
    title: 'Project Tracking Landing Page',
    image: './projects/projectTracking.jpg',
    descreption: 'This landing page serves as the first touchpoint for users, offering a clean and engaging interface that encourages them to take action and book a demo to try out the project tracking tool.',
    link: 'https://aymenthedeveloper.github.io/project-tracking-intro-component/',
    displayed: false,
    displayedIn: ['projects']
  },
  {
    title: 'Advice Generator',
    image: './projects/adviceGenerator.jpg',
    descreption: 'This app is designed to provide random quotes. Whenever the user rolls the dice, the app fetches an API endpoint that returns an object which contains a random advice.',
    link: 'https://aymenthedeveloper.github.io/advice-generator-app',
    displayed: false,
    displayedIn: ['projects']
  },
  {
    title: 'Age Calculator',
    image: './projects/ageCalculator.jpg',
    descreption: 'This app is designed to quickly calculate ages. It provides users with a straightforward and modern user interface and also instant input validation.',
    link: 'https://aymenthedeveloper.github.io/age-calculator/',
    displayed: false,
    displayedIn: ['projects']
  },
  {
    title: 'Tip Calculator',
    image: './projects/tipCalculator.jpg',
    descreption: 'Splitter is tool that simplifies bill splitting and tip calculation when dining out with friends or family. Splitter is developed with javascript and has a modern user interface, provides users with an easy way to divide expenses and precisely calculate tip amounts.',
    link: 'https://aymenthedeveloper.github.io/Tip-calculator-app',
    displayed: false,
    displayedIn: ['projects']
  }
  
];

const observer = new IntersectionObserver((entries)=>{
  let delay = 100;
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('reveal')){
      console.log(entry.target);
      setTimeout(()=> entry.target.classList.add('reveal'), delay)
      delay += 100;
    }
  })
});


function addLinkDelay(e){
  e.preventDefault();
  setTimeout(()=>{
    window.location.href = this.href;
  }, 150)
}





displayProjects(projects);
userPreferenceCheck();
const headings = document.querySelectorAll('.to-reveal');
const links = document.querySelectorAll('a');
headings.forEach(heading => observer.observe(heading))
links.forEach(link => link.addEventListener('click', addLinkDelay))