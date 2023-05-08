'use strict'
import "jquery";
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import './bundle.scss';
import "./cookiechoices.js"
import { setup_choices } from "./cookiechoices.js";

export function addPostAdminButton(postSlug) {
    var navbar = document.querySelector(".nav, .navbar-nav");

    // Temporary
    const adminLi = document.createElement('li');
    const adminButton = document.createElement('a');
    adminButton.href = "/admin/#/collections/blog/entries/" + postSlug;
    adminButton.rel = "nofollow";
    adminButton.className = "active";
    adminButton.textContent = "Edit";
    adminLi.appendChild(adminButton);
    navbar.appendChild(adminLi);
}

document.addPostAdminButton = addPostAdminButton;

document.addEventListener('load', function(event) {
    setup_choices(this);
    cookieChoices.showCookieConsentBar('Cookies help us deliver our services. By using our services, you agree to our use of cookies.',
        'Got It', 'Learn More', '/privacy_and_cookies.html');
});
