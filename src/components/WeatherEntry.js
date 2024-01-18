import { getForecast } from '@/api/weatherapi'
import Image from 'next/image'

export default async function WeatherEntry() {

    const data = await getForecast()
    console.log(data.current.condition.icon)
    const time = data.location.localtime
    const temp = data.current.temp_f
    const cond = "https:" + data.current.condition.icon

    return(
        <>
            <h1>Weather Entry</h1>

            <h2>Date/Time: {time}</h2>

            <h2>Temp: {temp} C</h2>

            <h2>Condition: <Image src={cond} width="50" height="50"></Image></h2>
        </>    
    )
}