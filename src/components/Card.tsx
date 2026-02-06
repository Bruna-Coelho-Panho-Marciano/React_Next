interface CardProps {
  produto: string;
  valor: number;
  desconto: number;
  funcao: any;
  children: any;
}

export default function Card(props: CardProps) {
  return (
    <div className=" justify-center items-center ">
      <div
        className={`flex justify-center items-center text-center border-2  ${props.desconto > 0 ? "border-blue-800" : "border-red-700"} m-2 p-4 rounded-lg gap-3 shadow-lg w-115 h-50 `}
      >
        <p>
          <b>Produto:</b> {props.produto}
        </p>
        <p>
          <b>Valor: </b>R$
          {props.valor}
        </p>
        {props.desconto > 0 ? (
          <div className={`flex justify-center items-center text-center`}>
            <p>
              <b>Desconto: </b>R$
              {props.desconto}
            </p>
            <p>
              <b>Total: </b>R$
              {props.funcao(props.valor, props.desconto)}
            </p>
            <p className="text-red-500">
              <b>Sem desconto</b>
            </p>
          </div>
        ) : (
          <div>{props.children[0]}</div>
        )}
      </div>
    </div>
  );
}
