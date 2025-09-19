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

  //Hero slider
  var heroImage = document.getElementById("hero-image");
  var heroTitle = document.getElementById("hero-title");
  var heroDescription = document.getElementById("hero-description");
  var heroLink = document.getElementById("hero-link");
  var heroLinkContent = document.getElementById("hero-link-content");

  var arrHeroImages = [
    "assets/hero-smart-tv.jpg",
    "assets/hero-tech-products.jpg",
    "assets/hero-security.jpg",
  ];
  var arrHeroTitles = [
    "Tranform Your Entertainment",
    "Latest Tech at Unbeatable Prices",
    "Secure Your World",
  ];
  var arrHeroDescription = [
    "Experience cinema-quality visuals with our premium TV collection featuring the latest smart features",
    "Discover premium electronics from authorized dealers",
    "Professional CCTV systems and security cameras for complete peace of mind and property protection",
  ];
  var arrHeroLink = ["tvs.html", "laptops.html", "cctvs.html"];
  var arrHeroLinkContent = ["Explore TVs", "Shop Now", "View Security"];
  var heroCounter = 0;
  setInterval(function () {
    heroImage.setAttribute("src", arrHeroImages[heroCounter]);
    heroTitle.innerText = arrHeroTitles[heroCounter];
    heroDescription.innerHTML = arrHeroDescription[heroCounter];
    heroLink.setAttribute("href", arrHeroLink[heroCounter]);
    heroLinkContent.innerText = arrHeroLinkContent[heroCounter];
    heroCounter++;
    if (heroCounter > 2) {
      heroCounter = 0;
    }
  }, 5000);

  //left and right buttons for horizontal scroll
  var carouseltracks = Array.from(
    document.getElementsByClassName("carousel-track")
  );
  var navBtn = Array.from(document.getElementsByClassName("carousel-nav-btn"));
  var navBtnMapper = new Map();
  var trackCounter = 0;
  for (var i = 0; i < navBtn.length; i = i + 2) {
    var j = i + 1;
    navBtnMapper.set(navBtn[i], carouseltracks[trackCounter]);
    navBtnMapper.set(navBtn[j], carouseltracks[trackCounter]);
    trackCounter++;
  }

  navBtn.forEach((btn) => {
    btn.removeAttribute("disabled");
    btn.addEventListener("click", function () {
      let track = navBtnMapper.get(btn);

      if (btn.classList.contains("right-2")) {
        track.scrollBy({ left: 50, behavior: "smooth" });
      } else {
        track.scrollBy({ left: -50, behavior: "smooth" });
      }
    });
  });
};
