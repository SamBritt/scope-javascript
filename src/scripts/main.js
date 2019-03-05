//C is for Cookie

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"];


for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x];
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
}

//Conjunction Funciton

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord;
}

let returnConjunction = conjunction("Master", "Card")
console.log(returnConjunction);

//Mod Squad


    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`;

    ModSquad.members.forEach(member => {
       HTMLRepresentation += `<div>${member}</div>`;
    })


let showInfo = document.querySelector(".show-info");
showInfo.innerHTML = HTMLRepresentation;

//Simon Says
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]];

let invalidTotal = 0;
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
    let invalidLocation = false;

    if (currentLocation[0] > 2) {
        invalidTotal++;
        invalidLocation = true;
    }
    if (invalidLocation) {
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invalidTotal} invalid locations`);

//Advanced Challenge: Lamda Lambda
//return internal function
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    const randomizer = Math.floor(Math.random() * 7);

    const namer = function () {
        const suffix = " the Llama";
        const name = possibleNames[randomizer];
        return name + suffix;
    }

    return namer();
}


nameMaker = llamaNamer()
console.log(nameMaker);