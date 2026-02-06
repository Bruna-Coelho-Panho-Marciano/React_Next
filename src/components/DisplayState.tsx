interface DisplayStateProps {
  valor: number;
  fvalor: any;
}

export default function DisplayState(props: DisplayStateProps) {
  function operacao(op: number) {
    let c = props.valor;
    c += op;
    props.fvalor(c);
  }

  return (
    <div>
      <div className="flex justify-center items-center text-2xl  font-bold bg-green-200 h-[150] ">
        {props.valor}
      </div>
      <div className="flex flex-col gap-3  justify-center text-center bg-gray-300 h-[200px] w-[100%]">
        <button
          className="px-4 py-2 bg-green-600 text-white  hover:from-green-600 hover:to-green-700 transition-all active:scale-95 flex items-center justify-center gap-2 rounded-3xl w-[150] mx-auto"
          onClick={() => operacao(1)}
        >
          <span className="text-base">+</span>
          <span>Somar</span>
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all active:scale-95  flex items-center justify-center gap-2 rounded-3xl w-[150] mx-auto"
          onClick={() => operacao(-1)}
        >
          <span className="text-base">-</span>
          <span>Subtrair</span>
        </button>
      </div>
    </div>
  );
}
