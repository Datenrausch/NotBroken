$(document).ready(function() {
    var $myForm = $("#giv-form")
    $myForm.submit(function(event) {
        event.preventDefault()
        var $formData = $(this).serialize()
        console.log($formData)
        var $name = $myForm.attr('name')
        console.log($name)
        var $url = $myForm.attr('data-url')
        console.log($url)
        $.ajax({
            method: "POST",
            url: $url,
            data: $formData,
            success: handleFormSuccessPost,
            error: handleFormErrorPost,

        })

    })

    function handleFormSuccessPost(data, textStatus, jqXHR) {
        console.log(data)
        const alertdiv = document.getElementById('WARNING')

        alertdiv.classList.add("show");
        alertdiv.classList.remove("hide");
        const size = Object.keys(data).length;
        if (size > 0) {
            alertdiv.innerHTML = ""
            alertdiv.innerHTML = "<strong>Achtung! </strong>Es fehlen noch Angaben zu folgenden Pflicht-Feldern: "
            console.log(size)
            const $Warning = $("#WARNING")

            for (i = 0; i < size; i++) {
                console.log(i);
                alertdiv.classList.add("show");
                alertdiv.classList.remove("hide");
                keyname = String("message" + String(i));
                if (i == 0) {
                    $Warning.append('<span>' + String(data[keyname]) + '</span>');
                } else {
                    $Warning.append('<span>, ' + String(data[keyname]) + ' </span>');

                }

            }
        } else {
            alertdiv.innerHTML = ""
            alertdiv.classList.add("hide");
            alertdiv.classList.remove("show");

            var element = document.getElementById("ACCEPTED");
            element.classList.add("show");
            element.classList.remove("hide");



            var element = document.getElementById("banner-left-1");
              if(element!=null){element.classList.add("hide");
              element.classList.remove("show");}

            var element = document.getElementById("banner-left-4");
              element.classList.add("show");
              element.classList.remove("hide");

            var element = document.getElementById("data_medium");
              if(element!=null){element.classList.add("hide");
              element.classList.remove("show");}

            var element = document.getElementById("data_arbeitsverhaeltnis");
              if(element!=null){element.classList.add("hide");
              element.classList.remove("show");}

            var element = document.getElementById("newsletter_submit");
              element.classList.add("show");
              element.classList.remove("hide");

            var element = document.getElementById("reload_submit");
              element.classList.add("show");
              element.classList.remove("hide");

            var element = document.getElementById("after-submit-text-1");
              element.classList.add("show");
              element.classList.remove("hide");

            var element = document.getElementById("after-submit-text-2");
              element.classList.add("show");
              element.classList.remove("hide");



                  var element = document.getElementById("pre-data_tag_monat");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  var element = document.getElementById("pre-data_format_text_audio_video");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  var element = document.getElementById("pre-data_laenge_text");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  var element = document.getElementById("pre-data_laenge_video");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("data_genre");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  var element = document.getElementById("banner-left-2");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  var element = document.getElementById("data_position");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("pre-data_kommentar");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("question-3");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("data_gehalt");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("break-1");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("data_honorar");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("pre-data_laenge_audio");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("pre-data_zeit");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("pre-data_erfahrung_jahr_1_3_5");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  var element = document.getElementById("banner-left-triangle");

                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}
                  element.classList.remove("experience-right");

                  var element = document.getElementById("pre-data_athmosphaere");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("pre-data_checkbox");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("data_submit");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("question-1");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("question-2");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("question-3");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  var element = document.getElementById("pre-data_stunden_woche");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("pre-data_stunden_tag");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}


                  var element = document.getElementById("pre-data_verbreitung_analog_digital_beides");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("banner-left-shideow-2");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("pre-data_erfahrung_jahr_1_3_5");
                  element.classList.add("experience-right");
                  if(element!=null){{element.classList.add("hide");
                  element.classList.remove("show");}

                  var element = document.getElementById("disclaimer");
                  if(element!=null){element.classList.add("hide");
                  element.classList.remove("show");
                  }
              }
}
        console.log(textStatus)
        console.log(jqXHR)
        $myForm[0].reset(); // reset form data
    }

    function handleFormErrorPost(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
        console.log(textStatus)
        console.log(errorThrown)
    }
})
