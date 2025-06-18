/** @format */
"use client";

import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import axios from "axios";
import { format, parseISO } from "date-fns";
import Container from "../components/Container";
import { convertKelvinToFahrenheit } from "@/utils/convertKelvinToFahrenheit";
import WeatherIcon from "../components/WeatherIcon";
import { getDayOrNightIcon } from "@/utils/getDayOrNightIcon";


// https://api.openweathermap.org/data/2.5/forecast?q={location}&appid={API_KEY} - f0rcast by location

// forcast call by lat / lon- https://api.openweathermap.org/data/2.5/forecast?lat=40.6501&lon=-73.9496&appid={API_KEY}

interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export default function Home() {
  const { isLoading, error, data, refetch } = useQuery<WeatherData>({
    queryKey: ['repoData'],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Brooklyn&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );
      return data;
    }
  });

  const firstData = data?.list[0];

  console.log("client response", data?.list.map(item => item.dt_txt));

  if (isLoading)
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center min-h-screen justify-center">
        {/* @ts-ignore */}
        <p className="text-red-400">{error.message}</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">

        {/* today's data */}
        <section className="space-y-4">
          <div className="space-y-2">

            {/* day of week and date */}
            <h2 className="flex gap-1 text-2xl items-end">
              <p>{format(parseISO(firstData?.dt_txt ?? ''), 'EEEE')}</p>
              <p className="text-lg">({format(parseISO(firstData?.dt_txt ?? ''), 'dd.MM.yyy')})</p>
            </h2>

            {/* first container */}
            <Container className="gap-10 px-6 items-center">
              {/* left half with temp / feels like / high /low */}
              <div className="flex flex-col px-4">
                <span className="text-5xl">
                  {convertKelvinToFahrenheit(firstData?.main.temp ?? 70)}°
                </span>
                <p className="text-xs space-x-1 whitespace-nowrap">
                  <span>Feels like</span>
                  <span>
                    {convertKelvinToFahrenheit(firstData?.main.feels_like ?? 0)}°
                  </span>
                </p>
                <p className="text-xs space-x-2">
                  <span>
                    {convertKelvinToFahrenheit(firstData?.main.temp_min ?? 0)}
                    °↓{" "}
                  </span>
                  <span>
                    {" "}
                    {convertKelvinToFahrenheit(firstData?.main.temp_max ?? 0)}
                    °↑
                  </span>
                </p>
              </div>

              {/* right half with 3 hour weather cycle  */} {/* time and weather icon*/}
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">

                {data?.list.map((d, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-2 items-center text-xs font-semibold "
                  >
                    <p className="whitespace-nowrap">
                      {format(parseISO(d.dt_txt), "h:mm a")}
                    </p>

                    {/* <WeatherIcon iconName={d.weather[0].icon} /> */}
                    <WeatherIcon
                      iconName={getDayOrNightIcon(
                        d.weather[0].icon,
                        d.dt_txt
                      )}
                    />
                    <p>{convertKelvinToFahrenheit(d?.main.temp ?? 0)}°</p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </section>

        {/* 5 day forcast data */}
        <section className="flex w-full flex-col gap-4">
          <p className="text-2xl">Forcast (5 days)</p>
        </section>
      </main>
    </div>
  );
};
