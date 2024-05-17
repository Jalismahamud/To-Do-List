function calculateDiscount() {
    // Get the input values
    var price = parseFloat(document.getElementById('price').value);
    var discountPercentage = parseFloat(document.getElementById('discount-price').value);

    // Calculate the discounted price
    var discountedPrice = price - (price * (discountPercentage / 100));

    // Display the discounted price
    var discountedPriceInput = document.getElementById('discounted-price');
    discountedPriceInput.value = discountedPrice.toFixed(2);

    // Hide the label text of "Discounted Price"
    var labelDiscountedPrice = document.querySelector('label[for="discounted-price"]');
    labelDiscountedPrice.style.display = 'none';

    // Show the Discounted Price input field
    discountedPriceInput.classList.add('show-discount');
}
