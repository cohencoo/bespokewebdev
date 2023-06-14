const maxSlides = 8
const swiperWrapper = document.querySelector(".swiper-wrapper")
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

for (let i = 0; i < maxSlides; i++) {
    const div = document.createElement("div")
    div.classList.add("swiper-slide")
    div.style.backgroundImage = `url(../banner/${i + 1}.webp)`
    swiperWrapper.appendChild(div)
}

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < maxSlides; i++) {
        const div = document.createElement("div")
        div.classList.add("swiper-slide")
        div.style.backgroundImage = `url(../banner/${i + 1}.webp)`
        swiperWrapper.appendChild(div)
    }
})

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting)
        new Swiper(".swiper", {
            loop: true,
            speed: 700,
            spaceBetween: 50,
            autoplay: {
                delay: 1500,
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
