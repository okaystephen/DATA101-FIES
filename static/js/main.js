$(document).ready(function () {
  var region_select = $('#region_select')
  var data_select = $('#data_select')

  d3.json('/regions').then(function (data) {
    console.log(data)
    data.forEach(function (elem) {
      region_select.append('<option value="' + elem.value + '">' + elem.label + '</option>');
    });
  });

  d3.json('/data').then(function (data) {
    console.log(data)
    data.forEach(function (elem) {
      data_select.append('<option value="' + elem.value + '">' + elem.label + '</option>');
    });
  });

  // d3.json("/fies", function (error, data) {

  //   if (error) {
  //     return console.warn(error);
  //   }

  //   d3.select("#test")
  //     .selectAll("p")
  //     .data(data)
  //     .enter()
  //     .append("p")
  //     .text(function (d) {
  //       return d.name + ", " + d.location;
  //     });
  // });


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
  var data_var = data

  // Clear sidebar content
  $('.sidebar-content').empty()

  d3.json('/fies').then(function (loop) {
    loop.forEach(function (elem) {
      if (region == elem['Region']) {
        // Display information about region
        $('.sidebar-content').append('<h4><b>' + data + ' — ' + region + '</b></h4>')
        $('.sidebar-content').append('<p>The ' + data + ' in ' + region + ' was ' + elem[data_var] + '.</p>')

        // Display ranking among other regions
        $('.sidebar-content').append('<div class="pt-2"><h5><b>Ranking Among Other Regions</b></h5></div>')
      }
    });
  });


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
data = d3.csv("https://raw.githubusercontent.com/dlsudatasci/data-visualization/main/ched_sucfacultystudentratio_20162018.csv")
  .then(makeChart);

function makeChart(data) {
  var students = data.map(function (d) { return d.students2017; });
  var region = data.map(function (d) { return d.region; });

  new Chart(document.getElementById("myCanvas"), {
    type: 'bar',
    data: {
      labels: region,
      datasets: [
        {
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: students
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Graph'
      }
    }
  });
}

