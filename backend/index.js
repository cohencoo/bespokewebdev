const express = require("express")
const Mailjet = require("node-mailjet")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(cors())

const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
})

function post({ to, subject, plaintext, html }) {
    const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: { Email: process.env.BWD_FROM_EMAIL, Name: "Bespoke Web Dev" },
                To: [{ Email: to }],
                Subject: subject,
                HTMLPart: html,
                // TextPart: "plain text content",
            },
        ],
    })
    request
        .then((result) => {})
        .catch((err) => {
            console.log(err.statusCode)
        })
}

app.get("/", (req, res) => res.send("BWD Backend ONLINE"))

app.post("/api/bwd-submit", (req, res) => {
    const {
        category,
        industry,
        purpose,
        existingWebsite,
        name,
        email,
        phone,
        additional,
    } = req.body

    post({
        to: email,
        subject: "Bespoke Web Dev Inquiry",
        html: `
    <div style="background-color: #f9f9f9; padding: 20px; margin: 20px; border-radius: 20px;">
        <h1 style="color: #333;">Thanks for your message, ${name}!</h1>

        <p style="color: #333;">We'll get back to you as soon as possible.</p>
        <p style="color: #333;">In the meantime, why not check out our <a href="https://bespokewebdev.com">website</a>?</p>
    </div>`,
    })

    post({
        to: BWD_TO_EMAIL,
        subject: "Bespoke Web Dev Inquiry",
        html: `
        <div style="background-color: #f9f9f9; padding: 20px; margin: 20px; border-radius: 20px;">
            <h1 style="color: #333;">Received an inquiry from ${name}!</h1>

            <h2>${name} works in the ${industry} industry and is interested in a ${category} website.</h2>
            
            <br><br>
            
            <h2>They want their website visitors to ${purpose}.</h2>

            ${existingWebsite ? `<h2>They have an existing website: ${existingWebsite}</h2>` : ""}

            <h2>Additional Information:</h2>
            <p>${additional}</p>
            
            <br> <hr> <br>

            <h2>Contact Information:</h2>
            
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>

        </div>`,
    })

    res.send("Email sent")
})

app.listen(port, () => console.log(`Server is running http://localhost:${port}`))
