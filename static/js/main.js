$(document).ready(function () {

  $(".loader").hide()

  var data_select = $('#data_select')

  d3.json('/data').then(function (data) {
    console.log(data)
    data.forEach(function (elem) {
      data_select.append(`<option value="${elem.value}">${elem.label}</option>`);
    });
  });

  $.getJSON('https://raw.githubusercontent.com/okaystephen/DATA101-FIES/main/data/regions.geojson', function (data) {

    // color = '#024164' // blue
    color = '#a62b2b' // red

    map.on('load', () => {
      map.addSource('regions', {
        type: 'geojson',
        data: data,
      });

      map.addLayer({
        'id': 'ARMM',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Autonomous Region in Muslim Mindanao']
      });

      map.addLayer({
        'id': 'CAR',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Cordillera Administrative Region']
      });

      map.addLayer({
        'id': 'NCR',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'National Capital Region']
      });

      map.addLayer({
        'id': 'Region I',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region I']
      });

      map.addLayer({
        'id': 'Region II',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region II']
      });

      map.addLayer({
        'id': 'Region III',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region III']
      });

      map.addLayer({
        'id': 'Region IVA',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region IV-A']
      });

      map.addLayer({
        'id': 'Region IVB',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region IV-B']
      });

      map.addLayer({
        'id': 'Region V',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region V']
      });

      map.addLayer({
        'id': 'Region VI',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region VI']
      });

      map.addLayer({
        'id': 'Region VII',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region VII']
      });

      map.addLayer({
        'id': 'Region VIII',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region VIII']
      });

      map.addLayer({
        'id': 'Region IX',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region IX']
      });

      map.addLayer({
        'id': 'Region X',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region X']
      });

      map.addLayer({
        'id': 'Region XI',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region XI']
      });

      map.addLayer({
        'id': 'Region XII',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region XII']
      });

      map.addLayer({
        'id': 'Region XIII',
        'type': 'fill',
        'source': 'regions',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.61
        },
        'filter': ['==', 'ADM1_EN', 'Region XIII']
      });

    })

    var region_select = $('#region_select')

    d3.json('/regions').then(function (data) {
      console.log(data)
      data.forEach(function (elem) {
        region_select.append(`<option value="${elem.value}">${elem.label}</option>`);
      });
    });

  })
});

function sidebarChangeContent(data, region) {
  var data_var = data

  var peso = ['Total Household Income',
    'Region',
    'Total Food Expenditure',
    'Main Source of Income',
    'Bread and Cereals Expenditure',
    'Total Rice Expenditure',
    'Meat Expenditure',
    'Total Fish and Marine Products Expenditure',
    'Fruit Expenditure',
    'Vegetables Expenditure',
    'Restaurant and Hotel Expenditure',
    'Alcoholic Beverages Expenditure',
    'Tobacco Expenditure',
    'Clothing, Footwear and Other Wear Expenditure',
    'Housing and Water Expenditure',
    'Imputed House Rental Value',
    'Medical Care Expenditure',
    'Transportation Expenditure',
    'Communication Expenditure',
    'Education Expenditure',
    'Miscellaneous Goods and Services Expenditure',
    'Special Occasions Expenditure',
    'Crop Farming and Gardening Expenditure',
    'Total Income from Entrepreneurial Acitivites']

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
        var html = ""

        html += `<p>The ${data} in ${region} has an average of <u>`

        peso.forEach(function (p) { //loop through keys array
          if (p === data) {
            html += `₱`
          }
        });

        html += `<span id="value">${r}</span></u></p>`

        $('.sidebar-content').append(`<h4><b>${data} — ${region}</b></h4>`)
        // $('.sidebar-content').append(`<p>The ${data} in ${region} has an average of <u>₱<span id="value">${r}</span></u></p>`)
        $('.sidebar-content').append(html)

        // Display ranking among other regions
        $('.sidebar-content').append(`<div class="pt-2"><h5><b>Ranking Among Other Regions</b></h5>`)
        $('.sidebar-content').append(`<p>See how ${region} compares to other regions in the Philippines with regards to ${data}.</p></div>`)
        getRanking(region, data_var)
        animateMap(region, r, data_var)

        return true;
      }
    });
  });
}

