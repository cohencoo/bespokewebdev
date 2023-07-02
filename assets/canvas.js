const canvas = document.getElementById("showcase")
const ctx = canvas.getContext("2d")
const icons = document.querySelectorAll(".material-symbols-rounded")
const renderIcons = () => icons.forEach((e) => (e.style.opacity = 1))

const imageConfig = "png: 1-20 & webp: 1-9"
const excludedFiles = [
    "./banner/19.png",
    "./banner/1.png",
    "./banner/3.png",
    "./banner/20.png",
    "./banner/17.png",
    "./banner/9.png",
]
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
    setTimeout(() => cycle.classList.remove("drop"), 500)
}
setTag()
setInterval(setTag, 2200)

const parseConfig = (config) => {
    const formats = config.split("&").map((item) => item.trim())
    const imageList = []

    for (const format of formats) {
        const [extension, range] = format.split(":").map((item) => item.trim())
        const [start, end] = range.split("-").map((item) => parseInt(item))
        for (let i = start; i <= end; i++) {
            const src = `./banner/${i}.${extension}`
            if (window.innerWidth < 768 && excludedFiles.includes(src)) continue
            imageList.push(src)
        }
    }

    return imageList
}

const images = parseConfig(imageConfig)
const imageObjects = []
const displayedImages = []
const maxDisplayedImages = 20
const maxSimultaneousImages = 10

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
images.forEach((src) => {
    const img = new Image()
    img.src = src
    imageObjects.push(img)
})

function drawImage(imgObj) {
    const size = window.innerWidth < 768 ? randomBetween(100, 120) : randomBetween(150, 260)
    const x = randomBetween(0, canvas.width - size)
    const y = randomBetween(0, canvas.height - size)
    const opacity = randomBetween(7, 9) / 10

    displayedImages.push({
        img: imgObj,
        x: x,
        y: y,
        size: size,
        opacity: 0,
        targetOpacity: opacity,
        fade: "in",
        fadeInSpeed: 0.05,
        fadeOutSpeed: 0.003,
    })
}

function updateCanvasSize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    displayedImages.forEach((image, i) => {
        ctx.globalAlpha = image.opacity
        ctx.drawImage(image.img, image.x, image.y, image.size, image.size / 1.7)

        if (image.fade === "in") {
            image.opacity += image.fadeInSpeed
            if (image.opacity >= image.targetOpacity) {
                image.fade = "out"
            }
        } else if (image.fade === "out" && image.opacity > 0) {
            image.opacity -= image.fadeOutSpeed
            if (image.opacity <= 0) {
                displayedImages.splice(i, 1)
            }
        }
    })

    window.requestAnimationFrame(draw)
}

;(function () {
    updateCanvasSize()
    draw()

    if (window.innerWidth > 768) {
        const burst = setInterval(() => {
            if (
                displayedImages.length < maxDisplayedImages &&
                displayedImages.filter((img) => img.fade === "in").length < maxSimultaneousImages
            ) {
                drawImage(imageObjects[randomBetween(0, imageObjects.length - 1)])
            }
        }, 150)
        setTimeout(() => clearInterval(burst), 1000)
    }

    setInterval(() => {
        if (
            displayedImages.length < maxDisplayedImages &&
            displayedImages.filter((img) => img.fade === "in").length < maxSimultaneousImages
        ) {
            drawImage(imageObjects[randomBetween(0, imageObjects.length - 1)])
        }
    }, 300)
})()

window.addEventListener("resize", updateCanvasSize)
