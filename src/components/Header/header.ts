const menuButton = document.querySelectorAll('.header__menu-icon');
const menu = document.querySelector('.header__menu');
const navItems: NodeListOf<HTMLElement> = document.querySelectorAll('.header__menu-item');
const navItemsToTab = document.querySelectorAll('.header__menu-tab-item');
const socialLinks = document.querySelectorAll('.header__menu-social-links a');

const allNavLinks = [...navItemsToTab, ...socialLinks];
let menuActive = false;

const toggleTabIndex = () => {
  allNavLinks.forEach((item: HTMLElement) => {
    item.tabIndex = menuActive ? 0 : -1;
  });
};

const handleToggleMenu = () => {
  menu.classList.toggle('header__menu--active');
  menuActive = !menuActive;

  toggleTabIndex();
};

menuButton.forEach(button => {
  button.addEventListener('click', handleToggleMenu);
});

navItems.forEach(item => {
  item.addEventListener('click', handleToggleMenu);
});

toggleTabIndex();
