let page = 0
let highestPage = 0
const pages = document.querySelectorAll(".flow-pages .page")

const initSelect = document.getElementById("category")
initSelect.onclick = () => {
    const option = document.createElement("option")
    option.value = ""
    option.text = ""
    option.selected = true
    option.disabled = true
    initSelect.prepend(option)

    initSelect.onchange = (e) => {
        document.getElementById("contact").style.background = "transparent"
        initSelect.removeChild(option)
        nextPage()
    }
}
const industrySelect = document.getElementById("industry")
industrySelect.onchange = nextPage

function loadPage(pageNo) {
    const goNext = document.querySelector("#go-next")
    const goPrev = document.querySelector("#go-prev")

    const currentActivePage = document.querySelector(".flow-pages .page.active")

    if (currentActivePage) {
        currentActivePage.classList.remove("active")
        currentActivePage.classList.add("exiting")

        setTimeout(() => {
            currentActivePage.style.display = "none"
            currentActivePage.classList.remove("exiting")
        }, 10)
    }

    const newPage = pages[pageNo]
    newPage.style.display = "block"
    setTimeout(() => newPage.classList.add("active"), 10)

    highestPage = Math.max(highestPage, pageNo)

    if (pageNo === 0 && highestPage === 0) {
        goPrev.style.display = "none"
        goNext.style.display = "none"
    } else {
        goPrev.style.display = "flex"
        goNext.style.display = "flex"

        if (pageNo === pages.length - 1) {
            goNext.textContent = "Submit"
            goNext.onclick = submit
        } else {
            goNext.innerHTML = `Next
                <span class="material-symbols-rounded">arrow_forward</span>`
            goNext.onclick = nextPage
        }
    }

    if (pageNo === 1 && highestPage === 1) goNext.disabled = true
    else goNext.disabled = false

    if (pageNo === 0) {
        goNext.disabled = false
        goPrev.style.display = "none"
    }
}

function scrollIntoView() {
    const contactElement = document.getElementById("contact")
    const offset = 50
    const scrollOptions = {
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    }
    window.scrollTo({
        top: contactElement.offsetTop - offset,
        ...scrollOptions,
    })
}

function nextPage() {
    if (page < pages.length - 1) {
        page++
        loadPage(page)
        scrollIntoView()
    }
}

function prevPage() {
    if (page > 0) {
        page--
        loadPage(page)
        scrollIntoView()
    }
}

loadPage(0)

function submit() {
    const form = document.getElementById("contact")
    const inputs = form.querySelectorAll("input, textarea, select")
    const data = {}
    inputs.forEach((input) => {
        data[input.name] = input.value
    })

    if (!data.name || !data.email || !data.phone) {
        alert("Please include your contact information, so we can reach out to you.")
        return
    }

    pages[page].innerHTML = `
    <h2 style="font-size: 4rem">👋</h2><br />
    <h2 style="text-align: left;" class="question title">Thanks for reaching out, ${
        data.name.split(" ")[0]
    }!</h2>
    
    <h2 style="text-align: left; font-weight: 400;">
    We'll be in touch with you shortly to discuss your ${data.category} website project.
    </h2>
    `

    document.querySelector(".navigation").style.display = "none"
    scrollIntoView()

    fetch("https://bespokewebdev.onrender.com/api/bwd-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((res) => res.text())
        .catch(() => {
            pages[page].innerHTML = `
            <h2 style="font-size: 3rem">Ooops!</h2>
            <h2 style="text-align: left;" class="question title">There was an error submitting your form.</h2>
            <p>We're so sorry for the inconvenience. Please contact us directly:</p>
            <br><br>
            <a style="text-decoration: underline; font-weight: 600; font-size: 1.5rem;" href="mailto:hello@bespokewebdev.com">
                hello@bespokewebdev.com
            </a>`
        })
}
