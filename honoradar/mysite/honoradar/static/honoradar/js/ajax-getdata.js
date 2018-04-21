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

        var $data_medium=$myForm.find('input[name="mediumget"]').val()
        console.log($data_medium);
        document.getElementById('media-analyse').classList.remove("alert");

        if ($data_medium == ""){
          console.log("Empty")
          document.getElementById('media-analyse').classList.add("alert");
          document.getElementById('WARNING_getdata').classList.add("show");
          document.getElementById('WARNING_getdata').classList.remove("hide");



        }
        else{
          document.getElementById('WARNING_getdata').classList.add("hide");
          document.getElementById('WARNING_getdata').classList.remove("show");
        $.ajax({
            method: "GET",
            url: $url,
            data: $formData,
            success: handleFormSuccessGet,
            error: handleFormErrorGet,

        })
        ;}

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


        d3.select("#festgrafik1_svg").remove();
        d3.select("#pauschalgrafik1_svg").remove();
        d3.select("#freigrafik1_svg").remove();
        d3.select("#freigrafikvideo_svg").remove();
        d3.select("#freigrafikaudio_svg").remove();
        d3.select("#freigrafiktext_svg").remove();

        var element=document.getElementById("nodata-frei-1")
        element.classList.add("hide");
        element.classList.remove("show");

        var element=document.getElementById("nodata-frei-2")
        element.classList.add("hide");
        element.classList.remove("show");

        var element=document.getElementById("nodata-frei-3")
        element.classList.add("hide");
        element.classList.remove("show");

        var element=document.getElementById("nodata-frei-4")
        element.classList.add("hide");
        element.classList.remove("show");

        var element=document.getElementById("nodata-pauschal-1")
        element.classList.add("hide");
        element.classList.remove("show");

        var element=document.getElementById("nodata-fest-1")
        element.classList.add("hide");
        element.classList.remove("show");


        const mediumname = document.getElementById("result-mediumname")
        console.log(mediumname)
        const size = Object.keys(data).length;
        mediumname.innerHTML = ""

        mediumname.innerHTML = (String(data["mediumname"]))



        resultsdiv.classList.add("show");
        resultsdiv.classList.remove("hide");



        if (data["nodata"] != undefined) {
          var element=document.getElementById("NoDataAtAllMessage")
          console.log(element)
          if (element!=null){
            element.parentNode.removeChild(element);
          }

          var element=document.getElementById("result-grid");
          console.log(element)
          element.classList.add("show");
          element.classList.remove("hide");
          console.log(element)

                  var element=document.getElementById("nodata-frei-1")
                  element.classList.add("show");
                  element.classList.remove("hide");

                  var element=document.getElementById("nodata-frei-2")
                  element.classList.add("show");
                  element.classList.remove("hide");


                  var element=document.getElementById("nodata-frei-3")
                  element.classList.add("show");
                  element.classList.remove("hide");


                  var element=document.getElementById("nodata-frei-4")
                  element.classList.add("show");
                  element.classList.remove("hide");


                  var element=document.getElementById("nodata-pauschal-1")
                  element.classList.add("show");
                  element.classList.remove("hide");


                  var element=document.getElementById("nodata-fest-1")
                  element.classList.add("show");
                  element.classList.remove("hide");





        } else {

          var element=document.getElementById("NoDataAtAllMessage");
          if (element!=undefined){element.innerHTML=""
          console.log(element)}

          var element=document.getElementsByClassName("result-grid")[0];
          console.log(element)
          element.classList.add("show");
          element.classList.remove("hide");

          var element=document.getElementById("result_athmosphaere-fest")
          element.setAttribute("value", 0)
          element.setAttribute("class","range result_happiness-bar result_happiness-0")

          var element=document.getElementById("result_athmosphaere-pauschal")
          element.setAttribute("value",0)
          element.setAttribute("class","range result_happiness-bar result_happiness-0")

          var element=document.getElementById("result_athmosphaere-frei")
          element.setAttribute("value",0)
          element.setAttribute("class","range result_happiness-bar result_happiness-0")


          if (data["MediumFestHappiness"]) {
              if (data["MediumFestHappiness"]["status"] == "Success") {
                  var element=document.getElementById("result_athmosphaere-fest")
                  element.setAttribute("value",Math.round((data["MediumFestHappiness"]["median"])))
                  element.setAttribute("class","range result_happiness-bar result_happiness-"+String(Math.round((data["MediumFestHappiness"]["median"]))))
              };
          };
          if (data["MediumPauschalHappiness"]) {
              if (data["MediumPauschalHappiness"]["status"] == "Success") {
                  var element=document.getElementById("result_athmosphaere-pauschal")
                  element.setAttribute("value",Math.round((data["MediumPauschalHappiness"]["median"])))
                  element.setAttribute("class","range result_happiness-bar result_happiness-"+String(Math.round((data["MediumPauschalHappiness"]["median"]))))

              };
          };

          if (data["MediumFreiHappiness"]) {
              if (data["MediumFreiHappiness"]["status"] == "Success") {
                  var element=document.getElementById("result_athmosphaere-frei")
                  element.setAttribute("value",Math.round((data["MediumFreiHappiness"]["median"])))
                  element.setAttribute("class","range result_happiness-bar result_happiness-"+String(Math.round((data["MediumFreiHappiness"]["median"]))))

              };
          };



            let elementid = "festgrafik1"

            if ((data["MediumFestSalaryPerHour"]) && (data["AllFestSalaryPerHour"])) {
                if ((data["MediumFestSalaryPerHour"]["status"] == "Success") && (data["AllFestSalaryPerHour"]["status"] == "Success")) {
                    let d3festjson = [{
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
                        mean: parseFloat(data["AllFestSalaryPerHour"]["median"])
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
                  var element=document.getElementById("nodata-fest-1")
                  element.classList.add("show");
                  element.classList.remove("hide");

                }
            }else{
              var element=document.getElementById("nodata-fest-1")
              element.classList.add("show");
              element.classList.remove("hide");
            };

             elementid = "pauschalgrafik1"

            if ((data["MediumPauschalSalaryPerHour"]) && (data["AllPauschalSalaryPerHour"])) {
                if ((data["MediumPauschalSalaryPerHour"]["status"] == "Success") && (data["AllPauschalSalaryPerHour"]["status"] == "Success")) {
                    let d3festjson = [{
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
                        mean: parseFloat(data["AllPauschalSalaryPerHour"]["median"])
                    }, {
                        id: "FreischreiberPauschalSalaryPerHour",
                        category: "Freischreiber Empfehlung",
                        min: 25,
                        max: 25,
                        mean: 25,
                        charttitle: "Stundenlohn für Pauschalisten in Euro"

                    }];

                    gradientboxplot(d3festjson, elementid)
                  }else{
                    var element=document.getElementById("nodata-pauschal-1")
                    element.classList.add("show");
                    element.classList.remove("hide");

                  }
              }else{
                var element=document.getElementById("nodata-pauschal-1")
                element.classList.add("show");
                element.classList.remove("hide");
              };


               elementid = "freigrafik1"

            if ((data["MediumFreiSalaryPerHour"]) && (data["AllFreiSalaryPerHour"])) {
                if ((data["MediumFreiSalaryPerHour"]["status"] == "Success") && (data["AllFreiSalaryPerHour"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumFreiSalaryPerHour",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiSalaryPerHour"]["lower"]),
                        max: parseFloat(data["MediumFreiSalaryPerHour"]["upper"]),
                        mean: parseFloat(data["MediumFreiSalaryPerHour"]["median"])
                    }, {
                        id: "AllFreiSalaryPerHour",
                        category: "Ø alle Freiberufler",
                        min: parseFloat(data["AllFreiSalaryPerHour"]["lower"]),
                        max: parseFloat(data["AllFreiSalaryPerHour"]["upper"]),
                        mean: parseFloat(data["AllFreiSalaryPerHour"]["median"])
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
                    var element=document.getElementById("nodata-frei-1")
                    element.classList.add("show");
                    element.classList.remove("hide");

                  }
              }else{
                var element=document.getElementById("nodata-frei-1")
                element.classList.add("show");
                element.classList.remove("hide");
              };

               elementid = "freigrafikvideo"

            if ((data["MediumFreiVideoFeePerMin"]) && (data["AllFreiVideoFeePerMin"])) {
                if ((data["MediumFreiVideoFeePerMin"]["status"] == "Success") && (data["AllFreiVideoFeePerMin"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumFreiVideoFeePerMin",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiVideoFeePerMin"]["lower"]),
                        max: parseFloat(data["MediumFreiVideoFeePerMin"]["upper"]),
                        mean: parseFloat(data["MediumFreiVideoFeePerMin"]["median"])
                    }, {
                        id: "AllFreiVideoFeePerMin",
                        category: "Ø \n alle \n Freiberufler",
                        min: parseFloat(data["AllFreiVideoFeePerMin"]["lower"]),
                        max: parseFloat(data["AllFreiVideoFeePerMin"]["upper"]),
                        mean: parseFloat(data["AllFreiVideoFeePerMin"]["median"])
                    }, {
                        id: "FreischreiberFreiSalaryPerHour",
                        category: "Freischreiber Empfehlung",
                        min: 25,
                        max: 25,
                        mean: 25,
                        charttitle: "Honorar pro Videominute (€)"

                    }];

                    gradientboxplot(d3festjson, elementid)
                  }else{
                    var element=document.getElementById("nodata-frei-4")
                    element.classList.add("show");
                    element.classList.remove("hide");

                  }
              }else{
                var element=document.getElementById("nodata-frei-4")
                element.classList.add("show");
                element.classList.remove("hide");
              };
               elementid = "freigrafikaudio"

            if ((data["MediumFreiAudioFeePerMin"]) && (data["AllFreiAudioFeePerMin"])) {
                if ((data["MediumFreiAudioFeePerMin"]["status"] == "Success") && (data["AllFreiAudioFeePerMin"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumFreiAudioFeePerMin",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiAudioFeePerMin"]["lower"]),
                        max: parseFloat(data["MediumFreiAudioFeePerMin"]["upper"]),
                        mean: parseFloat(data["MediumFreiAudioFeePerMin"]["median"])
                    }, {
                        id: "AllFreiAudioFeePerMin",
                        category: "Ø \n alle \n Freiberufler",
                        min: parseFloat(data["AllFreiAudioFeePerMin"]["lower"]),
                        max: parseFloat(data["AllFreiAudioFeePerMin"]["upper"]),
                        mean: parseFloat(data["AllFreiAudioFeePerMin"]["median"])
                    }, {
                        id: "FreischreiberAudioFeePerMin",
                        category: "Freischreiber Empfehlung",
                        min: 25,
                        max: 25,
                        mean: 25,
                        charttitle: "Honorar pro Audiominute (€)"

                    }];

                    gradientboxplot(d3festjson, elementid)
                  }else{
                    var element=document.getElementById("nodata-frei-3")
                    element.classList.add("show");
                    element.classList.remove("hide");

                  }
              }else{
                var element=document.getElementById("nodata-frei-3")
                element.classList.add("show");
                element.classList.remove("hide");
              };

               elementid = "freigrafiktext"

            if ((data["MediumFreiArticleFeePerChar"]) && (data["AllFreiArticleFeePerChar"])) {
                if ((data["MediumFreiArticleFeePerChar"]["status"] == "Success") && (data["AllFreiArticleFeePerChar"]["status"] == "Success")) {
                    let d3festjson = [{
                        id: "MediumFreiArticleFeePerChar",
                        category: String(data["mediumname"]),
                        min: parseFloat(data["MediumFreiArticleFeePerChar"]["lower"]*100),
                        max: parseFloat(data["MediumFreiArticleFeePerChar"]["upper"]*100),
                        mean: parseFloat(data["MediumFreiArticleFeePerChar"]["median"]*100),
                    }, {
                        id: "AllFreiArticleFeePerChar",
                        category: "Ø \n alle \n Freiberufler",
                        min: parseFloat(data["AllFreiArticleFeePerChar"]["lower"]*100),
                        max: parseFloat(data["AllFreiArticleFeePerChar"]["upper"]*100),
                        mean: parseFloat(data["AllFreiArticleFeePerChar"]["median"]*100)
                    }, {
                        id: "FreischreiberArticleFeePerChar",
                        category: "Freischreiber Empfehlung",
                        min: 10,
                        max: 10,
                        mean: 100,
                        charttitle: "Honorar pro hundert Zeichen (€)"

                    }];

                    gradientboxplot(d3festjson, elementid)
                  }else{
                    var element=document.getElementById("nodata-frei-2")
                    element.classList.add("show");
                    element.classList.remove("hide");

                  }
              }else{
                var element=document.getElementById("nodata-frei-2")
                element.classList.add("show");
                element.classList.remove("hide");
              };

        }

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
