"use client";

import carsData from "../json/Carros.json";

import kwid from "../assets/images/kwid.webp";
import p208 from "../assets/images/208.webp";
import cronos from "../assets/images/cronos.webp";
import pulse from "../assets/images/pulse.webp";
import tcross from "../assets/images/tcross.webp";
import jetta from "../assets/images/jetta.webp";
import a3 from "../assets/images/a3.webp";

import { MouseEvent, useEffect, useState } from "react";
import carList from "../json/Carros.json";

import Image, { StaticImageData } from "next/image";

interface Data {
  title: React.JSX.Element[];
  data: React.JSX.Element[];
  prevState: null;
}

export default function Cars() {
  let cars: React.JSX.Element[] = [];

  const [carImage, setCarImage] = useState(
    <Image src={kwid} alt={"Kwid"} width={400}></Image>
  );

  const [titleColumn, setTitleColumn] = useState<Data | null>();
  const [dataColumn, setDataColumn] = useState<Data | null>();

  for (const car of carList) {
    cars.push(
      <button
        key={car.modelo}
        className={
          car.modelo === "Kwid"
            ? "car-button car-selected shadow"
            : "car-button shadow"
        }
        onClick={(e: MouseEvent<HTMLButtonElement>) => chooseCar(e)}
      >
        {car.marca + " " + car.modelo}
      </button>
    );
  }

  useEffect(() => {
    createTitleTable();
    createDataTable(0);
  }, []);

  const chooseCar = (e: React.MouseEvent<HTMLElement>) => {
    removeSelected();

    let car: StaticImageData = kwid;
    let data: number = 0;

    switch (e.currentTarget.innerHTML) {
      case "Renault Kwid":
        car = kwid;
        data = 0;
        break;
      case "Peugeot 208":
        car = p208;
        data = 1;
        break;
      case "Fiat Cronos":
        car = cronos;
        data = 2;
        break;
      case "Fiat Pulse":
        car = pulse;
        data = 3;
        break;
      case "Volkswagen T-Cross":
        car = tcross;
        data = 4;
        break;
      case "Volkswagen Jetta":
        car = jetta;
        data = 5;
        break;
      case "Audi A3 Sportback":
        car = a3;
        data = 6;
        break;
      default:
        break;
    }

    LoadImage(car);
    createDataTable(data);
    e.currentTarget.classList.add("car-selected");
  };

  const removeSelected = () => {
    const buttons = document.querySelectorAll(".car-button");
    buttons.forEach((button) => {
      button.classList.remove("car-selected");
    });
  };

  const LoadImage = (carName: StaticImageData) => {
    setCarImage(<Image src={carName} alt={"carro"} width={500}></Image>);
  };

  const createTitleTable = () => {
    let titleList: React.JSX.Element[] = [];

    const titles = [
      "Diária:",
      "Modelo:",
      "Marca:",
      "Ano:",
      "Motor:",
      "Câmbio:",
      "Portas:",
      "Ar:",
      "Direção:",
      "Combustível:",
    ];

    for (const title of titles) {
      titleList.push(
        <div
          key={title}
          className="w-full h-full bg-slate-200 table-field table-title shadow "
        >
          {title}
        </div>
      );
    }
    setTitleColumn(titleList);
  };

  const createDataTable = (i: number) => {
    let dataList: React.JSX.Element[] = [];
    let chaves = Object.values(carsData[i]);

    let id: number = 0;
    for (const data of chaves) {
      console.log(data);
      dataList.push(
        <div key={id} className="w-full h-full table-field table-data shadow ">
          {id === 0 ? `R$${data},00` : data}
        </div>
      );
      id++;
    }
    id = 0;
    setDataColumn(dataList);
  };

  return (
    <section className="w-10/12 mx-auto pt-20 h-48">
      <div className="center flex-col">
        <h1 className="big-title mt-2">Conheça nossa frota</h1>
        <span className="sub-title">Temos carros para todos os gostos</span>
      </div>
      <div className="grid grid-cols-8 h-96 mt-20 gap-1">
        <div className="col-span-2 flex flex-col gap-1">{cars}</div>
        <div className="col-span-4 center mx-2">{carImage}</div>
        <div className="col-span-1 grid grid-cols-1 grid-rows-10 gap-1">
          {titleColumn}
        </div>
        <div className="col-span-1 grid grid-cols-1 grid-rows-10 gap-1">
          {dataColumn}
        </div>
      </div>
    </section>
  );
}
