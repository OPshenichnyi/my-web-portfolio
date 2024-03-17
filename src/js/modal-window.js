const refs = {
  burgerMenu: document.querySelector('.header__burger-menu'),
  modalWindow: document.querySelector('.modal_window_backdrop'),
};

refs.burgerMenu.addEventListener('click', () => {
  console.log('Burger clicked');
  refs.modalWindow.classList.add('show');
});

refs.modalWindow.addEventListener('click', () => {
  refs.modalWindow.classList.remove('show');
});

const modalContent = `<div class="modal_content">
        <ul class="menu_navigation--list">
          <li class="navigation--item">
            <a href="/">about me</a>
          </li>
          <li class="navigation--item">
            <a href="#section-skills">skills</a>
          </li>
          <li class="navigation--item">
            <a href="/my-web-portfolio/pages/portfolio/portfolio.html"
              >portfolio</a
            >
          </li>
          <li class="navigation--item">
            <a href="#section-contacts">contacts</a>
          </li>
        </ul>
        <ul class="social_link_list">
          <li class="social_item">
            <a
              class="social_item--link"
              href="https://www.linkedin.com/in/oleksandrpshenychnyi"
              target="_blank"
            >
              <svg width="24" height="24" class="svg-footer">
                <use xlink:href='/icon-sprite.svg#linkedin'></use>
              </svg>
            </a>
          </li>
          <li class="social_item">
            <a
              class="social_item--link"
              href="https://github.com/OPshenichnyi"
              target="_blank"
            >
              <svg width="24" height="24" class="svg-footer">
                <use xlink:href="/icon-sprite.svg#git"></use>
              </svg>
            </a>
          </li>
          <li class="social_item">
            <a
              class="social_item--link"
              href="https://t.me/Olexander_PS"
              target="_blank"
            >
              <svg width="24" height="24" class="svg-footer">
                <use xlink:href="/icon-sprite.svg#telegram"></use>
              </svg>
            </a>
          </li>
          <li class="social_item">
            <a
              class="social_item--link"
              href="https://drive.google.com/file/d/1CNA_8Cz9YR9Yy12TpgEq3WJWfHn1S1zJ/view?usp=sharing"
              target="_blank"
            >
              CV
            </a>
          </li>
        </ul>
        <h4 class="menu_block--name">
          Oleksandr pshenychnyi
        </h4>
        <h3 class="menu_block--profession">fullstack developer</h3>
</>`;

refs.modalWindow.innerHTML = modalContent;
