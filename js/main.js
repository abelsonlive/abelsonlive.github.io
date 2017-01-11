$(function() {

  // COlORING
  var o = {
      x: -1,
      y: -1
  };
  $(document).mousemove(function(n) {
      o.x = n.pageX, o.y = n.pageY
  });
  var n = function() {
      var n = o.y / $(window).height() * 360,
          c = "hsla(" + n + ", 50%, 75%, 1)";
      return c
  };

  // bind filter button click
  $('#about').click(function() {
    $(".about").hide(360);
    $(".code, .words, .music, .jokes").show(360);
  });

  // bind filter button click
  $('#code').on( 'click', function() {
    $(".about, .code, .words, .music, .jokes").hide(360);
    $("#about-code").show(360);
    $(".code").show(360);
    $(this).addClass('selected');
  });
  
  // bind filter button click
  $('#words').on( 'click', function() {
    $('#header').css('color', 'white')
    $(".about, .code, .words, .music, .jokes").hide(360);
    $("#about-words").show(360);
    $(".words").show(360);
    $(this).addClass('selected');
  });

  // bind filter button click
  $('#music').on( 'click', function() {
    $('#header').css('color', 'white')
    $(".about, .code, .words, .music, .jokes").hide(360);
    $("#about-music").show(360);
    $(".music").show(360);
    $(this).addClass('selected');
  });

  // bind filter button click
  $('#jokes').on( 'click', function() {
    $('#header').css('color', 'white')
    $(".about, .code, .words, .music, .jokes").hide(360);
    $("#about-jokes").show(360);
    $(".jokes").show(360);
    $(this).addClass('selected');
  });
  
  // hove annotations 
  $("a").hover(function() {
      $(this).css("color", n())
  }, function() {
      $("a").css("color", "white");
  })
});