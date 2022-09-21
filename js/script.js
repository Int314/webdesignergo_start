$(function () {
  //ハンバーガーメニュー
  $(".hamburger-btn").click(function (e) {
    $(this).toggleClass("cross");
    $(".gnav").toggleClass("open");
    $("body").toggleClass("noscroll");
  });

  $(document).click(function (e) {});
});
