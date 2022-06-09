MAPS = document.getElementById("mapschart");

let negaraMapsChart = [];
let populasiMapsChart = [];

d3.csv("data/pops_sorted.csv", function (csv2) {
  for (var k = 0; k < csv2.length; k++) {
    negaraMapsChart.push(csv2[k].Country);
    populasiMapsChart.push(parseInt(csv2[k].Population));
  }

  var colorscale = [
    [0, "rgb(5, 10, 172)"],
    [0.35, "rgb(40, 60, 190)"],
    [0.5, "rgb(70, 100, 245)"],
    [0.6, "rgb(90, 120, 245)"],
    [0.7, "rgb(106, 137, 247)"],
    [1, "rgb(220, 220, 220)"],
  ];

  var data = [
    {
      type: "choropleth",
      locationmode: "country names",
      locations: negaraMapsChart,
      z: populasiMapsChart,
      text: negaraMapsChart,
      colorscale: colorscale,
      autocolorscale: false,
      reversescale: true,
    },
  ];

  var layout = {
    title: "Populasi Negara di Seluruh Dunia",
    font: {
      family: "Plus Jakarta Sans",
      size: 18,
    },
    geo: {
      projection: {
        type: "robinson",
      },
    },
  };
  Plotly.newPlot(MAPS, data, layout, { showLink: false });
});
