$(function() {
  for (let i = 1; i < 10; i++) {
    $(".problems__list--item" + i).hover(
      function() {
        $(this).addClass("problems__list--active");
        $(".problems__body--position-0" + i).addClass("problems__body--active");
      },
      function() {
        $(this).removeClass("problems__list--active");
        $(".problems__body--position-0" + i).removeClass(
          "problems__body--active"
        );
      }
    );
  }

  $(".reviews__switch--item").on("click", function() {
    $(".reviews__switch--item").toggleClass("active");
    $(".reviews__inner").toggleClass("reviews__inner-active");
  });
});
