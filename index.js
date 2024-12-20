const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = '1fb96ae839ea693e5c1d2fb4cc6ebe2f';
    const city = document.querySelector('.search-box input').value;

    if (city === 'Cebu City')
        return;

    if (city === 'Cebu')
        return;

    if (city === 'Taptap Cebu City' || city === 'taptap') 
        return;

    if (city === 'Lapu-lapu' || city === 'Lapu-Lapu City' || city === 'lapulapu')
        return;

    if (city === 'Mandaue City' || city === 'Mandaue')
        return;

    if (city === 'Davao City' || city === 'Davao')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Sunny':
                    image.src = './assets/images/sunny.png';
                    break;

                case 'Rain':
                    image.src = './assets/images/rain.png';
                    break;

                case 'Snow':
                    image.src = './assets/images/snow.png';
                    break;

                case 'Clouds':
                    image.src = './assets/images/cloud.png';
                    break;

                case 'Haze':
                    image.src = './assets/images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        });


});