const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = document.getElementsByClassName('nav-items');

/**
 * Toggle Nav item classes - Slide out
 */
const slideNavItems = (directionFrom, directionTo) => {
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.replace(`slide-${directionFrom}-${i+1}`, `slide-${directionTo}-${i+1}`);
  }
}

/**
 * Toggle Menu bar Class
 */
const toggleNav = () => {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  const overlayClasses = overlay.classList;
  overlayClasses.toggle('overlay-active');
  // Toggle Menu Active
  if (overlayClasses.contains('overlay-active')) {
    // Animate In - Overlay
    overlayClasses.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate In - Nav Items
    slideNavItems('out', 'in');
  } else {
    // Animate Out - Overlay
    overlayClasses.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    slideNavItems('in', 'out');
  }
  
}

menuBars.addEventListener('click', toggleNav);
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', toggleNav);
}