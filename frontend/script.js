document.getElementById("routeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const distance = document.getElementById("distance").value;

  // Temporary mock response (replace with backend call later)
  const mockResponse = `
Starting near ${location}, follow a low-traffic residential loop,
avoid main roads, and run through a nearby park area.
Estimated distance: ${distance} km.
Average AQI: Moderate (75).
`;

  document.getElementById("routeText").innerText = mockResponse;
});
