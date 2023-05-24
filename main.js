const banner = document.querySelector(".banner")
const progressContainer = document.querySelector(".progress-container")

const urlParams = new URLSearchParams(window.location.search)
const success = urlParams.get("success")
if (success) {
    try {
        window.history.replaceState({}, document.title, "/")
    } catch (e) {}
    alert(
        "Thanks for your message! We've successfully received it and will get back to you as soon as possible"
    )
}

const slideshow = {
    slide: 1,
    maxSlides: 8,
    slideClock: null,
    nextSlide: () => {
        slideshow.slide++
        if (slideshow.slide > slideshow.maxSlides) slideshow.slide = 1
        slideshow.setSlide()
    },
    setSlide: () => {
        banner.style.backgroundImage = `url(../banner/${slideshow.slide}.webp)`
        document.querySelectorAll(".index").forEach((child, index) => {
            child.classList.remove("index-active")
            if (index + 1 === slideshow.slide) child.classList.add("index-active")
        })
    },
}

for (let i = 0; i < slideshow.maxSlides; i++) {
    const div = document.createElement("div")
    div.classList.add("index")
    div.addEventListener("click", () => {
        clearInterval(slideshow.slideClock)
        slideshow.slide = i + 1
        slideshow.setSlide()
        slideshow.slideClock = setInterval(() => slideshow.nextSlide(), 3000)
    })
    progressContainer.appendChild(div)
}
slideshow.setSlide()
slideshow.slideClock = setInterval(() => slideshow.nextSlide(), 3000)
