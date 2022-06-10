var cBar = document.getElementById("bar");
var ctxBar = cBar.getContext("2d");

var width = 1000;
var height = 720;
var lebar = 70;

var negara1=[];
var sortedLand=[];

d3.csv("data/land_sorted.csv",function(csv){
    csv.map(function(d){
        negara1.push(d.Country);
        sortedLand.push(+d.Land);
    })
    console.log("negara",negara1);
    console.log("land",sortedLand);

    ctxBar.fillStyle = 'white';
    ctxBar.fillRect(0, 0, width, height);
    const skala = 20;

    //Land Area
    ctxBar.save();
    ctxBar.font = "20px Courier New";
    ctxBar.fillStyle = "black";
    ctxBar.textAlign = "center";
    ctxBar.restore();
    ctxBar.font = "20px Arial bold";
    ctxBar.fillStyle = "black";
    ctxBar.fillText(negara1[0], (1*75)+skala, height );
    ctxBar.fillText(negara1[1], (1*275)+skala, height );
    ctxBar.fillText(negara1[2], (1*475)+skala, height );
    ctxBar.fillText(negara1[3], (1*675)+skala, height );
    ctxBar.fillText(negara1[4], (1*875)+skala, height );

    //Fertility rate
    ctxBar.save();
    ctxBar.rotate((Math.PI / 180) * 270);
    ctxBar.font = "25px Courier New";
    ctxBar.fillStyle = "black";
    ctxBar.restore();
    ctxBar.font = "15px Arial bold";
    ctxBar.fillStyle = "black";
    ctxBar.save();
    ctxBar.translate(0, height);
    ctxBar.fillText(sortedLand[0], 0, -(5*100+skala));
    ctxBar.fillText(sortedLand[1], 0, -(5*80+skala));
    ctxBar.fillText(sortedLand[2], 0, -(5*60+skala));
    ctxBar.fillText(sortedLand[3], 0, -(5*40+skala));
    ctxBar.fillText(sortedLand[4], 0, -(5*20+skala));
    ctxBar.restore();

    //garis bingkai
    ctxBar.strokeStyle = 'black';
    ctxBar.beginPath();
    ctxBar.moveTo(60,20);
    ctxBar.lineTo(60,700);
    ctxBar.moveTo(60,700);
    ctxBar.lineTo(1000,700);
    ctxBar.closePath();
    ctxBar.stroke();

    //judul
    ctxBar.save();
    ctxBar.font = "bolder 25px Plus Jakarta Sans";
    ctxBar.fillStyle = "black";
    ctxBar.fillText("5 BIGGEST AREA COUNTRY", 100,50);
    ctxBar.restore();


      ctxBar.fillStyle="#00429d";
      ctxBar.fillRect(90, height - 530, 70, 510 );
      ctxBar.fillRect(290, height - 430, 70, 410 );
      ctxBar.fillRect(510, height - 330, 70, 310 );
      ctxBar.fillRect(690, height - 230, 70, 210 );
      ctxBar.fillRect(890, height - 130, 70, 110 );
      ctxBar.restore();
      ctxBar.fillStyle="#00429d";
      ctxBar.font = "20px Arial bold";
      ctxBar.fillText(sortedLand[0],85, 180);
      ctxBar.fillText(sortedLand[1],290, 280);
      ctxBar.fillText(sortedLand[2],505, 380);
      ctxBar.fillText(sortedLand[3],685, 480);
      ctxBar.fillText(sortedLand[4],885, 580);

      ctxBar.save();
      ctxBar.translate(0, height);
      ctxBar.scale(1, -1);      


});
