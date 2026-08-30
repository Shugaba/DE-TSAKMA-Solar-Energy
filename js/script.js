document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DE TSAKMA SOLAR ENERGY LTD
       MAIN WEBSITE JAVASCRIPT
       ===================================================== */


    /* =====================================================
       COMPANY INFORMATION
       ===================================================== */

    const COMPANY = {

        name: "DE TSAKMA SOLAR ENERGY LTD",

        phone: "+2348139904445",

        whatsapp: "2348139904445",

        email: "detsakmasolarenergyltd@gmail.com",

        address:
            "Adjacent Urawise Pharmacy Ltd, Yolde-pate Junction, Yola South, Adamawa State.",

        maps:
            "https://maps.app.goo.gl/gqwgfFvJYXa3xNCa8",

        slogan:
            "…Powering a Brighter Tomorrow"

    };



    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navbar =
        document.querySelector(".navbar");


    if (menuToggle && navbar) {


        menuToggle.addEventListener(
            "click",
            function () {


                const isOpen =
                    navbar.classList.toggle("show");


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                );


                menuToggle.innerHTML =
                    isOpen
                        ? "✕"
                        : "☰";

            }
        );



        /* Close menu when a link is clicked */

        const navLinks =
            navbar.querySelectorAll("a");


        navLinks.forEach(function (link) {


            link.addEventListener(
                "click",
                function () {


                    navbar.classList.remove(
                        "show"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );


                    menuToggle.innerHTML =
                        "☰";

                }
            );

        });

    }



    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const currentPath =
        window.location.pathname;


    let currentPage =
        currentPath.split("/").pop();


    if (
        currentPage === "" ||
        currentPage === "/"
    ) {

        currentPage =
            "index.html";

    }


    const navigationLinks =
        document.querySelectorAll(
            ".navbar a"
        );


    navigationLinks.forEach(
        function (link) {


            const href =
                link.getAttribute("href");


            if (!href) {
                return;
            }


            /*
             * Homepage navigation uses
             * section anchors.
             */

            if (
                href.startsWith("#")
            ) {

                return;

            }


            if (
                link.classList.contains(
                    "nav-quote"
                )
            ) {

                return;

            }


            const linkPage =
                href.split("/").pop();


            link.classList.remove(
                "active"
            );


            if (
                linkPage === currentPage
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );



    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const header =
        document.querySelector(
            ".header"
        );


    function updateHeader() {


        if (!header) {
            return;
        }


        if (
            window.scrollY > 30
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();



    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(function (link) {


            link.addEventListener(
                "click",
                function (event) {


                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {


                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });



    /* =====================================================
       WHATSAPP QUOTE FORM
       ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {


        contactForm.addEventListener(
            "submit",
            function (event) {


                event.preventDefault();


                /* =========================================
                   GET FORM ELEMENTS
                   ========================================= */

                const nameInput =
                    document.getElementById(
                        "name"
                    );


                const phoneInput =
                    document.getElementById(
                        "phone"
                    );


                const emailInput =
                    document.getElementById(
                        "email"
                    );


                const serviceInput =
                    document.getElementById(
                        "service"
                    );


                const messageInput =
                    document.getElementById(
                        "message"
                    );


                if (
                    !nameInput ||
                    !phoneInput ||
                    !serviceInput ||
                    !messageInput
                ) {

                    console.error(
                        "Required contact form fields are missing."
                    );

                    return;

                }



                /* =========================================
                   GET VALUES
                   ========================================= */

                const name =
                    nameInput.value.trim();


                const phone =
                    phoneInput.value.trim();


                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";


                const service =
                    serviceInput.value.trim();


                const message =
                    messageInput.value.trim();



                /* =========================================
                   VALIDATION
                   ========================================= */

                if (
                    !name ||
                    !phone ||
                    !service ||
                    !message
                ) {


                    alert(
                        "Please complete all required fields before submitting your enquiry."
                    );


                    return;

                }



                /* =========================================
                   BUILD WHATSAPP MESSAGE
                   ========================================= */

                const whatsappText =

                    "Hello " +
                    COMPANY.name +
                    ",\n\n" +

                    "*NEW WEBSITE ENQUIRY*\n" +

                    "━━━━━━━━━━━━━━━━━━\n\n" +

                    "*Customer Information*\n" +

                    "Name: " +
                    name +
                    "\n" +

                    "Phone: " +
                    phone +
                    "\n" +

                    "Email: " +
                    (
                        email ||
                        "Not provided"
                    ) +
                    "\n\n" +

                    "*Service Required*\n" +

                    service +
                    "\n\n" +

                    "*Project Details*\n" +

                    message +
                    "\n\n" +

                    "━━━━━━━━━━━━━━━━━━\n" +

                    "Sent from the DE TSAKMA SOLAR ENERGY LTD website.";



                /* =========================================
                   ENCODE MESSAGE
                   ========================================= */

                const encodedMessage =
                    encodeURIComponent(
                        whatsappText
                    );



                /* =========================================
                   WHATSAPP URL
                   ========================================= */

                const whatsappURL =
                    "https://wa.me/" +
                    COMPANY.whatsapp +
                    "?text=" +
                    encodedMessage;



                /* =========================================
                   SUCCESS MESSAGE
                   ========================================= */

                const successMessage =
                    document.getElementById(
                        "formSuccess"
                    );


                if (successMessage) {


                    successMessage.style.display =
                        "block";


                    successMessage.textContent =
                        "Your enquiry is ready. Opening WhatsApp...";

                }



                /* =========================================
                   OPEN WHATSAPP
                   ========================================= */

                const whatsappWindow =
                    window.open(
                        whatsappURL,
                        "_blank"
                    );


                /*
                 * Some browsers may block
                 * window.open.
                 */

                if (!whatsappWindow) {

                    window.location.href =
                        whatsappURL;

                }

            }
        );

    }



    /* =====================================================
       WHATSAPP BUTTONS
       ===================================================== */

    const whatsappButtons =
        document.querySelectorAll(
            "[data-whatsapp]"
        );


    whatsappButtons.forEach(
        function (button) {


            button.addEventListener(
                "click",
                function (event) {


                    event.preventDefault();


                    const message =
                        "Hello " +
                        COMPANY.name +
                        ", I would like to make an enquiry.";


                    const whatsappURL =
                        "https://wa.me/" +
                        COMPANY.whatsapp +
                        "?text=" +
                        encodeURIComponent(
                            message
                        );


                    window.open(
                        whatsappURL,
                        "_blank"
                    );

                }
            );

        }
    );



    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(
        function (element) {

            element.textContent =
                new Date().getFullYear();

        }
    );



    /* =====================================================
       EXTERNAL LINKS
       ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(
        function (link) {


            /*
             * Make sure external links
             * have safe rel attributes.
             */

            const currentRel =
                link.getAttribute("rel") ||
                "";


            if (
                !currentRel.includes(
                    "noopener"
                )
            ) {

                link.setAttribute(
                    "rel",
                    (
                        currentRel +
                        " noopener"
                    ).trim()
                );

            }

        }
    );



    /* =====================================================
       WEBSITE INITIALIZATION
       ===================================================== */

    console.log(
        COMPANY.name +
        " website initialized successfully."
    );

});