alert("A special season's greetings from:\nFoursquare Gospel Church Opeilu.\nKindly hover or tap on card to flip to the backside\nfor a special message.\nThanks.\nFGC-Opeilu Media-2022. ")


var i = 0;
var txt = 'Our sincere prayers and wishes that this Christmas\nand New year gives you the key to every closed door,\nAnd shines a bright light at the end of dark tunnel for you.\nMay you experience the light of laughter, the warmth of love, and the joy of gratitude this season and beyond.\nWishing you and your family every happiness, joy and prosperity\nthat this season brings now and in the coming new year.\n Merry Christmas and a Happy New Year.' /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("msg").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}