function getRanking(r, data_var) {
  d3.json('/fies').then(function (loop) {
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
    $('.sidebar-content').append(`<div class="pb-3" id="bar"></div>`)
    // $('.sidebar-content').append(`<div class="pb-3" id="bar"></div>`)

    // Create dictionary
    var dict = []
    for (let i = 0; i < region.length; i++) {
      dict.push({
        region: region[i],
        value: figure[i]
      });
    }

    dict.sort(function (a, b) {
      return b.value - a.value;
    });

    console.log(dict)

    // Make bar chart
    var w = 420;
    var h = 600;
    var padding_left = 70;
    var padding = 45;

    var bar = d3.select("#bar").append("svg")
      .attr("width", w)
      .attr("height", h);

    var mapped = dict.map(d => {
      return {
        region: Object.keys(d)[0],
        value: d[Object.keys(d)[0]],
      }
    });

    var mapped_figures = dict.map(d => {
      return {
        figure: Object.keys(d)[1],
        value: d[Object.keys(d)[1]],
      }
    });

    console.log(mapped_figures)

    var mapped_overall = dict.map(d => {
      return {
        region: Object.keys(d)[0],
        figure: Object.keys(d)[1],
        value_region: d[Object.keys(d)[0]],
        value_figure: d[Object.keys(d)[1]],
      }
    });

    console.log(mapped_overall)

    var maxRatio = d3.max(figure);
    var regions = mapped.map(d => d.value);

    var xScale = d3.scaleLinear([0, maxRatio], [padding, w - padding_left]);
    var yScale = d3.scaleBand()
      .domain(regions)
      .rangeRound([padding, h - padding])
      .padding(0.1);
    var colorScale = d3.scaleSequential().interpolator(d3.interpolateGreens)
      .domain([0, maxRatio]);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // create tooltip element  
    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "d3-tooltip")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("padding", "15px")
      .style("background", "rgba(0,0,0,0.6)")
      .style("border-radius", "5px")
      .style("color", "#fff")
      .text("a simple tooltip");

    var bar_color = "#FFCB65";

    function shadeColor(color, percent) {
      var R = parseInt(color.substring(1, 3), 16);
      var G = parseInt(color.substring(3, 5), 16);
      var B = parseInt(color.substring(5, 7), 16);

      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);

      R = (R < 255) ? R : 255;
      G = (G < 255) ? G : 255;
      B = (B < 255) ? B : 255;

      var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
      var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
      var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

      return "#" + RR + GG + BB;
    }

    bar.append("g")
      .attr("transform", "translate(" + (padding_left - padding) + ", " + (h - padding) + ")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", function (d) {
        return "rotate(-65)"
      });

    bar.append("g")
      .attr("transform", "translate(" + padding_left + ", 0)")
      .call(yAxis);

    bar.append("text")
      .attr("x", w / 2)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("font-size", "smaller")
      .attr("font-weight", "bold")
      .style("fill", "#64BB6A")
      .text(data_var);

    bar.selectAll("rect")
      .data(mapped_overall)
      .join(
        function (enter) {
          enter.append("rect")
            .attr("x", padding_left)
            .attr("y", (d, i) => i * 29 + 55)
            .attr('width', d => xScale(d.value_figure) - padding)
            .attr('height', d => yScale.bandwidth())
            .attr('title', d => d.value_figure.toFixed(2))
            .attr('region', d => d.value_region)
            .style("fill", d => colorScale(d.value_figure))
            .on("mouseover", function (d, i) {
              tooltip.html(`Value: ${$(this).attr("title")}`).style("visibility", "visible");
              d3.select(this)
                .attr("fill", shadeColor(bar_color, -15));
            })
            .on("mousemove", function () {
              tooltip
                .style("top", (event.pageY - 10) + "px")
                .style("left", (event.pageX + 10) + "px");
            })
            .on("mouseout", function () {
              tooltip.html(``).style("visibility", "hidden");
              d3.select(this).attr("fill", bar_color);
            });
        }
      )

    // Change color of bar based on selected region
    $(`rect[region='${r}']`).css("fill", '#a62b2b');

    $("text").filter(function () {
      return $(this).text() === r;
    }).css({
      'font-weight': 'bold',
      'text-transform': 'uppercase'
    });

    // Show sidebar once everything is done loading
    $(".loader").hide()
    $('.sidebar-content').show()
  });
}

