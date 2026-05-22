const catsContainer = document.getElementById('catsContainer');
const catCount = document.getElementById('catCount');
const apiUrl = 'https://mines-joyce-diamond-bless.trycloudflare.com/cats';

// function to fetch cats from the api
async function fetchCats() {
    try {
        const response = await fetch(apiUrl);
        const catsData = await response.json();
        console.log(catsData);
        renderCats(catsData);

    } catch (error) {
        console.error('Error:', error);
        catsContainer.innerHTML = '<p class="text-center text-danger">Error loading cats, please reload the page.</p>';
        catCount.textContent = '';
    }
}

// this function renders the cards into the html
function renderCats(cats) {
    catCount.textContent = cats.length + ' cats are waiting for a home 🐾';

    let cardsHTML = '';

    cats.forEach(cat => {
        cardsHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm cat-card">
                    <div class="card-img-wrapper">
                        <img src="${cat.imageUrl}" class="card-img-top cat-image" alt="photo of ${cat.catName}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <h5 class="card-title fw-bold mb-0">${cat.catName}</h5>
                            <span class="badge-disponible">Available</span>
                        </div>
                        <h6 class="card-subtitle mb-3 text-muted">${cat.breed}</h6>

                        <ul class="list-group list-group-flush mb-4 flex-grow-1">
                            <li class="list-group-item px-0 bg-transparent">
                                <strong>Age:</strong> ${cat.estimatedAge}
                            </li>
                            <li class="list-group-item px-0 bg-transparent">
                                <strong>Personality:</strong> ${cat.personalityTrait}
                            </li>
                        </ul>

                        <button class="btn btn-primary w-100 mt-auto adopt-btn" onclick="adoptCat('${cat.catName}', this)">
                            Meet ${cat.catName}
                        </button>
                        <p class="adopt-msg">Great! We will get in touch with you soon 🐱</p>
                    </div>
                </div>
            </div>
        `;
    });

    catsContainer.innerHTML = cardsHTML;
}

// when someone clicks the adopt button
function adoptCat(name, button) {
    button.textContent = 'Request sent! ✓';
    button.disabled = true;
    button.classList.add('adopted');

    // show the small message below the button
    const msg = button.nextElementSibling;
    msg.classList.add('visible');
}

// scroll to top button (found this on mdn)
window.onscroll = function() {
    const btn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', fetchCats);
