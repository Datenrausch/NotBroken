//Setting up global variables
var newdata = ""
var newtextStatus = ""
var newjqXHR = ""
var redraw=1
//Checking whether the page is ready to fire-up Ajax etc.
$(document).ready(function() {
var $url=  "/createjson/"
console.log(nameJSON)
console.log("Ajax-try")
        //If Form is submitted, we prevent the default of reloading
    $.ajax({
                method: "GET",
                url: $url,
                success: function(data){
                  console.log("Inside Ajax")
                 handleFormSuccessGet(data, redraw);
               },
                error: handleFormErrorGet,

            });


    function handleFormSuccessGet(data, textStatus, jqXHR, redraw) {
      console.log(data);
      nameJSON=data
      console.log(nameJSON);
      autocomplete_get();
      autocomplete_giv();




    }

    function handleFormErrorGet(jqXHR, textStatus, errorThrown) {

        var newdata = ""
        var newtextStatus = ""
        var newjqXHR = ""
    }
    //Also we rerun this whole function on resize to make the graphics responsive
    function redraw() {
        if (newdata != "") {
          var redraw=0
            handleFormSuccessGet(newdata, newtextStatus, newjqXHR, redraw)

        }
    }
    window.addEventListener("resize", redraw);


})
