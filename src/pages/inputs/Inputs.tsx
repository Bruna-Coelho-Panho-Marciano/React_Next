import Topo from "@/components/Topo";
import { useState, useEffect } from "react";
import Globais from "@/components/Globais";

const cursos = ["React", "HTML", "Java", "Python", "JavaScript"];
const jcursos = [
  { curso: "React" },
  { curso: "HTML" },
  { curso: "Java" },
  { curso: "Python" },
  { curso: "JavaScript" },
];

export default function Inputs() {
  const [nome, setNome] = useState<string>("");
  const [curso, setCurso] = useState<string>(cursos[0]);

  useEffect(() => {
    Globais.curso = "React";
  }, []);

  function fcursos() {
    return cursos.map((c: any) => {
      return;
      <option key={c} value={c}>
        {c}
      </option>;
    });
  }

  const ccursos = jcursos.map((c: any) => {
    return (
      <option key={c.curso} value={c.curso}>
        {c.curso}
      </option>
    );
  });

  return (
    <div>
      <Topo />
      <div className="campForm">
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
      </div>
      <div className="campForm py-3 ">
        <label>Curso</label>
        <select
          value={curso}
          onChange={(evento) => setCurso(evento.target.value)}
        >
          {ccursos}
        </select>
      </div>
      <div className="campForm">Nome digitado: {nome}</div>
      <div className="campForm py-6">Curso escolhido: {curso}</div>
      <div className="flex flex-col justify-center items-center p-6 w-[100%] h-[300px] bg-blue-200">
        <h1 className="font-bold">Variáveis Globais nativas com JavaScript</h1>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  );
}
