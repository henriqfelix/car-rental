import Image from "next/image";
import car from "../assets/images/car.png";
import Link from "next/link";
import Button from "./Button";

export default function Main() {
  return (
    <main className="w-10/12 h-screen center">
      <div>
        <h2 className="title">Conforto e segurança</h2>
        <h1 className="dark-text super-title">
          O<span className="emphasis"> melhor preço</span>
          <br />
          do mercado!
        </h1>
        <div className="w-11/12 pt-4">
          <h3 className="additional-text">
            O tão sonhado carro que você e sua família desejam para o final de
            semana nunca esteve tão acessível!
            <br />
            Confira nossa frota de carros, preços e o incrível{" "}
            <Link
              href={"/fidelidade"}
              className="emphasis font-medium cursor-pointer"
            >
              plano de fidelidade
            </Link>
            .
          </h3>
        </div>
        <div className="pt-6 flex gap-2">
          <Button text="Faça sua reserva" type="button-1" icon={"check"} />
          <Button text="Saiba mais" type="button-2" icon={"arrow"} />
        </div>
      </div>
      <Image src={car} alt="Imagem de um carro" width={700} />
    </main>
  );
}
