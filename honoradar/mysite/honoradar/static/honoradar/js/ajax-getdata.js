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
        const $result = $(".result")
        const $resultfrei = $("#result-text-frei")
        const $resultpauschal = $("#result-text-pauschal")
        const $resultfest = $("#result-text-fest")

        var element=document.getElementById("result-text-frei")
        element.innerHTML=""
        var element=document.getElementById("result-text-pauschal")
        element.innerHTML=""
        var element=document.getElementById("result-text-fest")
        element.innerHTML=""


        var element=document.getElementById("festgrafik1")
        element.innerHTML=""
        var element=document.getElementById("pauschalgrafik1")
        element.innerHTML=""
        var element=document.getElementById("freigrafik1")
        element.innerHTML=""
        var element=document.getElementById("freigrafikvideo")
        element.innerHTML=""
        var element=document.getElementById("freigrafikaudio")
        element.innerHTML=""
        var element=document.getElementById("freigrafikprint")
        element.innerHTML=""
        const mediumname = document.getElementById("result-mediumname")
        console.log(mediumname)
        const size = Object.keys(data).length;
        mediumname.innerHTML = ""

        mediumname.innerHTML = (String(data["mediumname"]))



        resultsdiv.classList.add("show");
        resultsdiv.classList.remove("hide");



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
                if (data["MediumFreiVideoFeePerMin"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Das entspricht einem Honorar von ' + String(data["MediumFreiVideoFeePerMin"]["avg"]) + " Euro pro Sendeminute  plusminus " + String(data["MediumFreiVideoFeePerMin"]["std"]) + "." + '</div>');
                };
            }

            if (data["MediumFreiAudioFeePerMin"]) {
                if (data["MediumFreiAudioFeePerMin"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Das entspricht einem Honorar von ' + String(data["MediumFreiAudioFeePerMin"]["avg"]) + " Euro pro Sendeminute  plusminus " + String(data["MediumFreiAudioFeePerMin"]["std"]) + "." + '</div>');
                };
            }

            if (data["MediumFreiArticleFeePerChar"]) {

                if (data["MediumFreiArticleFeePerChar"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Das entspricht einem Honorar von ' + String(data["MediumFreiArticleFeePerChar"]["avg"]) + " Euro pro Zeichen plusminus " + String(data["MediumFreiArticleFeePerChar"]["std"]) + "." + '</div>');
                };
            }
            if (data["MediumFestHappiness"]) {
                if (data["MediumFestHappiness"]["status"] == "Success") {
                    $resultfest.append('<div class="result-text">Und die Zufriedenheit liegt bei ' + String(data["MediumFestHappiness"]["avg"]) + " plusminus " + String(data["MediumFestHappiness"]["std"]) + '</div>');
                    var element=document.getElementById("result_athmosphaere-fest")
                    element.setAttribute("value",Math.round((data["MediumFestHappiness"]["avg"])))
                    element.setAttribute("class","range result_happiness-bar result_happiness-"+String(Math.round((data["MediumFestHappiness"]["avg"]))))
                };
            };
            if (data["MediumPauschalHappiness"]) {
                if (data["MediumPauschalHappiness"]["status"] == "Success") {
                    $resultpauschal.append('<div class="result-text">Und die Zufriedenheit liegt bei ' + String(data["MediumPauschalHappiness"]["avg"]) + " plusminus " + String(data["MediumPauschalHappiness"]["std"]) + '</div>');
                    var element=document.getElementById("result_athmosphaere-pauschal")
                    element.setAttribute("value",Math.round((data["MediumPauschalHappiness"]["avg"])))
                    element.setAttribute("class","range result_happiness-bar result_happiness-"+String(Math.round((data["MediumPauschalHappiness"]["avg"]))))

                };
            };

            if (data["MediumFreiHappiness"]) {
                if (data["MediumFreiHappiness"]["status"] == "Success") {
                    $resultfrei.append('<div class="result-text">Und die Zufriedenheit liegt bei ' + String(data["MediumFreiHappiness"]["avg"]) + " plusminus " + String(data["MediumFreiHappiness"]["std"]) + '</div>');
                    var element=document.getElementById("result_athmosphaere-frei")
                    element.setAttribute("value",Math.round((data["MediumFreiHappiness"]["avg"])))
                    element.setAttribute("class","range result_happiness-bar result_happiness-"+String(Math.round((data["MediumFreiHappiness"]["avg"]))))

                };
            };

            let elementid = "festgrafik1"

            if ((data["MediumFestSalaryPerHour"]) && (data["AllFestSalaryPerHour"])) {
                if ((data["MediumFestSalaryPerHour"]["status"] == "Success") && (data["AllFestSalaryPerHour"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumFestSalaryPerHour",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFestSalaryPerHour"]["avg"]) - parseFloat(data["MediumFestSalaryPerHour"]["std"]),
                        max: parseFloat(data["MediumFestSalaryPerHour"]["avg"]) + parseFloat(data["MediumFestSalaryPerHour"]["std"]),
                        mean: parseFloat(data["MediumFestSalaryPerHour"]["avg"])
                    }, {
                        id: "AllFestSalaryPerHour",
                        category: "Ø \n alle \n Festangestellte",
                        min: parseFloat(data["AllFestSalaryPerHour"]["avg"]) - parseFloat(data["AllFestSalaryPerHour"]["std"]),
                        max: parseFloat(data["AllFestSalaryPerHour"]["avg"]) + parseFloat(data["AllFestSalaryPerHour"]["std"]),
                        mean: parseFloat(data["AllFestSalaryPerHour"]["avg"])
                    }, {
                        id: "FreischreiberFestSalaryPerHour",
                        category: "Freischreiber \n Empfehlung",
                        min: 25,
                        max: 25,
                        mean: 25,
                        charttitle: "Stundenlohn für Festangestellt in Euro"

                    }];

                    gradientboxplot(d3festjson, elementid)
                }else{
                  $graphicdiv = $("#"+elementid)
                  $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
                }
            }else{
              $graphicdiv = $("#"+elementid)
              $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');

            };
             elementid = "pauschalgrafik1"

            if ((data["MediumPauschalSalaryPerHour"]) && (data["AllPauschalSalaryPerHour"])) {
                if ((data["MediumPauschalSalaryPerHour"]["status"] == "Success") && (data["AllPauschalSalaryPerHour"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumPauschalSalaryPerHour",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumPauschalSalaryPerHour"]["avg"]) - parseFloat(data["MediumPauschalSalaryPerHour"]["std"]),
                        max: parseFloat(data["MediumPauschalSalaryPerHour"]["avg"]) + parseFloat(data["MediumPauschalSalaryPerHour"]["std"]),
                        mean: parseFloat(data["MediumPauschalSalaryPerHour"]["avg"])
                    }, {
                        id: "AllPauschalSalaryPerHour",
                        category: "Ø \n alle \n Pauschalisten",
                        min: parseFloat(data["AllPauschalSalaryPerHour"]["avg"]) - parseFloat(data["AllPauschalSalaryPerHour"]["std"]),
                        max: parseFloat(data["AllPauschalSalaryPerHour"]["avg"]) + parseFloat(data["AllPauschalSalaryPerHour"]["std"]),
                        mean: parseFloat(data["AllPauschalSalaryPerHour"]["avg"])
                    }, {
                        id: "FreischreiberPauschalSalaryPerHour",
                        category: "Freischreiber Empfehlung",
                        min: 25,
                        max: 25,
                        mean: 25,
                        charttitle: "Stundenlohn für Pauaschalisten in Euro"

                    }];

                    gradientboxplot(d3festjson, elementid)
                  }else{
                    $graphicdiv = $("#"+elementid)
                    $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
                  }
              }else{
                $graphicdiv = $("#"+elementid)
                $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
                };
               elementid = "freigrafik1"

            if ((data["MediumFreiSalaryPerHour"]) && (data["AllFreiSalaryPerHour"])) {
                if ((data["MediumFreiSalaryPerHour"]["status"] == "Success") && (data["AllFreiSalaryPerHour"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumFreiSalaryPerHour",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiSalaryPerHour"]["avg"]) - parseFloat(data["MediumFreiSalaryPerHour"]["std"]),
                        max: parseFloat(data["MediumFreiSalaryPerHour"]["avg"]) + parseFloat(data["MediumFreiSalaryPerHour"]["std"]),
                        mean: parseFloat(data["MediumFreiSalaryPerHour"]["avg"])
                    }, {
                        id: "AllFreiSalaryPerHour",
                        category: "Ø alle Freiberufler",
                        min: parseFloat(data["AllFreiSalaryPerHour"]["avg"]) - parseFloat(data["AllFreiSalaryPerHour"]["std"]),
                        max: parseFloat(data["AllFreiSalaryPerHour"]["avg"]) + parseFloat(data["AllFreiSalaryPerHour"]["std"]),
                        mean: parseFloat(data["AllFreiSalaryPerHour"]["avg"])
                    }, {
                        id: "FreischreiberFreiSalaryPerHour",
                        category: "Freischreiber Empfehlung",
                        min: 25,
                        max: 25,
                        mean: 25,
                        charttitle: "Stundenlohn für Freie in Euro"

                    }];

                    gradientboxplot(d3festjson, elementid)
                }else{
                  $graphicdiv = $("#"+elementid)
                  $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
                }
              }else{
                $graphicdiv = $("#"+elementid)
                $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
              };
               elementid = "freigrafikvideo"

            if ((data["MediumFreiVideoFeePerMin"]) && (data["AllFreiVideoFeePerMin"])) {
                if ((data["MediumFreiVideoFeePerMin"]["status"] == "Success") && (data["AllFreiVideoFeePerMin"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumFreiVideoFeePerMin",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiVideoFeePerMin"]["avg"]) - parseFloat(data["MediumFreiVideoFeePerMin"]["std"]),
                        max: parseFloat(data["MediumFreiVideoFeePerMin"]["avg"]) + parseFloat(data["MediumFreiVideoFeePerMin"]["std"]),
                        mean: parseFloat(data["MediumFreiVideoFeePerMin"]["avg"])
                    }, {
                        id: "AllFreiVideoFeePerMin",
                        category: "Ø \n alle \n Freiberufler",
                        min: parseFloat(data["AllFreiVideoFeePerMin"]["avg"]) - parseFloat(data["AllFreiVideoFeePerMin"]["std"]),
                        max: parseFloat(data["AllFreiVideoFeePerMin"]["avg"]) + parseFloat(data["AllFreiVideoFeePerMin"]["std"]),
                        mean: parseFloat(data["AllFreiVideoFeePerMin"]["avg"])
                    }, {
                        id: "FreischreiberFreiSalaryPerHour",
                        category: "Freischreiber Empfehlung",
                        min: 25,
                        max: 25,
                        mean: 25,
                        charttitle: "Honorar pro Videominute in Euro"

                    }];

                    gradientboxplot(d3festjson, elementid)
                }else{
                  $graphicdiv = $("#"+elementid)
                  $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
                }
              }else{
                $graphicdiv = $("#"+elementid)
                $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
              };
               elementid = "freigrafikaudio"

            if ((data["MediumFreiAudioFeePerMin"]) && (data["AllFreiAudioFeePerMin"])) {
                if ((data["MediumFreiAudioFeePerMin"]["status"] == "Success") && (data["AllFreiAudioFeePerMin"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumFreiAudioFeePerMin",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiAudioFeePerMin"]["avg"]) - parseFloat(data["MediumFreiAudioFeePerMin"]["std"]),
                        max: parseFloat(data["MediumFreiAudioFeePerMin"]["avg"]) + parseFloat(data["MediumFreiAudioFeePerMin"]["std"]),
                        mean: parseFloat(data["MediumFreiAudioFeePerMin"]["avg"])
                    }, {
                        id: "AllFreiAudioFeePerMin",
                        category: "Ø \n alle \n Freiberufler",
                        min: parseFloat(data["AllFreiAudioFeePerMin"]["avg"]) - parseFloat(data["AllFreiAudioFeePerMin"]["std"]),
                        max: parseFloat(data["AllFreiAudioFeePerMin"]["avg"]) + parseFloat(data["AllFreiAudioFeePerMin"]["std"]),
                        mean: parseFloat(data["AllFreiAudioFeePerMin"]["avg"])
                    }, {
                        id: "FreischreiberAudioFeePerMin",
                        category: "Freischreiber Empfehlung",
                        min: 25,
                        max: 25,
                        mean: 25,
                        charttitle: "Honorar pro Audiominute in Euro"

                    }];

                    gradientboxplot(d3festjson, elementid)
                }else{
                  $graphicdiv = $("#"+elementid)
                  $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
                }
              }else{
                $graphicdiv = $("#"+elementid)
                $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
              };
               elementid = "freigrafikprint"

            if ((data["MediumFreiArticleFeePerChar"]) && (data["AllFreiArticleFeePerChar"])) {
                if ((data["MediumFreiArticleFeePerChar"]["status"] == "Success") && (data["AllFreiArticleFeePerChar"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumFreiArticleFeePerChar",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiArticleFeePerChar"]["avg"]*100) - parseFloat(data["MediumFreiArticleFeePerChar"]["std"]*100),
                        max: parseFloat(data["MediumFreiArticleFeePerChar"]["avg"]*100) + parseFloat(data["MediumFreiArticleFeePerChar"]["std"]*100),
                        mean: parseFloat(data["MediumFreiArticleFeePerChar"]["avg"]*100),
                    }, {
                        id: "AllFreiArticleFeePerChar",
                        category: "Ø \n alle \n Freiberufler",
                        min: parseFloat(data["AllFreiArticleFeePerChar"]["avg"]*100) - parseFloat(data["AllFreiArticleFeePerChar"]["std"]*100),
                        max: parseFloat(data["AllFreiArticleFeePerChar"]["avg"]*100) + parseFloat(data["AllFreiArticleFeePerChar"]["std"]*100),
                        mean: parseFloat(data["AllFreiArticleFeePerChar"]["avg"]*100)
                    }, {
                        id: "FreischreiberArticleFeePerChar",
                        category: "Freischreiber Empfehlung",
                        min: 10,
                        max: 10,
                        mean: 100,
                        charttitle: "Honorar pro hundert Zeichen in Euro"

                    }];

                    gradientboxplot(d3festjson, elementid)
                }else{
                  $graphicdiv = $("#"+elementid)
                  $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
                }
              }else{
                $graphicdiv = $("#"+elementid)
                $graphicdiv.append('<div class="result-text">Leider haben wir keine Daten für diese Kategorie.</div>');
              };
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
