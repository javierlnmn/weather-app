import axios from "axios";

export const fetchWeatherData = async (location) => {
    const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: location },
        headers: {
            "X-RapidAPI-Key":
                "01b6b8ebe5msh5a3b7021242fa8ap18d874jsn58a808c78332",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);

        const { location, current } = response.data;
        const { country, localtime, name } = location;

        const dateObj = new Date(localtime);

        const localtimeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };

        const formattedTime = dateObj.toLocaleTimeString(undefined, localtimeOptions);

        const {
            condition,
            humidity,
            feelslike_c,
            temp_c,
            is_day,
            wind_kph,
            wind_dir,
        } = current;

        const { code, text, icon } = condition;

        let weather = {
            conditionCode: code,
            conditionText: text,
            conditionIcon: icon,
            country: country,
            localtime: formattedTime,
            name: name,
            humidity: humidity,
            feelslike: feelslike_c,
            temp: temp_c,
            isDay: is_day,
            windKph: wind_kph,
            windDirection: wind_dir,
        };

        return weather;
    } catch (error) {
        console.error(error);
    }
};
