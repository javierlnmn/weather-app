<script>
    import { fetchWeatherData } from "./../services/weather.js";

    let location;
    let weatherPetition;

    const seekWeather = () => {
        weatherPetition = fetchWeatherData(location);
    };
</script>

<main class="min-h-screen bg-gray-50 text-gray-950">
    <h1
        class="py-5 text-sky-600 text-center text-4xl sm:text-6xl font-extrabold"
    >
        WeatherSeekr
    </h1>

    <div class="container w-4/5 mt-5 flex flex-col gap-5 max-w-2xl mx-auto">
        <form
            on:submit|preventDefault={() => seekWeather()}
            class="flex flex-col sm:flex-row gap-2 bg-"
        >
            <input
                bind:value={location}
                class="flex-1 appearance-none shadow-sm border text-gray-700 border-gray-200 p-2 focus:outline-none focus:border-gray-300 transition-colors rounded-lg"
                type="text"
                name="todo"
                placeholder="Where?"
            />

            <button
                typpe="submit"
                class="p-2 bg-sky-600 text-gray-50 rounded-lg hover:bg-sky-700 transition-all"
            >
                See Today's Weather
            </button>
        </form>

        {#await weatherPetition then weather}
            {#if weather}
                <div
                    class="shadow-md rounded-lg flex flex-col gap-2 p-4 bg-white"
                >
                    <div class="flex justify-between">
                        <div>
                            <p
                                class="sm:text-8xl text-6xl font-bold text-gray-900"
                            >
                                {weather.temp}º<span class="text-3xl"> C</span>
                            </p>
                            <p class="text-gray-400">{weather.conditionText}</p>
                        </div>

                        <div class="text-right flex flex-col items-end">
                            <p class="font-semibold text-lg">{weather.name}</p>
                            <p class="text-gray-400">{weather.country}</p>
                            <img
                                src="https:{weather.conditionIcon}"
                                alt="weather icon"
                                class="scale-110 mt-auto max-w-[70px]"
                            />
                        </div>
                    </div>
                    <span class="h-[1px] bg-gray-200 w-full" />
                    <div
                        class="my-2 grid gap-y-8 sm:gap-y-8 sm:grid-cols-3 grid-cols-2"
                    >
                        <div class="flex flex-col items-center">
                            <p class="text-2xl">{weather.feelslike} ºC</p>
                            <p class="text-gray-400">Feels Like</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-2xl">{weather.humidity} %</p>
                            <p class="text-gray-400">Humidity</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-2xl">{weather.temp} ºC</p>
                            <p class="text-gray-400">Temperature</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-2xl">{weather.localtime}</p>
                            <p class="text-gray-400">Local Time</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-2xl">{weather.windKph} Km/h</p>
                            <p class="text-gray-400">Wind Speed</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-2xl">{weather.windDirection}</p>
                            <p class="text-gray-400">Wind Direction</p>
                        </div>
                    </div>
                </div>
            {/if}
        {/await}
    </div>
</main>
