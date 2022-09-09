let toggle = document.querySelector('toggle');


var i = 0
var images = ['img/img_1.jpg','img/img_2.jpg','img/img_3.gif','img/img_4.jpg','img/img_5.jpeg']
var time = 3000;

     function changeImg(){

        document.slide.src = images[i];

        if(i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout("changeImg()", time);
     }
     window.onload = changeImg;



     var btnGauche = document.getElementById("btn-gauche");
     var btnDroite = document.getElementById("btn-droite");

     btnDroite.onclick = () =>{
        document.getElementById("footer").scrollTo({
            top:0,
            left:800,
            behavior:"smooth"
        })
     }

     btnGauche.onclick = () =>{
        document.getElementById("footer").scrollTo({
            top:0,
            left:-800,
            behavior:"smooth"
        })
     }