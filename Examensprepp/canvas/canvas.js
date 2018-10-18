/* var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

c.strokeStyle = 'blue';
c.lineWidth = 10;

c.strokeRect(5, 5, 290, 290);

c.beginPath();
c.arc(150, 150, 145, 0, Math.PI * 2);
c.moveTo(150, 10);
c.lineTo(150, 290);
c.moveTo(10, 150);
c.lineTo(290, 150);
c.stroke(); */

var canvas = document.getElementById('canvas');
c = canvas.getContext('2d');

c.lineWidth = 10;
c.strokeStyle = 'blue';

c.strokeRect(5, 5, 140, 140);

c.beginPath();
c.arc(75, 75, 70, 0, Math.PI * 2);

c.moveTo(75, 0);
c.lineTo(75, 150);
c.moveTo(0, 75);
c.lineTo(150, 75);
c.stroke();
