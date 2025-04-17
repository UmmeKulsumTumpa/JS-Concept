

async function populate() {
    const requestURL = "superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superheroes = await response.json();

    populateHeader(superheroes);
    populateHeroes(superheroes);
}


function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed ${obj.formed}`;
    header.appendChild(myPara);
}


function populateHeroes(obj){
    const section = document.querySelector("section");
    const heroes = obj.members;

    for (const hero of heroes) {
        // each section has one aryicle
        const article = document.createElement("article");

        // each article has the below elements
        const h2 = document.createElement("h2");
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");
        const para3 = document.createElement("p");
        const list = document.createElement("ul");

        h2.textContent = hero.name;
        para1.textContent = `Secret Identity: ${hero.secretIdentity}`;
        para2.textContent = `Age: ${hero.age}`;
        para3.textContent = "Super-powers:";

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const listItem = document.createElement("li");
            listItem.textContent = power;
            list.appendChild(listItem);
        }

        article.appendChild(h2);
        article.appendChild(para1);
        article.appendChild(para2);
        article.appendChild(para3);
        article.appendChild(list);

        section.appendChild(article);
    }
}


populate();
