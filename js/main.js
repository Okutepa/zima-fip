document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');
    const lightbox = document.getElementById('lightbox');
    const closeButton = document.getElementById('closeButton');
    const promoContent = document.getElementById('promoContent');
    const lightboxHeader = document.getElementById('lightboxHeader');

    // Object to store promo details for each product card
    const promoDetails = {
        "card-lemon": [
            "This flavor is a refreshing burst of citrusy goodness. Imagine biting into a perfectly ripe lemon on a warm summer day. It’s tangy, zesty, and invigorating, with a hint of sweetness to balance out the tartness. The aroma alone is enough to awaken your senses, like a cool breeze on a hot afternoon. Lemon Breeze is like a sunshine-filled day captured in a bottle, instantly uplifting and rejuvenating your mood."
        ],
        "card-strawberry": [
            "Sweet, succulent, and utterly irresistible, Strawberry Serenade is like a symphony for your taste buds. Picture plump, juicy strawberries picked at the peak of ripeness, bursting with flavor and freshness. Each sip is like a serenade of summer, with notes of sweetness and a hint of tartness that dance across your palate. It's like strolling through a strawberry patch on a warm afternoon, with the sun kissing your skin and the aroma of ripe berries filling the air. Strawberry Serenade is a deliciously delightful treat that captures the essence of summer in every sip."
        ],
        "card-grape": [
            "Indulge in the luscious flavor of Grape Bliss Burst, a deliciously sweet and refreshing sensation. Picture biting into a plump, juicy grape and experiencing an explosion of fruity goodness with every sip. It's like diving into a bowl of freshly picked grapes on a hot summer day, with their natural sweetness tantalizing your taste buds. The flavor is vibrant and full-bodied, with just the right balance of sweetness and tanginess. Grape Bliss Burst is like a burst of pure bliss in every sip, making it the perfect thirst-quencher for any occasion."
        ]
    };

    // Add click event listener to each product card
    productCards.forEach(function(card) {
        card.addEventListener('click', function () {
            const cardId = card.id;
            const cardPromoDetails = promoDetails[cardId];
            if (cardPromoDetails) {
                // Randomly select a promo detail from the array associated with the clicked card
                const randomIndex = Math.floor(Math.random() * cardPromoDetails.length);
                const selectedPromo = cardPromoDetails[randomIndex];

                // Change the header name of the lightbox based on the product card clicked
                lightboxHeader.textContent = card.querySelector('.card-head').textContent;

                // Display the selected promo detail in the lightbox
                promoContent.textContent = selectedPromo;
                showLightbox();
            }
        });
    });

    closeButton.addEventListener('click', function () {
        hideLightbox();
    });

    function showLightbox() {
        lightbox.style.display = 'block';
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
    }
});

