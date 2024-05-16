document.addEventListener('DOMContentLoaded', function () {
  const projectsLink = document.querySelector('a[href="#projects"]');
  const aboutLink = document.querySelector('a[href="#about"]');
  const aboutSection = document.getElementById('about');
  const projectsSection = document.getElementById('Projects');

  projectsLink.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the default anchor behavior
    projectsSection.style.display = 'grid';
    aboutSection.style.display = 'none';
  });

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the default anchor behavior
    aboutSection.style.display = 'block';
    projectsSection.style.display = 'none';
  });
});
