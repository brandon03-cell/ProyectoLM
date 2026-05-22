const catsContainer = document.getElementById('catsContainer');
const apiUrl = 'https://mines-joyce-diamond-bless.trycloudflare.com/cats';

// funcion para obtener los gatos de la api
async function fetchCats() {
    try {
        const response = await fetch(apiUrl);
        const catsData = await response.json();
        console.log(catsData);
        renderCats(catsData);

    } catch (error) {
        console.error('Error:', error);
        catsContainer.innerHTML = '<p class="text-center text-danger">Error al cargar los gatos, recarga la pagina.</p>';
    }
}

// esta funcion pone las tarjetas en el html
function renderCats(cats) {
    let cardsHTML = '';

    cats.forEach(cat => {
        cardsHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm cat-card">
                    <div class="card-img-wrapper">
                        <img src="${cat.imageUrl}" class="card-img-top cat-image" alt="foto de ${cat.catName}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold mb-1">${cat.catName}</h5>
                        <h6 class="card-subtitle mb-3 text-muted">${cat.breed}</h6>

                        <ul class="list-group list-group-flush mb-4 flex-grow-1">
                            <li class="list-group-item px-0 bg-transparent">
                                <strong>Age:</strong> ${cat.estimatedAge}
                            </li>
                            <li class="list-group-item px-0 bg-transparent">
                                <strong>Personality:</strong> ${cat.personalityTrait}
                            </li>
                        </ul>

                        <button class="btn btn-primary w-100 mt-auto adopt-btn">
                            Meet ${cat.catName}
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    catsContainer.innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', fetchCats);