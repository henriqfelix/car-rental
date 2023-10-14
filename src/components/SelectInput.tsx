import carrosList from "../json/Carros.json";
import unidadesList from "../json/Unidades.json";

type Props = {
  title: string;
  type: string;
};

export default function SelectInput(props: Props) {
  const { title, type } = props;
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
          <label htmlFor="car" className="font-medium">
            {title}
          </label>
          <select
            name="car"
            id="car"
            className=" h-12 px-4 py-2 bg-light-color rounded-md text-gray-text
                border-solid border border-gray-color focus:border-dark -color overflow-hidden
                "
          >
            {type === "carro" && carros}
            {type === "unidade" && unidades}
          </select>
        </div>
      </div>
    </div>
  );
}
