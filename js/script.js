document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DE TSAKMA SOLAR ENERGY LTD
       MAIN WEBSITE JAVASCRIPT
       ===================================================== */


    /* =====================================================
       COMPANY CONTACT CONFIGURATION
       ===================================================== */

    const COMPANY = {

        name: "DE TSAKMA SOLAR ENERGY LTD",

        phone: "+2348139904445",

        whatsapp: "2348139904445",

        email: "detsakmasolarenergyltd@gmail.com",

        address:
            "Adjacent Urawise Pharmacy Ltd, Yolde-pate Junction, Yola South, Adamawa State.",

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



        /* =========================================
           CLOSE MENU AFTER CLICKING A LINK
           ========================================= */

        const navLinks =
            navbar.querySelectorAll("a");


        navLinks.forEach(function (link) {


            link.addEventListener(
                "click",
                function () {


                    navbar.classList.remove("show");


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


    /*
     * If the browser is displaying the root page,
     * treat it as index.html.
     */

    if (
        currentPage === "" ||
        currentPage === "/"
    ) {

        currentPage = "index.html";

    }


    const navLinks =
        document.querySelectorAll(
            ".navbar a"
        );


    navLinks.forEach(function (link) {


        const href =
            link.getAttribute("href");


        if (!href) {
            return;
        }


        /*
         * Ignore special buttons such as
         * "Get a Quote".
         */

        if (
            link.classList.contains(
                "nav-quote"
            )
        ) {
            return;
        }


        const linkPage =
            href.split("/").pop();


        /*
         * Remove previously assigned active state.
         */

        link.classList.remove("active");


        if (
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });



    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const header =
        document.querySelector(".header");


    function updateHeader() {


        if (!header) {
            return;
        }


        if (window.scrollY > 30) {

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
       SMOOTH INTERNAL LINKS
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


                    /*
                     * Ignore empty anchor links.
                     */

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

    const quoteForm =
        document.getElementById(
            "quoteForm"
        );


    if (quoteForm) {


        quoteForm.addEventListener(
            "submit",
            function (event) {


                event.preventDefault();


                /* =========================================
                   GET FORM VALUES
                   ========================================= */

                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim();


                const phone =
                    document
                        .getElementById("phone")
                        ?.value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        ?.value
                        .trim();


                const service =
                    document
                        .getElementById("service")
                        ?.value
                        .trim();


                const message =
                    document
                        .getElementById("message")
                        ?.value
                        .trim();



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
                        "Please complete all required fields before submitting your request."
                    );


                    return;

                }



                /* =========================================
                   CREATE WHATSAPP MESSAGE
                   ========================================= */

                const whatsappMessage =

                    "Hello " +
                    COMPANY.name +
                    ",%0A%0A" +

                    "*NEW QUOTE REQUEST*%0A" +
                    "━━━━━━━━━━━━━━━━━━%0A%0A" +

                    "*Customer Information*%0A" +

                    "Name: " +
                    encodeURIComponent(name) +
                    "%0A" +

                    "Phone: " +
                    encodeURIComponent(phone) +
                    "%0A" +

                    "Email: " +
                    encodeURIComponent(
                        email || "Not provided"
                    ) +
                    "%0A%0A" +

                    "*Service Required*%0A" +

                    encodeURIComponent(service) +
                    "%0A%0A" +

                    "*Project Details*%0A" +

                    encodeURIComponent(message) +
                    "%0A%0A" +

                    "━━━━━━━━━━━━━━━━━━%0A" +

                    "Sent through the DE TSAKMA Solar Energy website.";



                /* =========================================
                   CREATE WHATSAPP URL
                   ========================================= */

                const whatsappURL =
                    "https://wa.me/" +
                    COMPANY.whatsapp +
                    "?text=" +
                    whatsappMessage;



                /* =========================================
                   SHOW SUCCESS MESSAGE
                   ========================================= */

                const successMessage =
                    document.getElementById(
                        "formSuccess"
                    );


                if (successMessage) {


                    successMessage.style.display =
                        "block";


                    successMessage.innerHTML =
                        "Your quote request is ready. " +
                        "WhatsApp will open so you can send it to " +
                        COMPANY.name +
                        ".";

                }



                /* =========================================
                   OPEN WHATSAPP
                   ========================================= */

                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener"
                );

            }
        );

    }



    /* =====================================================
       AUTO-CONNECT WHATSAPP BUTTONS
       ===================================================== */

    const whatsappButtons =
        document.querySelectorAll(
            "[data-whatsapp]"
        );


    whatsappButtons.forEach(
        function (button) {


            button.addEventListener(
                "click",
                function () {


                    const defaultMessage =
                        "Hello " +
                        COMPANY.name +
                        ", I would like to make an enquiry.";


                    const url =
                        "https://wa.me/" +
                        COMPANY.whatsapp +
                        "?text=" +
                        encodeURIComponent(
                            defaultMessage
                        );


                    window.open(
                        url,
                        "_blank",
                        "noopener"
                    );

                }
            );

        }
    );



    /* =====================================================
       UPDATE COPYRIGHT YEAR
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
       CONSOLE INFORMATION
       ===================================================== */

    console.log(
        COMPANY.name +
        " website initialized successfully."
    );

});