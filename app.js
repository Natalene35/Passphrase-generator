// Je récupère la div où est affiché le texte
let textPlace = document.querySelector(".text");
// Je récupère le p pour afficher la phrase obtenue
let resultSentence = document.querySelector(".result");

// Je récupère le bouton
const buttonElmt = document.querySelector("#addTextButton");
// et je pose un écouteur sur le click du bouton et j'appelle la fonction handleText
buttonElmt.addEventListener("click", handleText);

const buttonElmtSentence = document.querySelector("#sentenceButton");
buttonElmtSentence.addEventListener("click", splitString);

function handleText() {
    // Récupère la valeur de l'input
    let textValue = document.querySelector("#newText").value;
    // Si l'input n'est pas vide, j'exécute le code
    if (textValue !== "") {
        //console.log(textValue);
        // Insertion du texte de l'input dans la div d'affichage
        textPlace.textContent = textValue;
        // Vide l'input
        document.querySelector("#newText").value = "";
    }
}

// Fonction transformant un texte en un tableau contenant chaque mot du texte et les accole aléatoirement 
function splitString() {
    // Vide le p où est affiché la phrase de passe obtenue
    resultSentence.textContent = "";
    // Variable contenant le texte 
    let textToUse = textPlace.textContent;
    //console.log("texte recupere" + textToUse);
    // Remplace toute la ponctuation et les caractères spéciaux par un espace et passe toutes les lettres en minuscule
    let cleanText = textToUse.replace(/[!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~]/g, " ").toLowerCase();
    //console.log(cleanText);
    
    // Trim() retire l'espace du début et de la fin d'une string
    // Split() divise la chaine de caractère obtenue en une liste dans un tableau et retire tous les espaces
    // Filter() permet de ne garder que les mots dont la longueur est supérieur à 2 caractères
    let arrayText = cleanText.trim().split(/\s+/).filter(word => word.length > 2);
    //console.log(arrayText);
    //console.log(arrayText.length);

    for (let i = 0; i < 5; i++) {
        // Sélectionne un mot au hasard dans le tableau en limitant l'index à la longueur du tableau
        let wordSelect = arrayText[Math.floor(Math.random() * arrayText.length)];
        // Ajoute dans la balise result les mots sélectionnés accolés en passanr leur 1ere lettre en majuscule.
        resultSentence.textContent += wordSelect[0].toUpperCase() + wordSelect.slice(1);
        //console.log(wordSelect);
    }


}


/* var choix = l => l[Math.random()*l.length | 0] || ""

var generateur = (n, taille = 200) => {
    var dic = {}
    var poesie = document.getElementsByClassName('text')[0].innerHTML.toUpperCase().replace(/<br>/gi," ").replace(/,/g,"")
    var grams = [...poesie].map((c,k) => [poesie.slice(k,k+n),poesie[k+n]])
    var mots = poesie.split(" ").filter(m => m.length >= n)
    var final = choix(mots).slice(0,n);
    grams.forEach(t => dic.hasOwnProperty(t[0]) ? dic[t[0]].push(t[1]) : dic[t[0]] = [t[1]])
    for (var i=0;i<taille; i++) final += choix(dic[final.slice(-n)])
    console.log(final);
return final 

}*/