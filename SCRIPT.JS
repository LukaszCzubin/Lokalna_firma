let currentIndex = 0;
const images = document.querySelectorAll('.image');
const progressBars = document.querySelectorAll('.progress-bar');

function pokazSlide(index) {
    const totalImages = images.length;
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.image-container').style.transform = `translateX(${offset}%)`;
    updateProgressBars();
}

function zmienSlide(direction) {
    pokazSlide(currentIndex + direction);
}

function updateProgressBars() {
    progressBars.forEach((bar, index) => {
        bar.classList.toggle('active', index === currentIndex);
    });
}

setInterval(() => {
    showSlide(currentIndex + 1);
}, 10000);

pokazSlide(currentIndex);

const products = [
    { name: "Szampon bambi", cena: 9999, serca: 854, czySerce: false, image: "bambi.webp" },
    { name: "UPIĘKSZACZ DO TWARZY", cena: 400, serca: 253, czySerce: false, image: "1665_3.png" },
    { name: "Olej z Pestek Truskawek 50 ml", cena: 70, serca: -42, czySerce: false, image: "krem.png" },
    { name: "Pięciornik kurze ziele kłącze", cena: 40, serca: 93, czySerce: false, image: "ziemia.webp" },
    { name: "Krem do rąk odżywczy", cena: 510, serca: 0, czySerce: false, image: "myslo.png" },
];

let currentIndex2 = 0;

function pokazProdukt() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    for (let i = currentIndex2; i < currentIndex2 + 1; i++) {
        const product = products[i];
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Cena: ${product.cena} zł</p>
                    <p>
                        <span class="heart" onclick="zwiekszSerca(${i})"><img src="heart.png" width="20px" height="20px"></span>
                        <span id="hearts-${i}">${product.serca}</span>
                    </p>
                `;
        productContainer.appendChild(productDiv);
    }
}

function zwiekszSerca(index) {
    if (!products[index].czySerce) {
        products[index].serca++;
        products[index].czySerce = true;
        document.getElementById(`hearts-${index}`).innerText = products[index].serca;
    } else {
        alert("Możesz kliknąć serce tylko raz!");
    }
}

function moveLeft() {
    if (currentIndex2 > 0) {
        currentIndex2--;
        pokazProdukt();
    }
}

function moveRight() {
    if (currentIndex2 < products.length - 1) {
        currentIndex2++;
        pokazProdukt();
    }
}


pokazProdukt();