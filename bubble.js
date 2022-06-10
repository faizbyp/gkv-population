var cbubble = document.getElementById("bubble");
var ctxbubble = cbubble.getContext("2d");

var width = 1000;
var height = 720;

var negara=[];
var populasi=[];
var land=[];
var fert=[];

d3.csv("data/pops_sorted.csv",function(csv){
  csv.map(function(d){
    negara.push(d.Country);
    populasi.push(+d.Population);
    land.push(+d.Land);
    fert.push(+d.Fert);
  })
  console.log("negara",negara);
  console.log("populasi",populasi);
  console.log("land",land);
  console.log("fert",fert);

  ctxbubble.fillStyle = 'white';
  ctxbubble.fillRect(0, 0, width, height);
  const maxFert = 8;
  const maxLand = 19100000;
  const maxPopulation = 1500000000;
  const skala = 20;

  //Land Area
  ctxbubble.save();
  ctxbubble.font = "20px Courier New";
  ctxbubble.fillStyle = "black";
  ctxbubble.textAlign = "center";
  ctxbubble.fillText("Land Area", width/2, height - 25);
  ctxbubble.restore();
  ctxbubble.font = "10px Arial bold";
  ctxbubble.fillStyle = "black";
  for(i=1; i<=17; i++){
    ctxbubble.fillText(i*1000000, (i*52)+skala, height - 5);
  }

  //Fertility rate
  ctxbubble.save();
  ctxbubble.rotate((Math.PI / 180) * 270);
  ctxbubble.font = "25px Courier New";
  ctxbubble.fillStyle = "black";
  ctxbubble.fillText("Fertility rate", -width/3 - 100, height/2 - 320);
  ctxbubble.restore();
  ctxbubble.font = "15px Arial bold";
  ctxbubble.fillStyle = "black";
  ctxbubble.save();
  ctxbubble.translate(0, height);
  for(i=1; i<=8; i++){
    ctxbubble.fillText((i), skala-15, -(i*85+skala));
  }
  ctxbubble.restore();

  //garis bingkai
  ctxbubble.strokeStyle = 'black';
  ctxbubble.beginPath();
  ctxbubble.moveTo(20,20);
  ctxbubble.lineTo(20,700);
  ctxbubble.moveTo(20,700);
  ctxbubble.lineTo(1000,700);
  ctxbubble.closePath();
  ctxbubble.stroke();

  //judul
  ctxbubble.save();
  ctxbubble.font = "bolder 25px Plus Jakarta Sans";
  ctxbubble.fillStyle = "black";
  ctxbubble.fillText("WORLD POPULATION 2020", 50,50);
  ctxbubble.restore();

  var palette1 = ['#00429d', '#4771b2', '#73a2c6', '#a5d5d8', '#ffffe0', '#ffbcaf', '#f4777f', '#cf3759', '#93003a'];

  var n = populasi.length;
  for(var i = 0; i < n; i++){
      var centerX = (land[i]/maxLand)*width+skala;
      var centerY = (fert[i]/maxFert)*height+skala+10;
      var radius = (populasi[i]/maxPopulation)*100;
      
      switch(i%5){
        case 1:
          ctxbubble.fillStyle = '#00429d';
          break;
        case 2:
          ctxbubble.fillStyle = '#4771b2'; 
          break;
        case 3:
          ctxbubble.fillStyle = '#73a2c6';      
            break;
        case 4:
          ctxbubble.fillStyle = '#a5d5d8';
            break;
      }
      
      ctxbubble.save();
      ctxbubble.translate(0, height);
      ctxbubble.scale(1, -1);      
      ctxbubble.beginPath();
      ctxbubble.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctxbubble.fill();
      ctxbubble.restore();
      ctxbubble.save();
      ctxbubble.translate(0, height);
      ctxbubble.font = `${radius}px Plus Jakarta Sans`;
      ctxbubble.fillStyle = "#888888";
      ctxbubble.fillText(negara[i],centerX+2,-centerY+8);
      ctxbubble.restore();
    }
  
});
