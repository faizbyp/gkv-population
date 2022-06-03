var cpie = document.getElementById("pie");
var ctxpie = cpie.getContext("2d");

var width = 1000;
var height = 720;
var x = 400;
var y = 360;
var r = 300;
var rectW = 50;
var startDeg = 0-(0.5*Math.PI);

var negara=[];
var populasi=[];

d3.csv("pops_sorted.csv",function(csv){
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
    
    // Draw slices of pie
    if(i === 0){ ctxpie.fillStyle = palette1[i]; }  
    else if(i > 0){ ctxpie.fillStyle = palette1[2]; }
    ctxpie.beginPath();
    ctxpie.moveTo(x,y);
    ctxpie.arc(x, y, r, startDeg, startDeg-(populasi[i]/total)*(2*Math.PI), true);
    ctxpie.closePath();
    ctxpie.fill();

    if(i < 2){
      ctxpie.font = "24px Plus Jakarta Sans";
      ctxpie.fillRect(width-150, 70+(i*60), rectW, rectW);
      ctxpie.fillStyle = 'black';
      ctxpie.textAlign = 'end';
      ctxpie.textBaseline = 'middle';
      if(i === 0){
        ctxpie.fillText(negara[i], width-170, 95+(i*60));
      }
      else if(i === 1){
        ctxpie.fillText('Others', width-170, 95+(i*60));
      }
    }

    console.log(startDeg);
    startDeg -= (populasi[i]/total)*(2*Math.PI);

  }
});
