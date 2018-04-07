$(document).ready(function() {
    var $myForm = $("#get-form")
    $myForm.submit(function(event) {
        event.preventDefault()
        var $formData = $(this).serialize()
        console.log($formData)
        var $name = $myForm.attr('name-get')
        console.log($name)
        var $url = $myForm.attr('data-url-get')
        console.log($url)
        $.ajax({
            method: "GET",
            url: $url,
            data: $formData,
            success: handleFormSuccessGet,
            error: handleFormErrorGet,

        })

    })

    function handleFormSuccessGet(data, textStatus, jqXHR) {
        console.log(data)
        const resultsdiv = document.getElementById('result')
        const $result = $("#result")
        const $resultfrei = $("#resultfrei")
        const $resultpauschal = $("#resultpauschal")
        const $resultfest = $("#resultfest")
        const mediumname = document.getElementById("result-mediumname")
        console.log(mediumname)
        const size = Object.keys(data).length;
        mediumname.innerHTML = ""

        mediumname.innerHTML = (String(data["mediumname"]))
        $resultfrei.innerHTML = ""
        $resultpauschal.innerHTML = ""
        $resultfest.innerHTML = ""


        resultsdiv.classList.add("show");
        resultsdiv.classList.remove("hide");


        $result.append('<div class="result-text">' + String(data["mediumname"]) + '</div>');

        if (data["nodata"] != undefined) {
            $result.append('<div class="result-text">' + String(data["missingdata"]) + '</div>');

        } else {
            console.log("Guten Tag")
                //frei
            if (data["MediumFestSalaryPerHour"]) {
                if (data["MediumFestSalaryPerHour"]["status"] == "Success") {
                    $resultfest.append('<div class="result-text">Der durchschnittliche Stundenlohn für Festangestelllte liegt bei: ' + String(data["MediumFestSalaryPerHour"]["avg"]) + " Euro  plusminus " + String(data["MediumFestSalaryPerHour"]["std"]) + '</div>');
                };
            }
            if (data["MediumPauschalSalaryPerHour"]) {
                if (data["MediumPauschalSalaryPerHour"]["status"] == "Success") {
                    $resultpauschal.append('<div class="result-text">Der durchschnittliche Stundenlohn für Pauschalisten  liegt bei: ' + String(data["MediumPauschalSalaryPerHour"]["avg"]) + " Euro  plusminus " + String(data["MediumPauschalSalaryPerHour"]["std"]) + '</div>');
                };
            }
            if (data["MediumFreiSalaryPerHour"]) {
                if (data["MediumFreiSalaryPerHour"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Der durchschnittliche Stundenlohn für Freiangestelllte liegt bei: ' + String(data["MediumFreiSalaryPerHour"]["avg"]) + " Euro  plusminus " + String(data["MediumFreiSalaryPerHour"]["std"]) + '</div>');
                };
            }
            if (data["MediumFestSalaryPerMonth"]) {
                if (data["MediumFestSalaryPerMonth"]["status"] == "Success") {
                    $resultfest.append('<div class="result-text">Der Monatslohn bei einer 40 Stunden Woche für Festangestelllte würde bei: ' + String(data["MediumFestSalaryPerMonth"]["avg"]) + " Euro  plusminus " + String(data["MediumFestSalaryPerMonth"]["std"]) + " liegen." +
                        '</div>');
                };
            }
            if (data["MediumPauschalSalaryPerMonth"]) {
                if (data["MediumPauschalSalaryPerMonth"]["status"] == "Success") {
                    $resultpauschal.append('<div class="result-text">Der Monatslohn bei einer 40 Stunden Woche würde für Pauschalisten  bei: ' + String(data["MediumPauschalSalaryPerMonth"]["avg"]) + " Euro  plusminus " + String(data["MediumPauschalSalaryPerMonth"]["std"]) + " liegen." +
                        '</div>');
                };
            }
            if (data["MediumFreiSalaryPerMonth"]) {
                if (data["MediumFreiSalaryPerMonth"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Der Monatslohn bei einer 40 Stunden Woche würde für Freiangestelllte bei: ' + String(data["MediumFreiSalaryPerMonth"]["avg"]) + " Euro  plusminus " + String(data["MediumFreiSalaryPerMonth"]["std"]) + " liegen." +
                        '</div>');
                };
            }

            if (data["MediumFreiVideoFeePerMin"]) {
                if (data["VideoFeePerMin"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Das entspricht einem Honorar von ' + String(data["VideoFeePerMin"]["avg"]) + " Euro pro Sendeminute  plusminus " + String(data["VideoFeePerMin"]["std"]) + "." + '</div>');
                };
            }

            if (data["MediumFreiAudioFeePerMin"]) {
                if (data["AudioFeePerMin"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Das entspricht einem Honorar von ' + String(data["AudioFeePerMin"]["avg"]) + " Euro pro Sendeminute  plusminus " + String(data["AudioFeePerMin"]["std"]) + "." + '</div>');
                };
            }

            if (data["MediumFreiArticleFeePerChar"]) {

                if (data["MediumFreiArticleFeePerChar"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Das entspricht einem Honorar von ' + String(data["MediumFreiArticleFeePerChar"]["avg"]) + " Euro pro Zeichen plusminus " + String(data["MediumFreiArticleFeePerChar"]["std"]) + "." + '</div>');
                };
            }
            if (data["MediumFestHappiness"]) {
                if (data["MediumFestHappiness"]["status"] == "Success") {
                    +
                    $resultfest.append('<div class="result-text">Und die Zufriedenheit liegt bei ' + String(data["MediumFestHappiness"]["avg"]) + " plusminus " + String(data["MediumFestHappiness"]["std"]) + '</div>');
                };
            };
            if (data["MediumPauschalHappiness"]) {
                if (data["MediumPauschalHappiness"]["status"] == "Success") {
                    $resultpauschal.append('<div class="result-text">Und die Zufriedenheit liegt bei ' + String(data["MediumPauschalHappiness"]["avg"]) + " plusminus " + String(data["MediumPauschalHappiness"]["std"]) + '</div>');
                };
            };

            if (data["MediumFreiHappiness"]) {
                if (data["MediumFreiHappiness"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Und die Zufriedenheit liegt bei ' + String(data["MediumFreiHappiness"]["avg"]) + " plusminus " + String(data["MediumFreiHappiness"]["std"]) + '</div>');
                };
            };
            if ((data["MediumFestSalaryPerHour"]) && (data["AllFestSalaryPerHour"])) {
                if ((data["MediumFestSalaryPerHour"]["status"] == "Success") && (data["MediumFestSalaryPerHour"]["status"] == "Success")) {
                  console.log("d3data")
                    let d3festjson = [{
                        id: "MediumFestSalaryPerHour",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFestSalaryPerHour"]["avg"]) - parseFloat(data["MediumFestSalaryPerHour"]["std"]),
                        max: parseFloat(data["MediumFestSalaryPerHour"]["avg"]) + parseFloat(data["MediumFestSalaryPerHour"]["std"]),
                        mean: parseFloat(data["MediumFestSalaryPerHour"]["avg"])
                    }, {
                        id: "AllFestSalaryPerHour",
                        category: "Alle Festanstellungen",
                        min: parseFloat(data["AllFestSalaryPerHour"]["avg"]) - parseFloat(data["AllFestSalaryPerHour"]["std"]),
                        max: parseFloat(data["AllFestSalaryPerHour"]["avg"]) + parseFloat(data["AllFestSalaryPerHour"]["std"]),
                        mean: parseFloat(data["AllFestSalaryPerHour"]["avg"])
                    }, {
                        id: "FreischreiberFestSalaryPerHour",
                        category: "Freischreiber \n Empfehlung",
                        min: 25,
                        max: 25,
                        mean: 25
                    }];
                    elementid = "festegrafik1"

                    gradientboxplot(d3festjson, elementid)
                }
            }
        }




        console.log(textStatus)
        console.log(jqXHR)
        $myForm[0].reset(); // reset form data
        smoothfunction()
    }

    function handleFormErrorGet(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
        console.log(textStatus)
        console.log(errorThrown)
    }
})
