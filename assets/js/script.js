const sky = document.getElementById("home");
const numStars = 300;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 2 + 2; // Tamanho entre 1px e 4px
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 4 + 1; // Duração entre 1s e 5s

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.animationDuration = `${duration}s`;

  sky.appendChild(star);
}

// const slide = document.querySelector(".slides");
// const items = document.querySelectorAll(".slide-item");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const bolinhas = document.querySelector(".bolinhas");

// let index = 0;
// const itemsPerView = 4;
// const totalSlides = Math.ceil(items.length / itemsPerView);

// for (let i = 0; i < totalSlides; i++) {
//   const dot = document.createElement("span");
//   dot.classList.add("dot");
//   if (i === 0) dot.classList.add("active");
//   dot.addEventListener("click", () => goToSlide(i));
//   bolinhas.appendChild(dot);
// }

// function updateSlider() {
//   const slideWidth = items[0].offsetWidth + 20; // largura + margem
//   slide.style.transform = `translateX(-${index * slideWidth * itemsPerView}px)`;

//   // Atualizar bolinhas
//   document
//     .querySelectorAll(".dot")
//     .forEach((dot) => dot.classList.remove("active"));
//   document.querySelectorAll(".dot")[index].classList.add("active");
// }

// function goToSlide(i) {
//   index = i;
//   updateSlider();
// }

// prevBtn.addEventListener("click", () => {
//   index = index > 0 ? index - 1 : totalSlides - 1;
//   updateSlider();
// });

// nextBtn.addEventListener("click", () => {
//   index = index < totalSlides - 1 ? index + 1 : 0;
//   updateSlider();
// });
