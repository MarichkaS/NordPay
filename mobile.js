var menuLinks = document.querySelectorAll(".mobile-menu-link");

// Отримати посилання для закриття меню
var closeMenuButton = document.querySelector(".mobile-closed");

// Отримати саме меню
var mobileMenu = document.getElementById("mobileMenu");

// Додати обробник подій для кожного посилання
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Закрити меню, коли користувач клікає на посилання
    mobileMenu.classList.add("is-hidden");
  });
});

// Додати обробник подій для кнопки закриття меню
closeMenuButton.addEventListener("click", function () {
  // Закрити меню при натисканні на кнопку "Закрити"
  mobileMenu.classList.add("is-hidden");
});
