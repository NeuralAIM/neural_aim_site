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
  const scrollThreshold = 50; // Количество пикселей для смены градиента
  
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

// Получить значение параметра из URL
function getParameterByName(name) {
  var url = window.location.href;
  var regex = new RegExp(`[?&]${name}=([^&#]*)`);
  var results = regex.exec(url);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const commentValue = getParameterByName('comment');

if (commentValue) {
  document.getElementById('dynamic').textContent = commentValue;
}


document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll('.header__item');
  const sections = document.querySelectorAll('section');
  const headerList = document.querySelector('.header__list');
  const offset = 10; // отступ для срабатывания активации

  // Функция для добавления класса активности при клике
  navItems.forEach(item => {
    item.addEventListener('click', function (event) {
      navItems.forEach(nav => nav.classList.remove('header__item-active'));
      this.classList.add('header__item-active');
    });
  });

  // Функция для обновления класса активности при скролле
  const handleScroll = () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - offset;
      if (window.pageYOffset >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('header__item-active');
      if (item.getAttribute('href').substring(1) === currentSection) {
        item.classList.add('header__item-active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // обновить активный элемент при загрузке страницы
});
const btnBigItems = document.querySelectorAll('.btn-big');

  btnBigItems.forEach(item => {
    item.addEventListener('click', function () {
      btnBigItems.forEach(btn => btn.classList.remove('btn-big-active'));
      this.classList.add('btn-big-active');

      setTimeout(() => {
        this.classList.remove('btn-big-active');
      }, 2000); 
    });
  });