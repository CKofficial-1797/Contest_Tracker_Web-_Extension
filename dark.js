let darkMode = localStorage.getItem('darkMode');

let darkModeToggle = document.querySelector('#dark-theme-toggler');

const enableDarkMode = () => {
  document.body.classList.add('DarkMode');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('DarkMode');
  localStorage.setItem('darkMode', null);
};

// Check if dark mode was enabled previously
if (darkMode === 'enabled') {
  enableDarkMode();
}

// Toggle dark mode on click
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
