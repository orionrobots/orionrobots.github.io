'use strict'
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
