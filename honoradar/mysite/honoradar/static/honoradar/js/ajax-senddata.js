//Checking whether the page is ready to fire-up Ajax etc.
$(document).ready(function() {
    var $myForm = $("#giv-form")
    //If Form is submitted, we prevent the default of reloading
    $myForm.submit(function(event) {
        event.preventDefault()
        //instead we take the data from the form, serialize it,
        //also we retrieve the name and the url where to send the data to
        var $formData = $(this).serialize()
        var $name = $myForm.attr('name')
        var $url = $myForm.attr('data-url')
        //we send the data in an ajax call to the backend, if the call was a Success
        //we run the handleFormSuccessGet function. Otherewise an errorfunction
        $.ajax({
            method: "POST",
            url: $url,
            data: $formData,
            success: handleFormSuccessPost,
            error: handleFormErrorPost,

        })

    })
    //Now if we submitted the data, the backend has checked whether inputs were correct
    //if not, we get a data JSON send back that contains warnings
    function handleFormSuccessPost(data, textStatus, jqXHR) {
        const alertdiv = document.getElementById('WARNING')

        alertdiv.classList.add("show");
        alertdiv.classList.remove("hide");
        const size = Object.keys(data).length;
        //These are now pushed into a div right below the input
        if (size > 0) {
            alertdiv.innerHTML = ""
            alertdiv.innerHTML = "<strong>Achtung! </strong>Es fehlen noch Angaben zu folgenden Pflicht-Feldern: "
            const $Warning = $("#WARNING")
            $Warning.removeAttr("style");
            for (i = 0; i < size; i++) {
                console.log(i);
                alertdiv.classList.add("show");
                alertdiv.classList.remove("hide");
                keyname = String("message" + String(i));
                if (i == 0) {
                    $Warning.append('<span class="closebtn" onclick="hidedenied()">&times;</span>')
                    $Warning.append('<span>' + String(data[keyname]) + '</span>');
                } else {
                    $Warning.append('<span>, ' + String(data[keyname]) + '</span>');
                };
                //Also the fields where the data is missing light up in red
                if ((String(data[keyname])) == "Mediumname") {
                    document.getElementById('data_medium').classList.add("alert");
                };
                if ((String(data[keyname])) == "Arbeitsverhältnis") {
                    document.getElementById('data_arbeitsverhaeltnis_frei').classList.add("alert-switch");
                };
                if ((String(data[keyname])) == "gearbeiteten Tagen pro Monat") {
                    document.getElementById('pre-data_tag_monat').classList.add("pre-alert-bar-day-month");
                    document.getElementById('data_tag_monat').classList.add("alert-bar_tag_monat");
                };
                if ((String(data[keyname])) == "gearbeiteten Stunden pro Tag") {
                    document.getElementById('pre-data_stunden_tag').classList.add("pre-alert-bar-hour-day");
                    document.getElementById('data_stunden_tag').classList.add("alert-bar_stunde_tag");
                };
                if ((String(data[keyname])) == "gearbeiteten Stunden pro Woche") {
                    document.getElementById('pre-data_stunden_woche').classList.add("pre-alert-bar-hour-week");
                    document.getElementById('data_stunden_woche').classList.add("alert-bar_stunden_woche");
                };

                if ((String(data[keyname])) == "Honorar") {
                    document.getElementById('data_honorar').classList.add("alert");
                };
                if ((String(data[keyname])) == "Gehalt") {
                    document.getElementById('data_gehalt').classList.add("alert");
                }
                if ((String(data[keyname])) == "Format des Mediums") {
                    document.getElementById('data_format_text_audio_video').classList.add("alert-switch");
                };
                if ((String(data[keyname])) == "Anzahl an Zeichen für den Artikel") {
                    document.getElementById('pre-data_laenge_text').classList.add("pre-alert-bar-text");
                    document.getElementById('data_laenge_text').classList.add("alert-bar_text");
                };
                if ((String(data[keyname])) == "Beitragsminuten für den Audiobeitrag") {
                    document.getElementById('pre-data_laenge_audio').classList.add("pre-alert-bar-audio");
                    document.getElementById('data_laenge_audio').classList.add("alert-bar_audio");
                };
                if ((String(data[keyname])) == "Beitragsminuten für den Videobeitrag") {
                    document.getElementById('pre-data_laenge_video').classList.add("pre-alert-bar-video");
                    document.getElementById('data_laenge_video').classList.add("alert-bar_video");
                };

                if ((String(data[keyname])) == "Zeitaufwand") {
                    document.getElementById('pre-data_zeit').classList.add("pre-alert-bar-time");
                    document.getElementById('data_zeit').classList.add("alert-bar_time");
                };
                if ((String(data[keyname])) == "Arbeitsatmosphäre") {
                    document.getElementById('data_athmosphaere').classList.add("alert-bar_happiness");
                    document.getElementById('pre-data_athmosphaere').classList.add("pre-alert-bar-happiness");
                };
                if ((String(data[keyname])) == "AGB") {
                    document.getElementById('data_checkbox').classList.add("alert-checkbox");
                };

            }
        } else {
          //If there is no need for new input, we reset the Form
          //and all other elements that show the input into the form
          $myForm[0].reset(); // reset form data
          document.getElementById('outputdaymonth').innerHTML="0"
          document.getElementById('outputhourday').innerHTML="0"
          document.getElementById('outputhourweek').innerHTML="0"

          document.getElementById('outputtime').innerHTML="0"

          document.getElementById('outputtext').innerHTML="0"
          document.getElementById('outputaudio').innerHTML="0"
          document.getElementById('outputvideo').innerHTML="0"
          var element=document.getElementById("outputhappiness").setAttribute("class","fav-output fav-output-0")


          //We hide the alert-div and instead show the divs that thank for the data
            alertdiv.innerHTML = ""
            alertdiv.classList.add("hide");
            alertdiv.classList.remove("show");

            var element = document.getElementById("ACCEPTED");
            element.classList.add("show");
            element.classList.remove("hide");



            var element = document.getElementById("banner-left-1");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("banner-left-4");
            element.classList.add("show");
            element.classList.remove("hide");

            //Also we set all warnings in the field to green again
            var element = document.getElementById("data_medium");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("data_arbeitsverhaeltnis");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }
            var element = document.getElementById("pre-data_position");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

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
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            var element = document.getElementById("pre-data_format_text_audio_video");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            var element = document.getElementById("pre-data_laenge_text");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            var element = document.getElementById("pre-data_laenge_video");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("data_genre");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            var element = document.getElementById("banner-left-2");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("banner-left-shadow-2");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("banner-left-triangle2");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            var element = document.getElementById("data_position");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("pre-data_kommentar");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("question-3");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("data_gehalt");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("break-1");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("data_honorar");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("pre-data_laenge_audio");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("pre-data_zeit");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("pre-data_erfahrung_jahr_1_3_5");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            var element = document.getElementById("banner-left-triangle");

            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }
            element.classList.remove("experience-right");

            var element = document.getElementById("pre-data_athmosphaere");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("pre-data_checkbox");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("data_submit");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("question-1");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("question-2");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("question-3");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            var element = document.getElementById("pre-data_stunden_woche");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("pre-data_stunden_tag");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }


            var element = document.getElementById("pre-data_verbreitung_analog_digital_beides");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("banner-left-shideow-2");
            if (element != null) {
                element.classList.add("hide");
                element.classList.remove("show");
            }

            var element = document.getElementById("pre-data_erfahrung_jahr_1_3_5");
            element.classList.add("experience-right");
            if (element != null) {
                {
                    element.classList.add("hide");
                    element.classList.remove("show");
                }

                var element = document.getElementById("disclaimer");
                if (element != null) {
                    element.classList.add("hide");
                    element.classList.remove("show");
                }
            }
        }

        smoothfunction_submit()
    }

    function handleFormErrorPost(jqXHR, textStatus, errorThrown) {

    }
})
