import carrosList from "../json/Carros.json";
import unidadesList from "../json/Unidades.json";

import { FaCarSide } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";

type Props = {
  title: string;
  type: string;
  option: string;
};

export default function SelectInput(props: Props) {
  const { title, type, option } = props;
  let carros = [];
  let unidades = [];

  if (carros.length === 0) {
    carros.push(<option>{"Selecione um modelo"}</option>);
  }

  for (const carro of carrosList) {
    carros.push(<option>{carro.modelo}</option>);
  }

  for (const unidade of unidadesList) {
    unidades.push(<option>{unidade.unidade}</option>);
  }

  return (
    <div>
      <div>
        <div className="flex flex-col">
          <label htmlFor="car" className="font-medium flex items-center pb-2">
            {type === "carro" && <FaCarSide className="icon" />}
            {type === "unidade" && <FaLocationDot className="icon" />}
            {option === "data" && <IoCalendarNumber className="icon" />}
            {title}
          </label>
          {type === "select" && (
            <select
              name="car"
              id="car"
              className=" h-12 px-4 py-2 bg-light-color rounded-md text-gray-text
                  border-solid border border-gray-color focus:border-dark -color overflow-hidden
                  "
            >
              {option === "carro" && carros}
              {option === "unidade" && unidades}
            </select>
          )}
          {type === "date" && (
            <input
              type="date"
              name="date"
              className=" h-12 px-4 py-2 bg-light-color rounded-md text-gray-text
                  border-solid border border-gray-color focus:border-dark -color overflow-hidden
                  "
            />
          )}
        </div>
      </div>
    </div>
  );
}
