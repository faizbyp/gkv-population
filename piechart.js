var cpie = document.getElementById("pie");
var ctxpie = cpie.getContext("2d");

var width = 600;
var height = 400;
var x = 200;
var y = 200;
var r = 150;
var startDeg = 0-(0.5*Math.PI);

var negara=[];
var populasi=[];

d3.csv("pops_sampled.csv",function(csv){
  csv.map(function(d){
    negara.push(d.Country);
    populasi.push(+d.Population);
  })
  console.log("negara",negara);
  console.log("populasi",populasi);


  var n = populasi.length;
  console.log(n);
  var total = 0;

  for(var i=0; i<n; i++){
    total += populasi[i];
  }
  console.log(total);
  
  var palette1 = ['#00429d', '#4771b2', '#73a2c6', '#a5d5d8', '#ffffe0', '#ffbcaf', '#f4777f', '#cf3759', '#93003a'];

  for(var i=0; i<n; i++){
    var randomColor = '#' + Math.random().toString(16).slice(2, 8);
    
    ctxpie.fillStyle = palette1[i];
    ctxpie.beginPath();
    ctxpie.moveTo(x,y);
    ctxpie.arc(x, y, r, startDeg, startDeg+(populasi[i]/total)*(2*Math.PI));
    ctxpie.closePath();
    ctxpie.fill();

    ctxpie.fillRect(width-50, 50+(i*40), 30, 30);
    ctxpie.strokeStyle = "black";
    ctxpie.strokeRect(width-50, 50+(i*40), 30, 30);
    ctxpie.fillStyle = 'black';
    ctxpie.textAlign = 'end';
    ctxpie.textBaseline = 'middle';
    ctxpie.fillText(negara[i], width-60, 65+(i*40));

    console.log(startDeg);
    startDeg += (populasi[i]/total)*(2*Math.PI);

  }
});
