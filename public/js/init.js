(function($) {
  $(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    function auto_load() {
      $.ajax({
          // where the data live
          url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
          headers: {
            'X-Mashape-Key': 'm2TVGB0dPmmshjy3VWzjORBnsy2tp14BP2DjsnrrXLsRuhozEG',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          type: 'POST',
          cache: false,
          data: {
            cat: 'famous'
          },
          dataType: 'json'
        })
        .done(successFunction)
        .fail(failFunction);
    };

    $(document).ready(function() {

      auto_load(); //Call auto_load() function when DOM is Ready

    });

    //Refresh auto_load() function after 10000 milliseconds
    setInterval(auto_load, 3500);

    function successFunction(data, dataType, status) {
      $('.quote').text("\"" + data.quote + "\"" + " Source: " + data.author);
      // $(".author").text("From the movie " + data.author);
    };


    function failFunction(request, textStatus, errorThrown) {
      alert('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
    };

    $("#clear").on("click", function() {
      $("#name").val("");
      $("#email").val("");
      $("#subject").val("");
      $("#description").val("");
    })

//smooth scrolling
    function smoothScroll() {
      $(".scroll").click(function(e){

        e.preventDefault();
        var sectionId = e.currentTarget.id + "Section";
        $("html body").animate({
          scrollTop: $("#" + sectionId).offset().top
        }, 1000)
      })
    }

    smoothScroll();


//pop out portfolio page
  $("#open1").click(function(){
    $(".pop_background").fadeIn();
    $("#pop_box").fadeIn();
    return false;
  })

  $("#open2").click(function(){
    $(".pop_background").fadeIn();
    $("#pop_box2").fadeIn();
    return false;
  })

  $("#open3").click(function(){
    $(".pop_background").fadeIn();
    $("#pop_box3").fadeIn();
    return false;
  })

  $("#open4").click(function(){
    $(".pop_background").fadeIn();
    $("#pop_box4").fadeIn();
    return false;
  })

  $("#open5").click(function(){
    $(".pop_background").fadeIn();
    $("#pop_box5").fadeIn();
    return false;
  })

  $("#open6").click(function(){
    $(".pop_background").fadeIn();
    $("#pop_box6").fadeIn();
    return false;
  })

  $("#open7").click(function(){
    $(".pop_background").fadeIn();
    $("#pop_box7").fadeIn();
    return false;
  })

  $("#open8").click(function(){
    $(".pop_background").fadeIn();
    $("#pop_box8").fadeIn();
    return false;
  })

  $(".close").click(function(){
    $(".pop_background").fadeOut();
    $(".pop_box").fadeOut();
    return false;
  })

  $(".pop_background").click(function(){
    $(".pop_background").fadeOut();
    $(".pop_box").fadeOut();
    return false;
  })

  $(".aboutbtn2").click(function(){
    $(".pop_background").fadeOut();
    $(".pop_box").fadeOut();
    return false;
  })

  }); // end of document ready
})(jQuery); // end of jQuery name space
