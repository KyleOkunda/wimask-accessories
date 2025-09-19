window.onload = function () {
  //Products dropdown
  var productsMenu = document.getElementById("products");
  var productsPopUp = document.getElementsByClassName("products-popup")[0];
  var upSvg = document.getElementById("upsvg");
  var svgContent = upSvg.innerHTML;

  productsMenu.addEventListener("click", () => {
    if (productsMenu.classList.contains("showing")) {
      productsMenu.classList.remove("showing");
      productsPopUp.style.display = "none";
      upSvg.innerHTML = svgContent;
    } else {
      productsMenu.classList.add("showing");
      productsPopUp.style.display = "block";
      upSvg = upSvg.style.transform = "rotate(180)";
    }
  });

  //mobile nav
  var mobileMenu = document.getElementsByClassName("md:hidden")[0];
  var mobileNav = document.getElementsByClassName("mobile-nav")[0];
  var mobileMenuContent = mobileMenu.innerHTML;
  mobileMenu.addEventListener("click", () => {
    if (mobileMenu.classList.contains("showing")) {
      mobileMenu.classList.remove("showing");
      mobileNav.style.display = "block";
      mobileMenu.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
    } else {
      mobileMenu.classList.add("showing");
      mobileNav.style.display = "none";
      mobileMenu.innerHTML = mobileMenuContent;
    }
  });
};
