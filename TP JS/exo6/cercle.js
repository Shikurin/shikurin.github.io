function dessiner() {
  var canevas = document.getElementById('canevas');
  if (canevas.getContext) {
    var ctx = canevas.getContext('2d');

    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // Coordonnée x
        var y = 25 + i * 50; // Coordonnée y
        var rayon = 20; // Rayon de l'arc
        var angleInitial = 0; // Point de départ sur le cercle
        var angleFinal = Math.PI + (Math.PI * j) / 2; // Point d'arrivée sur le cercle
        var antihoraire = i % 2 != 0; // Horaire ou antihoraire

        ctx.arc(x, y, rayon, angleInitial, angleFinal, antihoraire);

        if (i>1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}

