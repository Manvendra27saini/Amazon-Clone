// Hero Carousel
let currentSlide = 0
const slides = document.querySelectorAll(".hero-slide")
const totalSlides = slides.length

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("active")
  })

  // Show the current slide
  slides[index].classList.add("active")
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides
  showSlide(currentSlide)
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
  showSlide(currentSlide)
}

// Set up event listeners
document.querySelector(".hero-next").addEventListener("click", nextSlide)
document.querySelector(".hero-prev").addEventListener("click", prevSlide)

// Auto-rotate slides
const slideInterval = setInterval(nextSlide, 5000)

// Pause auto-rotation when hovering over the hero section
const heroSection = document.querySelector(".hero")
heroSection.addEventListener("mouseenter", () => {
  clearInterval(slideInterval)
})

heroSection.addEventListener("mouseleave", () => {
  const slideInterval = setInterval(nextSlide, 5000)
})

// Back to top functionality
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Search functionality
document.querySelector(".header-search-button").addEventListener("click", () => {
  const searchTerm = document.querySelector(".header-search-input").value
  if (searchTerm.trim() !== "") {
    alert("You searched for: " + searchTerm)
  }
})

// Submit search on Enter key
document.querySelector(".header-search-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const searchTerm = this.value
    if (searchTerm.trim() !== "") {
      alert("You searched for: " + searchTerm)
    }
  }
})

// Make product items clickable
const productItems = document.querySelectorAll(".product-item")
productItems.forEach((item) => {
  item.addEventListener("click", function () {
    const productName = this.querySelector("p").textContent
    alert("You clicked on: " + productName)
  })
})

// Make best seller items clickable
const bestSellerItems = document.querySelectorAll(".best-sellers-item")
bestSellerItems.forEach((item) => {
  item.addEventListener("click", function () {
    const productTitle = this.querySelector(".best-sellers-title").textContent
    alert("You clicked on: " + productTitle)
  })
})

// Make category items clickable
const categoryItems = document.querySelectorAll(".category-item")
categoryItems.forEach((item) => {
  item.addEventListener("click", function () {
    const categoryTitle = this.querySelector(".category-title")?.textContent || "Category Item"
    alert("You clicked on: " + categoryTitle)
  })
})

// Add hover effect to navigation items
const navItems = document.querySelectorAll(".nav-belt-item")
navItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.borderColor = "white"
  })

  item.addEventListener("mouseleave", function () {
    this.style.borderColor = "transparent"
  })
})

// Add hover effect to header options
const headerOptions = document.querySelectorAll(
  ".header-option, .header-cart, .header-logo-container, .header-location",
)
headerOptions.forEach((option) => {
  option.addEventListener("mouseenter", function () {
    this.style.borderColor = "white"
  })

  option.addEventListener("mouseleave", function () {
    this.style.borderColor = "transparent"
  })
})

// Initialize the carousel
showSlide(currentSlide)

// Handle window resize for responsive adjustments
window.addEventListener("resize", () => {
  // Adjust hero height based on screen width
  const hero = document.querySelector(".hero")
  if (window.innerWidth <= 576) {
    hero.style.height = "300px"
  } else if (window.innerWidth <= 992) {
    hero.style.height = "400px"
  } else {
    hero.style.height = "600px"
  }
})

// Trigger resize event on load to set initial responsive styles
window.dispatchEvent(new Event("resize"))
