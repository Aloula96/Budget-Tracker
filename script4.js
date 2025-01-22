// Calcul des revenus
function calcRevenue() {
    const revenu = parseFloat(document.getElementById("Revenu").value) || 0;
    const autre = parseFloat(document.getElementById("autre").value) || 0;
    const totalRevenue = revenu + autre;
    document.getElementById("total").value = totalRevenue;
    localStorage.setItem("Revenu", revenu);
    localStorage.setItem("Autre", autre);
    localStorage.setItem("TotalRevenue", totalRevenue);
}
// Ici, on a créé une fonction pour calculer le montant du revenu de l'utilisateur en nommant la valeur de la fonction calRevenue(); 
// Ensuite, on a créé 3 constantes pour permettre à l'utilisateur de mettre ses données dans le site. parseFloat permet ici de convertir une
// valeur de chaîne en nombre à virgule flottante, et on a défini la valeur qui cible les données de HTML pour chaque élément pour le revenu et autres. 
// cette valeur || permet de faire une condition or si l'utilisateur ne met pas de valeur, la valeur va rester 0
//  Au final, on additionne les 2 valeurs en créant une constante TotalRevenue;
// localStorage.setItem() permet de stocker les données dans le navigateur, donc on va stocker chaque constante créée;


// Calcul des besoins
function calcBesoins() {
    const loyer = parseFloat(document.getElementById("loyer").value) || 0;
    const mutuelle = parseFloat(document.getElementById("Mutuelle").value) || 0;
    const electricite = parseFloat(document.getElementById("électricité").value) || 0;
    const internet = parseFloat(document.getElementById("Internet").value) || 0;
    const course= parseFloat(document.getElementById("course").value) || 0;
    const transportation = parseFloat(document.getElementById("transportation").value) || 0;
    const totalBesoins = loyer + mutuelle + electricite + internet + course + transportation;
    document.getElementById("totalBesoins").value = totalBesoins;
    localStorage.setItem("TotalBesoins", totalBesoins);
}
// ici même concepte pour les besoins 


// Calcul des loisirs
function calcLoisirs() {
    const habit = parseFloat(document.getElementById("Habit").value) || 0;
    const voyage = parseFloat(document.getElementById("voyage").value) || 0;
    const numerique = parseFloat(document.getElementById("Numerique").value) || 0;
    const totalLoisirs = habit + voyage + numerique;
    document.getElementById("totalLoisirs").value = totalLoisirs;
    localStorage.setItem("TotalLoisirs", totalLoisirs);
}

// Calcul des épargnes et dettes
function calcEpargne() {
    const épargne = parseFloat(document.getElementById("épargne").value) || 0;
    const dette = parseFloat(document.getElementById("dette").value) || 0;
    const totalEpargne = saving + debt;
    document.getElementById("totalEpargne").value = totalEpargne;
    localStorage.setItem("TotalEpargne", totalEpargne);
}

// Charger les valeurs sauvegardées

//La fonctionde loadvalues permet  récupérer les données sauvegardées dans le navigateur (via localStorage) et
//  les afficher automatiquement dans les champs de formulaire lorsque la page se charge 

function loadValues() {
    // Revenu
    document.getElementById("Revenu").value = localStorage.getItem("Revenu") || 0;
    document.getElementById("autre").value = localStorage.getItem("Autre") || 0;
    document.getElementById("total").value = localStorage.getItem("TotalRevenue") || 0;
 

    // Besoins
    document.getElementById("totalBesoins").value = localStorage.getItem("TotalBesoins") || 0;

    // Loisirs
    document.getElementById("Habit").value = localStorage.getItem("Habit") || 0;
    document.getElementById("voyage").value = localStorage.getItem("voyage") || 0;
    document.getElementById("Numerique").value = localStorage.getItem("Numerique") || 0;
    document.getElementById("totalLoisirs").value = localStorage.getItem("TotalLoisirs") || 0;

    // Épargne et dettes
    document.getElementById("épargne").value = localStorage.getItem("épargne") || 0;
    document.getElementById("dette").value = localStorage.getItem("dette") || 0;
    document.getElementById("totalEpargne").value = localStorage.getItem("TotalEpargne") || 0;
}

// Ajouter les événements
document.getElementById("Revenu").addEventListener("input", calcRevenue);
document.getElementById("autre").addEventListener("input", calcRevenue);

document.getElementById("loyer").addEventListener("input", calcBesoins);
document.getElementById("Mutuelle").addEventListener("input", calcBesoins);
document.getElementById("électricité").addEventListener("input", calcBesoins);
document.getElementById("Internet").addEventListener("input", calcBesoins);
document.getElementById("course").addEventListener("input", calcBesoins);
document.getElementById("transportation").addEventListener("input", calcBesoins);

document.getElementById("Habit").addEventListener("input", calcLoisirs);
document.getElementById("voyage").addEventListener("input", calcLoisirs);
document.getElementById("Numerique").addEventListener("input", calcLoisirs);

document.getElementById("épargne").addEventListener("épargne", calcEpargne);
document.getElementById("dette").addEventListener("input", calcEpargne);

function calculateSoldeRestant() {
    // Fetch revenue values
    const totalRevenue = parseFloat(document.getElementById("total").value) || 0;

    // Fetch expense values
    const loyer = parseFloat(document.getElementById("loyer").value) || 0;
    const mutuelle = parseFloat(document.getElementById("Mutuelle").value) || 0;
    const electricite = parseFloat(document.getElementById("électricité").value) || 0;
    const internet = parseFloat(document.getElementById("Internet").value) || 0;
    const course= parseFloat(document.getElementById("course").value) || 0;
    const transportation = parseFloat(document.getElementById("transportation").value) || 0;
    const habit = parseFloat(document.getElementById("Habit").value) || 0;
    const voyage = parseFloat(document.getElementById("voyage").value) || 0;
    const numerique = parseFloat(document.getElementById("Numerique").value) || 0;

    // Fetch dette and savings values
    const épargne = parseFloat(document.getElementById("épargne").value) || 0;
    const dette = parseFloat(document.getElementById("dette").value) || 0;

    // Calculate total expenses
    const totaldepense = loyer + mutuelle + electricite + internet + transportation + course + habit + voyage + numerique;

    // Calculate SoldeRestant
    const SoldeRestant = totalRevenue - (totaldepense + épargne + dette);

    // Update the SoldeRestant field
    document.getElementById("SoldeRestant").value = SoldeRestant.toFixed(2);

    // Optional: Save the balance to local storage
    localStorage.setItem("SoldeRestant", SoldeRestant);
}

// Attach event listeners to dynamically update the SoldeRestant
const inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(input => input.addEventListener("input", calculateSoldeRestant));

// Load the SoldeRestant on page load
function loadSoldeRestant() {
    const soldeépargner = localStorage.getItem("SoldeRestant") || 0;
    document.getElementById("SoldeRestant").value = parseFloat(soldeépargner).toFixed(2);
}
window.onload = function() {
    loadValues();
    loadSoldeRestant();
};