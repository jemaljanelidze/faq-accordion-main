// FAQ Accordion JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-item-title");
    const content = item.querySelector(".accordion-item-content");
    const icon = item.querySelector(".accordion-icon");

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Close all other accordion items
      if (!isExpanded) {
        accordionItems.forEach((otherItem) => {
          const otherButton = otherItem.querySelector(".accordion-item-title");
          const otherContent = otherItem.querySelector(
            ".accordion-item-content"
          );
          const otherIcon = otherItem.querySelector(".accordion-icon");

          otherButton.setAttribute("aria-expanded", "false");
          otherContent.classList.remove("expanded");
          otherIcon.classList.remove("rotated");
          otherIcon.src = "./assets/images/icon-plus.svg";
        });
      }

      // Toggle current item
      button.setAttribute("aria-expanded", !isExpanded);
      content.classList.toggle("expanded");
      icon.classList.toggle("rotated");
      icon.src = isExpanded
        ? "./assets/images/icon-plus.svg"
        : "./assets/images/icon-minus.svg";
    });
  });
});
