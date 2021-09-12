$(document).ready(function () {
  $(".loader").hide()

  var region_select = $('#region_select')
  var data_select = $('#data_select')

  d3.json('/regions').then(function (data) {
    console.log(data)
    data.forEach(function (elem) {
      region_select.append(`<option value="${elem.value}">${elem.label}</option>`);
    });
  });

  d3.json('/data').then(function (data) {
    console.log(data)
    data.forEach(function (elem) {
      data_select.append(`<option value="${elem.value}">${elem.label}</option>`);
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
  $('.sidebar-content').hide()
  $(".loader").show()

  d3.json('/fies').then(function (loop) {
    loop.some(function (elem) {
      if (region == elem['Region']) {
        // Display information about region
        var val = elem[data_var];
        var r = val.toFixed(2);
        $('.sidebar-content').append(`<h4><b>${data} — ${region}</b></h4>`)
        $('.sidebar-content').append(`<p>The ${data} in ${region} has an average of <u>Php ${r}</u></p>`)

        // Display ranking among other regions
        $('.sidebar-content').append('<div class="pt-2"><h5><b>Ranking Among Other Regions</b></h5></div>')
        getRanking(data_var)
        animateMap(region)

        return true;
      }
    });
  });
}

function getRanking(data_var) {
  d3.json('/fies').then(function (loop) {
    // <div id="bar"></div>
    var region = []
    var figure = []


    loop.forEach(function (elem) {
      var keys = Object.keys(elem);
      console.log(keys)

      keys.forEach(function (key) { //loop through keys array
        if (key == data_var) {
          // $('.sidebar-content').append(`<p>${elem['Region']} - ${elem[data_var]}</p>`)
          region.push(elem['Region'])
          figure.push(elem[data_var])
        }
      });
    });

    console.log(region)
    console.log(figure)
    $('.sidebar-content').append(`<div id="bar"></div>`)

    // Make bar chart
    var w = 420;
    var h = 600;
    var padding_left = 70;
    var padding = 45;

    var bar = d3.select("#bar").append("svg")
      .attr("width", w)
      .attr("height", h);

    var maxRatio = d3.max(figure);
    // var regions = data.map(function (d) { return d.region; });

    var xScale = d3.scaleLinear([0, maxRatio], [padding, w - padding_left]);
    var yScale = d3.scaleBand()
      .domain(region)
      .rangeRound([padding, h - padding])
      .padding(0.1);
    var colorScale = d3.scaleSequential().interpolator(d3.interpolateGreens)
      .domain([0, maxRatio]);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    bar.append("g")
      .attr("transform", "translate(" + (padding_left - padding) + ", " + (h - padding) + ")")
      .call(xAxis);

    bar.append("g")
      .attr("transform", "translate(" + padding_left + ", 0)")
      .call(yAxis);

    bar.append("text")
      .attr("x", w / 2)
      .attr("y", h - padding + 40)
      .attr("text-anchor", "middle")
      .attr("font-size", "small")
      .text(data_var)

    bar.selectAll("rect")
      .data(figure)
      .join(
        function (enter) {
          enter.append("rect")
            .attr("x", padding_left)
            .attr("y", (d, i) => i * 31 + 55)
            .attr('width', d => xScale(figure) - padding)
            .attr('height', d => yScale.bandwidth())
            .style("fill", d => colorScale(figure));
        }
      )

    // Create data array of values to visualize
    // var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];

    // // Create variable for the SVG
    // var svg = d3.select("body").append("svg")
    //   .attr("height", "100%")
    //   .attr("width", "100%");

    // // Select, append to SVG, and add attributes to rectangles for bar chart
    // svg.selectAll("rect")
    //   .data(figure)
    //   .enter().append("rect")
    //   .attr("class", "bar")
    //   .attr("height", function (d, i) { return (d * 10) })
    //   .attr("width", "40")
    //   .attr("x", function (d, i) { return (i * 60) + 25 })
    //   .attr("y", function (d, i) { return 400 - (d * 10) });

    // // Select, append to SVG, and add attributes to text
    // svg.selectAll("text")
    //   .data(region)
    //   .enter().append("text")
    //   .text(function (d) { return d })
    //   .attr("class", "text")
    //   .attr("x", function (d, i) { return (i * 60) + 36 })
    //   .attr("y", function (d, i) { return 415 - (d * 10) });

    // Show sidebar once everything is done loading
    $(".loader").hide()
    $('.sidebar-content').show()
  });
}

function animateMap(region) {
  // 'ARMM',
  // 'CAR',
  // 'NCR',
  // 'Region I',
  // 'Region II',
  // 'Region III',
  // 'Region IVA',
  // 'Region IVB',
  // 'Region IX',
  // 'Region V',
  // 'Region VI',
  // 'Region VII',
  // 'Region VIII',
  // 'Region X',
  // 'Region XI',
  // 'Region XII',
  // 'Region XIII'

  // Animate the map
  if (region == "ARMM") {
    map.flyTo({
      center: [124.24, 6.96],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "CAR") {
    map.flyTo({
      center: [121.17, 17.35],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "NCR") {
    map.flyTo({
      center: [121, 14.58],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region I") {
    map.flyTo({
      center: [120.62, 16.08],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region II") {
    map.flyTo({
      center: [121.81, 16.98],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region III") {
    map.flyTo({
      center: [120.71, 15.48],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region IVA") {
    map.flyTo({
      center: [121.08, 14.10],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region IVB") {
    map.flyTo({
      center: [118.74, 9.84],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region IX") {
    map.flyTo({
      center: [123.26, 8.15],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region V") {
    map.flyTo({
      center: [123.41, 13.42],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region VI") {
    map.flyTo({
      center: [122.54, 11.01],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region VII") {
    map.flyTo({
      center: [124.06, 9.82],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region VIII") {
    map.flyTo({
      center: [125.04, 12.24],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region X") {
    map.flyTo({
      center: [124.69, 8.02],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region XI") {
    map.flyTo({
      center: [126.09, 7.30],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region XII") {
    map.flyTo({
      center: [124.69, 6.27],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region XIII") {
    map.flyTo({
      center: [125.74, 8.80],
      zoom: 9.5,
      essential: true
    });
  }
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

// Bar chart
// data = d3.csv("https://raw.githubusercontent.com/dlsudatasci/data-visualization/main/ched_sucfacultystudentratio_20162018.csv")
//   .then(makeChart);

// function makeChart(data) {
//   var students = data.map(function (d) { return d.students2017; });
//   var region = data.map(function (d) { return d.region; });

//   new Chart(document.getElementById("myCanvas"), {
//     type: 'bar',
//     data: {
//       labels: region,
//       datasets: [
//         {
//           backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
//           data: students
//         }
//       ]
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: 'Graph'
//       }
//     }
//   });
// }

