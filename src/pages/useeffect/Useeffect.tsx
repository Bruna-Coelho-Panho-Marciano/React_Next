import { useState, useEffect } from "react";
import Topo from "@/components/Topo";
import Globais from "@/components/Globais";

export default function UseEffect() {
  const [cont, setCont] = useState<number>(0);
  const [auxiliar, setAuxiliar] = useState<number>(0);

  useEffect(() => {
    // alert("UseEffect disparado");
    Globais.canal = "CFBCursos";
    Globais.curso = "TypeScript";
    Globais.ano = "2026";
  }, []);

  function add() {
    let a = auxiliar;
    a++;
    setAuxiliar(a);
  }

  return (
    <div>
      <Topo />

      <h1 className=" flex justify-center items-center text-3xl font-bold  bg-gray-300 text-center h-[150px]">
        UseEffect
      </h1>
      <div className="flex flex-col justify-center items-center  w-[100%] h-[350px] bg-blue-100">
        <p>{`Valor de cont: ${cont}`}</p>
        <p>{`Valor de auxiliar: ${auxiliar}`}</p>

        <button
          className=" rounded-3xl m-4 px-4 py-2 bg-green-500 text-white "
          onClick={add}
        >
          Adicionar 1
        </button>
      </div>
      <div className="flex flex-col justify-center items-center p-6 w-[100%] h-[300px] bg-blue-200">
        <h1 className="font-bold">Variáveis Globais nativas com JavaScript</h1>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  );
}
