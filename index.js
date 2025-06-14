'use strict';

document
  .getElementById('orderForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const customerName = document.getElementById('customerName').value;
    const cupcakeFlavor = document.getElementById('cupcakeFlavor').value;
    const quantity = document.getElementById('quantity').value;

    // Simple validation
    if (!customerName || !cupcakeFlavor || !quantity) {
      alert('Please fill out all fields.');
      return;
    }

    // Display order summary or send data to a server here
    alert(
      `Thank you, ${customerName}! Your order for ${quantity} ${cupcakeFlavor} cupcake(s) has been placed.`
    );

    // Reset the form after submission
    document.getElementById('orderForm').reset();
  });
