const margin = {
  top: 100,
  right: 10,
  bottom: 10,
  left: 100
};
let width = 1000 / 2;
let height = 500;

barwidth = width / 25;

function elipticboxplot(responsejson) {
  console.log(margin);
  console.log(responsejson);
  var freischreiberchart = d3
    .select("#graph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("fill", "black");

  freischreiberchart
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

  var bars = freischreiberchart.selectAll(".bar").data(responsejson);

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
    .attr("fill", function(d) {
      return colorscale(d.category);
    })
    .attr("opacity", 0.6)
    .attr("stroke", "black");

  var meancircles = freischreiberchart
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
    .attr("r", width / 50);

  freischreiberchart
    .append("g")
    .attr("transform", "translate(-" + margin.left + ", " + height + ")")
    .attr("class", "x_axis")
    .call(xAxis);

  freischreiberchart
    .append("g")
    .attr("class", "y_axis")
    .attr("transform", "translate(0, " + "0" + ")")

    .call(yAxis);
}

let responsejson = [
  {
    category: "Medium",
    min: 9.6,
    max: 10.4,
    mean: 10
  },
  {
    category: "Vergleich",
    min: 9.2,
    max: 10.4,
    mean: 9.8
  },
  {
    category: "Freischreiber",
    min: 12,
    max: 12,
    mean: 12
  }
];
elipticboxplot(responsejson);
