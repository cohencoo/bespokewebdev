const html = String.raw
let form = [
    {
        question: "What is your age range?",
        answers: ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
        responses: {
            "Under 18": 2,
            "18-24": 3,
            "25-34": 4,
            "35-44": 2,
            "45-54": 1,
            "55-64": 1,
            "65+": 1,
        },
    },
    {
        question: "Where in Australia are you located?",
        answers: ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"],
        responses: {
            ACT: 1,
            NSW: 4,
            NT: 1,
            QLD: 3,
            SA: 2,
            TAS: 2,
            VIC: 1,
            WA: 0,
        },
    },
    {
        question: "Do you currently have a business website?",
        answers: ["Yes", "No"],
        responses: {
            Yes: 8,
            No: 6,
        },
    },
    {
        question: "If you don't have a website, what are the reasons for not having one?",
        answers: [
            "High development costs",
            "Lack of technical knowledge",
            "Not convinced of the benefits",
            "Other",
        ],
        responses: {
            "High development costs": 3,
            "Lack of technical knowledge": 2,
            "Not convinced of the benefits": 4,
            Other: 1,
        },
    },
    {
        question: "What scale is your business?",
        answers: ["Freelance", "Small", "Medium", "Large"],
        responses: {
            Freelance: 3,
            Small: 5,
            Medium: 4,
            Large: 2,
        },
    },
    {
        question: "Are you interested in B2B web solutions for your business?",
        answers: ["Yes", "No"],
        responses: {
            Yes: 10,
            No: 4,
        },
    },
    {
        question: "Have you used a Content Management System (CMS) before for your website?",
        answers: ["Yes", "No"],
        responses: {
            Yes: 4,
            No: 10,
        },
    },
    {
        question: "How do you perceive the cost of developing a business website?",
        answers: ["Affordable", "Moderately priced", "Expensive", "Not sure"],
        responses: {
            Affordable: 3,
            "Moderately priced": 4,
            Expensive: 6,
            "Not sure": 1,
        },
    },
    {
        question:
            "Would you trust an overseas-based business to handle potentially personal/delicate tasks, and fulfill your business requirements?",
        answers: ["Absolutely", "Yes, but its a disadvantage", "Maybe", "Not likely"],
        responses: {
            Absolutely: 2,
            "Yes, but its a disadvantage": 4,
            Maybe: 6,
            "Not likely": 2,
        },
    },
]

function handleResponseClick(questionKey, answerIndex, answer) {
    const buttonId = `button-${questionKey}-${answerIndex}`
    const button = document.getElementById(buttonId)
    const answerButtons = document.querySelectorAll(`.answer-group-${questionKey} button`)

    window.scrollBy({
        top: 400,
        left: 0,
        behavior: "smooth",
    })

    if (!button.disabled) {
        form[questionKey].responses[answer]++
        updateResponseSummary(questionKey)
        button.classList.add("checked")
        button.disabled = true

        answerButtons.forEach((btn) => {
            if (btn !== button) {
                btn.disabled = true
                btn.classList.add("disabled")
            }
        })
    }
}

function updateResponseSummary(questionKey) {
    const summaryContainer = document.getElementById(`summary-${questionKey}`)
    summaryContainer.classList.add("summary")
    if (summaryContainer) {
        summaryContainer.innerHTML =
            `<p style="margin-bottom: 1rem">Thanks! Here's what others have said:</p><span></span>` +
            generateResponseSummary(questionKey)
    }
}

function generateResponseSummary(questionKey) {
    const responses = form[questionKey].responses
    const summary = Object.entries(responses)
        .map(
            ([answer, count]) =>
                `<div class="answer"><strong>${count}</strong> people said "<strong>${answer}</strong>"</div>`
        )
        .join("")
    return summary
}

function render() {
    const surveyContainer = document.getElementById("survey-container")
    surveyContainer.innerHTML = html`
        <span class="back">
            Home /
            <a class="link" href="../" style="margin-left: 1rem">
                <span class="material-symbols-rounded">arrow_back</span>
                Head Back
            </a>
        </span>
        <h1>${document.title.split("|").shift()}</h1>
        <br />
        <p>
            Please take a moment to complete this quick survey to help us better understand what you
            think of Bespoke Web Dev and it's current limitations
        </p>
        <div class="form">
            ${form
                .map(
                    (_, key) => html`
                        <div class="question">
                            <h2 style="margin: 0">${form[key].question}</h2>
                            <div class="answers answer-group-${key}">
                                ${form[key].answers
                                    .map(
                                        (answer, index) => html`
                                            <button
                                                id="button-${key}-${index}"
                                                onclick="handleResponseClick(${key}, ${index}, '${answer}')"
                                            >
                                                <div class="click"></div>
                                                ${answer}
                                            </button>
                                        `
                                    )
                                    .join("")}
                            </div>
                            <div id="summary-${key}"></div>
                        </div>
                    `
                )
                .join("")}
        </div>
    `
}
render()
