document.addEventListener("DOMContentLoaded", (event) => {
  // Call the initial router handler when the page loads
  handleLocation();
});

window.addEventListener("hashchange", handleLocation);
