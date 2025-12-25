const routes = {
  "/": "/pages/home.html",
  "#bookings": "/pages/bookings.html",
  "#about": "/pages/about.html",
  "#contact": "/pages/contact.html",
};

// Function to fetch content and update the page
const handleLocation = async () => {
  const path = window.location.hash;
  const route = routes[path] || routes["/"]; // Default to home if route not

  // Fetch the HTML content snippet
  const html = await fetch(route).then((data) => data.text());

  // Inject the content into the main container
  document.getElementById("app-content").innerHTML = html;
};

const route = (event) => {
  event.preventDefault();
  // Use the History API to change the URL without a full page refresh
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

window.route = route;
