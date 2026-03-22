const stickySummary = document.getElementById("stickySummary");
const heroSection = document.querySelector(".hero-section");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

// mobile menu
menuToggle?.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// sticky summary
window.addEventListener("scroll", () => {
  const trigger = heroSection.offsetTop + heroSection.offsetHeight * 0.42;
  if (window.scrollY > trigger) {
    stickySummary.classList.add("show");
  } else {
    stickySummary.classList.remove("show");
  }
});

// gallery
const heroImages = [
  "assets/images/hdpe.png",
  "assets/images/hdpe.png",
  "assets/images/hdpe.png",
  "assets/images/hdpe.png",
  "assets/images/hdpe.png"
];

let currentIndex = 0;


const mainHeroImage = document.getElementById("mainHeroImage");
const zoomPreviewImage = document.getElementById("zoomPreviewImage");
const thumbs = document.querySelectorAll(".thumb");
const prevImageBtn = document.getElementById("prevImage");
const nextImageBtn = document.getElementById("nextImage");

function updateGallery(index) {
  currentIndex = index;
  mainHeroImage.src = heroImages[index];
  zoomPreviewImage.src = heroImages[index];

  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => updateGallery(index));
});

prevImageBtn?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
  updateGallery(currentIndex);
});

nextImageBtn?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  updateGallery(currentIndex);
});

// zoom preview
const zoomArea = document.getElementById("zoomArea");
const zoomPreview = document.getElementById("zoomPreview");

if (zoomArea && zoomPreview && window.innerWidth > 1080) {
  zoomArea.addEventListener("mouseenter", () => {
    zoomPreview.style.display = "block";
  });

  zoomArea.addEventListener("mouseleave", () => {
    zoomPreview.style.display = "none";
  });

  zoomArea.addEventListener("mousemove", (e) => {
  const rect = zoomArea.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  const previewImg = zoomPreview.querySelector("img");

  const zoomLevel = 3;

  previewImg.style.left = `${-x * (zoomLevel - 1) * 100}%`;
  previewImg.style.top = `${-y * (zoomLevel - 1) * 100}%`;
});
}

// FAQ
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");
  });
});

// tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(target)?.classList.add("active");
  });
});

// industries slider
const industryTrack = document.getElementById("industryTrack");
const industryPrev = document.getElementById("industryPrev");
const industryNext = document.getElementById("industryNext");

industryPrev?.addEventListener("click", () => {
  industryTrack.scrollBy({ left: -320, behavior: "smooth" });
});

industryNext?.addEventListener("click", () => {
  industryTrack.scrollBy({ left: 320, behavior: "smooth" });
});

// modals
const openModalButtons = document.querySelectorAll("[data-open-modal]");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const allModals = document.querySelectorAll(".modal");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-open-modal");
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    allModals.forEach((modal) => modal.classList.remove("open"));
    document.body.style.overflow = "";
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    allModals.forEach((modal) => modal.classList.remove("open"));
    document.body.style.overflow = "";
  }
});

// prevent demo forms from submitting
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});