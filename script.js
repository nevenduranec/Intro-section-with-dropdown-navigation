"useStrict";

const mobileFunctionality = function () {
  const sidebar = document.querySelector(".sidebar");
  const openSidebar = document.querySelector(".header__menu");
  const closeSidebar = document.querySelector(".icon-close");
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
};
mobileFunctionality();

const desktopFunctionality = function () {
  const dropdownFeatureDesk = document.querySelector(
    ".dropdown-feature-desktop"
  );
  const dropdownCompanyDesk = document.querySelector(
    ".dropdown-company-desktop"
  );
  const openDropdownFeatureDesk = document.querySelector(
    ".navigation__dropdown-feature-desktop"
  );
  const openDropdownCompanyDesk = document.querySelector(
    ".navigation__dropdown-company-desktop"
  );
  const arrowDownFeatureDesk = document.querySelector(
    ".arrow-down-feature-desktop"
  );
  const arrowDownCompanyDesk = document.querySelector(
    ".arrow-down-company-desktop"
  );
  const arrowUpFeatureDesk = document.querySelector(
    ".arrow-up-feature-desktop"
  );
  const arrowUpCompanyDesk = document.querySelector(
    ".arrow-up-company-desktop"
  );

  const resetFeatureDropdownDesk = function () {
    dropdownFeatureDesk.style.display = "none";
    arrowDownFeatureDesk.style.display = "block";
    arrowUpFeatureDesk.style.display = "none";
  };

  const resetCompanyDropdownDesk = function () {
    dropdownCompanyDesk.style.display = "none";
    arrowDownCompanyDesk.style.display = "block";
    arrowUpCompanyDesk.style.display = "none";
  };

  openDropdownFeatureDesk.addEventListener("click", function () {
    if (
      dropdownFeatureDesk.style.display === "none" ||
      dropdownFeatureDesk.style.display === ""
    ) {
      dropdownFeatureDesk.style.display = "flex";
      arrowDownFeatureDesk.style.display = "none";
      arrowUpFeatureDesk.style.display = "block";
    } else {
      resetFeatureDropdownDesk();
    }
  });

  openDropdownCompanyDesk.addEventListener("click", function () {
    if (
      dropdownCompanyDesk.style.display === "none" ||
      dropdownCompanyDesk.style.display === ""
    ) {
      dropdownCompanyDesk.style.display = "flex";
      arrowDownCompanyDesk.style.display = "none";
      arrowUpCompanyDesk.style.display = "block";
    } else {
      resetCompanyDropdownDesk();
    }
  });
};
desktopFunctionality();
