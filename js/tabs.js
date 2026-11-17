const tabContainers = document.querySelectorAll(".web-resources .container");

if (tabContainers.length === 0) {
  console.error("No tab containers found.");
}

tabContainers.forEach((container) => {
  const tabs = container.querySelectorAll(".tabs .tab");

  if (tabs.length === 0) {
    console.error("No tab containers found.");
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const tabAttr = tab.getAttribute("data-tab");
      if (!tabAttr) {
        console.error("No tab Attribute found for ", tab);
        return;
      }

      container.querySelectorAll(".tab-pane").forEach((pane) => {
        pane.classList.remove("active");
      });

      tabs.forEach((t) => {
        t.classList.remove("tab-active");
      });

      tab.classList.add("tab-active");

      const correspondingPane = container.querySelector(
        `.tab-pane[data-tab-pane="${tabAttr}"]`
      );

      if (correspondingPane) {
        correspondingPane.classList.add("active");
      }
    });
  });
});
