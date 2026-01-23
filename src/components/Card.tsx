interface CardProps {
  produto: string;
  valor: number;
}

export default function Card(props: CardProps) {
  return (
    <div className=" justify-center items-center">
      <div className="flex justify-center items-center text-center border-2 border-gray-500 m-4 p-4 rounded-lg shadow-lg w-60 h-40 text-xl bg-gray-300">
        {props.produto} - R$ {props.valor}
      </div>
    </div>
  );
}
