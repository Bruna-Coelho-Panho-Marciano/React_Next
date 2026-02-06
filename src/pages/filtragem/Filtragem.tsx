import Topo from "@/components/Topo";
import { useState, useEffect } from "react";

const carros = [
  { id: 0, categoria: "Esporte", valor: "120000.00", modelo: "Golf GTI" },
  { id: 1, categoria: "Esporte", valor: "200000.00", modelo: "Camaro" },
  { id: 2, categoria: "SUV", valor: "100000.00", modelo: "HRV" },
  { id: 3, categoria: "SUV", valor: "100000.00", modelo: "T-Cross" },
  { id: 4, categoria: "Utilitario", valor: "180000.00", modelo: "Hillux" },
  { id: 5, categoria: "Utilitario", valor: "160000.00", modelo: "Ranger" },
];

export default function Filtragem() {
  const [categoria, setCategoria] = useState("");
  const [linhas, setLinhas] = useState<any[]>([]);

  // API com Fetch
  // let carros: any = "";
  //let listaPronta
  // useEffect(() => {
  //   fetch("http://127.0.0.1:1880/carros");
  //   .then(res=>res.json())
  //   .then(res=>{
  //     carros=res
  //listaPronta=true
  //   })
  // }, []);

  function criarLinhas(categ: any) {
    setCategoria(categ);
    const linha: any[] = [];
    carros.forEach((carro: any) => {
      if (carro.categoria == categ) {
        linha.push(
          <div className="flex flex-row w-[500px]" key={carro.id}>
            <div className="w-full">{carro.categoria}</div>
            <div className="w-full">{carro.valor}</div>
            <div className="w-full">{carro.modelo}</div>
          </div>,
        );
      }
    });
    setLinhas(linha);
  }

  return (
    <div>
      <Topo />
      <div className="bg-gray-300 h-[500px] p-6">
        <label>
          <b>Selecione a categoria </b>
        </label>
        <select
          value={""}
          onChange={(evento) => {
            criarLinhas(evento.target.value);
          }}
        >
          <option value="">Nenhum</option>
          <option value="Esporte">Esporte</option>
          <option value="SUV">SUV</option>
          <option value="Utilitario">Utilitario</option>
        </select>

        <div className="flex flex-col my-3">
          <div className="flex flex-row w-[500px] ">
            <div className="w-full">
              <b>Categoria</b>
            </div>
            <div className="w-full">
              <b>Valor</b>
            </div>
            <div className="w-full">
              <b>Modelo</b>
            </div>
          </div>
          {linhas}
        </div>
      </div>
    </div>
  );
}
