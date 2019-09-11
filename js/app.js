$(function() {
  $(".problems__list--item1").hover(
    function() {
      $(this).addClass("problems__list--active");
      $(".problems__body--position-01").addClass("problems__body--active");
    },
    function() {
      $(this).removeClass("problems__list--active");
      $(".problems__body--position-01").removeClass("problems__body--active");
    }
  );

  $(".problems__list--item2").hover(
    function() {
      $(this).addClass("problems__list--active");
      $(".problems__body--position-02").addClass("problems__body--active");
    },
    function() {
      $(this).removeClass("problems__list--active");
      $(".problems__body--position-02").removeClass("problems__body--active");
    }
  );

  $(".problems__list--item3").hover(
    function() {
      $(this).addClass("problems__list--active");
      $(".problems__body--position-03").addClass("problems__body--active");
    },
    function() {
      $(this).removeClass("problems__list--active");
      $(".problems__body--position-03").removeClass("problems__body--active");
    }
  );

  $(".problems__list--item4").hover(
    function() {
      $(this).addClass("problems__list--active");
      $(".problems__body--position-04").addClass("problems__body--active");
    },
    function() {
      $(this).removeClass("problems__list--active");
      $(".problems__body--position-04").removeClass("problems__body--active");
    }
  );

  $(".problems__list--item5").hover(
    function() {
      $(this).addClass("problems__list--active");
      $(".problems__body--position-05").addClass("problems__body--active");
    },
    function() {
      $(this).removeClass("problems__list--active");
      $(".problems__body--position-05").removeClass("problems__body--active");
    }
  );

  $(".problems__list--item6").hover(
    function() {
      $(this).addClass("problems__list--active");
      $(".problems__body--position-06").addClass("problems__body--active");
    },
    function() {
      $(this).removeClass("problems__list--active");
      $(".problems__body--position-06").removeClass("problems__body--active");
    }
  );

  $(".problems__list--item7").hover(
    function() {
      $(this).addClass("problems__list--active");
      $(".problems__body--position-07").addClass("problems__body--active");
    },
    function() {
      $(this).removeClass("problems__list--active");
      $(".problems__body--position-07").removeClass("problems__body--active");
    }
  );

  $(".problems__list--item8").hover(
    function() {
      $(this).addClass("problems__list--active");
      $(".problems__body--position-08").addClass("problems__body--active");
    },
    function() {
      $(this).removeClass("problems__list--active");
      $(".problems__body--position-08").removeClass("problems__body--active");
    }
  );

  $(".problems__list--item9").hover(
    function() {
      $(this).addClass("problems__list--active");
      $(".problems__body--position-09").addClass("problems__body--active");
    },
    function() {
      $(this).removeClass("problems__list--active");
      $(".problems__body--position-09").removeClass("problems__body--active");
    }
  );

  $(".reviews__switch--item").on("click", function() {
    $(".reviews__switch--item").toggleClass("active");
    $(".reviews__inner").toggleClass("reviews__inner-active");
  });
});
