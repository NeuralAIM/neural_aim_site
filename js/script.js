// Получить текущий язык из URL
function getLanguage() {
  var search = window.location.search;
  if (search === '?lang=en') {
    return 'en';
  } else if (search === '?lang=ru') {
    return 'ru';
  } else {
    return 'ru'; // язык по умолчанию
  }
}


console.log(getLanguage());

// Добавить возможность переключения языка при клике на кнопку
document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', function () {
      // Close all other accordions
      headers.forEach(h => {
        if (h !== header) {
          h.classList.remove('active');
          const otherContent = h.nextElementSibling;
          otherContent.style.maxHeight = null;
          h.parentElement.classList.remove('active-item');
        }
      });
  
      // Toggle the clicked accordion
      this.classList.toggle('active');
  
      const content = this.nextElementSibling;
      const accordionItem = this.parentElement;
  
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        accordionItem.classList.remove('active-item');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        accordionItem.classList.add('active-item');
      }
    });
  });

  const ball = document.getElementById('ball');

  function handleScroll() {
    const scrollTop = window.scrollY;

  }
  window.addEventListener('scroll', handleScroll);

  const header = document.querySelector('.header');
  const scrollThreshold = 50; 
  
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('header-active');
      if (window.scrollY > scrollThreshold) {
        header.classList.add('header-gradient');
      } else {
        header.classList.remove('header-gradient');
      }
    } else {
      header.classList.remove('header-active');
      header.classList.remove('header-gradient');
    }
  }
  
  var currentLanguage = getLanguage();

document.getElementById('language-toggle').addEventListener('click', function () {
  currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  translateContent(currentLanguage);
  var btnTitle = document.querySelector('.header__btn-title');
  btnTitle.textContent = currentLanguage === 'ru' ? 'English' : 'Русский';
  
  // Обновить текст при смене языка
  index = 0; // Сбросить индекс
  element.textContent = ''; // Очистить текст
  eraseText(); // Начать печатать новый текст
});

  // Перевести контент страницы на выбранный язык
  function translateContent(language) {
    var elements = document.querySelectorAll('[data-ru]');
    elements.forEach(function (element) {
      var newText = language === 'ru' ? element.getAttribute('data-ru') : element.getAttribute('data-en');
      if (newText !== null) {
        element.innerHTML = newText;
      }
    });
  }

  // Вызвать функцию перевода контента при загрузке страницы
  var language = getLanguage();
  translateContent(language);
});

function getParameterByName(name) {
  const url = window.location.href;
  const regex = new RegExp(`[?&]${name}=([^&#]*)`);
  const results = regex.exec(url);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const commentValue = getParameterByName('comment');
const element = document.getElementById('dynamic');
const originalText = element.textContent;
const text = commentValue || originalText;
let index = text.length;

// Проверка на наличие commentValue
if (!commentValue) {
  const games = ['Valorant', 'Counter Strike 2', 'Fortnite', "Apex", "Stalcraft", "Rainbow Six Siege"]; // Массив игр
  let gameIndex = 0; // Индекс текущей игры

  // Обновить функцию eraseText для работы с массивом игр
  const eraseText = () => {
    if (index >= 0) {
        element.textContent = games[gameIndex].substring(0, index);
        index--;
        setTimeout(eraseText, 50);
    } else {
        gameIndex = (gameIndex + 1) % games.length; // Перейти к следующей игре
        setTimeout(() => typeText(games[gameIndex]), 100);
    }
  };

  // Обновить функцию typeText для работы с массивом игр
  const typeText = (newText) => {
    if (index < newText.length) {
        element.textContent = newText.substring(0, index + 1);
        index++;
        setTimeout(() => typeText(newText), 100);
    } else {
        setTimeout(eraseText, 1000); // Задержка перед удалением
    }
  };

  // Начать с первой игры
  eraseText();
} else {
  // Если commentValue указан, просто отобразить его
  element.textContent = text;
}


document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll('.header__item');
  const sections = document.querySelectorAll('section'); // Assuming your blocks are <section> elements
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the section is in view
  };

  // Function to remove and add active class
  function setActiveClass(target) {
    navItems.forEach(nav => nav.classList.remove('header__item-active'));
    target.classList.add('header__item-active');
  }

  navItems.forEach(item => {
    item.addEventListener('click', function () {
      setActiveClass(this);
    });
  });

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const activeNavItem = document.querySelector(`.header__item[href="#${id}"]`);
        setActiveClass(activeNavItem);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);
  sections.forEach(section => {
    observer.observe(section);
  });
});

