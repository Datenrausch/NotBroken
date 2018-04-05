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
            
            var element = document.getElementById("ACCEPTED");
            element.classList.add("show");
            element.classList.remove("hide");

            var element = document.getElementById("banner-left-1");
              element.classList.add("hide");
              element.classList.remove("show");

            var element = document.getElementById("banner-left-4");
              element.classList.add("show");
              element.classList.remove("hide");

            var element = document.getElementById("data_medium");
              element.classList.add("hide");
              element.classList.remove("show");

            var element = document.getElementById("data_arbeitsverhaeltnis");
              element.classList.add("hide");
              element.classList.remove("show");

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