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
      mobileNav.style.display = "none";
      mobileMenu.innerHTML = mobileMenuContent;
    } else {
      mobileMenu.classList.add("showing");
      mobileNav.style.display = "block";
      mobileMenu.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
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
    if (heroImage || heroTitle) {
      heroImage.setAttribute("src", arrHeroImages[heroCounter]);
      heroTitle.innerText = arrHeroTitles[heroCounter];
      heroDescription.innerHTML = arrHeroDescription[heroCounter];
      heroLink.setAttribute("href", arrHeroLink[heroCounter]);
      heroLinkContent.innerText = arrHeroLinkContent[heroCounter];
      heroCounter++;
      if (heroCounter > 2) {
        heroCounter = 0;
      }
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

  // Get variables for the modal
  var arrProductImages = Array.from(
    document.getElementsByClassName("product-image")
  );
  var arrProductNames = Array.from(
    document.getElementsByClassName("product-name")
  );
  var arrProductPrices = Array.from(
    document.getElementsByClassName("product-price")
  );
  var arrProductDescriptions = Array.from(
    document.getElementsByClassName("product-description")
  );
  var arrProductSpecs = Array.from(
    document.getElementsByClassName("product-specs")
  );
  var arrViewModals = Array.from(document.getElementsByClassName("view-modal"));

  var modalMapper = new Map();
  var arrCounter = 0;
  arrViewModals.forEach((viewModal) => {
    modalMapper.set(viewModal, [
      arrProductImages[arrCounter],
      arrProductNames[arrCounter],
      arrProductPrices[arrCounter],
      arrProductDescriptions[arrCounter],
      arrProductSpecs[arrCounter],
    ]);

    arrCounter++;

    viewModal.addEventListener("click", () => {
      let modalInfo = modalMapper.get(viewModal);

      setModal(modalInfo);
    });
  });

  //function to set modal info
  function setModal(modalInformation) {
    //Initialize values
    let image = modalInformation[0].getAttribute("src").trim();
    let name = modalInformation[1].textContent.trim();
    let price = modalInformation[2].textContent.trim();
    let description = modalInformation[3].textContent.trim();
    let specs = modalInformation[4].innerHTML.trim();

    //get modal components
    let modalHolder = document.getElementById("modal-holder");
    let modalImage = document.getElementById("modal-image");
    let modalName = document.getElementById("modal-name");
    let modalPrice = document.getElementById("modal-price");
    let modalDescription = document.getElementById("modal-description");
    let modalSpecs = document.getElementById("modal-specs");

    modalImage.setAttribute("src", image);
    modalName.textContent = name;
    modalPrice.textContent = price;
    modalDescription.textContent = description;
    modalSpecs.innerHTML = specs;

    modalHolder.style.display = "block";

    let orderBtn = document.getElementById("order-btn");
    orderBtn.addEventListener("click", function () {
      let link = document.createElement("a");
      let specs = modalSpecs.children;
      let specsMessage = "";
      Array.from(specs).forEach((spec) => {
        specsMessage = specsMessage + spec.textContent.trim() + "\n";
      });
      let message =
        "Hello. I would like to order the " +
        modalName.textContent.trim() +
        " with the specs: \n" +
        specsMessage +
        "For Ksh " +
        modalPrice.textContent.trim();
      message = message.replaceAll(" ", "%20");
      message = message.replaceAll("\n", "%0A");
      message = message.replaceAll(":", ":     ");
      link.href = "https://wa.me/+254796020142?text=" + message;
      link.target = "_blank";
      link.click();
    });

    let modalClose = document.getElementById("modal-close-btn");
    modalClose.addEventListener("click", () => {
      modalHolder.style.display = "none";
    });
  }

  //Order button on product cards leverage arrviewModals to get sibling
  var arrOrderBtn = [];
  arrViewModals.forEach((viewModal) => {
    let orderBtn = viewModal.nextSibling;
    arrOrderBtn.push(orderBtn);
  });
  var orderMapper = new Map();
  var orderCounter = 0;
  arrOrderBtn.forEach((btn) => {
    orderMapper.set(btn, [
      arrProductImages[orderCounter],
      arrProductNames[orderCounter],
      arrProductPrices[orderCounter],
      arrProductDescriptions[orderCounter],
      arrProductSpecs[orderCounter],
    ]);
    orderCounter++;

    btn.addEventListener("click", function () {
      let orderInfo = orderMapper.get(btn);
      setOrder(orderInfo);
    });
  });

  function setOrder(orderInformation) {
    let name = orderInformation[1];
    let price = orderInformation[2];
    let specs = orderInformation[4].children;
    let link = document.createElement("a");
    let specsMessage = "";
    Array.from(specs).forEach((spec) => {
      specsMessage = specsMessage + spec.textContent.trim() + "\n";
    });
    let message =
      "Hello. I would like to order the " +
      name.textContent.trim() +
      " with the specs:\n" +
      specsMessage +
      "For Ksh " +
      price.textContent.trim();

    message = message.replace(" ", "%20");
    message = message.replaceAll("\n", "%0A");
    message = message.replaceAll(":", ":     ");
    link.href = "https://wa.me/+254796020142?text=" + message;
    link.target = "_blank";
    link.click();
  }

  //Filter for categories leverage var arrProductPrices from earlier
  var allPrices = document.getElementById("all-prices");
  var lessThan30 = document.getElementById("lt-30k");
  var lessThan50 = document.getElementById("lt-50k");
  var lessThan100 = document.getElementById("lt-100k");
  var moreThan100 = document.getElementById("gt-100k");
  var select = document.getElementsByTagName("select")[0];

  var productCards = Array.from(
    document.getElementsByClassName("product-card")
  );
  var articleMapper = new Map();
  var cardCounter = 0;
  arrProductPrices.forEach((price) => {
    articleMapper.set(price, productCards[cardCounter]);
    cardCounter++;
  });

  select.addEventListener("change", function () {
    let option = select.selectedOptions[0];
    console.log(option);

    if (option == allPrices) {
      arrProductPrices.forEach((price) => {
        articleMapper.get(price).parentElement.style.display = "block";
      });
    } else if (option == lessThan30) {
      arrProductPrices.forEach((price) => {
        let intPrice = parseInt(price.textContent.replace(",", ""));
        if (intPrice < 30000) {
          articleMapper.get(price).parentElement.style.display = "block";
        } else {
          articleMapper.get(price).parentElement.style.display = "none";
        }
      });
    } else if (option == lessThan50) {
      arrProductPrices.forEach((price) => {
        let intPrice = parseInt(price.textContent.replace(",", ""));
        if (intPrice < 50000) {
          articleMapper.get(price).parentElement.style.display = "block";
        } else {
          articleMapper.get(price).parentElement.style.display = "none";
        }
      });
    } else if (option == lessThan100) {
      arrProductPrices.forEach((price) => {
        let intPrice = parseInt(price.textContent.replace(",", ""));
        if (intPrice < 100000) {
          articleMapper.get(price).parentElement.style.display = "block";
        } else {
          articleMapper.get(price).parentElement.style.display = "none";
        }
      });
    } else if (option == moreThan100) {
      arrProductPrices.forEach((price) => {
        let intPrice = parseInt(price.textContent.replace(",", ""));
        if (intPrice > 100000) {
          articleMapper.get(price).parentElement.style.display = "block";
        } else {
          articleMapper.get(price).parentElement.style.display = "none";
        }
      });
    }
  });

  //Search bar, leverage arrProductNames and productCards from earlier
  var search = document.getElementById("search");
  var nameMapper = new Map();
  let productCounter = 0;

  arrProductNames.forEach((productName) => {
    nameMapper.set(productName, productCards[productCounter]);
    productCounter++;
  });

  search.addEventListener("input", function () {
    let searchValue = search.value.trim().toLowerCase();

    arrProductNames.forEach((productName) => {
      let name = productName.textContent.trim().toLowerCase();

      let card = nameMapper.get(productName);
      if (name.trim().includes(searchValue)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
};
