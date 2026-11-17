const navigation = document.querySelector("header nav .navigation");
const menuHamburger = document.querySelector("header nav .hamburger");
const closeNavigation = document.querySelector("header nav .navigation .close");

if (!navigation || !menuHamburger || !closeNavigation) {
  console.error("Navigation element not found in the DOM.");
} else {
  menuHamburger.addEventListener("click", () => {
    navigation.classList.add("open");
  });

  closeNavigation.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
}
