const html = String.raw
document.head.innerHTML += html`<meta
    name="description"
    content="Unlock your online potential with our exceptional website design and development services. Bespoke Web Dev have worked with a diverse range of clientele, creating tailored, professional & modern websites, on a local and international scale."
/>`
document.head.innerHTML += html`<meta
    name="keywords"
    content="Cohen, Coombs, Cohen Coombs, CohenCoombs, cohencoombs, cohen, coombs, cohen coombs, website, developer, freelance, website freelancer, looking for website, bespoke web dev, web, dev, web dev, bespoke web design, website design, create website, designer, graphic, design, make website, pages, page, webpage, web development, web design, website development, website design, website redesign, website maintenance, custom website development, custom website design, bespoke web dev, bespoke web development, bespoke web design, bespoke website development, bespoke website design, bespoke website redesign, bespoke website maintenance, hand-coded websites, hand-coded website development, hand-coded website design, hand-coded website redesign, hand-coded website maintenance, bespoke web development agency, bespoke web design agency, bespoke website development agency, bespoke website design agency, bespoke website redesign agency, bespoke website maintenance agency, hand-coded websites agency, hand-coded website development agency, hand-coded website design agency, hand-coded website redesign agency, hand-coded website maintenance agency"
/>`

document.body.innerHTML += html`<nav>
    <a style="gap: 2rem;" href="./../#">
        <img class="logo" src="./../assets/logo.png" alt="Logo" />
        <h1 class="brand">Bespoke Web Dev</h1>
    </a>
    <div class="links">
        <a href="./../#about">About Us</a>
        <a href="./../#clientele">Clientele</a>
        <a href="./../#contact">Contact Us</a>
    </div>
</nav>`

