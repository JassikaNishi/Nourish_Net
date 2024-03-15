const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

function searchRecipes() {
  let input = document.getElementsByClassName('searchbar')[0].value.trim().toLowerCase();
  let recipes = document.querySelectorAll('.card .card-title');

  if (input === '') {
    for (let i = 0; i < recipes.length; i++) {
      let card = recipes[i].closest('.card');
      card.style.display = "block";
    }
    removeErrorMessage();
    scrollToTop();
    return;
  }

  let found = false;
  for (let i = 0; i < recipes.length; i++) {
    let recipeName = recipes[i].innerText.trim().toLowerCase();
    let card = recipes[i].closest('.card');

    if (recipeName.includes(input)) {
      card.style.display = "block";
      found = true;
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      card.style.display = "none";
    }
  }

  if (!found) {
    displayErrorMessage("Sorry, we don't have the recipe for the current item.");
    scrollToErrorMessage();
  } else {
    removeErrorMessage();
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToErrorMessage() {
  let errorMessageElement = document.getElementById('error-message');
  if (errorMessageElement) {
    errorMessageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function displayErrorMessage(message) {
  let errorMessageElement = document.getElementById('error-message');
  if (!errorMessageElement) {
    errorMessageElement = document.createElement('div');
    errorMessageElement.id = 'error-message';
    errorMessageElement.innerText = message;
    errorMessageElement.style.display = 'flex';
    errorMessageElement.style.alignItems = 'center';
    errorMessageElement.style.justifyContent = 'center';
    errorMessageElement.style.fontSize = '20px';
    errorMessageElement.style.marginTop = '4px'; 
    errorMessageElement.style.padding = '10px';
    errorMessageElement.style.fontWeight = '700';
    errorMessageElement.style.fontStyle='Verdana'

    
    let introMainElement = document.querySelector('.Intro-main');
    introMainElement.insertAdjacentElement('afterend', errorMessageElement);
    
    


  } else {
    errorMessageElement.innerText = message;
  }
}

function removeErrorMessage() {
  let errorMessageElement = document.getElementById('error-message');
  if (errorMessageElement) {
    errorMessageElement.remove();
  }
}

const searchbar = document.getElementsByClassName('searchbar')[0];
const searchIcon = document.getElementById('search-icon');

searchbar.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchRecipes();
  }
});

searchbar.addEventListener('input', () => {
  if (searchbar.value.trim() === '') {
    scrollToTop();
    searchRecipes();
  } else {
    searchRecipes();
  }
});

searchIcon.addEventListener('click', () => {
  searchRecipes();
});