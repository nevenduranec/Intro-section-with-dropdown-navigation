"use strict";

const navigation = document.querySelector(".navigation");
const hamby = document.querySelector(".header__hamburger");
const closeSidebar = document.querySelector(".navigation__menu-close");
const feature = document.querySelector(".dropdown__wrapper-feature");
const company = document.querySelector(".dropdown__wrapper-company");
const dropdownFeature = document.querySelector(".dropdown-feature");
const dropdownCompany = document.querySelector(".dropdown-company");
const openDropdownFeature = document.querySelector(
    ".navigation__dropdown-feature"
);
const openDropdownCompany = document.querySelector(
    ".navigation__dropdown-company"
);
const arrowDownFeature = document.querySelector(".arrow-down-feature");
const arrowDownCompany = document.querySelector(".arrow-down-company");

const resetFeatureDropdown = function () {
    dropdownFeature.style.display = "none";
    arrowDownFeature.classList.remove("is-open");
    openDropdownFeature.setAttribute("aria-expanded", false);
};

const resetCompanyDropdown = function () {
    dropdownCompany.style.display = "none";
    arrowDownCompany.classList.remove("is-open");
    openDropdownCompany.setAttribute("aria-expanded", false);
};

const closeDropdown = (event) => {
    !feature.contains(event.target) && resetFeatureDropdown();
    !company.contains(event.target) && resetCompanyDropdown();
};

hamby.addEventListener("click", function () {
    let expanded = JSON.parse(this.getAttribute("aria-expanded"));
    navigation.classList.toggle("is-open");
    hamby.classList.toggle("is-open");

    if (expanded) {
        hamby.setAttribute("aria-expanded", "false");
    } else {
        hamby.setAttribute("aria-expanded", "true");
    }

    setTimeout(() => {
        navigation.classList.toggle("is-visible");
    });

    document.documentElement.classList.toggle("prevent-scroll");
});

closeSidebar.addEventListener("click", function () {
    sidebar.style.transform = "translateX(100%)";
    resetFeatureDropdown();
    resetCompanyDropdown();
});

openDropdownFeature.addEventListener("click", function (e) {
    if (
        dropdownFeature.style.display === "none" ||
        dropdownFeature.style.display === ""
    ) {
        openDropdownFeature.setAttribute("aria-expanded", true);
        dropdownFeature.style.display = "flex";
        arrowDownFeature.classList.add("is-open");
    } else {
        resetFeatureDropdown();
    }
});

openDropdownCompany.addEventListener("click", function () {
    if (
        dropdownCompany.style.display === "none" ||
        dropdownCompany.style.display === ""
    ) {
        openDropdownCompany.setAttribute("aria-expanded", true);
        dropdownCompany.style.display = "flex";
        arrowDownCompany.classList.add("is-open");
    } else {
        resetCompanyDropdown();
    }
});

document.addEventListener("click", closeDropdown);
