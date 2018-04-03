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

        alertdiv.innerHTML = ""
        alertdiv.innerHTML = "<strong>Achtung! </strong>Es fehlen noch Angaben zu folgenden Pflicht-Feldern: "
        const size = Object.keys(data).length;
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
