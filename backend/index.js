const express = require("express")
const Mailjet = require("node-mailjet")
const dotenv = require("dotenv")
const rateLimit = require("express-rate-limit")
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

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // Rate limit: 2 requests per hour
    max: 2,
    message: "Too many requests, please try again later.",
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

app.get("/", (req, res) => res.send("BWD server is RUNNING"))

app.post("/api/bwd-submit", limiter, (req, res) => {
    const {
        category,
        industry,
        purpose,
        existingWebsite,
        name,
        email,
        phone,
        additional,
        timezone,
        device,
        referrer,
        viewport,
    } = req.body

    post({
        to: process.env.BWD_TO_EMAIL,
        subject: "Bespoke Web Dev Inquiry",
        html: `
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 20px; max-width: 1000px;">
            <p style="font-size: 32px; margin-top: 8px; font-weight: 500;">Received an inquiry from ${name}!</p>

            <p style="font-size: 24px; line-height: 1.5">
                <span style="background: #ffb30030; color: black; font-weight: 600; padding: 2px 6px; border-radius: 10px;">${name}</span> 
                works in the <span style="background: #ffb30030; color: black; font-weight: 600; padding: 2px 6px; border-radius: 10px;">${industry}</span> 
                and is interested in a
                <span style="background: #ffb30030; color: black; font-weight: 600; padding: 2px 6px; border-radius: 10px;">${category}</span> website.
            </p>
            
            <p style="font-size: 24px; line-height: 1.5">
                They want their website visitors to <span style="background: #ffb30030; color: black; font-weight: 600; padding: 2px 6px; border-radius: 10px;">${purpose}</span>
            </p>

            ${
                existingWebsite
                    ? `<p style="font-size: 24px; line-height: 1.5">
                        Existing website? <span style="background: #ffb30030; color: black; font-weight: 600; padding: 2px 6px; border-radius: 10px;">${existingWebsite}</span>
                    </p>`
                    : ""
            }

            <br><br>

            ${
                additional
                    ? `
                    <p style="font-size: 24px; line-height: 1.5; font-weight: 500; margin: 0;">
                        Additional Information
                    </p>
                    
                    <br>

                    <p style="width: fit-content; line-height: 1.5; border: 2px solid #cccccc; padding: 8px; margin: 0; border-radius: 10px;">
                        ${additional}
                    </p>`
                    : ""
            }
            
            <br> <hr>

            <p style="font-size: 32px;">Contact Information:</h2>
            
            <p>Email: ${email || ""}</p>
            <p>Phone: ${phone || ""}</p>
            <p>Location: ${timezone || ""}</p>
            <p>Device: ${device || ""}</p>
            <p>Referrer: ${referrer || ""}</p>
            <p>Viewport: ${viewport || ""}</p>

            <br> <hr>

            <p style="font-size: 32px;">Raw submission:</h2>
            
            <table>
                <tr>
                    <td>Name:</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <td>Category:</td>
                    <td>${category}</td>
                </tr>
                <tr>
                    <td>Industry:</td>
                    <td>${industry}</td>
                </tr>
                <tr>
                    <td>Purpose:</td>
                    <td>${purpose}</td>
                </tr>
                <tr>
                    <td>Existing Website:</td>
                    <td>${existingWebsite}</td>
                </tr>
                <tr>
                    <td>Additional:</td>
                    <td>${additional}</td>
                </tr>
            </table>
        </div>`,
    })

    res.send("Email sent")
})

app.listen(port, () => console.log(`Server is running http://localhost:${port}`))
