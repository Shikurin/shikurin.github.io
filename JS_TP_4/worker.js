onTimeout();

function onTimeout() {
	donneCoord();
	setTimeout(onTimeout, 1000 + génDélAléa());
}
/* Génère des délais aléatoires. */
function génDélAléa() {
	return Math.random()*1000;  // ici les délais varient de 0 à 10 secondes
}

/* Génère des coordonnées aléatoires. */
function génCoordAléa() {
	return [Math.random()*600, Math.random()*600];  // les coordonnées sont comprises entre les limites du canevas (ici 600 et 600)
}

/* Envoie les coordonnées générées aléatoirement au main. */
function donneCoord() {
	postMessage(génCoordAléa());
	console.log('Message envoyé au programme principal.');
}




