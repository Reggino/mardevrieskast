// Stop cargo.site auto resizing logic
window.addEventListener("load", () => {
  window.baseUnit.stopListening();
  window.baseUnit.removeEventListeners();

  // Remove any configure autosizing font size
  document.documentElement.removeAttribute("style");
});
