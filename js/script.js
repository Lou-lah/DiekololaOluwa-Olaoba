/* LOULAH PORTFOLIO JAVASCRIPT */

/*  MOBILE MENU  */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileNav =
    document.getElementById("mobileNav");


if (mobileMenuBtn && mobileNav) {

    mobileMenuBtn.addEventListener(
        "click",
        () => {

            mobileNav.classList.toggle("open");

        }
    );


    /* Close menu after clicking a link */

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove("open");

            }
        );

    });

}


/* CURRENT YEAR */

/*
   We'll use this later for the footer
   so the year updates automatically.
*/

const currentYear =
    new Date().getFullYear();

const yearElement =
    document.getElementById("currentYear");


if (yearElement) {

    yearElement.textContent =
        currentYear;

}