const pages = {
    benefits: {
        title:
            "The Power of Hand-Coded Websites: Unleashing the True Potential of Custom Development",
        published: "Published on 26th May 2023 <br /> By Cohen Coombs, Bespoke Web Dev",
        content: html`
            <p>
                In today's digital landscape, establishing a strong online presence is essential for
                any business. When it comes to creating a website, you may be tempted to turn to
                third-party site builders such as Wix, Shopify, Squarespace, or WordPress. While
                these platforms offer convenience and ease of use, they come with limitations that
                can hinder the growth and uniqueness of your online business. This is where
                hand-coded websites shine, providing unparalleled advantages that empower your brand
                and set you apart from the competition.
            </p>

            <h2>No Watermark, No Distractions</h2>
            <p>
                When you opt for a hand-coded website, you have complete control over your online
                presence. Unlike third-party site builders, you won't be plagued by watermarks or
                distracting elements that compromise the professionalism and integrity of your
                brand. With a clean and uncluttered design, your website can deliver a seamless user
                experience that focuses solely on your business and its offerings.
            </p>

            <h2>No Ongoing Fees, Total Ownership</h2>
            <p>
                One of the most significant drawbacks of third-party site builders is the recurring
                fees they charge for using their platform. Over time, these fees can accumulate and
                become a burden on your budget. With a hand-coded website, you have full ownership
                and control, eliminating the need to pay ongoing charges. Once your website is
                developed, it's yours to keep, modify, and host as you see fit, providing long-term
                cost savings for your business.
            </p>

            <h2>Customization at Its Finest</h2>
            <p>
                Every business is unique, and your website should reflect that individuality.
                Hand-coding allows for limitless customization possibilities. A professional web
                developer can tailor every aspect of your website to meet your specific needs and
                requirements. From design elements to functionality, a hand-coded website empowers
                you to create a truly custom online presence that aligns perfectly with your brand
                identity.
            </p>

            <h2>Optimized for Speed</h2>
            <p>
                In today's fast-paced digital world, speed is of the essence. Studies have shown
                that users expect websites to load within a matter of seconds, and any delay can
                result in frustration and abandonment. Hand-coded websites are built with
                performance optimization in mind. By carefully crafting the code and implementing
                efficient techniques, a skilled developer can ensure that your website loads
                quickly, providing a smooth and enjoyable user experience that keeps visitors
                engaged.
            </p>

            <h2>Mobile-First Approach</h2>
            <p>
                The majority of internet users now access websites from mobile devices. To cater to
                this growing audience, it's crucial to have a mobile-friendly website. Hand-coded
                websites allow developers to adopt a mobile-first approach, where the design and
                functionality are prioritized for smaller screens. This ensures that your website
                looks and performs flawlessly on smartphones and tablets, providing a seamless
                browsing experience for your mobile visitors.
            </p>

            <p>
                In conclusion, while third-party site builders offer convenience, they often fall
                short in delivering a truly unique, high-performing, and cost-effective solution for
                your business. Hand-coded websites, on the other hand, empower you with complete
                control, customization, and optimization, giving your brand the edge it deserves in
                the competitive digital landscape. Embrace the power of custom development and
                unlock the full potential of your online presence!
            </p>
        `,
    },
    disclaimer: {
        title: "Disclaimer",
        published: "Published on 26th May 2023 <br /> By Cohen Coombs, Bespoke Web Dev",
        content: html`
            <p>
                The information provided by Bespoke Web Dev ('we', 'us', or 'our') on
                bespokewebdev.com (the 'Site') is for general informational purposes only. All
                information on the Site is provided in good faith, however we make no representation
                or warranty of any kind, express or implied, regarding the accuracy, adequacy,
                validity, reliability, availability, or completeness of any information on the Site.
                UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF
                ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION
                PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON
                THE SITE IS SOLELY AT YOUR OWN RISK.
            </p>

            <h2>
                TESTIMONIALS DISCLAIMER
            </h2>

            <p>
                The Site may contain testimonials by users of our products and/or services. These
                testimonials reflect the real-life experiences and opinions of such users. However,
                the experiences are personal to those particular users, and may not necessarily be
                representative of all users of our products and/or services. We do not claim, and
                you should not assume, that all users will have the same experiences. YOUR
                INDIVIDUAL RESULTS MAY VARY.
            </p>

            <p>
                The testimonials on the Site are submitted in various forms such as text, audio
                and/or video, and are reviewed by us before being posted. They appear on the Site
                verbatim as given by the users, except for the correction of grammar or typing
                errors. Some testimonials may have been shortened for the sake of brevity where the
                full testimonial contained extraneous information not relevant to the general
                public.
            </p>
            <p>
                The views and opinions contained in the testimonials belong solely to the individual
                user and do not reflect our views and opinions. We are not affiliated with users who
                provide testimonials, and users are not paid or otherwise compensated for their
                testimonials.
            </p>
        `,
    },
    faq: {
        title: "Frequently Asked Questions",
        published: "Published on 26th May 2023 <br /> By Cohen Coombs, Bespoke Web Dev",
        content: html`
            <h2>
                1. How much does a custom website design and development project typically cost?
            </h2>
            <p>
                The cost of a custom website design and development project varies depending on the
                complexity and specific requirements of the project. We provide personalized quotes
                based on a thorough understanding of your needs and goals. Please contact us to
                discuss your project in detail and receive a tailored quote.
            </p>

            <h2>2. What is the process involved in creating a custom website?</h2>
            <p>
                We follow a structured process for creating custom websites. It typically involves
                the following steps:
            </p>
            <ol>
                <li>Initial consultation to understand your business, goals, and requirements.</li>
                <li>Design phase where we create mockups and wireframes for your approval.</li>
                <li>
                    Development phase where we code the website using industry-standard frameworks
                    and technologies.
                </li>
                <li>Testing and quality assurance to ensure the website functions properly.</li>
                <li>Deployment of the website to your hosting environment.</li>
            </ol>

            <h2>
                3. Do you offer complimentary website hosting and SSL certificate for secure HTTPS
                sites?
            </h2>
            <p>
                Yes, we offer complimentary website hosting and provide SSL certificates to enable
                secure HTTPS connections for your website. We prioritize the safety and security of
                our clients' websites.
            </p>

            <h2>4. What kind of maintenance and support do you provide for websites?</h2>
            <p>
                We provide complimentary maintenance and support for website-related issues such as
                server downtime, broken links, and technical errors. However, ongoing revisions or
                more laborious work may be subject to additional charges. We are dedicated to
                supporting our clients and ensuring the smooth functioning of their websites.
            </p>

            <h2>5. How do you handle ongoing revisions or laborious work on websites?</h2>
            <p>
                Ongoing revisions or laborious work on websites may require additional time and
                resources. In such cases, we will discuss the scope of the work and provide a cost
                estimate before proceeding. We believe in transparent communication and aim to find
                a mutually beneficial solution.
            </p>

            <h2>6. Are the websites you develop search engine optimized (SEO)?</h2>
            <p>
                We ensure that the websites we develop are optimized for search engines in terms of
                coding and development. However, please note that while we have expertise in website
                development, we do not specialize in the full spectrum of SEO services. For
                comprehensive SEO strategies, we recommend consulting with an SEO specialist.
            </p>

            <h2>7. What technologies and frameworks do you use for website development?</h2>
            <p>
                We use industry-standard technologies and frameworks such as HTML, CSS, JavaScript,
                and popular frameworks like React for website development. We stay up to date with
                the latest trends and best practices to deliver high-quality, modern websites.
            </p>

            <h2>8. Do you offer e-commerce functionality for websites?</h2>
            <p>
                Yes, we offer e-commerce functionality for websites. However, developing an
                e-commerce website requires substantial time and investment. We recommend discussing
                your specific requirements with us so that we can provide a tailored plan and
                pricing for your e-commerce project.
            </p>

            <h2>
                9. How do you ensure that websites are responsive and fit for different screen
                sizes?
            </h2>
            <p>
                All the websites we create are bespoke and tailor-made for each client. We follow
                responsive web design principles, which means we design and test websites to ensure
                they adapt and display properly on different screen resolutions and devices. This
                ensures a seamless user experience across desktops, tablets, and smartphones.
            </p>

            <h2>
                10. Can you provide guidance on SEO best practices or recommend an SEO specialist?
            </h2>
            <p>
                While we can provide some guidance on SEO best practices, it's important to note
                that we are not SEO specialists. For a comprehensive SEO strategy or more in-depth
                SEO services, we recommend consulting with an SEO specialist who can provide the
                expertise needed to optimize your website for search engines and improve its
                visibility.
            </p>
        `,
    },
    services: {
        title: "Websites That Are Tailored To Your Needs",
        published: "Published on 26th May 2023 <br /> By Cohen Coombs, Bespoke Web Dev",
        content: html`
            <p>
                Bespoke Web Dev specializes in providing cutting-edge web design & development
                services tailored to meet the unique needs of our clients. Our focus is on
                hand-coding websites from scratch, ensuring the highest level of quality,
                reliability, and customization.
            </p>
            <br />
            <p>
                We take the time to listen and comprehend your specific requirements in order to
                design and develop bespoke websites that perfectly represent your brand and resonate
                with your audience.
                <br /><br />
                <a class="link" style="font-weight: 600; font-size: 1.2rem;" href="operation.html">
                    <span class="material-symbols-rounded">arrow_forward</span>
                    Learn more about what we need from you</a
                >
            </p>

            <h2>Comprehensive Services for a Complete Web Solution</h2>

            <ol>
                <li>
                    <b>Custom Website Design:</b> We understand that every business has its own
                    identity and objectives. That's why we work closely with our clients to grasp
                    their unique vision, brand, and goals. Our goal is to create a stunning and
                    engaging website that not only reflects your brand's personality but also
                    captivates your target audience.
                </li>
                <li>
                    <b>Responsive Web Development:</b> In today's digital landscape, it's crucial
                    for your website to be accessible across different devices and screen sizes. Our
                    responsive web development approach ensures that your website is seamlessly
                    optimized for desktops, tablets, and mobile devices. This way, you can reach
                    your audience wherever they are and provide them with an exceptional user
                    experience.
                </li>
                <li>
                    <b>Hand-Coded Websites:</b> Unlike using pre-designed templates or relying
                    heavily on website builders, we believe in the power of hand-coding. Bespoke Web
                    Dev crafts every website from scratch, employing industry best practices and the
                    latest technologies. This allows us to build websites that are not only visually
                    appealing but also highly functional, secure, and optimized for performance.
                    <a target="_blank" href="eccomerce.html">See the benefits</a>
                </li>
                <li>
                    <b>E-Commerce Solutions:</b> If you're looking to sell products or services
                    online, our e-commerce solutions have got you covered. We can integrate robust
                    and user-friendly e-commerce platforms into your website, enabling seamless
                    transactions, inventory management, and secure payment gateways. Our goal is to
                    create an online store that enhances your customers' shopping experience and
                    drives conversions.
                    <a target="_blank" href="eccomerce.html">See our E-Commerce solutions</a>
                </li>
                <li>
                    <b>Full Deployment:</b> We take care of the entire process of deploying your
                    website, from setting up the hosting environment to configuring the domain name
                    and SSL certificate. We ensure that your website is fully functional and
                    accessible to your audience.
                </li>
                <li>
                    <b>Ongoing Support and Maintenance:</b> We believe in building long-term
                    relationships with our clients. Once your website is launched, our commitment
                    doesn't end there. We provide ongoing support and maintenance services to ensure
                    your website remains secure, up-to-date, and optimized for performance. We
                    handle regular backups, security updates, and content management, so you can
                    focus on your core business while we take care of your online presence.
                </li>
            </ol>

            <br />

            <p>
                We understand that every business is unique and has its own set of requirements. If
                you have a specific need that is not listed above, please feel free to contact us
                and we'll be happy to discuss your project.
            </p>

            <h2>The Bread And Butter of a Functional Website</h2>
            <p>
                When you choose Bespoke Web Dev, we ensure that your website is equipped with all
                the essential components to make a strong impression on your visitors.
            </p>
            <br />
            <p>
                Listed below are features that are commonly found on most websites. At no extra
                charge, we provide:
            </p>

            <ul>
                <li>
                    <b>Navigation Bar:</b> A well-structured navigation bar facilitates easy
                    navigation throughout your website, enabling visitors to find information
                    effortlessly.
                </li>
                <li>
                    <b>Footer:</b> We include an informative footer section that contains additional
                    links and contact details, making it convenient for users to engage with your
                    business.
                </li>
                <li>
                    <b>Website Banner + Title:</b> Our designs include attention-grabbing banners
                    and titles with background images that visually communicate your brand message
                    and capture visitors' attention.
                </li>
                <li>
                    <b>About Us Section:</b> We create a dedicated section that provides a brief
                    overview of your business, including your mission, values, and unique selling
                    points.
                </li>
                <li>
                    <b>Testimonials:</b> We incorporate testimonials from your customers to build
                    trust and credibility, encouraging visitors to take action.
                </li>
                <li>
                    <b>Contact Details:</b> We include your contact details, such as phone number,
                    email address, and physical address, so that visitors can easily get in touch
                    with you.
                </li>
                <li>
                    <b>Media/Images</b> We incorporate relevant and impactful media/images, either
                    sourced by you or carefully selected from non-copyrighted sites, to enhance the
                    visual appeal of your website.
                </li>
                <li>
                    <b>Multiple Sections of Content:</b> We work with you to create engaging and
                    informative content that is presented in a visually appealing manner. Whether
                    it's text combined with images or paragraphs, we ensure seamless integration at
                    no extra cost.
                </li>
                <li>
                    <b>Buttons/Links:</b> Strategically placed buttons and links guide visitors
                    towards desired actions, such as making a purchase, subscribing to a newsletter,
                    or contacting your business.
                </li>
                <li>
                    <b>Brand Logo:</b> We prominently display your brand logo throughout the
                    website, reinforcing brand recognition and identity.
                </li>
            </ul>

            <h2>Looking for something else, which isn't listed above?</h2>

            <p>
                Contact us today to discuss your website development needs, and let us craft a
                custom solution that elevates your online business to new heights. Experience the
                power of a website that is uniquely designed to showcase your brand and engage your
                audience.
            </p>
        `,
    },
    ecommerce: {
        title: "How we handle e-commerce integration with Stripe",
        published: "Published on 26th May 2023 <br /> By Cohen Coombs, Bespoke Web Dev",
        content: html`
            <p>
                In this article, we'll walk you through the process of integrating Stripe into your
                website and highlight why it's the preferred choice for e-commerce businesses
                worldwide.
            </p>

            <h2>Why Choose Stripe for Your Online Payments?</h2>

            <p>
                Bespoke Web Dev provides our clients with a seamless and user-friendly online
                shopping experience. That's why we've chosen Stripe as our go-to payment gateway.
                Here's why Stripe stands out:
            </p>

            <ul>
                <li>
                    <strong>Easy Integration:</strong> Stripe offers a developer-friendly platform
                    that allows us to seamlessly integrate their payment system into your website,
                    ensuring a smooth and secure transaction process for your customers.
                </li>
                <li>
                    <strong>Robust Security:</strong> With Stripe, you can rest assured that your
                    customers' payment information is handled with the highest level of security.
                    Stripe is PCI-DSS compliant, protecting sensitive data and reducing the risk of
                    fraudulent activities.
                </li>
                <li>
                    <strong>Global Reach:</strong> Stripe enables businesses to accept payments from
                    customers around the world. It supports multiple currencies and offers various
                    payment methods, including credit cards, digital wallets, and more.
                </li>
                <li>
                    <strong>Developer-Friendly:</strong> If you have specific customization
                    requirements, Stripe provides a comprehensive set of APIs and documentation,
                    empowering developers to tailor the payment experience to your unique business
                    needs.
                </li>
            </ul>

            <h2>Getting Started with Stripe</h2>

            <p>
                If you're planning to add e-commerce functionality to your site, you can get started
                with simple steps:
            </p>

            <ol>
                <li>
                    <strong>Create a Stripe Account:</strong> Visit the
                    <a href="https://stripe.com/">Stripe website</a> and sign up for an account.
                    It's quick, easy, and free to get started.
                </li>
                <li>
                    <strong>Set Up Your Stripe Dashboard:</strong> Once you've created your account,
                    you'll gain access to your Stripe Dashboard. This is where you'll configure your
                    payment settings, view transactions, and manage your business's financial
                    aspects.
                </li>
                <li>
                    <strong>Add Your Products:</strong> In your Stripe Dashboard, you can easily
                    create and manage your products or services. Specify their names, prices,
                    descriptions, and any other relevant details.
                </li>
            </ol>

            <br />

            <p>
                After creating your Stripe account and products, Bespoke Web Dev will take care of
                the rest. We'll build a fully functional e-commerce website that seamlessly allows
                you to accept payments from your customers.
            </p>

            <h2>Understanding Stripe's Transaction Fees</h2>

            <p>
                While Stripe offers powerful features and convenience, it's important to be aware of
                their transaction fees. Stripe operates on a simple and transparent pricing
                structure, charging a small fee for each successful transaction. The exact fee
                percentage may vary depending on your location and the type of transaction.
            </p>
            <br />

            <p>
                For detailed information about Stripe's pricing and transaction fees, we recommend
                visiting their
                <a target="_blank" href="https://stripe.com/en-au/pricing">Pricing page</a> or
                reaching out to their support team directly.
            </p>

            <br />
            <img
                src="assets/stripe.png"
                alt=""
                style="border-radius: 10px; width: 100%; height: auto"
            />
        `,
    },
    operation: {
        title: "Let's Bring Your Vision to Life: What We Need From You",
        published: "Published on 26th May 2023 <br /> By Cohen Coombs, Bespoke Web Dev",
        content: html`
            <p>
                We're dedicated to creating a website that perfectly captures your brand and meets
                your specific requirements. To ensure a seamless collaboration, we kindly request
                the following information and assets from you. Don't worry, we'll guide you through
                the process every step of the way.
            </p>

            <h2>Essential Information and Assets</h2>

            <p>Before we dive into crafting your website, please gather the following items:</p>

            <ol>
                <li>
                    <strong>Domain Name:</strong> To establish your unique online presence, you'll
                    need to purchase a domain name. We recommend
                    <a target="_blank" href="https://ventraip.com.au">ventraip.com.au</a>, a trusted
                    domain registrar known for their exceptional service and user-friendly
                    interface. If you have any questions during the domain purchase process, feel
                    free to reach out to us. Once you've acquired a domain name, we'll require
                    access to your domain name provider to point the domain to our servers. We'll
                    guide you through the necessary steps to ensure a smooth transition.
                </li>
                <li>
                    <strong>Logo:</strong> If you already have a logo for your business, please
                    provide us with the highest-quality version available. Your logo plays a crucial
                    role in shaping your brand identity, and incorporating it seamlessly into the
                    website design will help establish a consistent and professional image.
                </li>
                <li>
                    <strong>Brand Colors:</strong> If you have specific brand colors, please provide
                    us with the color codes or any relevant branding guidelines. By aligning your
                    website's color scheme with your brand identity, we can create a visually
                    cohesive and impactful online presence that resonates with your target audience.
                </li>
                <li>
                    <strong>Images, Media, and Graphics:</strong> Gather any images, media files, or
                    graphics that you would like to include on your website. Whether it's product
                    photos, team pictures, or any other visual assets, we'll ensure they are
                    showcased in a visually appealing and engaging manner. If needed, our design
                    experts can provide guidance on selecting high-quality visuals or even assist
                    with professional photography and graphic design.
                </li>
                <li>
                    <strong>Text Content:</strong> Prepare the text content that you would like to
                    feature on your website. This includes essential information such as About Us,
                    Contact Us, Services, and any other relevant sections. If you're unsure about
                    the content or need assistance with copywriting, our skilled writers can create
                    compelling and persuasive text that effectively communicates your brand's
                    message. We'll work closely with you to ensure the content accurately reflects
                    your vision.
                </li>
            </ol>

            <br />

            <p>
                By providing us with these essential elements, you'll play a vital role in helping
                us create a website that truly showcases your business. We work closely with you
                throughout the process, ensuring your vision is brought to life every step of the
                way.
            </p>
        `,
    },
    thanks: {
        title: "Thanks for your message!",
        published: "",
        content: html`
            <h2 style="font-size: 20px">
                We'll get back to you within the next 24 hours. In the meantime, learn how you can
                get started sooner:
            </h2>
        `,
    },
}

const page = document.createElement("div")
page.className = "page"
page.innerHTML = html`
    <span class="back">
        Home /
        <a class="link" href="../" style="margin-left: 1rem">
            <span class="material-symbols-rounded">arrow_back</span>
            Head Back
        </a>
    </span>
    <h1>
        ${pages[new URL(location.href).pathname.split("/").pop().split(".")[0].toLowerCase()].title}
    </h1>
    <div class="published">
        ${pages[new URL(location.href).pathname.split("/").pop().split(".")[0].toLowerCase()]
            .published}
    </div>
    ${pages[new URL(location.href).pathname.split("/").pop().split(".")[0].toLowerCase()].content}
    <div class="read-more">
        <h2>
            Check out these articles to learn more about our services and how we benefit you
        </h2>
        <div class="links">
            <a href="operation.html">Getting Started</a>
            <a href="benefits.html">Your Benefits</a>
            <a href="services.html">Our Services</a>
            <a href="ecommerce.html">E-Commerce Integration</a>
            <a href="faq.html">FAQ</a>
            <a href="disclaimer.html">Disclaimer</a>
        </div>
    </div>
`
document.body.appendChild(page)
