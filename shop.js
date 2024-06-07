document.addEventListener("DOMContentLoaded", function() { // add an  event listner to the document object for DOMContrntLoaded event
    var addToCartButtons = document.querySelectorAll(".add-to-cart");//select all element in classesand  store them in a variable
    var typeSelects = document.querySelectorAll(".type-select");
    var quantityInputs = document.querySelectorAll(".input");
    var totalPriceElement = document.querySelector(".total");
    var emptyCartButton = document.querySelector(".clear-cart-btn");
    var checkoutButton = document.querySelector(".checkout-btn");
    var validationMsg = document.querySelector(".validation-msg");

    var cartItems = [];

    // Function to update the cart display
    function updateCartDisplay() {
        var cartItemsContainer = document.querySelector(".cart-items");
        cartItemsContainer.innerHTML = "";
        var total = 0;
        cartItems.forEach(function(item, index) {
            // Create cart item element
            var cartItemElement = document.createElement("div");
            cartItemElement.classList.add("cart-item"); // Add class for styling

            // Create text content for cart item
            var cartItemText = document.createElement("span");
            cartItemText.textContent = `${item.name} (${item.type}) - $${item.price.toFixed(2)} - Quantity: ${item.quantity}`; // Updated to include type

            // Create remove button
            var removeButton = document.createElement("button");
            removeButton.textContent = "X";
            removeButton.classList.add("remove-button"); // Add class for styling
            removeButton.addEventListener("click", function() {
                cartItems.splice(index, 1);
                updateCartDisplay();
            });

            // Append elements to cart item
            cartItemElement.appendChild(cartItemText);
            cartItemElement.appendChild(removeButton);

            // Append cart item element to cart items container
            cartItemsContainer.appendChild(cartItemElement);

            total += item.price * item.quantity;
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
        if (cartItems.length === 0) {
            emptyCartButton.disabled = true;
        } else {
            emptyCartButton.disabled = false;
        }
    }

    // Function to handle adding item to the cart
    function addToCart(event) {
        var productItem = event.target.closest(".product-item");
        var productName = productItem.querySelector("h3").textContent;
        var productPrice = parseFloat(productItem.querySelector(".price").getAttribute("data-price"));
        var productType = productItem.querySelector(".type-select").value;
        var productQuantity = parseInt(productItem.querySelector(".input").value);

        // Get the price based on the selected type
        var typePrice = parseFloat(productItem.querySelector(".type-select option[value='" + productType + "']").getAttribute("data-price"));
        var totalPrice = typePrice * productQuantity;

        var existingCartItemIndex = cartItems.findIndex(function(item) {
            return item.name === productName && item.type === productType;
        });
        if (existingCartItemIndex !== -1) {
            cartItems[existingCartItemIndex].quantity += productQuantity;
            cartItems[existingCartItemIndex].price += totalPrice;
        } else {
            cartItems.push({
                name: productName,
                price: totalPrice,
                type: productType,
                quantity: productQuantity
            });
        }

        updateCartDisplay();
    }

    // Event listeners for adding item to cart
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", addToCart);
    });

    // Event listener for empty cart button
    emptyCartButton.addEventListener("click", function() {
        cartItems = [];
        updateCartDisplay();
    });
    // Event listener for checkout button
    checkoutButton.addEventListener("click", function(event) {
        event.preventDefault();
        if (cartItems.length === 0) {
            alert("Your cart is empty. Please add items before proceeding to checkout.");
        } else {
            // Redirect to payment page
            window.location.href = "payment.html";
        }
    });

    // Event listener for type selection change
    typeSelects.forEach(function(select) {
        select.addEventListener("change", function() {
            var productItem = select.closest(".product-item");
            var priceElement = productItem.querySelector(".price");
            var selectedType = select.value;
            var selectedTypePrice = parseFloat(select.querySelector("option[value='" + selectedType + "']").getAttribute("data-price"));
            var totalPriceElement = productItem.querySelector(".total-price"); // Assuming you have an element to display the total price
            var quantity = parseInt(productItem.querySelector(".input").value);
            var totalPrice = selectedTypePrice * quantity;
            priceElement.textContent = `Price: $${selectedTypePrice.toFixed(2)}`;
            totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`; // Update total price
        });
    });

    // Event listeners for increment and decrement buttons
    var incrementButtons = document.querySelectorAll(".quantity-btn-increment");
    var decrementButtons = document.querySelectorAll(".quantity-btn-decrement");

    incrementButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productItem = button.closest(".product-item");
            var input = productItem.querySelector(".input");
            input.value = parseInt(input.value) + 1;
        });
    });

    decrementButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productItem = button.closest(".product-item");
            var input = productItem.querySelector(".input");
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
    });
});
