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


        const size = Object.keys(data).length;
        console.log(size)

        const resultfrei = document.getElementById("resultfrei")
        const resultpauschal = document.getElementById("resultpauschal")
        const resultfest = document.getElementById("resultfest")
        console.log(resultfest)

        resultsdiv.classList.add("show");
        resultsdiv.classList.remove("hide");


        $result.append('<div class="banner-left-3">Gehalts- und Lohnreports</div><div class="banner-left-shadow"></div>')

        if (data["nodata"] != undefined) {
            $result.append('<div class="result-text">' + String(data["missingdata"]) + '</div>');

        } else {
          console.log("Guten Tag")
            $result.append('<div class="result-text">' + String(data["mediumname"]) + '</div>');
            //frei
            if (data["MediumFestSalaryPerHour"]) {
                if (data["MediumFestSalaryPerHour"]["status"] == "Success") {
                    $resultfest.append('<div class="result-text">Der durchschnittliche Stundenlohn liegt bei: ' + String(data["MediumFestSalaryPerHour"]["avg"]) + " Euro  plusminus " + String(data["MediumFestSalaryPerHour"]["std"]) + '</div>');
                };
            }
            if (data["MediumFreiSalaryPerMonth"]) {
                if (data["MediumFreiSalaryPerMonth"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Der Monatslohn bei einer 40 Stunden Woche würde bei: ' + String(data["MediumFreiSalaryPerMonth"]["avg"]) + " Euro  plusminus " + String(data["MediumFreiSalaryPerMonth"]["std"]) + " liegen." +
                        '</div>');
                };
            }
            if (data["HoursPerWeekEmp"]) {
                if (data["HoursPerWeekEmp"]["status"] == "Success") {
                    $result.append('<div class="result-text">Im Schnitt arbeiten feste Mitarbeiter hier: ' + String(data["HoursPerWeekEmp"]["avg"]) + " Stunden pro Woche  plusminus " + String(data["HoursPerWeekEmp"]["std"]) +
                        "Stunden" + '</div>');
                };
            }
            if (data["DaysPerMonthMix"]) {
                if (data["DaysPerMonthMix"]["status"] == "Success") {
                    $result.append('<div class="result-text">Im Schnitt arbeiten Pauschalisten hier: ' + String(data["DaysPerMonthMix"]["avg"]) + " Tage pro Monat  plusminus " + String(data["DaysPerMonthMix"]["std"]) + "." + '</div>');
                };
            }
            if (data["HoursPerDayMix"]) {
                if (data["HoursPerDayMix"]["status"] == "Success") {
                    $result.append('<div class="result-text">Wobei sie pro Tag rund: ' + String(data["HoursPerDayMix"]["avg"]) + " Stunden arbeiten  plusminus " + String(data["HoursPerDayMix"]["std"]) + "." + '</div>');
                };
            }
            if (data["HoursPerMonth"]) {
                if (data["HoursPerMonth"]["status"] == "Success") {
                    $result.append('<div class="result-text">Das sind: ' + String(data["HoursPerMonth"]["avg"]) + " Stunden pro Monat  plusminus " + String(data["HoursPerMonth"]["std"]) + "." + '</div>');
                };
            }
            if (data["FeeFree"]) {
                if (data["FeeFree"]["status"] == "Success") {
                    $result.append('<div class="result-text">Das durchschnittliche Honorar beträgt: ' + String(data["FeeFree"]["avg"]) + " Euro  plusminus " + String(data["FeeFree"]["std"]) + "." + '</div>');
                };
            }
            if (data["HoursSpentFree"]) {
                if (data["HoursSpentFree"]["status"] == "Success") {
                    $result.append('<div class="result-text">Der Zeitaufwand dafür beträgt: ' + String(data["HoursSpentFree"]["avg"]) + " Stunden  plusminus " + String(data["HoursSpentFree"]["std"]) + "." + '</div>');
                };
            }
            if (data["MinPerVideoFree"]) {
                if (data["MinPerVideoFree"]["status"] == "Success") {
                    $result.append('<div class="result-text">Der durchschnittliche Videobeitrag ist: ' + String(data["MinPerVideoFree"]["avg"]) + " Minuten lang  plusminus " + String(data["MinPerVideoFree"]["std"]) + "." + '</div>');
                };
            }
            if (data["VideoFeePerMin"]) {
                if (data["VideoFeePerMin"]["status"] == "Success") {
                    $result.append('<div class="result-text">Das entspricht einem Honorar von ' + String(data["VideoFeePerMin"]["avg"]) + " Euro pro Sendeminute  plusminus " + String(data["VideoFeePerMin"]["std"]) + "." + '</div>');
                };
            }
            if (data["MinPerAudioFree"]) {
                if (data["MinPerAudioFree"]["status"] == "Success") {
                    $result.append('<div class="result-text">Der durchschnittliche Audiobeitrag ist: ' + String(data["MinPerAudioFree"]["avg"]) + " Minuten lang  plusminus " + String(data["MinPerAudioFree"]["std"]) + "." + '</div>');
                };
            }
            if (data["AudioFeePerMin"]) {
                if (data["AudioFeePerMin"]["status"] == "Success") {
                    $result.append('<div class="result-text">Das entspricht einem Honorar von ' + String(data["AudioFeePerMin"]["avg"]) + " Euro pro Sendeminute  plusminus " + String(data["AudioFeePerMin"]["std"]) + "." + '</div>');
                };
            }
            if (data["CharPerArticleFree"]) {
                if (data["CharPerArticleFree"]["status"] == "Success") {
                    $result.append('<div class="result-text">Der durchschnittliche Artikel ist: ' + String(data["CharPerArticleFree"]["avg"]) + " Zeichen lang  plusminus " + String(data["CharPerArticleFree"]["std"]) + "." + '</div>');
                };
            }
            if (data["ArticleFeePerChar"]) {
                if (data["ArticleFeePerChar"]["status"] == "Success") {
                    $result.append('<div class="result-text">Das entspricht einem Honorar von ' + String(data["ArticleFeePerChar"]["avg"]) + " Euro pro Zeichen plusminus " + String(data["ArticleFeePerChar"]["std"]) + "." + '</div>');
                };
            }

            if (data["Happiness"]) {
                if (data["Happiness"]["status"] == "Success") {
                    $result.append('<div class="result-text">Und die Zufriedenheit liegt bei ' + String(data["Happiness"]["avg"]) + " plusminus " + String(data["Happiness"]["std"]) + '</div>');
                };
            };
        }




        console.log(textStatus)
        console.log(jqXHR)
        $myForm[0].reset(); // reset form data
    }

    function handleFormErrorGet(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
        console.log(textStatus)
        console.log(errorThrown)
    }
})
