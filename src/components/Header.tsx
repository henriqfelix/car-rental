import logo from "../assets/images/logo.png";
import Image from "next/image";
import MenuButton from "./MenuButton";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="h-28 w-screen center fixed bg-light-color">
      <div className="ycenter-xbetween w-10/12">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={120}
            className="cursor-pointer"
          ></Image>
        </Link>
        <ul className="center gap-6">
          <MenuButton name={"Início"} endpoint={"/"} />
          <MenuButton name={"sobre"} endpoint={"/sobre"} />
          <MenuButton name={"Veículos"} endpoint={"/veiculos"} />
          <MenuButton name={"Fidelidade"} endpoint={"/fidelidade"} />
          <MenuButton name={"Contato"} endpoint={"/contato"} />
          <MenuButton name={"Dúvidas"} endpoint={"/duvidas"} />
        </ul>
        <div className="center gap-6">
          <MenuButton name={"Entrar"} endpoint={"#"} />
          <Button text={"Registrar"} type="button-1" />
        </div>
      </div>
    </header>
  );
}
