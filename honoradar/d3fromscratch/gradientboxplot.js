const margin = {
  top: 100,
  right: 10,
  bottom: 10,
  left: 100
};
let width = 1000 / 2;
let height = 500;

barwidth = width / 25;





function gradientboxplot(responsejson) {
  console.log(margin);
  console.log(responsejson);
  var svg = d3
    .select("#graph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("fill", "black");

  svg
    .append("text")
    .attr("transform", "rotate(0)")
    .attr("x", margin.left)
    .attr("y", 0)
    .attr("stroke", "black")
    .attr("fill", "black")
    .attr("font-size", "1.1em")
    .style("text-anchor", "left")
    .text("Share of Seats / Comments / Reactions in %");

  let maxY = d3.max(responsejson, function(d) {
    return +d.max;
  });
  let minY = d3.min(responsejson, function(d) {
    return +d.min;
  });
  height = height - margin.top;
  colorscale = d3
    .scaleOrdinal()
    .domain(["Medium", "Vergleich", "Freischreiber"])
    .range(["black", "grey", "green"]);

  xscale = d3
    .scaleBand()
    .domain(["Medium", "Vergleich", "Freischreiber"])
    .range([margin.left, width - margin.right]);

    colorscale = d3
      .scaleOrdinal()
      .domain(["Medium", "Vergleich", "Freischreiber"])
      .range(["#000000", "#ff0000", "#008000"]);

    function gradient(colour,id,y1,y2,off1,off2,op1,op2){
    //gradient function.
      //defines the gradient
      console.log(colour)
       svg.append("defs")
      .append("linearGradient")
      .attr("id",id)
      .attr("x1", "0%").attr("y1", y1)
      .attr("x2", "0%").attr("y2", y2);
      idtag = '#'+id
      //defines the start
      d3.select(idtag)
       .append("stop")
      .attr("stop-color", colour)
      .attr("class","begin")
      .attr("offset", "0%")
      .attr("stop-opacity", op1);
      d3.select(idtag)
       .append("stop")
      .attr("stop-color", colour)
      .attr("class","middle")
      .attr("offset", "25%")
      .attr("stop-opacity", op2);
      d3.select(idtag)
       .append("stop")
      .attr("stop-color", colour)
      .attr("class","middle")
      .attr("offset", "75%")
      .attr("stop-opacity", op2);
      //and the finish
      d3.select(idtag)
      .append("stop")
      .attr("class","end")
      .attr("stop-color", colour )
      .attr("offset", "100%")
      .attr("stop-opacity", op1);

    }

  var xband = xscale.bandwidth();
  console.log(xband);
  var step = xscale.step();
  console.log(step);

  yscale = d3
    .scaleLinear()
    .domain([minY, maxY])
    .range([height, 0 + margin.top]);

  var xAxis = d3.axisBottom(xscale);

  var yAxis = d3.axisLeft(yscale);

  var bars = svg.selectAll(".bar").data(responsejson);

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
    .style("fill",function(d) {
      //set the gradient fill
      //dependent on whether values have gone up or down

          gradient(colorscale(d.category),'grad'+ d.id,"0%","100%","0%","100%",0.1,1);
          return "url(#grad" + d.id +")";
       })
    .attr("opacity", 0.6)

  var meancircles = svg
    .selectAll(".meancircles")
    .data(responsejson);

  meancircles
    .exit()
    .transition()
    .attr("r", 0)
    .attr("cx", function(d) {
      return xscale(d.category) - margin.left + step / 2;
    })
    .attr("cy", function(d) {
      return height - yscale(d.mean);
    })
    .remove();

  var new_meancircles = meancircles
    .enter()
    .append("circle")
    .attr("class", "meancircles")
    .attr("r", 0)
    .attr("cx", function(d) {
      return xscale(d.category) - margin.left + step / 2;
    })
    .attr("cy", function(d) {
      return height - yscale(d.mean);
    });

  new_meancircles
    .merge(meancircles)
    .attr("cy", function(d) {
      return yscale(d.mean);
    })

    .attr("x", function(d) {
      return xscale(d.category) - margin.left + step / 2;
    })
    .attr("fill", function(d) {
      return colorscale(d.category);
    })
    .attr("opacity", 0.9)
    .attr("r", width / 100)
    .attr("stroke", "grey");

  svg
    .append("g")
    .attr("transform", "translate(-" + margin.left + ", " + height + ")")
    .attr("class", "x_axis")
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "y_axis")
    .attr("transform", "translate(0, " + "0" + ")")

    .call(yAxis);
}

let responsejson = [
  {
    id:"MediumHour",
    category: "Medium",
    min: 9.6,
    max: 10.4,
    mean: 10
  },
  {
    id:"VergleichHour",
    category: "Vergleich",
    min: 9.2,
    max: 10.4,
    mean: 9.8
  },
  {
    id:"FreischreiberHour",
    category: "Freischreiber",
    min: 12,
    max: 12,
    mean: 12
  }
];
gradientboxplot(responsejson);
