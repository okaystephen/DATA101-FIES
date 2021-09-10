$(document).ready(function () {
  var region_select = $('#region_select')
  var data_select = $('#data_select')

  d3.json('/regions').then(function (data) {
    data.forEach(function (elem) {
      region_select.append('<option value="' + elem.value + '">' + elem.label + '</option>');
    });
  });

  d3.json('/data').then(function (data) {
    data.forEach(function (elem) {
      data_select.append('<option value="' + elem.value + '">' + elem.label + '</option>');
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

function sidebarChangeContent(data, region) {
  // Clear sidebar content
  $('.sidebar-content').empty()

  // Display information about region
  $('.sidebar-content').append('<h4><b>' + data + ' — ' + region + '</b></h4>')
  $('.sidebar-content').append('<p>Add information</p>')

  // Display ranking among other regions
  $('.sidebar-content').append('<div class="pt-2"><h5><b>Ranking Among Other Regions</b></h5></div>')
  $('.sidebar-content').append("hello")
}

function regionChange() {
  var data = $('#data_select').val()
  var region = $('#region_select').val()

  if (data == "" || region == "") { } else {
    sidebarChangeContent(data, region)
  }
}

function dataChange() {
  var data = $('#data_select').val()
  var region = $('#region_select').val()

  if (data == "" || region == "") { } else {
    sidebarChangeContent(data, region)
  }
}

var passengers = [
  {"year":2001,"passengers":19895475.0},
  {"year":2002,"passengers":20057203.0},
  {"year":2003,"passengers":20601050.0},
  {"year":2004,"passengers":23269276.0},
  {"year":2005,"passengers":24670595.0},
  {"year":2006,"passengers":26682198.0},
  {"year":2007,"passengers":34206573.0},
  {"year":2008,"passengers":36162930.0},
  {"year":2009,"passengers":41216090.0},
  {"year":2010,"passengers":47989065.0},
  {"year":2011,"passengers":87384302.0},
  {"year":2012,"passengers":56704493.0},
  {"year":2013,"passengers":56548930.0},
  {"year":2014,"passengers":53462541.0},
  {"year":2015,"passengers":56813462.0},
  {"year":2016,"passengers":62115054.0}
];


var svg = d3.select("#chart").append("svg")

function drawGraph(passengers){
  svg.selectAll("rect")
  .data(passengers)
  .join("rect")
    .attr("x", 40)
    .attr("y", (d,i) => i * 30 + 4.6)
    .attr("width", (d, i) => d.passengers/300000)
    .attr("height", 20)
    .attr("fill", "DarkSeaGreen");

  svg.selectAll("text")
    .data(passengers)
    .join("text")
      .attr("x", 0)
      .attr("y", (d,i) => i * 30 + 20)
      .text((d, i) => d.year)
}


drawGraph(passengers);