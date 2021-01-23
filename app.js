const lightbox = document.querySelector(".lightbox");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".lightbox-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        lightbox.classList.add("open");
        original.classList.add("open");
        // Dynamic change img and caption
        const originalSrc = preview.getAttribute("data-original"); // corresponds with added attribute in html
        original.src = `./img/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

lightbox.addEventListener("click", (e) => {
    if (e.target.classList.contains("lightbox")) {
        lightbox.classList.remove("open");
        original.classList.remove("open");
    }
});