function animateMap(region, value, type) {
  $('.marker').remove()

  const el = document.createElement('div');
  el.className = 'marker';

  var markers = new mapboxgl.Marker(el);

  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  var lnglat = [[124.24, 6.96], [121.17, 17.35], [121, 14.58], [120.62, 16.08], [121.81, 16.98], [120.71, 15.48], [121.08, 14.10],
  [118.74, 9.84], [123.26, 8.15], [123.41, 13.42], [122.54, 11.01], [124.06, 9.82], [125.04, 12.24], [124.69, 8.02],
  [126.09, 7.30], [124.69, 6.27], [125.74, 8.80]
  ]
  var toggableID = ['ARMM', 'CAR', 'NCR', 'Region I', 'Region II', 'Region III',
    'Region IVA', 'Region IVB', 'Region IX', 'Region V', 'Region VI',
    'Region VII', 'Region VIII', 'Region X', 'Region XI', 'Region XII', 'Region XIII']

  // Animate the map
  if (region == "ARMM") {
    el.setAttribute("id", toggableID[0]);
    markers.setLngLat(lnglat[0]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [122.24, 6.96],
      zoom: 6,
      essential: true
    });
  }

  else if (region == "CAR") {
    el.setAttribute("id", toggableID[1]);
    markers.setLngLat(lnglat[1]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [121.17, 17.35],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "NCR") {
    el.setAttribute("id", toggableID[2]);
    markers.setLngLat(lnglat[2]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [121, 14.58],
      zoom: 9.5,
      essential: true
    });
  }

  else if (region == "Region I") {
    el.setAttribute("id", toggableID[3]);
    markers.setLngLat(lnglat[3]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [120.62, 17.08],
      zoom: 6.5,
      essential: true
    });
  }

  else if (region == "Region II") {
    el.setAttribute("id", toggableID[4]);
    markers.setLngLat(lnglat[4]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [121.81, 18.2],
      zoom: 6.2,
      essential: true
    });
  }

  else if (region == "Region III") {
    el.setAttribute("id", toggableID[5]);
    markers.setLngLat(lnglat[5]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [120.71, 15.48],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "Region IVA") {
    el.setAttribute("id", toggableID[6]);
    markers.setLngLat(lnglat[6]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [121.08, 14.10],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "Region IVB") {
    el.setAttribute("id", toggableID[7]);
    markers.setLngLat(lnglat[7]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [118.74, 10.84],
      zoom: 6,
      essential: true
    });
  }

  else if (region == "Region IX") {
    el.setAttribute("id", toggableID[8]);
    markers.setLngLat(lnglat[8]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [122.8, 7.8],
      zoom: 7.3,
      essential: true
    });
  }

  else if (region == "Region V") {
    el.setAttribute("id", toggableID[9]);
    markers.setLngLat(lnglat[9]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [123.41, 13],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "Region VI") {
    el.setAttribute("id", toggableID[10]);
    markers.setLngLat(lnglat[10]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [122.54, 11.01],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "Region VII") {
    el.setAttribute("id", toggableID[11]);
    markers.setLngLat(lnglat[11]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [124.06, 10.1],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "Region VIII") {
    el.setAttribute("id", toggableID[12]);
    markers.setLngLat(lnglat[12]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [125.04, 11.3],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "Region X") {
    el.setAttribute("id", toggableID[13]);
    markers.setLngLat(lnglat[13]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [124.69, 8.02],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "Region XI") {
    el.setAttribute("id", toggableID[14]);
    markers.setLngLat(lnglat[14]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [126.16, 6.70],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "Region XII") {
    el.setAttribute("id", toggableID[15]);
    markers.setLngLat(lnglat[15]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [124.69, 6.27],
      zoom: 7,
      essential: true
    });
  }

  else if (region == "Region XIII") {
    el.setAttribute("id", toggableID[16]);
    markers.setLngLat(lnglat[16]).addTo(map);
    popup.setHTML(
      `<strong>Region: </strong>${region}
        <br>
        <strong>Type: </strong>${type}
        <br>
        <strong>Value: </strong>${value}`
    );

    map.flyTo({
      center: [125.74, 9.2],
      zoom: 7,
      essential: true
    });
  }
  markers.getElement().addEventListener('mouseenter', () => {
    map.getCanvas().style.cursor = 'pointer';
    markers.setPopup(popup);
  })

  markers.getElement().addEventListener('mouseleave', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  })

  for (var i = 0; i < toggableID.length; i++) {

    if (document.getElementById(toggableID[i]) == null) {
      map.setLayoutProperty(toggableID[i], 'visibility', 'none');
      continue
    }
    else if (toggableID[i] === region) {
      document.getElementById(toggableID[i]).style.display = "block"
      map.setLayoutProperty(toggableID[i], 'visibility', 'visible');
    } else {
      map.setLayoutProperty(toggableID[i], 'visibility', 'none');
      document.getElementById(toggableID[i]).style.display = "none"
    }
  }
}

function shadeRegion(region) {
  var toggableID = ['ARMM',
    'CAR',
    'NCR',
    'Region I',
    'Region II',
    'Region III',
    'Region IVA',
    'Region IVB',
    'Region IX',
    'Region V',
    'Region VI',
    'Region VII',
    'Region VIII',
    'Region X',
    'Region XI',
    'Region XII',
    'Region XIII']

  for (var i = 0; i < toggableID.length; i++) {
    var id = toggableID[i]

    if (id === region) {
      document.getElementById(id).style.display = "block"
      map.setLayoutProperty(id, 'visibility', 'visible');
    } else {
      map.setLayoutProperty(id, 'visibility', 'none');
      document.getElementById(id).style.display = "none"

    }
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

function hideField() {
  if ($(".hider").text() == "Hide Dropdown") {
    $(".hider").text("Show Dropdown")
    $(".sidebar-top").hide()
  } else {
    $(".hider").text("Hide Dropdown")
    $(".sidebar-top").show()
  }
}