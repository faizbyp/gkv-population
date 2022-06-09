HEATMAP = document.getElementById("heatmap");

let columnNames = [];
let correlationNumber = [
  [
    1.0, -0.033954, 0.850314, -0.019811, 0.448512, -0.267104, -0.048964,
    0.018756, -0.045453, 0.999999,
  ],
  [
    -0.033954, 1.0, 0.174783, -0.007646, -0.02072, -0.01614, 0.823845,
    -0.843301, -0.35279, -0.033938,
  ],
  [
    0.850314, 0.174783, 1.0, -0.027851, 0.293919, -0.302158, 0.166476,
    -0.192737, -0.174918, 0.850165,
  ],
  [
    -0.019811, -0.007646, -0.027851, 1.0, -0.063196, 0.000122, -0.151806,
    0.141109, 0.006848, -0.019636,
  ],
  [
    0.448512, -0.02072, 0.293919, -0.063196, 1.0, 0.225448, -0.045421, 0.06234,
    0.128382, 0.448524,
  ],
  [
    -0.267104, -0.01614, -0.302158, 0.000122, 0.225448, 1.0, -0.113283,
    0.190539, 0.270934, -0.266888,
  ],
  [
    -0.048964, 0.823845, 0.166476, -0.151806, -0.045421, -0.113283, 1.0,
    -0.882396, -0.485951, -0.049104,
  ],
  [
    0.018756, -0.843301, -0.192737, 0.141109, 0.06234, 0.190539, -0.882396, 1.0,
    0.534106, 0.018851,
  ],
  [
    -0.045453, -0.35279, -0.174918, 0.006848, 0.128382, 0.270934, -0.485951,
    0.534106, 1.0, -0.045258,
  ],
  [
    0.999999, -0.033938, 0.850165, -0.019636, 0.448524, -0.266888, -0.049104,
    0.018851, -0.045258, 1.0,
  ],
];

d3.csv("data/pops_sorted.csv", function (csv3) {
  // Push all column names into array
  columnNames = csv3.columns;

  // Create array contains column names without first column
  const columnNamesWithoutCountry = columnNames.slice(1, 11);

  // Mengubah angka correlationNumber menjadi 2 angka di belakang desimal
  var iter = 0;
  var len = correlationNumber.length;
  while (iter < len) {
    for (var iter2 = 0; iter2 < len; iter2++) {
      correlationNumber[iter2][iter] = correlationNumber[iter2][iter].toFixed(2);
    }
    iter++;
  }

  var xValues = columnNamesWithoutCountry;
  var yValues = columnNamesWithoutCountry;
  var zValues = correlationNumber;

  var data = [
    {
      x: xValues,
      y: yValues,
      z: zValues,
      type: "heatmap",
      colorscale: "YlOrRd",
    },
  ];

  var layout = {
    title: "Correlations Heatmap",
    font: {
      family: "Plus Jakarta Sans",
    },
    annotations: [],
    xaxis: {
      ticks: "",
      side: "top",
    },
    yaxis: {
      ticks: "",
      ticksuffix: " ",
      width: 700,
      height: 700,
      autosize: false,
    },
  };

  for (var i = 0; i < yValues.length; i++) {
    for (var j = 0; j < xValues.length; j++) {
      var currentValue = zValues[i][j];
      if (currentValue < 0.0) {
        var textColor = "white";
      } else {
        var textColor = "black";
      }
      var result = {
        xref: "x1",
        yref: "y1",
        x: xValues[j],
        y: yValues[i],
        text: zValues[i][j],
        font: {
          family: "Plus Jakarta Sans",
          size: 12,
          color: "rgb(50, 171, 96)",
        },
        showarrow: false,
        font: {
          color: textColor,
        },
      };
      layout.annotations.push(result);
    }
  }
  Plotly.newPlot(HEATMAP, data, layout);
});
