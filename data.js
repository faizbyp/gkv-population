const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 400 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    var data1 = [
      ["Afghanistan", 38928346],
      ["Albania", 2877797],
      ["Algeria", 43851044],
      ["Angola", 32866272],
    ];
    
    var n = data1.length;
    for(var i=0; i<n; i++){
      context.beginPath();
      context.arc(200*i, 200, 150, 1*Math.PI, 2*Math.PI);
      if(i===0) context.fillStyle = 'blue';
      if(i===1) context.fillStyle = 'red';
      context.fill();
    }
  };
};

canvasSketch(sketch, settings);
