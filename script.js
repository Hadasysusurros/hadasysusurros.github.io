document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".firefly-container");
    const numFireflies = 35;

    for (let i = 0; i < numFireflies; i++) {
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");

        // Posición inicial aleatoria
        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.left = `${Math.random() * 100}vw`;

        // Movimiento aleatorio
        firefly.style.setProperty("--tx1", `${Math.random() * 30 - 15}vw`);
        firefly.style.setProperty("--ty1", `${Math.random() * 30 - 15}vh`);
        firefly.style.setProperty("--tx2", `${Math.random() * 30 - 15}vw`);
        firefly.style.setProperty("--ty2", `${Math.random() * 30 - 15}vh`);
        firefly.style.setProperty("--tx3", `${Math.random() * 30 - 15}vw`);
        firefly.style.setProperty("--ty3", `${Math.random() * 30 - 15}vh`);
        firefly.style.setProperty("--tx4", `${Math.random() * 30 - 15}vw`);
        firefly.style.setProperty("--ty4", `${Math.random() * 30 - 15}vh`);

        // Variar duración de animación para cada luciérnaga
        firefly.style.animationDuration = `${Math.random() * 15 + 45}s`;

        container.appendChild(firefly);
    }
});

document.querySelectorAll('.event-card').forEach(card => {

});

document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const distanceX = Math.abs(cardCenterX - e.clientX);
        const distanceY = Math.abs(cardCenterY - e.clientY);

        const threshold = 100;
        if (distanceX < threshold && distanceY < threshold) {
            card.classList.add('clicked');
        }   
    });

    card.addEventListener('click', () => {
        if (card.classList.contains('clicked')) {
            card.classList.remove('clicked');
        } else {
            card.classList.add('clicked');
        }
    });
});

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const imageNames = [
        "alas btfly 2.jpg",
        "alas btfly.jpg",
        "canto de las estrellas 2.jpg",
        "canto de las estrellas 3.jpg",
        "canto de las estrellas.jpg",
        "Copa de los espiritus del bosque (1).png",
        "Copa de los espiritus del bosque.png",
        "cupcake alas de mariposa.jpg",
        "elixir crepus.jpg",
        "elixir del crepusculo 2.jpg",
        "elixir del crepusculo 3.jpg",
        "elixir del crepusculo 4.jpg",
        "elixir del crepusculo.jpg",
        "golden milk enc 2.jpg",
        "golden milk enc 3.jpg",
        "golden milk enc.jpg",
        "hot susurro d hada.jpg",
        "maccaron 4.jpg",
        "maccaron 5.jpg",
        "maccarons 3.jpg",
        "maccarons nectar de los elfos 2.jpg",
        "maccarons nectar de los elfos.jpg",
        "mocca menta (1).png",
        "mocca menta.png",
        "susurro de hada caliente.jpg",
        "susurro de las estrellas cheesecake 2.jpg",
        "susurro de las estrellas cheesecake 3.jpg",
        "susurro de las estrellas cheesecake 4.jpg",
        "susurro de las estrellas cheesecake.jpg",
        "susurro de luna 1.jpg",
        "susurro de luna 2.jpg",
        "SUSURRO NOCTURNO.jpg",
        "SUSURRO NOCTURNO2.jpg",
        "SUSURRO NOCTURNO3.jpg",
        "té danza d las estrellas ice.jpg",
        "té danza de las estrellas.jpg",
        "te danza star.jpg",
        "Carta (1).jpg",
        "Carta (1).png",
        "Carta (2).jpg",
        "Carta (3).jpg",
        "Carta (4).jpg",
        "Carta (5).jpg",
        "Carta (6).jpg",
        "Carta (7).jpg",
        "Carta (8).jpg",
        "Carta (9).jpg",
        "Carta (10).jpg",
        "Carta (11).jpg",
        "Carta (12).jpg",
        "Carta (13).jpg",
        "Carta (14).jpg",
        "Carta (15).jpg",
        "Carta (16).jpg",
        "Carta (17).jpg",
        "Carta (18).jpg",
        "Carta (19).jpg",
        "Carta (20).jpg"       
    ];

    const gallery = document.getElementById("gallery");
    let currentIndex = 0;
    let imagesPerPage = window.innerWidth <= 768 ? 2 : 5;

    function renderGallery() {
        gallery.innerHTML = '';
        for (let i = currentIndex; i < currentIndex + imagesPerPage && i < imageNames.length; i++) {
            let img = document.createElement("img");
            img.src = `./src/gallery/${imageNames[i]}`;
            img.alt = imageNames[i];
            img.dataset.filename = imageNames[i].charAt(0).toUpperCase() + imageNames[i].slice(1).split('.').slice(0, -1).join('.');
            img.classList.add("gallery-img");
            img.onclick = function () { openLightbox(this); };
            gallery.appendChild(img);
        }
    }

    function moveGallery(direction) {
        if (direction === "left" && currentIndex > 0) {
            currentIndex -= imagesPerPage;
        } else if (direction === "right" && currentIndex + imagesPerPage < imageNames.length) {
            currentIndex += imagesPerPage;
        }
        renderGallery();
    }

    renderGallery();

    window.moveGallery = moveGallery;  // Make the function accessible to the buttons
});

function openLightbox(img) {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox-caption").innerText = img.dataset.filename;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("a-left").style.display = "none";
    document.getElementById("a-right").style.display = "none";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("a-left").style.display = "flex";
    document.getElementById("a-right").style.display = "flex";
}
