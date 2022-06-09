PIE = document.getElementById("pieplot");

let negaraPieChart = [];
let populasiPieChart = [];
let otherPopulation = 0;

d3.csv("data/pops_sorted.csv", function (csv) {
  // Load data 4 negara populasi terbanyak
  for (let i = 0; i < 4; i++) {
    negaraPieChart.push(csv[i].Country);
    populasiPieChart.push(parseInt(csv[i].Population));
  }

  // Load data populasi sisanya
  for (let j = 3; j < csv.length; j++) {
    otherPopulation += parseInt(csv[j].Population);
  }

  var data = [
    {
      labels: [...negaraPieChart, "Other"],
      values: [...populasiPieChart, otherPopulation],
      type: "pie",
      direction: "clockwise",
      rotation: 153,
    },
  ];

  var layout = {
    title: `Persentase Populasi <br> Negara di Dunia`,
    font: {
      family: "Plus Jakarta Sans",
      size: 14,
    },
    legend: {"orientation": "h"},
  };
  var config = { responsive: true };
  Plotly.newPlot(PIE, data, layout, config);
});
