var c = document.getElementById("pie");
var context = c.getContext("2d");

    var width = 600;
    var height = 400;
    var x = 200;
    var y = 200;
    var r = 150;
    var startDeg = 0;

    var field1=[];
    var field2=[];

    d3.csv("worldpop.csv",function(csv){
      csv.map(function(d){
        field1.push(d.Country);
        field2.push(+d.Population);
      })
      console.log("field1",field1);
      console.log("field2",field2);


      var n = field2.length;
      console.log(n);
      var total = 0;

      for(var i=0; i<n; i++){
        total += field2[i];
      }
      console.log(total);

      for(var i=0; i<n; i++){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        
        context.fillStyle = '#' + randomColor;
        context.beginPath();
        context.moveTo(x,y);
        context.arc(x, y, r, startDeg, startDeg+(field2[i]/total)*(2*Math.PI));
        context.closePath();
        context.fill();

        context.fillRect(width-50, (height-50)-(i*40), 30, 30);
        context.strokeStyle = "black";
        context.strokeRect(width-50, (height-50)-(i*40), 30, 30);
        context.fillStyle = 'black';
        context.textAlign = 'end';
        context.textBaseline = 'middle';
        context.fillText(field1[i], width-60, (height-35)-(i*40));

        console.log(startDeg);
        startDeg += (field2[i]/total)*(2*Math.PI);

      }
    });

    

    // var data1 = [
    //   ["Afghanistan", 38928346],
    //   ["Albania", 2877797],
    //   ["Algeria", 43851044],
    //   ["Angola", 32866272],
    // ];
    
    // var n = data1.length;
    // console.log(n);
    // var total = 0;

    // for(var i=0; i<n; i++){
    //   total += data1[i][1];
    // }
    // console.log(total);

    // for(var i=0; i<n; i++){
    //   var randomColor = Math.floor(Math.random()*16777215).toString(16);
      
    //   context.fillStyle = '#' + randomColor;
    //   context.beginPath();
    //   context.moveTo(x,y);
    //   context.arc(x, y, r, startDeg, startDeg+(data1[i][1]/total)*(2*Math.PI));
    //   context.closePath();
    //   context.fill();

    //   console.log(startDeg);
    //   startDeg += (data1[i][1]/total)*(2*Math.PI);
    // }