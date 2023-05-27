const banner = document.querySelector(".banner")
const progressContainer = document.querySelector(".progress-container")
document.getElementById("copyright").innerText = new Date().getUTCFullYear()

function refEmail() {
    const formData = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        phone: document.getElementById("contact-phone").value,
        category: document.getElementById("contact-category").value,
        pages: document.getElementById("contact-pages").value,
        budget: document.getElementById("contact-budget").value,
        comment: document.getElementById("comment").value,
    }
    axios.post("https://visioneerlist.herokuapp.com/api/email", {
        subject: "Bespoke Web Dev Inquiry",
        content: `
        ${formData.name} sent an inquiry from Bespoke Web Dev at ${new Date().toLocaleString()}
        <br /><br />
        <table>
            <tr>
                <td style="font-size: 1.5rem">Name:</td>
                <td style="font-size: 1.5rem">${formData.name}</td>
            </tr>
            <tr>
                <td style="font-size: 1.5rem">Email:</td>
                <td style="font-size: 1.5rem">${formData.email}</td>
            </tr>
            <tr>
                <td style="font-size: 1.5rem">Phone:</td>
                <td style="font-size: 1.5rem">${formData.phone}</td>
            </tr>
            <tr>
                <td style="font-size: 1.5rem">Category:</td>
                <td style="font-size: 1.5rem">${formData.category}</td>
            </tr>
            <tr>
                <td style="font-size: 1.5rem">Pages:</td>
                <td style="font-size: 1.5rem">${formData.pages}</td>
            </tr>
            <tr>
                <td style="font-size: 1.5rem">Budget:</td>
                <td style="font-size: 1.5rem">${formData.budget}</td>
            </tr>
            <tr>
                <td style="font-size: 1.5rem">Comment:</td>
                <td style="font-size: 1.5rem">${formData.comment}</td>
            </tr>
        </table>
    `,
    })
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
