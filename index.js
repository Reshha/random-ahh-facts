const fact = document.getElementById("facts");
const button = document.getElementById("get-fact");
button.addEventListener("click", getFact);

async function getFact() {
    try {
        const random = await fetch("https://uselessfacts.jsph.pl/random.json")
        const randomJSON = await random.json();
        fact.innerHTML = randomJSON.text;
    } catch (error) {
        console.error("Something went wrong while fetching the fact:", error);
    }
}

getFact()