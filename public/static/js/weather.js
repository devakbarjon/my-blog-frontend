document.getElementById('search-btn').addEventListener('click', async () => {
  const city = document.getElementById('city-input').value.trim();
  if (!city) return alert("Please enter a city");

  try {
    const response = await fetch(`/api/weather-data?city=${encodeURIComponent(city)}`);
    
    if (!response.ok) throw new Error("Network response was not ok");

    const json = await response.json();
    const data = json.data;

    console.log("Fetched weather data:", data);

    document.getElementById('location').textContent = `${data.location.city}, ${data.location.country}`;
    document.getElementById('temperature').textContent = `${data.temperature}°C`;
    document.getElementById('description').textContent = data.description;
    document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
    document.getElementById('wind').textContent = `Wind: ${data.wind_speed} m/s`;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  } catch (err) {
    console.error("Failed to fetch weather:", err);
    alert("Could not fetch weather data. Try another city.");
  }
});