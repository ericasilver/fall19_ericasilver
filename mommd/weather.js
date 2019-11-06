var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=Providence&appid=5f4955baa328cc12cfff6e3154247859';

$.getJSON(apiCall, weatherCallback);
    function weatherCallback(weatherData) {
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var temp = (weatherData.main.temp-273.15);
        var description = weatherData.weather[0].description;
        $('.weatherResponse').append("The weather in " + cityName + " " + country + " is currently " + (temp*9/5+32) + " F with " + description + ". Don't forget to wear your jacket! Drink hot tea!");
    }
