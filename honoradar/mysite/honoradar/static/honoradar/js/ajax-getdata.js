//Setting up global variables
var newdata = ""
var newtextStatus = ""
var newjqXHR = ""

//Checking whether the page is ready to fire-up Ajax etc.
$(document).ready(function() {
    var $myForm = $("#get-form")
        //If Form is submitted, we prevent the default of reloading
    $myForm.submit(function(event) {
        event.preventDefault()
            //instead we take the data from the form, serialize it,
            //also we retrieve the name and the url where to send the data to
        var $formData = $(this).serialize()
        var $name = $myForm.attr('name-get')
        var $url = $myForm.attr('data-url-get')

        document.getElementById('WARNING_unknown').classList.add("hide");
        document.getElementById('WARNING_unknown').classList.remove("show");
        document.getElementById('WARNING_misspelled').classList.add("hide");
        document.getElementById('WARNING_misspelled').classList.remove("show");

        //This is to reset the alert in case of a second request
        document.getElementById('media-analyse').classList.remove("alert");

        //If there is no input for the name of the medium, we just send an alert
        var $data_medium = $myForm.find('input[name="mediumget"]').val()

        if ($data_medium == "") {
            console.log("Empty")
            document.getElementById('media-analyse').classList.add("alert");
            document.getElementById('WARNING_getdata').classList.add("show");
            document.getElementById('WARNING_getdata').classList.remove("hide");

            //otherwise we send the data in an ajax call to the backend, if the call was a Success
            //we run the handleFormSuccessGet function. Otherewise an errorfunction
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

        //We first reset the button for graphic no.2 with the data for text/audio/video
        document.getElementById("result_format_text").checked = true
        document.getElementById("result_format_audio").checked = false
        document.getElementById("result_format_video").checked = false
        newdata = data
        newtextStatus = textStatus
        newjqXHR = jqXHR

        //and save the data in the global variables

        //Then we get the texts of each category, clear them in order to be able to fill them later
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



        //We remove the graphics in case they are still there from an older request
        d3.select("#festgrafik1_svg").remove();
        d3.select("#pauschalgrafik1_svg").remove();
        d3.select("#freigrafik1_svg").remove();
        d3.select("#freigrafikvideo_svg").remove();
        d3.select("#freigrafikaudio_svg").remove();
        d3.select("#freigrafiktext_svg").remove();

        //We hide the no data warnings
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

        //We add how many datasets we have for this medium
        var element = document.getElementById("datasets_no")
        element.innerHTML = ""
        element.innerHTML = (String(data["mediumoverallcount"]))

        //And the name of the medium
        const mediumname = document.getElementById("result-mediumname")
        mediumname.innerHTML = ""
        mediumname.innerHTML = (String(data["mediumname"]))

        const size = Object.keys(data).length;

        //Then we set the resultsdiv to show
        resultsdiv.classList.add("show");
        resultsdiv.classList.remove("hide");

        //If we have a Fainresscount of more than 1, then we change the markup in the html
        //To show that this medium accepted the Freischreiber code of fairness
        if (data["FairnessCount"] > 0) {
            resultsdiv.classList.add("fair-accepted");
        } else {
            resultsdiv.classList.remove("fair-accepted");
        }
        if (data["HimmelCount"] > 0) {
            resultsdiv.classList.add("got-himmel");
        } else {
            resultsdiv.classList.remove("got-himmel");
        }
        if (data["HoelleCount"] > 0) {
            resultsdiv.classList.add("got-hoelle");
        } else {
            resultsdiv.classList.remove("got-hoelle");
        }
        console.log(data)
        if ((data["MediumGegendarstellung"] != "") && (data["MediumGegendarstellung"] != undefined)) {
            console.log(data["MediumGegendarstellung"])
            var element = document.getElementById("resultverlag")
            element.classList.add("show");
            element.classList.remove("hide");
            var element = document.getElementById("gegendarstellung")
            element.innerHTML = ""
            element.innerHTML = String(data["MediumGegendarstellung"])
        } else {
            var element = document.getElementById("resultverlag")
            element.classList.add("hide");
            element.classList.remove("show");
            var element = document.getElementById("gegendarstellung")
            element.innerHTML = ""
        }

        //If it turns out that the backend says, we have no data, we show the error messages
        if (data["nodata"] != undefined) {
            var element = document.getElementById("NoDataAtAllMessage")
            if (element != null) {
                element.parentNode.removeChild(element);
            }
            if (data["nodata"] == "Vertippt?") {
                var element = document.getElementById("WARNING_misspelled");
                element.classList.add("show");
                element.classList.remove("hide");
                var element = document.getElementById("result");
                element.classList.add("hide");
                element.classList.remove("show");;
            } else {
                if (data["nodata"] == "Es gibt keine Daten") {
                    var element = document.getElementById("WARNING_unknown");
                    element.classList.add("show");
                    element.classList.remove("hide");
                    var element = document.getElementById("result");
                    element.classList.add("hide");
                    element.classList.remove("show");;
                };
            }
            var element = document.getElementById("result-grid");
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
                var element = document.getElementById(commentid);
                element.innerHTML = ""
                element.innerHTML = "Keine Daten"
            }


        } else {

            //If we have data, we remove the NoDataAtAllMessage on the html
            //and set up all div-containers to show
            var element = document.getElementById("NoDataAtAllMessage");
            if (element != undefined) {
                element.innerHTML = ""
            }
            var element = document.getElementById("WARNING_unknown");
            element.classList.add("hide");
            element.classList.remove("show");

            var element = document.getElementById("WARNING_misspelled");
            element.classList.add("hide");
            element.classList.remove("show");

            var element = document.getElementsByClassName("result-grid")[0];
            element.classList.add("show");
            element.classList.remove("hide");

            //Here we start with setting the atmosphere to zero
            var element = document.getElementById("result_athmosphaere-fest")
            element.setAttribute("value", 0)
            element.setAttribute("class", "range result_happiness-bar result_happiness-0")

            var element = document.getElementById("result_athmosphaere-pauschal")
            element.setAttribute("value", 0)
            element.setAttribute("class", "range result_happiness-bar result_happiness-0")

            var element = document.getElementById("result_athmosphaere-frei")
            element.setAttribute("value", 0)
            element.setAttribute("class", "range result_happiness-bar result_happiness-0")

            //And then we manipulate it depending on the results from the backend
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


            //Now we fill the graphics one by one, checking whether we have data and whether the request status was a success
            // We are doing this with our gradientboxplot.js function that uses a json as a database that we create here
            // Also the # help to split the graph titles at the right spots
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
                        charttitle: "Mittlerer Stundenlohn #(Brutto / Euro)"
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
                        charttitle: "Mittlerer Stundenlohn #(Brutto / Euro)"
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
                        charttitle: "Mittleres Honorar # pro Stunde # (Brutto / Euro)"
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
                        charttitle: "Mittleres Honorar # pro Videominute # (Brutto / Euro)"
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
                        charttitle: "Mittleres Honorar # pro Audiominute - # (Brutto / Euro)"
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
                        charttitle: "Mittleres Honorar pro # 1000 Zeichen# (Brutto / Euro)"
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
            //We empty all comments

            listofcomments = data["MediumComments"]
            for (i = 0; i < 8; i++) {

                commentid = "comment-" + String(i + 1)
                var element = document.getElementById(commentid);
                element.innerHTML = ""

                var elementid = "slider-comment-" + String(i + 1)
                var element = document.getElementById(elementid);
                element.classList.add("hide");
                element.classList.remove("show");

                var elementid = "label-slide-" + String(i + 1)
                var element = document.getElementById(elementid);
                if (element != undefined) {
                    element.classList.add("hide");
                }
            }
            //We add the comments to a pre-defined container

            if (listofcomments != undefined) {
                var loopnumber = (listofcomments).length

                for (i = 0; i < loopnumber; i++) {

                    Commenttext = (listofcomments[i])
                    commentid = "comment-" + String(i + 1)
                    var element = document.getElementById(commentid);
                    element.innerHTML = Commenttext

                    var elementid = "slider-comment-" + String(i + 1)
                    var element = document.getElementById(elementid);
                    element.classList.add("show");
                    element.classList.remove("hide");

                    var elementid = "label-slide-" + String(i + 1)
                    var element = document.getElementById(elementid);
                    if (element != undefined) {
                        element.classList.remove("hide");
                    }
                };
            } else {
                for (i = 0; i < 8; i++) {
                    commentid = "comment-" + String(i + 1)
                    var element = document.getElementById(commentid);
                    element.innerHTML = ""
                    element.innerHTML = "Keine Daten"

                    var elementid = "slider-comment-" + String(i + 1)
                    var element = document.getElementById(elementid);
                    element.classList.add("hide");
                    element.classList.remove("show");

                    var elementid = "label-slide-" + String(i + 1)
                    var element = document.getElementById(elementid);
                    if (element != undefined) {
                      element.classList.add("hide");

                    }


                }

            }

            //Then we trigger the smoothfunction to scroll down to the graphs
            smoothfunction2()
        };

        //Lastly we set the texts accompanying the graphics to show
        var element = document.getElementById("freigrafikaudio")
        element.classList.add("hide");
        element.classList.remove("show");
        var element = document.getElementById("freigrafikvideo")
        element.classList.add("hide");
        element.classList.remove("show");
        var element = document.getElementById("freigrafiktext")
        element.classList.add("hide");
        element.classList.remove("show");

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

        element.classList.add("show");
        element.classList.remove("hide");



        $myForm[0].reset(); // reset form data

        //lastly, we iterate through the different comments


    }

    function handleFormErrorGet(jqXHR, textStatus, errorThrown) {

        var newdata = ""
        var newtextStatus = ""
        var newjqXHR = ""
    }
    //Also we rerun this whole function on resize to make the graphics responsive
    function redraw() {
        if (newdata != "") {
            handleFormSuccessGet(newdata, newtextStatus, newjqXHR)

        }
    }
    window.addEventListener("resize", redraw);


})
