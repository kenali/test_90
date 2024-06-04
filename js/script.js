$(document).ready(function () {
  $("#subscribe-form").submit(function (event) {
    event.preventDefault();

    let email = $("#email").val();

    if (email) {
      $.ajax({
        url: "https://665f37061e9017dc16f35759.mockapi.io/phones/phones",
        method: "POST",
        data: { email: email, id: Math.random() },
        success: function (response) {
          $("#subscribe-message").text("Дякуємо за підписку!");
          $("#email").val("");
        },
        error: function () {
          $("#subscribe-message").text("Сталася помилка. Спробуйте пізніше.");
        },
      });
    }
  });
});
