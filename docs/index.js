function scrollToHash() {
  const pageDiv = document.getElementById(window.location.hash.substr(1));
  const scrollingContainer = document.querySelector(
    ".content_container bodycopy.content_padding .page_content"
  );
  if (!pageDiv || !scrollingContainer) {
    return;
  }
  const boundingClientRect = pageDiv.getBoundingClientRect();
  scrollingContainer.scrollTo({
    left: pageDiv.getBoundingClientRect().x + scrollingContainer.scrollLeft - window.outerWidth / 2 + boundingClientRect.width / 2,
    behavior: "smooth",
  });
}

window.BaseUnit.prototype.refresh = function () { console.log('refresh overloaded'); }

window.addEventListener("load", () => {
  // Stop cargo.site auto resizing logic
  window.baseUnit.stopListening();
  window.baseUnit.removeEventListeners();

  // Remove any configure autosizing font size
  document.documentElement.removeAttribute("style");

  // Install scroll handlers
  window.addEventListener("hashchange", scrollToHash);
  scrollToHash();
});
