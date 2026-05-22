const catsContainer = document.getElementById('catsContainer');
const apiUrl = 'https://mines-joyce-diamond-bless.trycloudflare.com/cats';

// Fetches cat data from the local JSON Server
async function fetchCats() {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const catsData = await response.json();
        renderCats(catsData);
        
    } catch (error) {
        console.error('Error fetching cat data:', error);
        catsContainer.innerHTML = `
            <div class="col-12 text-center mt-5">
                <div class="alert alert-danger" role="alert">
                    Failed to load rescue cats. Please make sure JSON Server is running on port 3000.
                </div>
            </div>
        `;
    }
}

// Generates HTML for each cat and renders them in the DOM
function renderCats(cats) {
    let cardsHTML = '';

    cats.forEach(cat => {
        // Using Bootstrap Card structure with custom classes for later styling
        cardsHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm cat-card">
                    <div class="card-img-wrapper">
                        <img src="${cat.imageUrl}" class="card-img-top cat-image" alt="Photo of ${cat.catName}">
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

// Initialize application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchCats);