import Image from 'next/image'
import WeatherEntry from '@/components/WeatherEntry'
import { getForecast } from '@/api/weatherapi'

export default async function Home() {
  
  const data = await getForecast()
  //console.log(data.location.region)
  const city = data.location.region
  
  return (
    <div>
      <h1>Location: {city}</h1>
      <WeatherEntry />
      {/* <h1>{process.env.WEATHER_API_KEY}</h1> */}
    </div>
    
  )
}
