const hero = document.getElementById("hero");
const coffee = document.getElementById("coffee");

hero.addEventListener("mousemove", (e) => {
    const { width, height, left, top } = hero.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y / height) - 0.5) * -10;
    const rotateY = ((x / width) - 0.5) * 10;

    coffee.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
    `;
});

hero.addEventListener("mouseleave", () => {
    coffee.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
    `;
});

/* HAMBURGUESA */
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('open');
});
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.top = '0';
        return;
    }

    if (currentScroll > lastScroll) {
        // Scroll hacia abajo → oculta header
        header.style.top = '-120px'; // ajusta según la altura de tu header
    } else {
        // Scroll hacia arriba → muestra header
        header.style.top = '0';
    }

    lastScroll = currentScroll;
});

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Cierra el menú
        menu.classList.remove('active');
        hamburger.classList.remove('open');
    });
});
const btnProductos = document.getElementById("btnProductos");

btnProductos.addEventListener("click", () => {
    // ejemplo: ir a la sección productos
    document.getElementById("productos").scrollIntoView({
        behavior: "smooth"
    });
});
