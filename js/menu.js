const buttons = document.querySelectorAll(".categories button");
const cards = document.querySelectorAll(".menu-card");
const search = document.getElementById("search");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.category;

        cards.forEach(card => {
            card.style.display =
                category === "all" || card.dataset.category === category
                ? "block"
                : "none";
        });
    });
});

search.addEventListener("keyup", () => {
    const text = search.value.toLowerCase();

    cards.forEach(card => {
        card.style.display =
            card.innerText.toLowerCase().includes(text)
            ? "block"
            : "none";
    });
});
