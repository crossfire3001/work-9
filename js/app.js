$(document).ready(function () {
  $(".single-item").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    arrows: true,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='../images/arrow-left.png' alt='prev-arrow'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='../images/arrow-right.png' alt='next-arrow'>",
  });

  $(".accordion").accordion({
    heightStyle: "content",
    header: "> .accordion-item > .accordion-header",
    collapsible: true
  });

  $("#form__application").submit(function (event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var phone = $("#phone").val();
    var country = $("#country").val();
    var zip = $("#zip").val();
    var address = $("#address").val();
    var order = $("#order");
    var orderStatus = $("#order-status");

    if (firstName === "") {
      alert("Заполните имя");
    } else if (lastName === "") {
      alert("Заполните фамилию");
    } else if (phone === "") {
      alert("Заполните номер телефона");
    } else if (country === "") {
      alert("Заполните страну");
    } else if (zip === "") {
      alert("Индекс не должен быть пустым");
    } else if (!/^\d{6}$/.test(zip)) {
      alert("Индекс должен содержать 6 цифр!");
    } else if (address === "") {
      alert("Заполните адрес");
    } else {
      order.text("Спасибо за заказ!").addClass("bg-success text-light");

      var selectedEffect = "scale";
      var options = {};

      if (selectedEffect === "scale") {
        options = { percent: 50 };
      }
      $( "#form__application" ).hide(selectedEffect, options, 1000);

      setTimeout(function() {
        orderStatus.removeClass( "d-none" ).hide().fadeIn();
      }, 2000 );


    }

  });

  $(".mag").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    // other options
    gallery: { enabled: true },
  });

  new WOW({
    animateClass: "animate__animated",
  }).init();
});
