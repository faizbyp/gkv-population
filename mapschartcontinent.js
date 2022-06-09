MAPSCONTINENT = document.getElementById("mapschartcontinent");

d3.csv("data/world_pops_continent.csv", function (csv4) {
    let negaraMapsChartContinent = [];
    let populasiMapsChartContinent = [];

  csv4.map(function (d) {
    if (d['Continent'] == "AS") {
        negaraMapsChartContinent.push(d['Country']);
        populasiMapsChartContinent.push(parseInt(d['Population (2020)']))
    }
  });

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
        locations: negaraMapsChartContinent,
        z: populasiMapsChartContinent,
        text: negaraMapsChartContinent,
        colorscale: colorscale,
        autocolorscale: false,
        reversescale: true,
      },
    ];

    var layout = {
      title: "Populasi di Benua Asia",
      font: {
        family: "Plus Jakarta Sans",
        size: 18,
      },
      geo: {
          scope: 'asia',
        projection: {
          type: "equirectangular",
        },
      },
    };
    Plotly.newPlot(MAPSCONTINENT, data, layout, { showLink: false });
});
