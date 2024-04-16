document.addEventListener('DOMContentLoaded', () => {
    function displayProductInfo(productName) {
      const productInfo = {
        'info-1': {
          title: 'Warning',
          description: 'Please note that this product is intended for individuals aged 18 and above. Enjoy responsibly and discover the delightful experience of our Red Mango Blend, designed for adult consumers.'
        },
        'info-2': {
          title: 'Warning!',
          description: 'Please note that this product is intended for individuals aged 18 and above. Enjoy responsibly and discover the delightful experience of our Red Mango Blend, designed for adult consumers.'
        },
        'info-3': {
          title: 'Warning!',
          description: 'Please note that this product is intended for individuals aged 18 and above. Enjoy responsibly and discover the delightful experience of our Red Mango Blend, designed for adult consumers.'
        },
      };

      const promoContent = document.getElementById("promoContent");
      const product = productInfo[productName];
      if (product) {
        promoContent.innerHTML = `<h2>${product.title}</h2><p>${product.description}</p>`;
        document.getElementById("promoLightbox").style.display = "block";
      }
    }

    document.querySelectorAll('.button-pro').forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.dataset.name;
        displayProductInfo(productName);
      });
    });

    document.getElementById("closeButton").addEventListener("click", () => {
      document.getElementById("promoLightbox").style.display = "none";
    });
  });