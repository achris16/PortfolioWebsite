function navItemClick(e) {
  // console.log(e);
  if (e.target.tagName.toLowerCase() === 'a' && !e.target.classList.contains('active')) {
    // console.log(e.target);
    const activeElement = document.querySelector('a.nav-link.active');
    // console.log(activeElement);
    if (activeElement != null) {
      activeElement.classList.remove('active');
    }
    e.target.classList.add('active');
  }
  const offcanvasCloseBtn = document.querySelector('button.btn-close');
  if (offcanvasCloseBtn != null) {
    setTimeout(() => offcanvasCloseBtn.click(), 700);
  }
}

function setFirstActiveLink() {
  const homeLink = document.querySelector(`a.nav-link[href='#home']`);
  const url = window.location.href;
  // console.log(url);
  const urlSplitArr = url.split('#');
  // console.log(urlSplitArr);
  if (urlSplitArr.length > 1) {
    const linkName = urlSplitArr[1];
    // console.log(linkName);
    const activeLink = document.querySelector(`a.nav-link[href='#${linkName}']`);
    // console.log(activeLink);
    if (activeLink != null) {
      activeLink.classList.add('active');
    }
  } else {
    homeLink.classList.add('active');
  }
}

window.onload = (event) => {
  console.log("page is fully loaded");
  setFirstActiveLink();
  const navItems = document.querySelectorAll('.nav-item');
  for (item of navItems) {
    item.addEventListener('click', navItemClick);
  }
};
