let weatherData = '';
let api_key = '1965346a0e35efd7fa8cc97dee9ee4b0';
let api_url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`;

fetch(api_url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    weatherData = JSON.stringify(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

export default weatherData;

  