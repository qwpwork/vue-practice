//If burger button was clicked then we toggle active-classes.
//And active class is drawing nav and footer for mobile viewport

export const burgerBtnActions = () => {
  document.getElementById('siteNav').classList.toggle("site-nav_active");
  document.getElementById('siteFooter').classList.toggle("footer_active");
}