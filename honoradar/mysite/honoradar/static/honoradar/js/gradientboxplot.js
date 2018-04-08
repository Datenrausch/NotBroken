function gradientboxplot(responsejson, elementid) {

    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    console.log(elementid)
    elementstr = "'" + elementid + "'"
    console.log(document.getElementById(elementid))
    width = document.getElementById(elementid).offsetWidth;

    height = 400;
    const margin = {
        top: 30,
        right: 10,
        bottom: 30,
        left: 30
    };

    barwidth = width / 25;
    elementid = "#" + elementid
    console.log(elementid)
    console.log(responsejson);
    console.log(width);
    console.log(height);


    var svg = d3
        .select(elementid)
        .append("svg")
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr('xmlns', 'http://www.w3.org/1999/xlink')
        .attr('version', '1.1')
        .attr('xml:space', 'preserve')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("fill", "black");


    svg
        .append("text")
        .attr("class","title")
        .attr("transform", "rotate(0)")
        .attr("x", 0)
        .attr("y", 0)
        .attr("stroke", "white")
        .attr("fill", "white")
        .attr("font-size", "12")

        .style("text-anchor", "left")
        .text(responsejson[2].charttitle);


    let maxY = d3.max(responsejson, function(d) {
        return +d.max;
    });
    let minY = d3.min(responsejson, function(d) {
        return +d.min;
    });
    height = height - margin.top;


    function wrap(text, width) {
      console.log(width)

      text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.9, // ems
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

    function gradient(colour, id, y1, y2, off1, off2, op1, op2) {
        //gradient function.
        //defines the gradient
        console.log(colour)
        svg.append("defs")
            .append("linearGradient")
            .attr("id", id)
            .attr("x1", "0%").attr("y1", y1)
            .attr("x2", "0%").attr("y2", y2)
            .append('style')
            .attr('type', 'text/css')
            .text("@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800');");
;
        idtag = '#' + id
            //defines the start
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
            .attr("offset", "15%")
            .attr("stop-opacity", op2);
        d3.select(idtag)
            .append("stop")
            .attr("stop-color", colour)
            .attr("class", "middle")
            .attr("offset", "85%")
            .attr("stop-opacity", op2);
        //and the finish
        d3.select(idtag)
            .append("stop")
            .attr("class", "end")
            .attr("stop-color", colour)
            .attr("offset", "100%")
            .attr("stop-opacity", op1);

    }
    xscale = d3
        .scaleBand()
        .domain([responsejson[0].category, responsejson[1].category, responsejson[2].category])
        .range([margin.left, width - margin.right]);

    colorscale = d3
        .scaleOrdinal()
        .domain([responsejson[0].category, responsejson[1].category, responsejson[2].category])
        .range(["#2ecc71", "#2ecc71", "#2ecc71"]);

    colorscaleellipse = d3
        .scaleOrdinal()
        .domain([responsejson[0].category, responsejson[1].category, responsejson[2].category])
        .range(["#ecf0f1", "#ecf0f1", "#ecf0f1"]);

    var xband = xscale.bandwidth();
    var step = xscale.step();

    yscale = d3
        .scaleLinear()
        .domain([minY, maxY])
        .range([height, 0 + margin.top]);

    var xAxis = d3.axisBottom(xscale);

    var yAxis = d3.axisLeft(yscale);

    var bars = svg.selectAll(".bar").data(responsejson);
    console.log(bars)

    bars
        .exit()
        .transition()
        .attr("y", height)
        .attr("height", 0)
        .remove();

    var new_bars = bars
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("width", barwidth)
        .attr("y", height);

    new_bars
        .merge(bars)

    .attr("height", function(d) {
            return yscale(d.min) - yscale(d.max);
        })
        .attr("y", function(d) {
            return yscale(d.max);
        })
        .attr("x", function(d) {
            return xscale(d.category) - margin.left + step / 2 - barwidth / 2;
        })
        .style("fill", function(d) {
            //set the gradient fill
            //dependent on whether values have gone up or down

            gradient(colorscale(d.category), 'grad' + d.id, "0%", "100%", "0%", "100%", 0.1, 1);
            return "url(#grad" + d.id + ")";
        })
        .attr("opacity", 0.6);

    var meanellipses = svg
        .selectAll(".meanellipses")
        .data(responsejson);

    meanellipses
        .exit()
        .transition()

    .attr("rx", 0)
        .attr("ry", 0)


    .attr("cx", function(d) {
            return xscale(d.category) - margin.left + step / 2;
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
            return xscale(d.category) - margin.left + step / 2;
        })
        .attr("cy", function(d) {
            return height - yscale(d.mean);
        });

    new_meanellipses
        .merge(meanellipses)
        .attr("cy", function(d) {
            return yscale(d.mean);
        })

    .attr("cx", function(d) {
            return xscale(d.category) - margin.left + step / 2;
        })
        .attr("fill", function(d) {
            return colorscaleellipse(d.category);
        })
        .attr("opacity", 1)
        .attr("rx", width / 25)
        .attr("ry", width / 100)


    svg
        .append("g")
        .attr("transform", "translate(-" + margin.left + ", " + height + ")")
        .attr("class", "x_axis")
        .call(xAxis)
        .selectAll(".tick text")

          .style("stroke", "white")
          .style("fill", "white")
          .style('font-size', '1.2em')
          .style('font-family', 'Open Sans')


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
        .style('font-family', 'Open Sans')
;

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
            .style('font-family', 'Open Sans');



}
