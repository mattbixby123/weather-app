/** @format */

import React from "react";
import Container from "./Container";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails, { WeatherDetailProps } from "./WeatherDetails";
import { convertKelvinToFahrenheit } from "@/utils/convertKelvinToFahrenheit";

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
  weatehrIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export default function ForecastWeatherDetail(props: ForecastWeatherDetailProps) {
  return (
    <Container className="gap-4">
      {/* left */}
      <section className=" flex gap-4 items-center px-4  ">
        <div className=" flex flex-col gap-1 items-center">
          <WeatherIcon iconName={props.weatehrIcon} />
          <p>{props.date}</p>
          <p className="text-sm">{props.day} </p>
        </div>

        {/*  */}
        <div className="flex flex-col px-4">
          <span className="text-5xl">{convertKelvinToFahrenheit(props.temp ?? 0)}°</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span> Feels like</span>
            <span>{convertKelvinToFahrenheit(props.feels_like ?? 0)}°</span>
          </p>
          <p className="capitalize">{props.description}</p>
        </div>
      </section>
      {/* right */}
      <section className=" overflow-x-auto flex justify-between gap-4 px-4  w-full pr-10">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
}