$(document).ready(function(){
  var region_select = $('ul li #region_select')

  d3.json('/regions').then(function(data){
    data.forEach(function(elem){
      region_select.append('<option value="'+ elem.value + '">'+ elem.label + '</option>');
    });
  });


  // example of miss unisse during class for food consumption guide
  // var width = 500;
  // var height = 500;
  // var padding = 60;

  // var svg = d3.select("#chart").append("svg")
  //   .attr("width", width)
  //   .attr("height", height);

  // var url = "https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-02-18/food_consumption.csv";

  // d3.json('/data').then(function (formatted_data) {
  //   var categories = [...new Set(formatted_data.map(function (d) { return d.category; }))];

  //   var colorScale = d3.scaleOrdinal(categories, d3.schemeSet3);

  //   var xMax = d3.max(formatted_data, function (d) { return d.consumption; });

  //   var yMax = d3.max(formatted_data, function (d) { return d.co2; });

  //   var xScale = d3.scaleLinear([-10, xMax], [padding, width - padding]);

  //   var yScale = d3.scaleLinear([-50, yMax], [height - padding, padding]);

  //   var xAxis = d3.axisBottom(xScale);
  //   var yAxis = d3.axisLeft(yScale);

  //   svg.append("g")
  //     .attr("transform", "translate(0, " + (height - padding) + ")")
  //     .call(xAxis);

  //   svg.append("g")
  //     .attr("transform", "translate(" + padding + ", 0)")
  //     .call(yAxis);

  //   svg.append("text")
  //     .attr("x", width / 2)
  //     .attr("y", height - padding + 40)
  //     .attr("text-anchor", "middle")
  //     .text("Food Consumption (kg/person/year)")

  //   svg.append("text")
  //     .attr("x", -height / 2)
  //     .attr("y", padding - 40)
  //     .attr("transform", "rotate(-90)")
  //     .attr("text-anchor", "middle")
  //     .text("CO2 Emissions (Kg CO2/person/year)")

  //   svg.selectAll("circle")
  //     .data(formatted_data)
  //     .join("circle")
  //     .attr("cx", d => xScale(d.consumption))
  //     .attr("cy", function (d) { return yScale(d.co2); })
  //     .attr("r", 5)
  //     .attr("opacity", 0.4)
  //     .style("fill", function (d) { return colorScale(d.category); });

  //   console.log(colorScale("Beef"))
  // })

});

