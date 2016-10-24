$(document).ready(function() {

  var elements = ["h1", "p", "img"];

  elements.forEach(function(element) {
    $(element).click(function() {
      alert("This is a " + element + "!");
    });
  });
  //
  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });

  $('#blanks form').submit(function(event) {

    var blanks = ["firstname", "lastname", "address", "political"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();

      $('.' + blank).text(userInput.toUpperCase());
    })
    // var firstnameInput = $("input#firstname").val();
    // var lastnameInput = $("input#lastname").val();
    // var addressInput = $("input#address").val();
    // var politicalInput = $("input#political").val();
    //
    // $('.firstname').text(firstnameInput.toUpperCase());
    // $('.lastname').text(lastnameInput.toUpperCase());
    // $('.address').text(addressInput.toUpperCase());
    // $('.political').text(politicalInput.toUpperCase());

    $('#story').show();

    event.preventDefault();
  });

});
