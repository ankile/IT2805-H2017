// window.onload = function() {
  var canvas = document.getElementById('canvas');
  //if (canvas && canvas.getContext()) {
    var c = canvas.getContext('2d');
    //if (c) {
      c.beginPath();
      c.arc(75, 75, 50, 0, 2*Math.PI);
      c.stroke();

      c.beginPath();
      c.arc(75, 75, 40, 0, Math.PI);
      c.stroke();

      c.beginPath();
      c.arc(60, 60, 5, 0, 2*Math.PI);
      c.stroke();

      c.beginPath();
      c.arc(90, 60, 5, 0, 2*Math.PI);
      c.stroke()
  //  }
//  }
//}
