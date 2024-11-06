let currentPage = 1; 

function getRaM(page = 1) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
        method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
        arrayRaMs = data.results;
        appendRaMs(arrayRaMs);
        togglePagination(data.info.prev, data.info.next); 
    })
    .catch((error) => {
        console.error("Error", error);
        document.querySelector("#data-output").innerHTML = `<p style="color: red;">Erro ao carregar dados.</p>`;
    });
}

function appendRaMs(RaMs) {
    const place = document.querySelector("#data-output");
    let out = "";
    for (let RaM of RaMs) {
        out += `
            <div class="character-card">
                <img src="${RaM.image}" alt="${RaM.name}">
                <h3>${RaM.name}</h3>
                <h4><strong>Status: </strong>${RaM.status}</h4>
                <p><strong>Espécie: </strong>${RaM.species}</p>
                <p><strong>Origem: </strong>${RaM.origin.name}</p>
                <p><a href="${RaM.origin.url}" target="_blank">Ver mais sobre a origem</a></p>
                <p><strong>Localização atual: </strong>${RaM.location.name}</p>
                <p><a href="${RaM.location.url}" target="_blank">Ver mais sobre a localização atual</a></p>
            </div>
        `;
    }
    place.innerHTML = out;
}

function togglePagination(prev, next) {
    const prevButton = document.getElementById("previous-page");
    const nextButton = document.getElementById("next-page");

    prevButton.disabled = !prev;
    nextButton.disabled = !next;
}

function changePage(step) {
    currentPage += step;
    if (currentPage < 1) currentPage = 1; 
    getRaM(currentPage);
}

document.getElementById("next-page").addEventListener("click", () => changePage(1));

document.getElementById("previous-page").addEventListener("click", () => changePage(-1));

getRaM(currentPage);
