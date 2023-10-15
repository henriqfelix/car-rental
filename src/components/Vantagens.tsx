import CardVantagens from "./CardVantagens";

export default function Vantagens() {
  return (
    <section className="w-10/12 mx-auto mt-32">
      <div className="center flex-col">
        <span className="sub-title">Confira algumas de nossas vantagens</span>
        <h1 className="big-title mt-2">Desfrute do melhor</h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 w-full gap-2 mt-12">
        <CardVantagens
          title={"Segurança"}
          text={
            "Investimos constantemente em manutenção e inspeções rigorosas para garantir que você possa viajar com total tranquilidade em um veículo confiável e seguro."
          }
        />
        <CardVantagens
          title={"Economia"}
          text={
            "Oferecemos os melhores preços para que você possa desfrutar de sua viagem com muita qualidade e sem gastar muito."
          }
        />
        <CardVantagens
          title={"Conforto"}
          text={
            "Nossa frota é composta de carros novos e com os melhores itens de série para que você tenha a melhor viagem."
          }
        />
        <CardVantagens
          title={"Facilidade"}
          text={
            "Facilitamos a entrega das chaves para você, todo o processo pode ser realizado pelo site ou app adiantando todo o processo do conforto de sua casa."
          }
        />
        <CardVantagens
          title={"Atendimento"}
          text={
            "Nossa equipe de atendimento é treinada e preparada para ajudá-lo(a) em todos os tipos de problemas, acesse a área de atendimento do app ou ligue para (11) 98765-4321."
          }
        />
        <CardVantagens
          title={"Suporte"}
          text={
            "Em caso de necessidade de guincho, cobrimos toda área do estado de São Paulo, Rio de Janeiro, Paraná e Santa Catarina."
          }
        />
      </div>
    </section>
  );
}
