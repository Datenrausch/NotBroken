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

        var $data_medium = $myForm.find('input[name="mediumget"]').val()
        console.log($data_medium);
        document.getElementById('media-analyse').classList.remove("alert");

        if ($data_medium == "") {
            console.log("Empty")
            document.getElementById('media-analyse').classList.add("alert");
            document.getElementById('WARNING_getdata').classList.add("show");
            document.getElementById('WARNING_getdata').classList.remove("hide");



        } else {
            document.getElementById('WARNING_getdata').classList.add("hide");
            document.getElementById('WARNING_getdata').classList.remove("show");
            $.ajax({
                method: "GET",
                url: $url,
                data: $formData,
                success: handleFormSuccessGet,
                error: handleFormErrorGet,

            });
        }

    })

    function handleFormSuccessGet(data, textStatus, jqXHR) {
        console.log(data)
        const resultsdiv = document.getElementById('result')
        const $result = $(".result")
        const $resultfrei = $("#result-text-frei")
        const $resultpauschal = $("#result-text-pauschal")
        const $resultfest = $("#result-text-fest")

        var element = document.getElementById("result-text-frei")
        element.innerHTML = ""
        var element = document.getElementById("result-text-pauschal")
        element.innerHTML = ""
        var element = document.getElementById("result-text-fest")
        element.innerHTML = ""


        d3.select("#festgrafik1_svg").remove();
        d3.select("#pauschalgrafik1_svg").remove();
        d3.select("#freigrafik1_svg").remove();
        d3.select("#freigrafikvideo_svg").remove();
        d3.select("#freigrafikaudio_svg").remove();
        d3.select("#freigrafiktext_svg").remove();

        var element = document.getElementById("nodata-frei-1")
        element.classList.add("hide");
        element.classList.remove("show");

        var element = document.getElementById("nodata-frei-2")
        element.classList.add("hide");
        element.classList.remove("show");

        var element = document.getElementById("nodata-frei-3")
        element.classList.add("hide");
        element.classList.remove("show");

        var element = document.getElementById("nodata-frei-4")
        element.classList.add("hide");
        element.classList.remove("show");

        var element = document.getElementById("nodata-pauschal-1")
        element.classList.add("hide");
        element.classList.remove("show");

        var element = document.getElementById("nodata-fest-1")
        element.classList.add("hide");
        element.classList.remove("show");


        $('input[id=result_format_text]').attr('checked',true);
        $('input[id=result_format_audio]').attr('checked',false);
        $('input[id=result_format_video]').attr('checked',false);

        var element = document.getElementById("datasets_no")
        element.innerHTML=""
        element.innerHTML=(String(data["mediumoverallcount"]))
        const mediumname = document.getElementById("result-mediumname")
        console.log(mediumname)
        const size = Object.keys(data).length;
        mediumname.innerHTML = ""

        mediumname.innerHTML = (String(data["mediumname"]))



        resultsdiv.classList.add("show");
        resultsdiv.classList.remove("hide");

        if(data["FairnessCount"]>0){
          resultsdiv.classList.add("fair-accepted");
        }else{
          resultsdiv.classList.remove("fair-accepted");

        }


        if (data["nodata"] != undefined) {
            var element = document.getElementById("NoDataAtAllMessage")
            console.log(element)
            if (element != null) {
                element.parentNode.removeChild(element);
            }
            var element = document.getElementById("WARNING_unknown");
            element.classList.add("show");
            element.classList.remove("hide");

            var element = document.getElementById("result-grid");
            console.log(element)
            element.classList.add("show");
            element.classList.remove("hide");

            var element = document.getElementById("nodata-frei-1")
            element.classList.add("show");
            element.classList.remove("hide");

            var element = document.getElementById("nodata-frei-2")
            element.classList.add("show");
            element.classList.remove("hide");


            var element = document.getElementById("nodata-frei-3")
            element.classList.add("show");
            element.classList.remove("hide");


            var element = document.getElementById("nodata-frei-4")
            element.classList.add("show");
            element.classList.remove("hide");


            var element = document.getElementById("nodata-pauschal-1")
            element.classList.add("show");
            element.classList.remove("hide");


            var element = document.getElementById("nodata-fest-1")
            element.classList.add("show");
            element.classList.remove("hide");

            for (i = 0; i < 9; i++) {
                commentid = "comment-" + String(i + 1)
                console.log(commentid)
                var element = document.getElementById(commentid);
                element.innerHTML = ""
                element.innerHTML = "Keine Daten"

            }





        } else {

            var element = document.getElementById("NoDataAtAllMessage");
            if (element != undefined) {
                element.innerHTML = ""
                console.log(element)
            }
            var element = document.getElementById("WARNING_unknown");
            element.classList.add("hide");
            element.classList.remove("show");

            var element = document.getElementsByClassName("result-grid")[0];
            console.log(element)
            element.classList.add("show");
            element.classList.remove("hide");

            var element = document.getElementById("result_athmosphaere-fest")
            element.setAttribute("value", 0)
            element.setAttribute("class", "range result_happiness-bar result_happiness-0")

            var element = document.getElementById("result_athmosphaere-pauschal")
            element.setAttribute("value", 0)
            element.setAttribute("class", "range result_happiness-bar result_happiness-0")

            var element = document.getElementById("result_athmosphaere-frei")
            element.setAttribute("value", 0)
            element.setAttribute("class", "range result_happiness-bar result_happiness-0")


            if (data["MediumFestHappiness"]) {
                if (data["MediumFestHappiness"]["status"] == "Success") {
                    var element = document.getElementById("result_athmosphaere-fest")
                    element.setAttribute("value", Math.round((data["MediumFestHappiness"]["median"])))
                    element.setAttribute("class", "range result_happiness-bar result_happiness-" + String(Math.round((data["MediumFestHappiness"]["median"]))))
                };
            };
            if (data["MediumPauschalHappiness"]) {
                if (data["MediumPauschalHappiness"]["status"] == "Success") {
                    var element = document.getElementById("result_athmosphaere-pauschal")
                    element.setAttribute("value", Math.round((data["MediumPauschalHappiness"]["median"])))
                    element.setAttribute("class", "range result_happiness-bar result_happiness-" + String(Math.round((data["MediumPauschalHappiness"]["median"]))))

                };
            };

            if (data["MediumFreiHappiness"]) {
                if (data["MediumFreiHappiness"]["status"] == "Success") {
                    var element = document.getElementById("result_athmosphaere-frei")
                    element.setAttribute("value", Math.round((data["MediumFreiHappiness"]["median"])))
                    element.setAttribute("class", "range result_happiness-bar result_happiness-" + String(Math.round((data["MediumFreiHappiness"]["median"]))))

                };
            };



            var elementid = "festgrafik1"

            if ((data["MediumFestSalaryPerHour"]) && (data["AllFestSalaryPerHour"])) {
                if ((data["MediumFestSalaryPerHour"]["status"] == "Success") && (data["AllFestSalaryPerHour"]["status"] == "Success") && (data["MediumFestSalaryPerHour"]["median"] != 0) && (data["AllFestSalaryPerHour"]["median"] != 0)) {
                    var d3festjson = [{
                        id: "MediumFestSalaryPerHour",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFestSalaryPerHour"]["lower"]),
                        max: parseFloat(data["MediumFestSalaryPerHour"]["upper"]),
                        mean: parseFloat(data["MediumFestSalaryPerHour"]["median"])
                    }, {
                        id: "AllFestSalaryPerHour",
                        category: "Ø \n alle \n Festangestellte",
                        min: parseFloat(data["AllFestSalaryPerHour"]["lower"]),
                        max: parseFloat(data["AllFestSalaryPerHour"]["upper"]),
                        mean: parseFloat(data["AllFestSalaryPerHour"]["median"]),
                        charttitle: "Stundenlohn für Festangestellte #(Brutto / Euro)"
                    }];

                    gradientboxplot(d3festjson, elementid)
                } else {
                    var element = document.getElementById("nodata-fest-1")
                    element.classList.add("show");
                    element.classList.remove("hide");

                }
            } else {
                var element = document.getElementById("nodata-fest-1")
                element.classList.add("show");
                element.classList.remove("hide");
            };

            elementid = "pauschalgrafik1"

            if ((data["MediumPauschalSalaryPerHour"]) && (data["AllPauschalSalaryPerHour"])) {
                if ((data["MediumPauschalSalaryPerHour"]["status"] == "Success") && (data["AllPauschalSalaryPerHour"]["status"] == "Success") && (data["MediumPauschalSalaryPerHour"]["median"] != 0) && (data["AllPauschalSalaryPerHour"]["median"] != 0)) {
                    var d3festjson = [{
                        id: "MediumPauschalSalaryPerHour",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumPauschalSalaryPerHour"]["lower"]),
                        max: parseFloat(data["MediumPauschalSalaryPerHour"]["upper"]),
                        mean: parseFloat(data["MediumPauschalSalaryPerHour"]["median"])
                    }, {
                        id: "AllPauschalSalaryPerHour",
                        category: "Ø \n alle \n Pauschalisten",
                        min: parseFloat(data["AllPauschalSalaryPerHour"]["lower"]),
                        max: parseFloat(data["AllPauschalSalaryPerHour"]["upper"]),
                        mean: parseFloat(data["AllPauschalSalaryPerHour"]["median"]),
                        charttitle: "Stundenlohn für Pauschalisten #(Brutto / Euro)"
                    }];

                    gradientboxplot(d3festjson, elementid)
                } else {
                    var element = document.getElementById("nodata-pauschal-1")
                    element.classList.add("show");
                    element.classList.remove("hide");

                }
            } else {
                var element = document.getElementById("nodata-pauschal-1")
                element.classList.add("show");
                element.classList.remove("hide");
            };


            elementid = "freigrafik1"

            if ((data["MediumFreiSalaryPerHour"]) && (data["AllFreiSalaryPerHour"])) {
                if ((data["MediumFreiSalaryPerHour"]["status"] == "Success") && (data["AllFreiSalaryPerHour"]["status"] == "Success") && (data["MediumFreiSalaryPerHour"]["median"] != 0) && (data["AllFreiSalaryPerHour"]["median"] != 0)) {
                    var d3festjson = [{
                        id: "MediumFreiSalaryPerHour",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiSalaryPerHour"]["lower"]),
                        max: parseFloat(data["MediumFreiSalaryPerHour"]["upper"]),
                        mean: parseFloat(data["MediumFreiSalaryPerHour"]["median"])
                    }, {
                        id: "AllFreiSalaryPerHour",
                        category: "alle Medien",
                        min: parseFloat(data["AllFreiSalaryPerHour"]["lower"]),
                        max: parseFloat(data["AllFreiSalaryPerHour"]["upper"]),
                        mean: parseFloat(data["AllFreiSalaryPerHour"]["median"]),
                        charttitle: "Stundenhonorar #(Brutto / Euro)"
                    }];

                    gradientboxplot(d3festjson, elementid)
                } else {
                    var element = document.getElementById("nodata-frei-1")
                    element.classList.add("show");
                    element.classList.remove("hide");

                }
            } else {
                var element = document.getElementById("nodata-frei-1")
                element.classList.add("show");
                element.classList.remove("hide");
            };

            elementid = "freigrafikvideo"

            if ((data["MediumFreiVideoFeePerMin"]) && (data["AllFreiVideoFeePerMin"])) {
                if ((data["MediumFreiVideoFeePerMin"]["status"] == "Success") && (data["AllFreiVideoFeePerMin"]["status"] == "Success") && (data["MediumFreiVideoFeePerMin"]["median"] != 0) && (data["AllFreiVideoFeePerMin"]["median"] != 0)) {
                    var d3festjson = [{
                        id: "MediumFreiVideoFeePerMin",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiVideoFeePerMin"]["lower"]),
                        max: parseFloat(data["MediumFreiVideoFeePerMin"]["upper"]),
                        mean: parseFloat(data["MediumFreiVideoFeePerMin"]["median"])
                    }, {
                        id: "AllFreiVideoFeePerMin",
                        category: "alle Medien",
                        min: parseFloat(data["AllFreiVideoFeePerMin"]["lower"]),
                        max: parseFloat(data["AllFreiVideoFeePerMin"]["upper"]),
                        mean: parseFloat(data["AllFreiVideoFeePerMin"]["median"]),
                        charttitle: "Honorar pro Videominute #(Brutto / Euro)"
                    }];

                    gradientboxplot(d3festjson, elementid)
                } else {
                    var element = document.getElementById("nodata-frei-4")
                    element.classList.add("show");
                    element.classList.remove("hide");

                }
            } else {
                var element = document.getElementById("nodata-frei-4")
                element.classList.add("show");
                element.classList.remove("hide");
            };
            elementid = "freigrafikaudio"

            if ((data["MediumFreiAudioFeePerMin"]) && (data["AllFreiAudioFeePerMin"])) {
                if ((data["MediumFreiAudioFeePerMin"]["status"] == "Success") && (data["AllFreiAudioFeePerMin"]["status"] == "Success") && (data["MediumFreiAudioFeePerMin"]["median"] != 0) && (data["AllFreiAudioFeePerMin"]["median"] != 0)) {
                    var d3festjson = [{
                        id: "MediumFreiAudioFeePerMin",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiAudioFeePerMin"]["lower"]),
                        max: parseFloat(data["MediumFreiAudioFeePerMin"]["upper"]),
                        mean: parseFloat(data["MediumFreiAudioFeePerMin"]["median"])
                    }, {
                        id: "AllFreiAudioFeePerMin",
                        category: "alle Medien",
                        min: parseFloat(data["AllFreiAudioFeePerMin"]["lower"]),
                        max: parseFloat(data["AllFreiAudioFeePerMin"]["upper"]),
                        mean: parseFloat(data["AllFreiAudioFeePerMin"]["median"]),
                        charttitle: "Honorar pro Audiominute #(Brutto / Euro)"
                    }];

                    gradientboxplot(d3festjson, elementid)
                } else {
                    var element = document.getElementById("nodata-frei-3")
                    element.classList.add("show");
                    element.classList.remove("hide");

                }
            } else {
                var element = document.getElementById("nodata-frei-3")
                element.classList.add("show");
                element.classList.remove("hide");
            };

            elementid = "freigrafiktext"

            if ((data["MediumFreiArticleFeePerChar"]) && (data["AllFreiArticleFeePerChar"])) {
                if ((data["MediumFreiArticleFeePerChar"]["status"] == "Success") && (data["AllFreiArticleFeePerChar"]["status"] == "Success") && (data["MediumFreiArticleFeePerChar"]["median"] != 0) && (data["MediumFreiArticleFeePerChar"]["median"] != 0)) {
                    var d3festjson = [{
                        id: "MediumFreiArticleFeePerChar",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiArticleFeePerChar"]["lower"] * 1000),
                        max: parseFloat(data["MediumFreiArticleFeePerChar"]["upper"] * 1000),
                        mean: parseFloat(data["MediumFreiArticleFeePerChar"]["median"] * 1000),
                    }, {
                        id: "AllFreiArticleFeePerChar",
                        category: "alle Medien",
                        min: parseFloat(data["AllFreiArticleFeePerChar"]["lower"] * 1000),
                        max: parseFloat(data["AllFreiArticleFeePerChar"]["upper"] * 1000),
                        mean: parseFloat(data["AllFreiArticleFeePerChar"]["median"] * 1000),
                        charttitle: "Honorar pro 1000 Zeichen #(Brutto / Euro)"
                    }];

                    gradientboxplot(d3festjson, elementid)
                } else {
                    var element = document.getElementById("nodata-frei-2")
                    element.classList.add("show");
                    element.classList.remove("hide");

                }
            } else {
                var element = document.getElementById("nodata-frei-2")
                element.classList.add("show");
                element.classList.remove("hide");
            };
            listofcomments = data["MediumComments"]
            if (listofcomments != undefined) {
                for (i = 0; i < 9; i++) {
                    Commenttext = (listofcomments[i])
                    commentid = "comment-" + String(i + 1)
                    console.log(commentid)
                    var element = document.getElementById(commentid);
                    element.innerHTML = ""
                    element.innerHTML = Commenttext
                };
            } else {
                for (i = 0; i < 9; i++) {
                    commentid = "comment-" + String(i + 1)
                    console.log(commentid)
                    var element = document.getElementById(commentid);
                    element.innerHTML = ""
                    element.innerHTML = "Keine Daten"

                }

            }
            smoothfunction()

        };


        var element = document.getElementById("freigrafiktext");
        element.classList.add("show");
        element.classList.remove("hide");
        var element = document.getElementById("pauschalgrafik1");
        element.classList.add("show");
        element.classList.remove("hide");
        var element = document.getElementById("festgrafik1");
        element.classList.add("show");
        element.classList.remove("hide");
        var element = document.getElementById("freigrafik1");
        console.log(element)

        element.classList.add("show");
        element.classList.remove("hide");

        //	var startTimer = Date.now();
        //	var endTimer = startTimer+900000;
        //if(startTimer<endTimer){

        console.log(textStatus)
        console.log(jqXHR)
        $myForm[0].reset(); // reset form data



        document.getElementById("comment-1").style.display = "inline-block";
        setTimeout(function() {
            document.getElementById("comment-1").style.display = "none";
            document.getElementById("comment-2").style.display = "inline-block"
        }, 5000);

        setTimeout(function() {
            document.getElementById("comment-2").style.display = "none";
            document.getElementById("comment-3").style.display = "inline-block"
        }, 10000);

        setTimeout(function() {
            document.getElementById("comment-3").style.display = "none";
            document.getElementById("comment-4").style.display = "inline-block"
        }, 15000);

        setTimeout(function() {
            document.getElementById("comment-4").style.display = "none";
            document.getElementById("comment-5").style.display = "inline-block"
        }, 20000);

        setTimeout(function() {
            document.getElementById("comment-5").style.display = "none";
            document.getElementById("comment-6").style.display = "inline-block"
        }, 25000);

        setTimeout(function() {
            document.getElementById("comment-6").style.display = "none";
            document.getElementById("comment-7").style.display = "inline-block"
        }, 30000);

        setTimeout(function() {
            document.getElementById("comment-7").style.display = "none";
            document.getElementById("comment-8").style.display = "inline-block"
        }, 35000);

        setTimeout(function() {
            document.getElementById("comment-8").style.display = "none";
            document.getElementById("comment-9").style.display = "inline-block"
        }, 40000);

    }

    function handleFormErrorGet(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
        console.log(textStatus)
        console.log(errorThrown)
    }
})
