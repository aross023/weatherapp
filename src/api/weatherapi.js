export const getForecast = async () => {
	try {
		const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=California&days=1&aqi=no&alerts=no`);
		const data = await res.json();
		// console.log(data);
        return data
	} catch (err) {
		console.log(err);
	}
};
