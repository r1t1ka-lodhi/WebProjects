document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie");
    const acceptCookies = document.getElementById("button-cookies");
    const closeBanner = document.getElementById("close-cookie");

    if (localStorage.getItem("cookieConsent")) {
        cookieBanner.style.display = "none";
    }

    acceptCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "true");
        cookieBanner.style.opacity = "0";
        setTimeout(() => {
            cookieBanner.style.display = "none";
        }, 300);
    });
    closeBanner.addEventListener("click", () => {
        cookieBanner.style.opacity = "0";
        setTimeout(() => {
            cookieBanner.style.display = "none";
        }, 300);
    });
});


