const maxSlides = 8
const swiperWrapper = document.querySelector(".swiper-wrapper")
const cards = document.querySelectorAll(".card")
document.getElementById("copyright").innerText = new Date().getUTCFullYear()

cards.forEach((card, index) => {
    if (index === 0) card.classList.add("dropExpanded")
    card.addEventListener("click", () => {
        cards.forEach((card) => card.classList.remove("dropExpanded"))
        card.classList.add("dropExpanded")
    })
})

if (window.innerWidth > 1024) {
    document.querySelector(".hero-banner").innerHTML = `
    <div class="video-container">
        <video class="video-banner" preload="none" loop autoplay muted src="mock.mp4"></video>
        <h2 class="hero-title">
            No gimmicks, no outrageous fees for separating design/development phases. Just
            brilliantly crafted
            <span class="brand"> bespoke websites tailored to your success.</span> Period.
        </h2>
    </div>
`
}

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

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
        }),
    }

    fetch("https://visioneerlist.herokuapp.com/api/email", requestOptions).catch(() => {})
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
