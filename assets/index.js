// FAQ Accordion JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".accordion-item-title");
    const content = item.querySelector(".accordion-item-content");
    const icon = item.querySelector(".accordion-icon");

    title.addEventListener("click", () => {
      const isExpanded = title.getAttribute("aria-expanded") === "true";

      // Close all other accordion items
      if (!isExpanded) {
        accordionItems.forEach((otherItem) => {
          const otherTitle = otherItem.querySelector(".accordion-item-title");
          const otherContent = otherItem.querySelector(
            ".accordion-item-content"
          );
          const otherIcon = otherItem.querySelector(".accordion-icon");

          otherTitle.setAttribute("aria-expanded", "false");
          otherContent.classList.remove("expanded");
          otherIcon.classList.remove("rotated");
          otherIcon.src = "./assets/images/icon-plus.svg";
        });
      }

      // Toggle current item
      title.setAttribute("aria-expanded", !isExpanded);
      content.classList.toggle("expanded");
      icon.classList.toggle("rotated");
      icon.src = isExpanded
        ? "./assets/images/icon-plus.svg"
        : "./assets/images/icon-minus.svg";
    });

    // Keyboard navigation
    title.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        title.click();
      }
    });
  });
});
