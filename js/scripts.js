$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var addressInput = $("input#address").val();
    var politicalInput = $("input#political").val();

    $('.firstname').text(firstnameInput.toUpperCase());
    $('.lastname').text(lastnameInput.toUpperCase());
    $('.address').text(addressInput.toUpperCase());
    $('.political').text(politicalInput.toUpperCase());

    $('#story').show();

    event.preventDefault();
  });

});
