const maxSlides = 8
const swiperWrapper = document.querySelector(".swiper-wrapper")
const cards = document.querySelectorAll(".card")
document.getElementById("copyright").innerText = new Date().getUTCFullYear()

const tags = [
    "Stand Out",
    "Drive Sales",
    "Boost Engagement",
    "Make An Impact",
    "Be Memorable",
    "Inspire Action",
]
const cycle = document.getElementById("cycle")
let cycleIndex = 1

const setTag = () => {
    cycle.classList.add("drop")
    cycle.innerHTML = tags[cycleIndex]
    cycle.style.color = `var(--col-${cycleIndex})`
    cycleIndex++
    if (cycleIndex == tags.length) cycleIndex = 1
    setTimeout(() => cycle.classList.remove("drop"), 400)
}
setTag()
setInterval(setTag, 2200)

cards.forEach((card, index) => {
    if (index === 0) card.classList.add("dropExpanded")
    card.addEventListener("click", () => {
        cards.forEach((card) => card.classList.remove("dropExpanded"))
        card.classList.add("dropExpanded")
    })
})

const welcome = document.querySelector("#welcome")
if (window.innerWidth < 1024) welcome.src = "bwd-p.mp4"

document.querySelector(".video-container").innerHTML = `<video
        class="video-banner"
        autoplay
        muted
        src="assets/mock.mp4"
        loop
        preload="none"
        playsinline
    ></video>
    <h2 class="hero-title">
        No gimmicks, no outrageous fees for separating design/development phases. Just brilliantly
        crafted
        <span style="font-weight: 600; color: #ffae00;">
            bespoke websites tailored to your success.</span
        >
        Period.
    </h2>`

document.getElementById("formsubmit").onsubmit = (e) => {
    const phone = document.getElementById("contact-phone").value.replace(/[^0-9+]/g, "")
    if (
        phone.length < 15 &&
        (phone.startsWith("04") || phone.startsWith("+61") || phone.startsWith("614"))
    ) {
    } else {
        e.preventDefault()
        alert("Sorry, to avoid spam & misuse, we only accept messages within Australia.")
    }
}

function updateMockup(checked) {
    if (checked) {
        document.querySelector(".mock-phone").style.display = "none"
        document.querySelector(".mock-mac").style.display = "block"
    } else {
        document.querySelector(".mock-phone").style.display = "block"
        document.querySelector(".mock-mac").style.display = "none"
    }
}

for (let i = 0; i < maxSlides; i++) {
    const div = document.createElement("div")
    div.classList.add("swiper-slide")
    div.style.backgroundImage = `url(../banner/${i + 1}.webp)`
    swiperWrapper.appendChild(div)
}

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting)
        new Swiper(".swiper", {
            loop: true,
            speed: 700,
            spaceBetween: 50,

            autoplay: {
                delay: 1500,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
            },
        })
})
observer.observe(swiperWrapper)
