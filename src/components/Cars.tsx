"use client";

import { MouseEvent } from "react";
import carList from "../json/Carros.json";

export default function Cars() {
  let cars: React.JSX.Element[] = [];

  for (const car of carList) {
    cars.push(
      <button
        key={car.modelo}
        className={
          car.modelo === "Kwid" ? "car-button car-selected" : "car-button"
        }
        onClick={(e: MouseEvent<HTMLButtonElement>) => chooseCar(e)}
      >
        {car.marca + " " + car.modelo}
      </button>
    );
  }

  const chooseCar = (e: React.MouseEvent<HTMLElement>) => {
    removeSelected();

    e.currentTarget.classList.add("car-selected");
  };

  const removeSelected = () => {
    const buttons = document.querySelectorAll(".car-button");
    buttons.forEach((button) => {
      console.log(button.classList.remove("car-selected"));
    });
  };

  return (
    <section className="w-10/12 mx-auto pt-20 h-48">
      <div className="center flex-col">
        <h1 className="big-title mt-2">Veja nossa frota</h1>
        <span className="sub-title">Temos carros para todos os gostos</span>
      </div>
      <div className="grid grid-cols-12 h-96 mt-20 gap-4">
        <div className="col-span-3 flex flex-col gap-1">{cars}</div>
        <div className="bg-slate-200 col-span-6"></div>
        <div className="bg-slate-300 col-span-3"></div>
      </div>
    </section>
  );
}
