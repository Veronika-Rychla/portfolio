/* Hamburger menu */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }),
);

/* Dark mode switch */

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

toggleSwitch.addEventListener('change', switchTheme, false);

/* Carousel */

document.querySelectorAll('.carousel').forEach((carousel) => {
  const items = carousel.querySelectorAll('.carousel__item');
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    'beforeend',
    `
		<div class="carousel__nav">
			${buttonsHtml.join('')}
		</div>
	`,
  );

  const buttons = carousel.querySelectorAll('.carousel__button');

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      items.forEach((item) =>
        item.classList.remove('carousel__item--selected'),
      );
      buttons.forEach((button) =>
        button.classList.remove('carousel__button--selected'),
      );
      console.log({ items, i });
      items[i].classList.add('carousel__item--selected');
      button.classList.add('carousel__button--selected');
    });
  });

  items[0].classList.add('carousel__item--selected');
  buttons[0].classList.add('carousel__button--selected');
});
