import seguranca from "../assets/images/seguranca.svg";
import economia from "../assets/images/economia.svg";
import conforto from "../assets/images/conforto.svg";
import facilidade from "../assets/images/facilidade.svg";
import atendimento from "../assets/images/atendimento.svg";
import suporte from "../assets/images/suporte.svg";

import Image from "next/image";

type Props = {
  title: string;
  text: string;
};

export default function CardVantagens(props: Props) {
  const { title, text } = props;

  let path: string = "";

  switch (title) {
    case "Segurança":
      path = seguranca;
      break;
    case "Economia":
      path = economia;
      break;
    case "Conforto":
      path = conforto;
      break;
    case "Facilidade":
      path = facilidade;
      break;
    case "Atendimento":
      path = atendimento;
      break;
    case "Suporte":
      path = suporte;
      break;

    default:
      break;
  }

  return (
    <div className="w-full h-60 flex items-center flex-col relative">
      <div className="circle gradient"></div>
      <Image
        src={path}
        alt="seguranca"
        height={80}
        className="svg-image mb-4"
      ></Image>
      <h3 className="title">{title}</h3>
      <p className="additional-text text-center">{text}</p>
    </div>
  );
}
