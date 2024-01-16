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
    poires : 3.25,
    prunes : 3.75
}

//document.getElementById("pommeBTN").addEventListener("click", AddPomme);
//document.getElementById("pruneBTN").addEventListener("click", AddPrune);
//document.getElementById("poireBTN").addEventListener("click", AddPoire);


// Ajouter un item au panier, puis update les couts
function addItem(nomItem){

    //variables temporaires
    let notrePrix = 0;
    let notrePoid = 0;
    let notreQuantite = 0;

    switch (nomItem) {
        case 'Pommes':

            panier.pommes++;
            notrePrix = prix.pommes;
            notrePoid = poids.pommes;
            notreQuantite = panier.pommes;

            break;
        case 'Poires':

            panier.poires++;
            notrePrix = prix.poires;
            notrePoid = poids.poires;
            notreQuantite = panier.poires;

            break;
        case 'Prunes':

            panier.prunes++;
            notrePrix = prix.prunes;
            notrePoid = poids.prunes;
            notreQuantite = panier.prunes;

            break;
    }

// Nous ajustons la facture....

    //UPDATE LE POIDS
    document.querySelector("#poids"+ nomItem).textContent = (notreQuantite * notrePoid).toFixed(2);

    //UPDATE LA QUANTITEE
    document.querySelector("#qte" + nomItem).textContent = notreQuantite;

    //UPDATE LE PRIX
    document.querySelector("#prix" + nomItem).textContent = (notreQuantite * notrePrix).toFixed(2);



// Ensuite nous ajustons les totaux....

    // QUANTITEE
    document.querySelector("#qteTotal").textContent = (panier.pommes + panier.poires + panier.prunes);

    //PRIX
    document.querySelector("#prixTotal").textContent = ((panier.pommes * prix.pommes) + (panier.poires * prix.poires) + (panier.prunes * prix.prunes)).toFixed(2);

    //POIDS
    document.querySelector("#poidsTotal").textContent = (parseInt(document.querySelector("#poidsPommes").textContent) + parseFloat(document.querySelector("#poidsPoires").textContent) + parseFloat(document.querySelector("#poidsPrunes").textContent)).toFixed(2);
}

