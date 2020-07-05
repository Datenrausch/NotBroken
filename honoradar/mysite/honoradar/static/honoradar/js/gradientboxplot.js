//We take the responsejson and the elementid send from the ajax-getdata function
function gradientboxplot(responsejson, elementid) {


    var element = document.getElementById(elementid);
    element.classList.add("show");
    element.classList.remove("hide");
    //get width and height first from the window to start
    elementstr = "'" + elementid + "'"

    var width = document.getElementById(elementid).offsetWidth;
    var height = 400;

    //We define the margin for the d3graphics
    var margin = {
        top: 50,
        right: 20,
        bottom: 50,
        left: 30,
    };

    //Also we define the
    elementidhash = "#" + elementid
    width = width - margin.left - margin.right
    height = height - margin.top - margin.bottom


    //We append an svg to our element and also add w3 standards for being able to later use custom fonts
    var svg = d3
        .select(elementidhash)
        .append("svg")
        .attr("id", (String(elementid) + "_svg"))
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr('xmlns', 'http://www.w3.org/1999/xlink')
        .attr('version', '1.1')
        .attr('xml:space', 'preserve')
        //We set width and height
        //.attr("width", width - margin.left - margin.right)
        //.attr("width", width)
        //.attr("height", height)
        //We expand the svg to the full size of the div
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        //.attr("height", height - margin.top - margin.bottom)

    //Then we further add g into our svg as our canvas
    //but then shrink the g element, our canvas on the size that we wanted by transforming
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("fill", "black");

    svg
        .append("text")
        .attr("class", "title")
        .attr("transform", "rotate(0)")
        .attr("x", 0)
        .attr("y", -50)
        .attr("dy", 1)
        .attr("stroke", "white")
        .attr("fill", "white")
        .attr("font-size", "12")
        .style("text-anchor", "start")
        .text(responsejson[1].charttitle)
        .call(titlewrap, (width - 70));


    var maxY = d3.max(responsejson, function(d) {
        return +d.max;
    });
    var minY = d3.min(responsejson, function(d) {
        return +d.min;
    });
    //We define xscale, yscale and colourscale
    xscale = d3
        .scaleBand()
        .domain([responsejson[0].category, responsejson[1].category])
        .range([0, width]);
    yscale = d3
        .scaleLinear()
        .domain([0, maxY * 1.1])
        .range([height, 0]);

    colorscale = d3
        .scaleOrdinal()
        .domain([responsejson[0].category, responsejson[1].category])
        .range(["#2ecc71", "#2ecc71"]);

    colorscaleellipse = d3
        .scaleOrdinal()
        .domain([responsejson[0].category, responsejson[1].category])
        .range(["#ecf0f1", "#ecf0f1"]);

    //Calculating the max and min of Y and the spread of height and width




    //We define the function titlewrap that wraps the graphics title if necessary at the point of the #sign

    function titlewrap(text, width) {
        width = width - 45
        text.each(function() {
            var text = d3.select(this),
                words = text.text().split("#").reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.3, // ems
                y = text.attr("y"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", 10).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", 10).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    }

    //Then we define another wrap function for all other text in the graphic
    function wrap(text, width) {

        text.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.3, // ems
                y = text.attr("y"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    }
    //Now we add the title of the graphic




    barwidth = width / 25;

    //Also we use a gradient function to define from where to where the bars colours will change
    function gradient(colour, id, y1, y2, off1, off2, op1, op2) {
        //gradient function.
        //defines the gradient
        svg.append("defs")
            .append("linearGradient")
            .attr("id", id)
            .attr("x1", "0%").attr("y1", y1)
            .attr("x2", "0%").attr("y2", y2)
            .append('style')
            .attr('type', 'text/css')
            .text("@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800');");;
        idtag = '#' + id
            //defines the start and stop of the colour changing
        d3.select(idtag)
            .append("stop")
            .attr("stop-color", colour)
            .attr("class", "begin")
            .attr("offset", "0%")
            .attr("stop-opacity", op1);
        d3.select(idtag)
            .append("stop")
            .attr("stop-color", colour)
            .attr("class", "middle")
            .attr("offset", "25%")
            .attr("stop-opacity", op2);
        d3.select(idtag)
            .append("stop")
            .attr("stop-color", colour)
            .attr("class", "middle")
            .attr("offset", "75%")
            .attr("stop-opacity", op2);
        //and the finish
        d3.select(idtag)
            .append("stop")
            .attr("class", "end")
            .attr("stop-color", colour)
            .attr("offset", "100%")
            .attr("stop-opacity", op1);

    }


    //also we define the bandwidth and the steps on the x scale for positioning our bars and labels
    //categorically
    var xband = xscale.bandwidth();
    var step = xscale.step();


    //Also we add axes
    var xAxis = d3.axisBottom(xscale);

    var yAxis = d3.axisLeft(yscale);


    //First we add the bars by binding the data
    var bars = svg.selectAll(".bar").data(responsejson);

    //kicking out older bars, if we do not need them
    bars
        .exit()
        .transition()
        .attr("y", height)
        .attr("height", 0)
        .remove();
    //create new bars if necessary
    var new_bars = bars
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", barwidth)
        .attr("y", height);
    //and finally merge the new bars with the existing ones
    new_bars
        .merge(bars)
        //height is defined by the difference between the defined max and min in the json
        .attr("height", function(d) {
            return yscale(d.min) - yscale(d.max);
        })
        //y is defined by the max (remember the flipped logic in d3 for y-axis)
        .attr("y", function(d) {
            return yscale(d.max);
        })
        //then positioning the bars with steps and barwdith
        .attr("x", function(d) {
            return xscale(d.category) + step / 2 - barwidth / 2;
        })
        .style("fill", function(d) {
            //set the gradient fill
            //dependent on whether values have gone up or down

            gradient(colorscale(d.category), 'grad' + d.id, "0%", "100%", "0%", "100%", 0.1, 1);
            return "url(#grad" + d.id + ")";
        })
        .attr("opacity", 0.6);

    //similar procedure for the elipsses/circles
    var meanellipses = svg
        .selectAll(".meanellipses")
        .data(responsejson);

    meanellipses
        .exit()
        .transition()
        .attr("rx", 0)
        .attr("ry", 0)

    .attr("cx", function(d) {
            return xscale(d.category) + step / 2;
        })
        .attr("cy", function(d) {
            return height - yscale(d.mean);
        })
        .remove();

    var new_meanellipses = meanellipses
        .enter()
        .append("ellipse")
        .attr("class", "meanellipses")
        .attr("rx", 0)
        .attr("ry", 0)
        .attr("cx", function(d) {
            return xscale(d.category) + step / 2;
        })
        .attr("cy", function(d) {
            return height - yscale(d.mean);
        });

    new_meanellipses
        .merge(meanellipses)
        //cy and cx are the positions of the circles, rx and ry their radius
        .attr("cy", function(d) {
            return yscale(d.mean);
        })
        .attr("cx", function(d) {
            return xscale(d.category) + step / 2;
        })
        .attr("fill", function(d) {
            return colorscaleellipse(d.category);
        })
        .attr("opacity", 1)
        .attr("rx", width / 75)
        .attr("ry", width / 75);

    //Similar procedure for the labels next to the circles
    var textellipses = svg
        .selectAll(".textellipse")
        .data(responsejson);

    textellipses
        .exit()
        .transition()

    .attr("x", 0)
        .attr("y", 0)
        .remove();

    var new_textellipses = textellipses
        .enter()
        .append("text")
        .attr("class", "textellipse")
        .attr("x", 0)
        .attr("y", 0)

    new_textellipses
        .merge(textellipses)
        .attr("y", function(d) {
            return yscale(d.mean);
        })

    .attr("x", function(d) {
            return xscale(d.category) + step / 2;
        })
        .attr("dx", barwidth * 1.1)
        .attr("dy", width / 75)

    .text(function(d) {
            return ((d.mean).toFixed(2) + " €");
        })
        .style("stroke", "white")
        .style("fill", "white")
        .style('font-size', '0.7em')
        .style('font-family', 'OpenSans-Regular');


    //We then add the x and y axis to the svg
    svg
        .append("g")
        .attr("transform", "translate(" + 0 + ", " + height + ")")
        .attr("class", "x_axis")
        .call(xAxis)
        .selectAll(".tick text")

    .style("stroke", "white")
        .style("fill", "white")
        .style('font-size', '1.6em')
        .style('font-family', 'OpenSans-Regular')


    .call(wrap, (xscale.bandwidth()));

    svg
        .append("g")
        .attr("class", "y_axis")
        .attr("transform", "translate(0, " + "0" + ")")
        .call(yAxis)
        .selectAll(".tick text")

    .style("stroke", "white")
        .style("fill", "white")
        .style('font-size', '1.2em')
        .style('font-family', 'OpenSans-Regular');

    svg
        .selectAll("line")
        .style("stroke", "white");
    svg
        .selectAll("path")
        .style("stroke", "white");


    svg
        .selectAll(".title")
        .style("stroke", "white")
        .style("fill", "white")
        .style('font-size', '0.7em')
        .style('font-family', 'OpenSans-Regular');

    element.classList.add("hide");
    element.classList.remove("show");


}
