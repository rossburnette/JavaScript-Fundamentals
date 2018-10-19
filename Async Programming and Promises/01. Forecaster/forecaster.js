const baseServiceUrl = "https://judgetests.firebaseio.com/";

function attachEvents() {
    $('#submit').click(getWeather);
}

function getWeather() {
    $.get(baseServiceUrl + "locations.json")
        .then(loadForecast)
        .catch(displayError);
}

function loadForecast(locations) {
    let location = locations.filter(l => l.name == $('#location').val())[0];

    let todayForecast = $.get(`${baseServiceUrl}forecast/today/${location.code}.json`);
    let upcomingForecast = $.get(`${baseServiceUrl}forecast/upcoming/${location.code}.json`);

    Promise.all([todayForecast, upcomingForecast])
        .then(displayForecast)
        .catch(displayError);

}

function displayForecast([today, upcoming]) {
    const icons = {
        ['Sunny']: "&#x2600;",
        ['Partly sunny']: "&#x26C5;",
        ['Overcast']: "&#x2601;",
        ['Rain']: "&#x2614;",
        ['Degrees']: "&#176;"
    };

    $('#current')
        .append($('<span>').addClass("condition symbol").html(icons[today.forecast.condition]))
        .append($('<span>').addClass("condition")
            .append($('<span>').addClass("forecast-data").text(today.name))
            .append($('<span>').addClass("forecast-data").html(`${today.forecast.low}${icons.Degrees}/${today.forecast.high}${icons.Degrees}`))
            .append($('<span>').addClass("forecast-data").text(today.forecast.condition))
        );

    for (let forecast of upcoming.forecast) {
        $('#upcoming')
            .append($('<span>').addClass("upcoming")
                .append($('<span>').addClass("symbol").html(icons[forecast.condition]))
                .append($('<span>').addClass("forecast-data").html(`${forecast.low}${icons.Degrees}/${forecast.high}${icons.Degrees}`))
                .append($('<span>').addClass("forecast-data").text(forecast.condition))
            );
    }

    $('#forecast').css("display", "block");
}

function displayError(err) {
    $('#forecast').html("Error");
    $('#forecast').css("display", "block");
}