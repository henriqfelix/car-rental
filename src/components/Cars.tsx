"use client";

import kwid from "../assets/images/kwid.webp";
import p208 from "../assets/images/208.webp";
import cronos from "../assets/images/cronos.webp";
import pulse from "../assets/images/pulse.webp";
import tcross from "../assets/images/tcross.webp";
import jetta from "../assets/images/jetta.webp";
import a3 from "../assets/images/a3.webp";

import { MouseEvent, useState } from "react";
import carList from "../json/Carros.json";

import Image, { StaticImageData } from "next/image";

export default function Cars() {
  let cars: React.JSX.Element[] = [];

  const [carImage, setCarImage] = useState(
    <Image src={kwid} alt={"Kwid"} width={400}></Image>
  );

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
    LoadImage(e.currentTarget.innerHTML);

    e.currentTarget.classList.add("car-selected");
  };

  const removeSelected = () => {
    const buttons = document.querySelectorAll(".car-button");
    buttons.forEach((button) => {
      button.classList.remove("car-selected");
    });
  };

  const LoadImage = (carName: string) => {
    let path: StaticImageData = kwid;

    switch (carName) {
      case "Renault Kwid":
        path = kwid;
        break;
      case "Peugeot 208":
        path = p208;
        break;
      case "Fiat Cronos":
        path = cronos;
        break;
      case "Fiat Pulse":
        path = pulse;
        break;
      case "Volkswagen T-Cross":
        path = tcross;
        break;
      case "Volkswagen Jetta":
        path = jetta;
        break;
      case "Audi A3 Sportback":
        path = a3;
        break;
      default:
        break;
    }
    console.log("load: ", carName, path.src);
    setCarImage(<Image src={path} alt={carName} width={500}></Image>);
  };

  return (
    <section className="w-10/12 mx-auto pt-20 h-48">
      <div className="center flex-col">
        <h1 className="big-title mt-2">Conheça nossa frota</h1>
        <span className="sub-title">Temos carros para todos os gostos</span>
      </div>
      <div className="grid grid-cols-12 h-96 mt-20 gap-4">
        <div className="col-span-3 flex flex-col gap-1">{cars}</div>
        <div className="col-span-6 center">{carImage}</div>
        <div className="bg-slate-300 col-span-3"></div>
      </div>
    </section>
  );
}
