"useStrict";

let windowWidth = window.innerWidth;
const sidebarInner = document.querySelector(".sidebar__inner");
const navDesktop = document.querySelector(".navigation__container");
const navigation = document.querySelector(".navigation");
const sidebar = document.querySelector(".sidebar");
const openSidebar = document.querySelector(".header__hamburger");
const closeSidebar = document.querySelector(".navigation__menu-close");
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
const arrowUpFeature = document.querySelector(".arrow-up-feature");
const arrowUpCompany = document.querySelector(".arrow-up-company");

if (windowWidth >= 1024) {
  navDesktop.appendChild(navigation);
} else {
  sidebarInner.appendChild(navigation);
}

const resetFeatureDropdown = function () {
  dropdownFeature.style.display = "none";
  arrowDownFeature.style.display = "block";
  arrowUpFeature.style.display = "none";
};

const resetCompanyDropdown = function () {
  dropdownCompany.style.display = "none";
  arrowDownCompany.style.display = "block";
  arrowUpCompany.style.display = "none";
};

openSidebar.addEventListener("click", function () {
  sidebar.style.transform = "translateX(0%)";
});

closeSidebar.addEventListener("click", function () {
  sidebar.style.transform = "translateX(100%)";
  resetFeatureDropdown();
  resetCompanyDropdown();
});

openDropdownFeature.addEventListener("click", function () {
  if (
    dropdownFeature.style.display === "none" ||
    dropdownFeature.style.display === ""
  ) {
    dropdownFeature.style.display = "flex";
    arrowDownFeature.style.display = "none";
    arrowUpFeature.style.display = "block";
  } else {
    resetFeatureDropdown();
  }
});

openDropdownCompany.addEventListener("click", function () {
  if (
    dropdownCompany.style.display === "none" ||
    dropdownCompany.style.display === ""
  ) {
    dropdownCompany.style.display = "flex";
    arrowDownCompany.style.display = "none";
    arrowUpCompany.style.display = "block";
  } else {
    resetCompanyDropdown();
  }
});
