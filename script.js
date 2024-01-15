const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0
}
const prix = {
    pommes : 13.50,
    poires : 20.00,
    prunes : 22.00
}
const poids = {
    pommes : 3.5,
    poires : 3.7,
    prunes : 3.3
}

//document.getElementById("pommeBTN").addEventListener("click", AddPomme);
//document.getElementById("pruneBTN").addEventListener("click", AddPrune);
//document.getElementById("poireBTN").addEventListener("click", AddPoire);


// Ajouter une pomme au panier, puis update les couts
function AddPomme(){

    panier.pommes++;

    document.querySelector("#qtePommes").textContent = panier.pommes;
    document.querySelector("#prixPommes").textContent = (panier.pommes * prix.pommes);
    document.querySelector("#qteTotal").textContent = (panier.pommes + panier.poires + panier.prunes);
    document.querySelector("#prixTotal").textContent = ((panier.pommes * prix.pommes) + (panier.poires * prix.poires) + (panier.prunes * prix.prunes));
    document.querySelector("#poidsPommes").textContent = (poids.pommes += parseInt(document.querySelector("#poidsPommes").textContent));
    document.querySelector("#poidsTotal").textContent = (parseInt(document.querySelector("#poidsPommes").textContent) + parseInt(document.querySelector("#poidsPoires").textContent) + parseInt(document.querySelector("#poidsPrunes").textContent));
}


// Ajouter une prune au panier, puis update les couts
function AddPoire(){

    panier.poires++;

    document.querySelector("#qtePoires").textContent = panier.poires;
    document.querySelector("#prixPoires").textContent = (panier.poires * prix.poires);
    document.querySelector("#qteTotal").textContent = (panier.pommes + panier.poires + panier.prunes);
    document.querySelector("#prixTotal").textContent = ((panier.pommes * prix.pommes) + (panier.poires * prix.poires) + (panier.prunes * prix.prunes));
    document.querySelector("#poidsPoires").textContent = (poids.poires += parseInt(document.querySelector("#poidsPoires").textContent));
    document.querySelector("#poidsTotal").textContent = (parseInt(document.querySelector("#poidsPommes").textContent) + parseInt(document.querySelector("#poidsPoires").textContent) + parseInt(document.querySelector("#poidsPrunes").textContent));
}


// Ajouter une prune au panier, puis update les couts
function AddPrune(){

    panier.prunes++;

    document.querySelector("#qtePrunes").textContent = panier.prunes;
    document.querySelector("#prixPrunes").textContent = (panier.prunes * prix.prunes);
    document.querySelector("#qteTotal").textContent = (panier.pommes + panier.poires + panier.prunes);
    document.querySelector("#prixTotal").textContent = ((panier.pommes * prix.pommes) + (panier.poires * prix.poires) + (panier.prunes * prix.prunes));
    document.querySelector("#poidsPrunes").textContent = (poids.prunes += parseInt(document.querySelector("#poidsPrunes").textContent));
    document.querySelector("#poidsTotal").textContent = (parseFloat(document.querySelector("#poidsPommes").textContent) + parseFloat(document.querySelector("#poidsPoires").textContent) + parseFloat(document.querySelector("#poidsPrunes").textContent));
}
