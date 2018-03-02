

$(function() {
  showMessage("Daten fehlen: Bitte fülle dieses Feld aus!");
});

function showMessage(s) {
  var m = $("#alert");
  m.html(s);
  
  m.addClass("show");
  setTimeout(function() {
    m.removeClass("show");
    m.addClass("hide");
    setTimeout(function() {
      m.addClass("hide");
    }, 5000);
  }, 7000);
}