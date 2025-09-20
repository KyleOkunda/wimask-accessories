window.onload = function () {
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
    console.log(image, name, price, description, specs);

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

    let modalClose = document.getElementById("modal-close-btn");
    modalClose.addEventListener("click", () => {
      modalHolder.style.display = "none";
    });
  }
};
